(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-extension-full-event-calendar-full-event-calendar-module"],{

/***/ "./src/app/theme/extension/full-event-calendar/full-event-calendar-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/extension/full-event-calendar/full-event-calendar-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: FullEventCalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullEventCalendarRoutingModule", function() { return FullEventCalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-event-calendar.component */ "./src/app/theme/extension/full-event-calendar/full-event-calendar.component.ts");





const routes = [
    {
        path: '',
        component: _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_2__["FullEventCalendarComponent"],
        data: {
            title: 'Full Event Calendar',
            icon: 'icon-layout-sidebar-left',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - event calendar',
            status: true
        }
    }
];
class FullEventCalendarRoutingModule {
}
FullEventCalendarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FullEventCalendarRoutingModule });
FullEventCalendarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FullEventCalendarRoutingModule_Factory(t) { return new (t || FullEventCalendarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FullEventCalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullEventCalendarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/extension/full-event-calendar/full-event-calendar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/extension/full-event-calendar/full-event-calendar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FullEventCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullEventCalendarComponent", function() { return FullEventCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");





class FullEventCalendarComponent {
    constructor() {
        this.dateObj = new Date();
        this.yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'All Day Event',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-01', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#04a9f5',
                    backgroundColor: '#04a9f5',
                    textColor: '#fff'
                },
                {
                    title: 'Long Event',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-07', 'yyyy-MM-dd', 'en-US'),
                    end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-10', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    id: '999',
                    title: 'Repeating Event',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-09 09:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f4c22b',
                    backgroundColor: '#f4c22b',
                    textColor: '#fff'
                },
                {
                    id: '1000',
                    title: 'Repeating Event',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-16 08:00:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#3ebfea',
                    backgroundColor: '#3ebfea',
                    textColor: '#fff'
                },
                {
                    title: 'Conference',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-11', 'yyyy-MM-dd', 'en-US'),
                    end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-13', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 10:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    end: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 12:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Lunch',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 12:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 02:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Happy Hour',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 05:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                },
                {
                    title: 'Dinner',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-12 08:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Birthday Party',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-13 07:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.yearMonth + '-28', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }
            ]
        };
    }
    ngOnInit() { }
}
FullEventCalendarComponent.ɵfac = function FullEventCalendarComponent_Factory(t) { return new (t || FullEventCalendarComponent)(); };
FullEventCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullEventCalendarComponent, selectors: [["app-full-event-calendar"]], decls: 5, vars: 1, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], ["title", "Full Calendar", "cardClass", "elite-calendar"], [3, "options"]], template: function FullEventCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "full-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2V4dGVuc2lvbi9mdWxsLWV2ZW50LWNhbGVuZGFyL2Z1bGwtZXZlbnQtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullEventCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-event-calendar',
                templateUrl: './full-event-calendar.component.html',
                styleUrls: ['./full-event-calendar.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/extension/full-event-calendar/full-event-calendar.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/extension/full-event-calendar/full-event-calendar.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FullEventCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullEventCalendarModule", function() { return FullEventCalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-event-calendar-routing.module */ "./src/app/theme/extension/full-event-calendar/full-event-calendar-routing.module.ts");
/* harmony import */ var _full_event_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-event-calendar.component */ "./src/app/theme/extension/full-event-calendar/full-event-calendar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");










_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__["default"]
]);
class FullEventCalendarModule {
}
FullEventCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FullEventCalendarModule });
FullEventCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FullEventCalendarModule_Factory(t) { return new (t || FullEventCalendarModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullEventCalendarRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FullEventCalendarModule, { declarations: [_full_event_calendar_component__WEBPACK_IMPORTED_MODULE_3__["FullEventCalendarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullEventCalendarRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullEventCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _full_event_calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullEventCalendarRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                declarations: [_full_event_calendar_component__WEBPACK_IMPORTED_MODULE_3__["FullEventCalendarComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-extension-full-event-calendar-full-event-calendar-module.js.map