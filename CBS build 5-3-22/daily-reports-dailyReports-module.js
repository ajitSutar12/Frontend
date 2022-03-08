(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-reports-dailyReports-module"],{

/***/ "./src/app/theme/reports/daily-reports/daily-reports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/daily-reports.component.ts ***!
  \************************************************************************/
/*! exports provided: DailyReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsComponent", function() { return DailyReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DailyReportsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.cardImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DailyReportsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function DailyReportsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyReportsComponent_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.removeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DailyReportsComponent {
    constructor() { }
    ngOnInit() {
    }
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
}
DailyReportsComponent.ɵfac = function DailyReportsComponent_Factory(t) { return new (t || DailyReportsComponent)(); };
DailyReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyReportsComponent, selectors: [["app-daily-reports"]], decls: 13, vars: 4, consts: [[1, "form-group"], [1, "custom-file", "fileInputProfileWrap"], ["type", "file", 1, "fileInputProfile", 3, "change"], [1, "img-space"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [3, "src"], ["src", "./../../assets/placeholder.png", 1, "img-responsive"], [1, "btn", "btn-danger", 3, "click"]], template: function DailyReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DailyReportsComponent_Template_input_change_7_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DailyReportsComponent_ng_container_9_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DailyReportsComponent_ng_template_10_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DailyReportsComponent_a_12_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.imageError, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageSaved)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImageSaved);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGFpbHktcmVwb3J0cy9kYWlseS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-reports',
                templateUrl: './daily-reports.component.html',
                styleUrls: ['./daily-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DailyReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsRoutingModule", function() { return DailyReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-reports.component */ "./src/app/theme/reports/daily-reports/daily-reports.component.ts");





const routes = [
    {
        path: '',
        component: _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"],
        data: {
            title: 'Daily Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DailyReportsRoutingModule {
}
DailyReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsRoutingModule });
DailyReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsRoutingModule_Factory(t) { return new (t || DailyReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports.module.ts ***!
  \********************************************************************/
/*! exports provided: DailyReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsModule", function() { return DailyReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-reports.component */ "./src/app/theme/reports/daily-reports/daily-reports.component.ts");
/* harmony import */ var _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dailyReports-routing.module */ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



class DailyReportsModule {
}
DailyReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsModule });
DailyReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsModule_Factory(t) { return new (t || DailyReportsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            // ChartModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsModule, { declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        // ChartModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                    // ChartModule
                ],
                declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=daily-reports-dailyReports-module.js.map