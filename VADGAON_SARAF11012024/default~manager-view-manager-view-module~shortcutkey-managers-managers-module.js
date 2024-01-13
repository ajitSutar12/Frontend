(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~manager-view-manager-view-module~shortcutkey-managers-managers-module"],{

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

/***/ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SystemMasterParametersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMasterParametersService", function() { return SystemMasterParametersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class SystemMasterParametersService {
    constructor(http) {
        this.http = http;
        // API 
        // url = "http://localhost:4000/system-master-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/system-master-parameters/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Kindly Add Valid Length !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/system-master-parameters/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/system-master-parameters/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/system-master-parameters/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/system-master-parameters/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ManagerViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewRoutingModule", function() { return ManagerViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manager_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-view.component */ "./src/app/theme/view/manager-view/manager-view.component.ts");





const routes = [
    {
        path: '',
        component: _manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"],
        data: {
            title: 'Manager View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class ManagerViewRoutingModule {
}
ManagerViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagerViewRoutingModule });
ManagerViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagerViewRoutingModule_Factory(t) { return new (t || ManagerViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagerViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManagerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewComponent", function() { return ManagerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _manager_view_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manager-view.service */ "./src/app/theme/view/manager-view/manager-view.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _reports_daily_reports_iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../reports/daily-reports/iframe1/iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");





















function ManagerViewComponent_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r21.label, "");
} }
function ManagerViewComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_24_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r1.angForm.controls["BRANCH_CODE"].errors.required);
} }
function ManagerViewComponent_ng_template_177_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name : ", data_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cashier Code : ", data_r24.CASHIER_CODE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 2000 X ", data_r24.DENO_2000, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 1000 X ", data_r24.DENO_1000, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 500 X ", data_r24.DENO_500, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 200 X ", data_r24.DENO_200, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 100 X ", data_r24.DENO_100, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 50 X ", data_r24.DENO_50, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 20 X ", data_r24.DENO_20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 10 X ", data_r24.DENO_10, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 5 X ", data_r24.DENO_5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 2 X ", data_r24.DENO_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 1 X ", data_r24.DENO_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Coins X ", data_r24.DENO_COINS_CASH, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" TOTAL = ", data_r24.TOTAL_AMOUNT, " ");
} }
function ManagerViewComponent_ng_template_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManagerViewComponent_ng_template_177_td_6_Template, 31, 15, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.retrivedata);
} }
function ManagerViewComponent_ng_template_179_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r26.DESCRIPTION, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r26.balance, " ");
} }
function ManagerViewComponent_ng_template_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagerViewComponent_ng_template_179_tr_5_Template, 6, 2, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.mangerViewGl);
} }
function ManagerViewComponent_button_186_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_button_186_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); ctx_r27.AllPendingDetails(); return _r15.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.disableBtn);
} }
function ManagerViewComponent_button_187_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_button_187_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); ctx_r29.CashPendingDetails(); return _r15.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.disableBtn);
} }
function ManagerViewComponent_button_188_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_button_188_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); ctx_r31.TransferPendingDetails(); return _r15.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.disableBtn);
} }
function ManagerViewComponent_button_189_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_button_189_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); ctx_r33.RejectedPendingDetails(); return _r15.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.disableBtn);
} }
function ManagerViewComponent_button_190_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_button_190_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); ctx_r35.DayScrollPendingDetails(); return _r15.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Day Scroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_ng_template_218_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.view("userw"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " User's Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.view("userL"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Users Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.view("userCash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " User's Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.view("delayWork"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delay Works");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.view("schemeLog"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Scheme Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.view("glPosDetail"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " GL Pos. Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.view("Nearest"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Nearest Secu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_218_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.view("Incompletion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Incompletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function ManagerViewComponent_ng_template_220_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.view("rateOfMargin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rate of Margin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.view("loanAnalysis"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loan Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.view("ratioAnalysis"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ratio Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.view("dailyLiquidity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Daily Liquidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.view("remindMe"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remind Me !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_220_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.view("npaAnalysis"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " NPA Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function ManagerViewComponent_ng_template_222_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.view("overDue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.view("maturedTdLn"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Matured TD/LN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.view("insuranceDue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Insurance Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.view("Expenses"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.view("excessCash"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Excess Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_222_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.view("fdPayment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " FD Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function ManagerViewComponent_ng_template_224_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.view("drBalance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dr.Balances");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.view("crBalance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cr.Balances");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.view("zeroBalance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Zero Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.view("ccOverdraft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CC Overdraft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.view("overDraft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Overdraft(OD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.view("consistancy"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Consistency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_ng_template_224_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.view("highRecPay"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Hight Rec Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function ManagerViewComponent_div_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-iframe1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r14.iframe1url);
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearing Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_tbody_50_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManagerViewComponent_div_247_tbody_50_tr_1_td_13_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagerViewComponent_div_247_tbody_50_tr_1_td_14_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagerViewComponent_div_247_tbody_50_tr_1_td_15_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManagerViewComponent_div_247_tbody_50_tr_1_td_16_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManagerViewComponent_div_247_tbody_50_tr_1_td_17_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManagerViewComponent_div_247_tbody_50_tr_1_td_18_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71 == null ? null : data_r71.TRAN_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.TRAN_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r71.TRAN_SOURCE_TYPE == null ? "---" : data_r71.TRAN_SOURCE_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "CS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "JV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "IS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "CN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71.TRAN_TYPE == "CL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.TRAN_DRCR == "C" ? "Credit" : "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.TRAN_AMOUNT == null ? "0.00" : data_r71.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.INTEREST_AMOUNT == null ? "0.00" : data_r71.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.RECPAY_INT_AMOUNT == null ? "0.00" : data_r71.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.OTHER10_AMOUNT == null ? "0.00" : data_r71.OTHER10_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.PENAL_INTEREST == null ? "0.00" : data_r71.PENAL_INTEREST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r71.REC_PENAL_INT_AMOUNT == null ? "0.00" : data_r71.REC_PENAL_INT_AMOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.OTHER_AMOUNT == 0 || data_r71.OTHER_AMOUNT == null ? "0.00" : data_r71.OTHER_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r71.ADDED_PENAL_INTEREST == null ? "0.00" : data_r71.ADDED_PENAL_INTEREST, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.DIVIDEND_AMOUNT == null || data_r71.DIVIDEND_AMOUNT == 0 ? "0.00" : data_r71.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.TRAN_STATUS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r71.USER_CODE);
} }
function ManagerViewComponent_div_247_tbody_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_247_tbody_50_tr_1_Template, 43, 24, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.mangerViewDetails.allTable);
} }
function ManagerViewComponent_div_247_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_247_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Record Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transaction Source Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Receivable /Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Receivable Overdue Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Receivable Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Other Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ManagerViewComponent_div_247_tbody_50_Template, 2, 1, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ManagerViewComponent_div_247_tbody_51_Template, 4, 0, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r16.mangerViewDetails.allTable == null ? null : ctx_r16.mangerViewDetails.allTable.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r16.mangerViewDetails.allTable == null ? null : ctx_r16.mangerViewDetails.allTable.length) == 0);
} }
function ManagerViewComponent_div_248_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scroll book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_248_div_1_Template, 6, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Record no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "DR/CR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Token no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "01:00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "587");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Shinde Ashok Pandurang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "By Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "MBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "05:18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "10100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "541");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Kale Ranjit Digamber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "To Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "568");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "CCP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.mangerViewDetails.allTable == null ? null : ctx_r17.mangerViewDetails.allTable.length) != 0 && ctx_r17.mangerViewDetails.allTable != undefined);
} }
function ManagerViewComponent_div_249_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rejected Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearing Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_tbody_40_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_13_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_14_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_15_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_16_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_17_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_td_18_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85 == null ? null : data_r85.TRAN_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.TRAN_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r85.TRAN_SOURCE_TYPE == null ? "---" : data_r85.TRAN_SOURCE_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "CS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "JV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "IS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "CN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r85.TRAN_TYPE == "CL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.TRAN_DRCR == "C" ? "Credit" : "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.TRAN_AMOUNT == null ? "0.00" : data_r85.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.INTEREST_AMOUNT == null ? "0.00" : data_r85.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.RECPAY_INT_AMOUNT == null ? "0.00" : data_r85.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.OTHER10_AMOUNT == null ? "0.00" : data_r85.OTHER10_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.PENAL_INTEREST == null ? "0.00" : data_r85.PENAL_INTEREST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r85.REC_PENAL_INT_AMOUNT == null ? "0.00" : data_r85.REC_PENAL_INT_AMOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.OTHER_AMOUNT == 0 || data_r85.OTHER_AMOUNT == null ? "0.00" : data_r85.OTHER_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r85.ADDED_PENAL_INTEREST == null ? "0.00" : data_r85.ADDED_PENAL_INTEREST, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.DIVIDEND_AMOUNT == null || data_r85.DIVIDEND_AMOUNT == 0 ? "0.00" : data_r85.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.TRAN_STATUS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.USER_CODE);
} }
function ManagerViewComponent_div_249_table_5_tbody_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_249_table_5_tbody_40_tr_1_Template, 43, 24, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.mangerViewDetails.rejectTable);
} }
function ManagerViewComponent_div_249_table_5_tbody_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_249_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Record Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Transaction Source Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Receivable /Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Receivable Overdue Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Receivable Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Other Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Added Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ManagerViewComponent_div_249_table_5_tbody_40_Template, 2, 1, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ManagerViewComponent_div_249_table_5_tbody_41_Template, 4, 0, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r81.mangerViewDetails.rejectTable == null ? null : ctx_r81.mangerViewDetails.rejectTable.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r81.mangerViewDetails.rejectTable == null ? null : ctx_r81.mangerViewDetails.rejectTable.length) == 0);
} }
function ManagerViewComponent_div_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_249_div_1_Template, 6, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagerViewComponent_div_249_table_5_Template, 42, 2, "table", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.mangerViewDetails.rejectTable == null ? null : ctx_r18.mangerViewDetails.rejectTable.length) != 0 && ctx_r18.mangerViewDetails.rejectTable != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.mangerViewDetails.rejectTable == null ? null : ctx_r18.mangerViewDetails.rejectTable.length) != 0);
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearing Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_tbody_50_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManagerViewComponent_div_250_tbody_50_tr_1_td_13_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagerViewComponent_div_250_tbody_50_tr_1_td_14_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagerViewComponent_div_250_tbody_50_tr_1_td_15_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManagerViewComponent_div_250_tbody_50_tr_1_td_16_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManagerViewComponent_div_250_tbody_50_tr_1_td_17_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManagerViewComponent_div_250_tbody_50_tr_1_td_18_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96 == null ? null : data_r96.TRAN_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.TRAN_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r96.TRAN_SOURCE_TYPE == null ? "---" : data_r96.TRAN_SOURCE_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "CS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "JV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "IS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "CN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r96.TRAN_TYPE == "CL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.TRAN_DRCR == "C" ? "Credit" : "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.TRAN_AMOUNT == null ? "0.00" : data_r96.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.INTEREST_AMOUNT == null ? "0.00" : data_r96.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.RECPAY_INT_AMOUNT == null ? "0.00" : data_r96.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.OTHER10_AMOUNT == null ? "0.00" : data_r96.OTHER10_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.PENAL_INTEREST == null ? "0.00" : data_r96.PENAL_INTEREST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r96.REC_PENAL_INT_AMOUNT == null ? "0.00" : data_r96.REC_PENAL_INT_AMOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.OTHER_AMOUNT == 0 || data_r96.OTHER_AMOUNT == null ? "0.00" : data_r96.OTHER_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r96.ADDED_PENAL_INTEREST == null ? "0.00" : data_r96.ADDED_PENAL_INTEREST, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.DIVIDEND_AMOUNT == null || data_r96.DIVIDEND_AMOUNT == 0 ? "0.00" : data_r96.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.TRAN_STATUS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r96.USER_CODE);
} }
function ManagerViewComponent_div_250_tbody_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_250_tbody_50_tr_1_Template, 43, 24, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r93.mangerViewDetails.transferTable);
} }
function ManagerViewComponent_div_250_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transfer Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Record Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transaction Source Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Receivable /Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Receivable Overdue Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Receivable Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Other Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ManagerViewComponent_div_250_tbody_50_Template, 2, 1, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ManagerViewComponent_div_250_tbody_51_Template, 4, 0, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r19.mangerViewDetails.transferTable == null ? null : ctx_r19.mangerViewDetails.transferTable.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r19.mangerViewDetails.transferTable == null ? null : ctx_r19.mangerViewDetails.transferTable.length) == 0);
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearing Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_tbody_50_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManagerViewComponent_div_251_tbody_50_tr_1_td_13_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagerViewComponent_div_251_tbody_50_tr_1_td_14_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagerViewComponent_div_251_tbody_50_tr_1_td_15_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManagerViewComponent_div_251_tbody_50_tr_1_td_16_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManagerViewComponent_div_251_tbody_50_tr_1_td_17_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManagerViewComponent_div_251_tbody_50_tr_1_td_18_Template, 2, 0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107 == null ? null : data_r107.TRAN_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.TRAN_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r107.TRAN_SOURCE_TYPE == null ? "---" : data_r107.TRAN_SOURCE_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "CS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "JV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "IS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "CN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r107.TRAN_TYPE == "CL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.TRAN_DRCR == "C" ? "Credit" : "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.TRAN_AMOUNT == null ? "0.00" : data_r107.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.INTEREST_AMOUNT == null ? "0.00" : data_r107.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.RECPAY_INT_AMOUNT == null ? "0.00" : data_r107.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.OTHER10_AMOUNT == null ? "0.00" : data_r107.OTHER10_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.PENAL_INTEREST == null ? "0.00" : data_r107.PENAL_INTEREST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r107.REC_PENAL_INT_AMOUNT == null ? "0.00" : data_r107.REC_PENAL_INT_AMOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.OTHER_AMOUNT == 0 || data_r107.OTHER_AMOUNT == null ? "0.00" : data_r107.OTHER_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r107.ADDED_PENAL_INTEREST == null ? "0.00" : data_r107.ADDED_PENAL_INTEREST, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.DIVIDEND_AMOUNT == null || data_r107.DIVIDEND_AMOUNT == 0 ? "0.00" : data_r107.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.TRAN_STATUS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r107.USER_CODE);
} }
function ManagerViewComponent_div_251_tbody_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerViewComponent_div_251_tbody_50_tr_1_Template, 43, 24, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r104.mangerViewDetails.cashTable);
} }
function ManagerViewComponent_div_251_tbody_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManagerViewComponent_div_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cash Entries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Record Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transaction Source Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Receivable /Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Receivable Overdue Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Receivable Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Other Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ManagerViewComponent_div_251_tbody_50_Template, 2, 1, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ManagerViewComponent_div_251_tbody_51_Template, 4, 0, "tbody", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.mangerViewDetails.cashTable == null ? null : ctx_r20.mangerViewDetails.cashTable.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.mangerViewDetails.cashTable == null ? null : ctx_r20.mangerViewDetails.cashTable.length) == 0);
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class ManagerViewComponent {
    constructor(fb, config, _service, ownbranchMasterService, sanitizer, systemParameter, http) {
        this.fb = fb;
        this.config = config;
        this._service = _service;
        this.ownbranchMasterService = ownbranchMasterService;
        this.sanitizer = sanitizer;
        this.systemParameter = systemParameter;
        this.http = http;
        // variable for validation
        this.formSubmitted = false;
        this.branch_codeList = null;
        this.branchCode = null;
        this.isture = true;
        this.isHidden = true;
        // variables for button
        this.showButton = true;
        this.iframe1url = '';
        this.report_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].report_url;
        this.clicked = false;
        this.allpdetails = true;
        this.dayscrollpd = true;
        this.rejectpd = true;
        this.transferpd = true;
        this.cashpd = true;
        this.showAllPendingDetails = false;
        this.showDayScrollPendingDetails = false;
        this.showRejectedPendingDetails = false;
        this.showTransferPendingDetails = false;
        this.showCashPendingDetails = false;
        this.value = 0.00;
        this.showRepo = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url;
        this.retrivedata = [];
        this.denomination = [];
        this.glposition = [];
        this.retrivedata1 = [];
        this.mangerViewGl = [];
        this.id = 'f1';
        this.disableBtn = false;
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY');
            // this.maxDate = this.maxDate.subtract(1, "days");
            this.maxDate = this.maxDate._d;
            this.date = data.CURRENT_DATE;
            this.checkDate = data.CURRENT_DATE;
        });
    }
    // Method to handle validation of form
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SYSPARADATE: [''],
            CASH_CREDIT: [''],
            CASH_DEBIT: [''],
            TRANSFER_CREDIT: [''],
            TRANSFER_DEBIT: [''],
            TOTAL_CREDIT: [''],
            TOTAL_DEBIT: [''],
            CASH_OPENING: [''],
            CASH_CLOSING: [''],
            NDTL_AMT: [''],
            LIQUID_ASSET: [''],
            CASH_RESERV_a: [''],
            LIQUID_ASSET_a: [''],
            CASH_RESERV_b: [''],
            LIQUID_ASSET_b: [''],
            CASH_RESERV_c: [''],
            LIQUID_ASSET_c: [''],
            CASH_RESERV: [''],
            Liquidity_ratio: [''],
            DepositeDr: [''],
            Depositeper: [''],
            BankOD: [''],
            BankODper: [''],
            Bankcurrentdr: [''],
            Bankcurrentper: [''],
            bankcdr: [''],
            bankcper: [''],
        });
    }
    ngOnInit() {
        this.createForm();
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
            this.date = data[0].CURRENT_DATE;
            this.checkDate = data[0].CURRENT_DATE;
            console.log(this.date);
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH_CODE'].enable();
            this.ngBranchCode = result.branch.id;
            this.branchName = result.branch.NAME;
            this.branchno = result.branch.CODE;
        }
        else {
            this.angForm.controls['BRANCH_CODE'].disable();
            this.ngBranchCode = result.branch.id;
            this.branchName = result.branch.NAME;
        }
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            // this.ngBranchCode = data[0].value
        });
        // //get Gl Position details
        //   this._service.getGlPosition().pipe(first()).subscribe(data => {
        //   this.glposition = data;
        //   console.log(this.glposition)
        // })
        this.getManagerView();
        // this.getBranch(event)
    }
    accordian(ids) {
        if (this.id == ids) {
            this.id = '';
        }
        else {
            this.id = ids;
        }
    }
    //submit Form
    submit() {
        // debugger
        // let user   = JSON.parse(localStorage.getItem('user'));
        // let obj    = this.angForm.value;
        // obj['user']= user;
        // obj['InputHead'] = this.headData;
        // console.log(obj);
    }
    //get Amount Details
    getAmt(ele) {
        this.totalAmt = ele.target.value + '.00';
    }
    decimalAllContent($event) {
        let value = Number($event.target.value);
        let data = value.toFixed(2);
        $event.target.value = data;
    }
    AllPendingDetails($event) {
        this.allpdetails = true;
        if (this.allpdetails === true) {
            this.showAllPendingDetails = true;
            this.showCashPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
        else {
            this.showAllPendingDetails = false;
            this.showCashPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
    }
    CashPendingDetails() {
        this.allpdetails = true;
        if (this.allpdetails === true) {
            this.showCashPendingDetails = true;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
        else {
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
    }
    TransferPendingDetails() {
        this.allpdetails = true;
        if (this.allpdetails === true) {
            this.showTransferPendingDetails = true;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
        else {
            this.showTransferPendingDetails = false;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showRejectedPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
    }
    RejectedPendingDetails() {
        this.allpdetails = true;
        if (this.allpdetails === true) {
            this.showRejectedPendingDetails = true;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
        else {
            this.showRejectedPendingDetails = false;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showDayScrollPendingDetails = false;
        }
    }
    DayScrollPendingDetails() {
        this.allpdetails = true;
        if (this.allpdetails === true) {
            this.showDayScrollPendingDetails = true;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
        }
        else {
            this.showDayScrollPendingDetails = false;
            this.showCashPendingDetails = false;
            this.showAllPendingDetails = false;
            this.showTransferPendingDetails = false;
            this.showRejectedPendingDetails = false;
        }
        this.view(this.id);
    }
    view(id) {
        this.formSubmitted = true;
        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        let type = 'Detail';
        this.showRepo = true;
        let Startdate = moment__WEBPACK_IMPORTED_MODULE_4__(userData.branch.syspara.CURRENT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY');
        let OpeningData = moment__WEBPACK_IMPORTED_MODULE_4__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
        let stype = 'transfer';
        let rdio = 'none';
        let pcode = 'Both';
        let ccode = 1;
        if (this.angForm.valid) {
            let obj = this.angForm.value;
            let Date = moment__WEBPACK_IMPORTED_MODULE_4__(obj.date).format('DD/MM/YYYY');
            let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(Date, 'DD/MM/YYYY');
            //for start date
            if (this.date == userData.branch.syspara.CURRENT_DATE) {
                obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE;
            }
            else {
                let date = moment__WEBPACK_IMPORTED_MODULE_4__(this.date).format('DD/MM/YYYY');
                let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(date, 'DD/MM/YYYY');
                obj['START_DATE'] = date;
            }
            let branch = obj.BRANCH_CODE;
            if (id === 'userw') {
                this.iframe1url = this.report_url + "examples/UserWorkingReportList.php?TRAN_DATE='" + obj.START_DATE + "'&TRAN_DATE='" + obj.START_DATE + "'&BRANCH='" + this.branchName + "'&BRANCH_CODE='" + branch + "'&BANK_NAME='" + bankName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'userL') {
                this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&bankName='" + bankName + "'&branchName='" + this.branchName + "'&BRANCH_CODE='" + branch + "'&asondate='" + obj.START_DATE + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'userCash') {
                this.iframe1url = this.report_url + "examples/usercashdenomination.php?branchName='" + this.branchName + "'&date='" + obj.START_DATE + "'&BRANCH_CODE='" + branch + "'&bankName='" + bankName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'delayWork') {
                this.iframe1url = this.report_url + "examples/UserCounterWorkDelayTime.php?BRANCH='" + this.branchName + "'&BANK_NAME='" + bankName + "'&BRANCH_CODE='" + branch + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            // else if (id === 'schemeLog') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'glPosDetail') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'Nearest') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            else if (id === 'Incompletion') {
                this.iframe1url = this.report_url + "examples/incompletemaster.php/?&branchname='" + this.branchName + "'&sdate='" + obj.START_DATE + "'&BRANCH_CODE='" + branch + "'&bankname='" + bankName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'rateOfMargin') {
                this.iframe1url = this.report_url + "examples/interestratemargin.php?&Branch='" + this.branchName + "'&branch_code1=" + branch + "&branch_code2=" + branch + "&BankName='" + bankName + "'&sdate='" + obj.START_DATE + "'&edate='" + obj.START_DATE + "'&AC_ACNOTYPE4='TD'&AC_ACNOTYPE='IV'&AC_ACNOTYPE1='AG'&AC_ACNOTYPE2='GS'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'loanAnalysis') {
                this.iframe1url = this.report_url + "examples/loananalysisquery.php/?&Branch='" + this.branchName + "'&sdate='" + obj.START_DATE + "'&edate='" + obj.START_DATE + "'&bankname='" + bankName + "'&transtatus='1'&BRANCH_CODE='" + branch + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            // else if (id === 'ratioAnalysis') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'dailyLiquidity') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'remindMe') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'npaAnalysis') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'overDue') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'maturedTdLn') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'insuranceDue') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'Expenses') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            // else if (id === 'excessCash') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            else if (id === 'fdPayment') {
                this.iframe1url = this.report_url + "examples/fdpayment.php?branchName='" + this.branchName + "'&BRANCH_CODE='" + branch + "'&date='" + obj.START_DATE + "'&bankName='" + bankName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'drBalance') {
                this.iframe1url = this.report_url + "examples/Debit_Balance_Report.php?branchName='" + this.branchName + "'&bankName='" + bankName + "'&stdate='" + obj.START_DATE + "'&etdate='" + obj.START_DATE + "'&branch_code='" + branch + "'&AC_TYPE='9'&AC_ACNOTYPE='PG'";
                // this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'crBalance') {
                this.iframe1url = this.report_url + "examples/Credit_Balance_List.php?&Branch='" + this.branchName + "'&BankName='" + bankName + "'&edate='" + obj.START_DATE + "'&branch_code='" + branch + "'&trandrcr='D'&transtatus='1'&AC_ACNOTYPE1='LN'&AC_ACNOTYPE2='DS'&AC_ACNOTYPE3='CC'&QUOTES=''";
                // this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'zeroBalance') {
                this.iframe1url = this.report_url + "examples/zero_Balance_List.php/?&Branch='" + this.branchName + "'&date='" + obj.START_DATE + "'&bankname='" + bankName + "'&BRANCH_CODE='" + branch + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'ccOverdraft') {
                this.iframe1url = this.report_url + "examples/CCOverdraftReport.php?&Branch='" + this.branchName + "'&branch_code='" + branch + "'&BankName='" + bankName + "'&sdate='" + obj.START_DATE + "'&edate='" + obj.START_DATE + "'&trandrcr='D'&transtatus='1'&AC_ACNOTYPE='CC'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (id === 'overDraft') {
                this.iframe1url = this.report_url + "examples/Overdraft(OD).php?&branchname='" + this.branchName + "'&Date='" + obj.START_DATE + "'&branchcode='" + branch + "'&Bankname='" + bankName + "'";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            // else if (id === 'consistancy') { 
            //   // this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            //   this.iframe1url = this.report_url + "examples/loginreport.php?date='" + obj.START_DATE + "'&branchName='" + this.branchName + "'";
            //   console.log(this.iframe1url);
            //   this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            // }
            else if (id === 'highRecPay') {
                this.iframe1url = this.report_url + "examples/HighRecPay.php?START_DATE='" + obj.START_DATE + "'&BANK_NAME='" + bankName + "'&END_DATE='" + obj.START_DATE + "'&BRANCH='" + this.branchName + "'&BRANCH_CODE='" + branch + "'&AC_TYPE=1";
                console.log(this.iframe1url);
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false; });
        }
    }
    getManagerView() {
        if (this.date != undefined) {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY');
            let expiry = moment__WEBPACK_IMPORTED_MODULE_4__(toDate).format('DD/MM/YYYY');
            let obj = {
                BRANCH_CODE: this.ngBranchCode,
                TRAN_DATE: expiry,
                daily: expiry == this.checkDate ? true : false
            };
            expiry == this.checkDate ? this.disableBtn = false : this.disableBtn = true;
            this.http.post(this.url + '/ledger-view/managerView', obj).subscribe((data) => {
                this.mangerViewDetails = data;
                let denomination = this.mangerViewDetails.denomination;
                denomination.forEach(entry => {
                    this.retrivedata.push(entry);
                    // console.log(this.retrivedata)
                });
            });
            //for net profit
            let obj1 = {
                date: expiry,
                branch_code: this.ngBranchCode,
            };
            this.http.post(this.url + '/reports/profitLoss', obj1).subscribe((data) => {
                this.glDetails = data[data.length - 1];
                console.log(this.glDetails);
                this.ehead = this.glDetails.head_name;
                this.eheadt = this.glDetails.head_total;
                // })
            });
            let obj2 = {
                currentDate: expiry,
                branch: this.branchno
            };
            this.http.post(this.url + '/reports/managerviewGLbalance/', obj2).subscribe((data) => {
                this.mangerViewGl = data;
                console.log(this.mangerViewGl);
                // this.mangerViewGl.forEach(entry => {
                //   this.retrivedata2.push(entry);
                //   console.log(this.retrivedata2)
                // })
            });
        }
    }
    close() {
        this.resetForm();
    }
    resetForm() {
        // this.ngForm.controls.Scheme_code.reset();
        this.showRepo = false;
        this.clicked = false;
    }
    getBranch(event) {
        this.ngbranch = event.value;
        this.branchName = event.branchName;
        this.branchno = event.name;
        this.getManagerView();
    }
}
ManagerViewComponent.ɵfac = function ManagerViewComponent_Factory(t) { return new (t || ManagerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manager_view_service__WEBPACK_IMPORTED_MODULE_8__["ManagerViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"])); };
ManagerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerViewComponent, selectors: [["app-manager-view"]], decls: 255, vars: 41, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "SYSPARADATE"], [1, "form-group", "input-group"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "DATE", "id", "DATE", "formControlName", "SYSPARADATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsValue", "maxDate", "bsConfig", "ngClass", "ngModelChange", "keydown.Tab", "bsValueChange", "keypress"], ["DATE", "bsDatepicker"], [1, "col-sm-12", "col-md-12"], [2, "font-size", "18px", "color", "#1742ef"], [1, "col-xl-4", "col-md-4"], [1, "card-footer", "bg-c-green"], [1, "row", "align-items-left"], [1, "fa", "fa-money", "text-white", "f-16"], [1, "c1", "card-block", 2, "background-color", "#eef4f6"], [1, "row", "col-12", "align-items-left"], [1, "col-md-6"], [1, "text-c-black"], [1, "text-c-purple"], [1, "fa", "fa-caret-up", "text-c-green", "m-r-10"], [1, "fa", "fa-caret-down", "text-c-red", "m-r-10"], [1, "card-footer", "bg-c-red"], [1, "fa", "fa-exchange", "text-white", "f-16"], [1, "card-footer", "bg-c-blue"], [1, "fa", "fa-square", "text-white", "f-16"], [1, "card-footer", "bg-c-purple"], [1, "fa", "fa-folder-open-o", "text-white", "f-16"], [1, "fa", "fa-folder-o", "text-white", "f-16"], [1, "col-9"], [1, "row", 2, "background-color", "#eef4f6"], [1, "col-sm-12", "col-md-6"], [1, "col-sm-12"], [1, "row", "m-b-30"], [1, "col-md-12", "col-xl-12"], [1, "md-tabs"], ["title", "Denomination"], ["ngbTabContent", ""], ["title", "GL Positions"], [1, "card", "col-md", 2, "background-color", "#eef4f6"], [1, "col-md-12", 2, "text-align", "center"], [2, "font-size", "20px", "color", "black"], [1, "row", "mx-4", 2, "margin-top", "40px"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "col-md-4"], [1, "card", "col-md-12", "col-xl-12"], ["title", "Positions"], ["title", "Analysis"], ["title", "Dues/Matured"], ["title", "Balance"], [1, "col-md-10"], [1, "col-md-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [3, "value"], [1, "alert", "alert-danger"], [1, "m-t-15"], [1, "tabcontent", "card", "border-primary"], [1, "card-block", "highlight"], [1, "table-responsive"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-globe"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-money"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-exchange"], ["aria-hidden", "true", 1, "fa", "fa-times-circle-o"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], [1, "card", "border-primary"], [1, "row", "mx-2", "my-2"], ["type", "button", "id", "userw", "value", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-building-o"], ["type", "button", "id", "userL", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-in"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-clock-o"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-inverse", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-line-chart"], ["aria-hidden", "true", 1, "fa", "fa-opera"], [3, "url"], [1, "col-sm"], [1, "table-responsive", "fixTableHead"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [1, "td_center"], [1, "td_right"], ["colspan", "10", 1, "no-data-available", 2, "text-align", "center"], ["class", "row", 4, "ngIf"], [1, "td_left"], ["class", "table table-striped table-bordered table-hover compact", 4, "ngIf"]], template: function ManagerViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manager view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagerViewComponent_Template_ng_select_ngModelChange_22_listener($event) { return ctx.ngBranchCode = $event; })("change", function ManagerViewComponent_Template_ng_select_change_22_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManagerViewComponent_ng_option_23_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ManagerViewComponent_div_24_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "As on Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagerViewComponent_Template_input_ngModelChange_31_listener($event) { return ctx.date = $event; })("keydown.Tab", function ManagerViewComponent_Template_input_keydown_Tab_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r2.hide(); })("bsValueChange", function ManagerViewComponent_Template_input_bsValueChange_31_listener() { return ctx.getManagerView(); })("keypress", function ManagerViewComponent_Template_input_keypress_31_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Transaction Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Cash Opening Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Cash CLosing Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ngb-tab", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, ManagerViewComponent_ng_template_177_Template, 7, 2, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "ngb-tab", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, ManagerViewComponent_ng_template_179_Template, 6, 2, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Pending Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, ManagerViewComponent_button_186_Template, 3, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, ManagerViewComponent_button_187_Template, 3, 1, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](188, ManagerViewComponent_button_188_Template, 3, 1, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, ManagerViewComponent_button_189_Template, 3, 1, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, ManagerViewComponent_button_190_Template, 3, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "CD Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Working Capital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "ngb-tab", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](218, ManagerViewComponent_ng_template_218_Template, 28, 1, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ngb-tab", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, ManagerViewComponent_ng_template_220_Template, 22, 1, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ngb-tab", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](222, ManagerViewComponent_ng_template_222_Template, 22, 1, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ngb-tab", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](224, ManagerViewComponent_ng_template_224_Template, 25, 1, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_Template_button_click_228_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](236, ManagerViewComponent_div_236_Template, 2, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "app-modal-basic", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h4", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_Template_button_click_242_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); return _r15.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "perfect-scrollbar", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, ManagerViewComponent_div_247_Template, 52, 2, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, ManagerViewComponent_div_248_Template, 79, 1, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, ManagerViewComponent_div_249_Template, 6, 2, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, ManagerViewComponent_div_250_Template, 52, 2, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](251, ManagerViewComponent_div_251_Template, 52, 2, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerViewComponent_Template_button_click_253_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238); return _r15.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("bsValue", ctx.bsValue)("maxDate", ctx.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalCashCredit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalCashDebit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalTransferCredit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalTransferDebit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalCredit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.totalDebit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.OPENING_BALANCECR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.OPENING_BALANCEDR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.CLOSING_BALANCECR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.CLOSING_BALANCECR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.TOTALLEDGERCR, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.mangerViewDetails.OPENING_BALANCEDR, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allpdetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cashpd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transferpd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rejectpd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dayscrollpd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ehead, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.eheadt, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRepo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAllPendingDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDayScrollPendingDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRejectedPendingDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTransferPendingDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCashPendingDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbTabContent"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_16__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵr"], _reports_daily_reports_iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_18__["Iframe1Component"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n  margin-bottom: 5px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -2%;\n  height: 20px;\n  line-height: 15px;\n  font-size: 17px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.accordion-heading[_ngcontent-%COMP%] {\n  padding: 6px;\n  cursor: pointer;\n  background-color: #b7ceed;\n  font-weight: 500;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  border-radius: 2px;\n  height: 30px;\n}\n\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  margin-left: 10px;\n}\n\n.up-icon[_ngcontent-%COMP%] {\n  transform: 0.2s ease-out;\n}\n\n.icon[_ngcontent-%COMP%] {\n  animation-name: icon;\n  transform: rotate(180deg);\n  transform: 0.2s ease-out;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  transition: 1s ease-in-out;\n  padding: 10px;\n  background: #fcf3f3;\n  border: 1px solid #ffe1e1;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  animation-name: slideUp;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-timing-function: ease;\n  -webkit-animation-timing-function: ease;\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(-15%);\n  }\n  50% {\n    transform: translateY(2%);\n  }\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #2c8bea;\n  text-decoration: underline;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 280px;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 14px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 28px;\n  padding-bottom: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n  margin-bottom: 2px;\n  margin-left: 0px !important;\n  box-shadow: 5px 0px 10px;\n  border-top: none;\n  padding: 10px 25px;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.text-c-black[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.text-c-purple[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.c1[_ngcontent-%COMP%] {\n  background-color: #e3e9eb;\n  box-shadow: 3px 4px 10px;\n  margin-left: 0px;\n  border-radius: 0px 0px 5px 5px;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  \n}\n\n.solid[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 300px;\n  margin-top: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 0 !important;\n  color: #37474f;\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlldy9tYW5hZ2VyLXZpZXcvbWFuYWdlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLGlCQUFBO0FBTko7O0FBU0E7RUFDSSx3QkFBQTtBQU5KOztBQVNBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBTko7O0FBV0E7RUFHSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7QUFWSjs7QUFhQTtFQUVJO0lBRUksMkJBQUE7RUFaTjtFQWVFO0lBRUkseUJBQUE7RUFkTjtBQUNGOztBQTZCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUEzQko7O0FBOEJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBM0JKOztBQStCQTtFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE5Qko7O0FBa0NBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQS9CSjs7QUFrQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FBbUNBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtBQWhDSjs7QUFtQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQWhDSjs7QUFzQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQXJDSjs7QUF5Q0E7RUFDSSxlQUFBO0FBdENKOztBQXlDQTtFQUNJLGVBQUE7QUF0Q0o7O0FBeUNBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7QUF2Q0o7O0FBMkNBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0FBM0NKOztBQThDQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUF5QiwrQkFBQTtBQTFDN0I7O0FBNENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXpDSjs7QUEyQ0E7RUFFSSxpQkFBQTtBQXpDSjs7QUE0Q0M7RUFDRywwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBekNKOztBQTRDQTtFQUVJLGVBQUE7QUExQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS92aWV3L21hbmFnZXItdmlldy9tYW5hZ2VyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmRpdi5zb2xpZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbn1cblxuLy8gLmNhcmQtYm9keSB7XG4vLyAgICAgZmxleDogMSAxIGF1dG87XG4vLyAgICAgbWluLWhlaWdodDogMXB4O1xuLy8gICAgIHBhZGRpbmc6IDAuMnJlbTtcbi8vIH1cblxuZGl2LnNvbGlkIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IC0yJTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5kaXYuc29saWQgaDEgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hY2NvcmRpb24taGVhZGluZyB7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjZWVkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXAtaWNvbiB7XG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2Utb3V0O1xufVxuXG4uaWNvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGljb247XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IDAuMnMgZWFzZS1vdXQ7XG59XG5cblxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuXG5cbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTIsIDI0MywgMjQzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyMjUsIDIyNSk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG5cbiAgICAwJSB7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xuICAgIH1cblxuICAgIDUwJSB7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIlKTtcbiAgICB9XG5cblxuICAgIC8vIDY1JSB7XG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gODAlIHtcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTtcbiAgICAvLyB9XG5cbn1cblxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYig0NCwgMTM5LCAyMzQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogLTQ2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbn1cblxuZGl2LnNvbGlkIHtcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gICAgYm9yZGVyLWNvbG9yOiAjODE3ZDdkZTM7XG4gICAgcGFkZGluZzogMC40JTtcbiAgICAvLyBwYWRkaW5nOiAwLjclO1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogMC4ycmVtO1xufVxuXG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBwYWRkaW5nOiAwcmVtIDAuN3JlbTtcbn1cblxuLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5pZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG59XG5cbi8vLy8vLy8vL1xuXG5cbi5jYXJkLWZvb3RlciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDVweCAwcHggMTBweDtcblxuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcblxufVxuXG4udGV4dC1jLWJsYWNrIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0LWMtcHVycGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTllYjtcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDEwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDRweCAjY2VkM2Q0O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuXG59XG5cbnAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4udGFiY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vIG1hcmdpbjogLTEzcHg7XG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxufVxuLnRhYmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xufSAgXG4uc29saWR7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLmJ0blxue1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4gLm5hdi1pdGVtIGEge1xuICAgIHBhZGRpbmc6IDE1cHggMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzc0NzRmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYVxue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager-view',
                templateUrl: './manager-view.component.html',
                styleUrls: ['./manager-view.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectConfig"] }, { type: _manager_view_service__WEBPACK_IMPORTED_MODULE_8__["ManagerViewService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view.module.ts ***!
  \****************************************************************/
/*! exports provided: ManagerViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewModule", function() { return ManagerViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manager_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-view.component */ "./src/app/theme/view/manager-view/manager-view.component.ts");
/* harmony import */ var _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-view-routing.module */ "./src/app/theme/view/manager-view/manager-view-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_view_manager_view_manager_view_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/view/manager-view/manager-view.service */ "./src/app/theme/view/manager-view/manager-view.service.ts");
/* harmony import */ var _reports_daily_reports_iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reports/daily-reports/iframe1/iframe1.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");



















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class ManagerViewModule {
}
ManagerViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagerViewModule });
ManagerViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagerViewModule_Factory(t) { return new (t || ManagerViewModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        src_app_theme_view_manager_view_manager_view_service__WEBPACK_IMPORTED_MODULE_12__["ManagerViewService"],
        src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"],
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            _reports_daily_reports_iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_13__["Iframe1Module"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagerViewModule, { declarations: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
        _reports_daily_reports_iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_13__["Iframe1Module"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"]], exports: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                    _reports_daily_reports_iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_13__["Iframe1Module"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"]
                ],
                declarations: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]],
                exports: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    src_app_theme_view_manager_view_manager_view_service__WEBPACK_IMPORTED_MODULE_12__["ManagerViewService"],
                    src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"],
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view.service.ts ***!
  \*****************************************************************/
/*! exports provided: ManagerViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewService", function() { return ManagerViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ManagerViewService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSchemeCodeList() {
        return this.http.get(this.url + '/scheme-parameters');
    }
    //get narration data
    getNarrationMaster() {
        return this.http.get(this.url + '/narration');
    }
    //get syspara 
    getSysParaData() {
        return this.http.get(this.url + '/system-master-parameters');
    }
    getGlPosition() {
        return this.http.get(this.url + '/manager-view-glp');
    }
}
ManagerViewService.ɵfac = function ManagerViewService_Factory(t) { return new (t || ManagerViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ManagerViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManagerViewService, factory: ManagerViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~manager-view-manager-view-module~shortcutkey-managers-managers-module.js.map