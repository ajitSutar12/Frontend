(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["counter-work-day-end-counter-work-day-end-module"],{

/***/ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CounterWorkDayEndRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterWorkDayEndRoutingModule", function() { return CounterWorkDayEndRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _counter_work_day_end_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-work-day-end.component */ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.component.ts");





const routes = [
    {
        path: '',
        component: _counter_work_day_end_component__WEBPACK_IMPORTED_MODULE_2__["CounterWorkDayEndComponent"],
        data: {
            title: 'Counter Work Day End',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CounterWorkDayEndRoutingModule {
}
CounterWorkDayEndRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CounterWorkDayEndRoutingModule });
CounterWorkDayEndRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CounterWorkDayEndRoutingModule_Factory(t) { return new (t || CounterWorkDayEndRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterWorkDayEndRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterWorkDayEndRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CounterWorkDayEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterWorkDayEndComponent", function() { return CounterWorkDayEndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _day_end_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../day-end.service */ "./src/app/theme/utility/day-end/day-end.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class CounterWorkDayEndComponent {
    constructor(_services) {
        this._services = _services;
        this.dtExportButtonOptions = {};
    }
    ngOnInit() {
        this._services.getSysparaDetails().subscribe(data => {
            this.systemInfo = data[0];
            console.log(this.systemInfo);
            this.ngdate = moment__WEBPACK_IMPORTED_MODULE_2__(this.systemInfo.CURRENT_DATE, 'DD/MM/YYYY').format('YYYY-MM-DD');
        }, err => {
            console.log(err);
        });
    }
    DayEnd() {
        //get login details
        let user = localStorage.getItem('user');
        //  let current_date = this.ngdate;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want day handover to Admin.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Day End Handover!'
        }).then((result) => {
            if (result.isConfirmed) {
                let user = JSON.parse(localStorage.getItem('user'));
                let obj = {
                    date: this.ngdate,
                    branch_id: user.branchId,
                    user_id: user.id
                };
                //check Is valid today all transaction 
                this._services.dayEndHandoverProcess(obj).subscribe(data => {
                    this._services.dayHandOver(obj).subscribe(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success', 'Day End Handovered On ' + this.systemInfo.CURRENT_DATE + ' Successfully!', 'success');
                    }, err => {
                        if (err.error.statusCode == 400) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', err.error.message, 'error');
                        }
                    });
                }, err => {
                    if (err.error.statusCode == 400) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', err.error.message, 'error');
                    }
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your Action is revert', 'error');
            }
        });
    }
}
CounterWorkDayEndComponent.ɵfac = function CounterWorkDayEndComponent_Factory(t) { return new (t || CounterWorkDayEndComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_day_end_service__WEBPACK_IMPORTED_MODULE_3__["DayEndService"])); };
CounterWorkDayEndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterWorkDayEndComponent, selectors: [["app-counter-work-day-end"]], decls: 17, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], ["action", "javascript:", 1, "form-material"], [1, "card-block"], [1, "col-sm-2"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["type", "date", "name", "ngdate", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm"], [1, "btn", "btn-primary", "ripple", "light", 3, "click"]], template: function CounterWorkDayEndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Day End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CounterWorkDayEndComponent_Template_input_ngModelChange_13_listener($event) { return ctx.ngdate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterWorkDayEndComponent_Template_button_click_15_listener() { return ctx.DayEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Day End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngdate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9kYXktZW5kL2NvdW50ZXItd29yay1kYXktZW5kL2NvdW50ZXItd29yay1kYXktZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9kYXktZW5kL2NvdW50ZXItd29yay1kYXktZW5kL2NvdW50ZXItd29yay1kYXktZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcbiAgICBjb2xvcjogcmVkO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterWorkDayEndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-work-day-end',
                templateUrl: './counter-work-day-end.component.html',
                styleUrls: ['./counter-work-day-end.component.scss']
            }]
    }], function () { return [{ type: _day_end_service__WEBPACK_IMPORTED_MODULE_3__["DayEndService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CounterWorkDayEndModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterWorkDayEndModule", function() { return CounterWorkDayEndModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _counter_work_day_end_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-work-day-end.component */ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end.component.ts");
/* harmony import */ var _counter_work_day_end_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter-work-day-end-routing.module */ "./src/app/theme/utility/day-end/counter-work-day-end/counter-work-day-end-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class CounterWorkDayEndModule {
}
CounterWorkDayEndModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CounterWorkDayEndModule });
CounterWorkDayEndModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CounterWorkDayEndModule_Factory(t) { return new (t || CounterWorkDayEndModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _counter_work_day_end_routing_module__WEBPACK_IMPORTED_MODULE_3__["CounterWorkDayEndRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CounterWorkDayEndModule, { declarations: [_counter_work_day_end_component__WEBPACK_IMPORTED_MODULE_2__["CounterWorkDayEndComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _counter_work_day_end_routing_module__WEBPACK_IMPORTED_MODULE_3__["CounterWorkDayEndRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterWorkDayEndModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _counter_work_day_end_routing_module__WEBPACK_IMPORTED_MODULE_3__["CounterWorkDayEndRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                declarations: [_counter_work_day_end_component__WEBPACK_IMPORTED_MODULE_2__["CounterWorkDayEndComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=counter-work-day-end-counter-work-day-end-module.js.map