(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-dashboard-crm-dashboard-module"],{

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CrmDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardRoutingModule", function() { return CrmDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm-dashboard.component */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts");





const routes = [
    {
        path: '',
        component: _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["CrmDashboardComponent"],
        data: {
            title: 'CRM Dashboard',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CrmDashboardRoutingModule {
}
CrmDashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CrmDashboardRoutingModule });
CrmDashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CrmDashboardRoutingModule_Factory(t) { return new (t || CrmDashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrmDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrmDashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: CrmDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardComponent", function() { return CrmDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/usaLow.js */ "./src/assets/charts/amchart/usaLow.js");
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__);












class CrmDashboardComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            AmCharts.makeChart('revenue-map', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'title': 'Revenue Market',
                        'gridAlpha': 0,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#448aff',
                        'type': 'smoothedLine',
                        'title': 'Market Days',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#536dfe',
                        'type': 'smoothedLine',
                        'title': 'Market Days ALL',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-16',
                        'market1': 85,
                        'market2': 75
                    }, {
                        'date': '2013-01-17',
                        'market1': 74,
                        'market2': 80
                    }, {
                        'date': '2013-01-18',
                        'market1': 78,
                        'market2': 88
                    }, {
                        'date': '2013-01-19',
                        'market1': 85,
                        'market2': 75
                    }, {
                        'date': '2013-01-20',
                        'market1': 82,
                        'market2': 89
                    }, {
                        'date': '2013-01-21',
                        'market1': 83,
                        'market2': 78
                    }, {
                        'date': '2013-01-22',
                        'market1': 72,
                        'market2': 92
                    }, {
                        'date': '2013-01-23',
                        'market1': 85,
                        'market2': 76
                    }]
            });
            this.totalSale1Data = valIncomeArrow('#536dfe', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#8698fe');
            this.totalSale2Data = valIncomeArrow('#11c15b', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#57d38b');
            this.totalSale3Data = valIncomeArrow('#448aff', [25, 30, 20, 15, 20, 25, 31, 22, 30, 15, 25, 35, 30, 40], '#7badff');
            this.totalSaleOption = valIncomeBuildOption();
        }, 75);
    }
}
CrmDashboardComponent.ɵfac = function CrmDashboardComponent_Factory(t) { return new (t || CrmDashboardComponent)(); };
CrmDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrmDashboardComponent, selectors: [["app-crm-dashboard"]], decls: 404, vars: 34, consts: [[1, "page-body"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-block"], [1, "row", "align-items-center", "m-l-0"], [1, "col-auto"], [1, "fa", "fa-book", "f-30", "text-c-purple"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], [1, "fa", "fa-rocket", "f-30", "text-c-green"], [1, "fa", "fa-user", "f-30", "text-c-red"], [1, "fa", "fa-lightbulb-o", "f-30", "text-c-blue"], [1, "col-xl-8", "col-md-12"], [3, "title"], ["id", "revenue-map"], [1, "col-xl-4", "col-md-12"], [3, "title", "cardClass"], [1, "row", "per-task-block", "text-center"], [1, "col-6"], ["data-label", "45%", 1, "radial-bar", "radial-bar-45", "radial-bar-lg", "radial-bar-default"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-round", "btn-sm", "ripple", "light"], ["data-label", "30%", 1, "radial-bar", "radial-bar-30", "radial-bar-lg", "radial-bar-default"], [1, "btn", "btn-primary", "btn-outline-primary", "btn-round", "btn-sm", "ripple", "light"], [1, "row", "m-b-30"], [1, "col-auto", "p-r-0"], [1, "fa", "fa-bell", "bg-c-blue", "feed-icon"], [1, "col"], [1, "m-b-5"], [1, "text-muted", "f-right", "f-13"], [1, "fa", "fa-shopping-cart", "bg-c-red", "feed-icon"], [1, "fa", "fa-file-text", "bg-c-green", "feed-icon"], [1, "text-center"], ["href", "javascript:", 1, "b-b-primary", "text-primary"], [1, "row", "m-b-25"], ["src", "assets/images/mega-menu/01.jpg", "alt", "", 1, "img-fluid", "img-50"], [1, "text-c-red", "m-b-0"], ["src", "assets/images/mega-menu/02.jpg", "alt", "", 1, "img-fluid", "img-50"], [1, "row", "m-b-20"], ["src", "assets/images/mega-menu/03.jpg", "alt", "", 1, "img-fluid", "img-50"], [1, "text-c-green", "m-b-0"], [1, "latest-update-box"], [1, "row", "p-t-20", "p-b-30"], [1, "col-auto", "text-right", "update-meta"], [1, "text-muted", "m-b-0", "d-inline"], [1, "fa", "fa-fighter-jet", "bg-c-blue", "update-icon"], [1, "text-muted", "m-b-15"], ["src", "assets/images/mega-menu/01.jpg", "alt", "", 1, "img-fluid", "img-100", "m-r-15", "m-b-10"], ["src", "assets/images/mega-menu/03.jpg", "alt", "", 1, "img-fluid", "img-100", "m-r-15", "m-b-10"], [1, "row", "p-b-30"], [1, "fa", "fa-file-text", "bg-c-blue", "update-icon"], [1, "text-muted", "m-b-0"], [1, "fa", "fa-map-marker", "bg-c-blue", "update-icon"], [1, "text-c-blue"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl"], [3, "latitude", "longitude"], [1, "text-right"], [1, "col-xl-4", "col-md-6"], [1, "card", "o-hidden"], [1, "card-header"], [1, "text-c-green", "f-w-500"], [1, "fa", "fa-caret-up", "m-r-15"], [1, "col-4", "b-r-default"], [1, "text-muted", "m-b-5"], [1, "col-4"], ["id", "tot-lead", 3, "type", "data", "options"], [1, "text-c-red", "f-w-500"], [1, "fa", "fa-caret-down", "m-r-15"], ["id", "tot-vendor", 3, "type", "data", "options"], ["id", "invoice-gen", 3, "type", "data", "options"], [1, "col-xl-6", "col-md-12"], [1, "fa", "fa-twitter", "bg-twitter", "update-icon"], [1, "fa", "fa-briefcase", "bg-c-red", "update-icon"], [1, "fa", "fa-check", "bg-c-green", "update-icon"], [1, "row", "p-b-0"], [1, "fa", "fa-facebook", "bg-facebook", "update-icon"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "b-none"], ["href", "javascript:", 1, "align-middle"], ["src", "assets/images/avatar-2.jpg", "alt", "user image", 1, "img-radius", "img-40", "align-top", "m-r-15"], [1, "d-inline-block"], ["src", "assets/images/avatar-1.jpg", "alt", "user image", 1, "img-radius", "img-40", "align-top", "m-r-15"], [3, "title", "cardClass", "blockClass"], [1, "table", "table-hover", "table-borderless"], [1, "label", "label-success"], [1, "label", "label-primary"], [1, "label", "label-danger"]], template: function CrmDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tickets Answered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "379");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projects Launched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Happy Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "5984");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Unique Innovation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "325");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "You have 3 pending tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "New order received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "You have 3 pending tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "View all Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "New able - Redesign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2 Days Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "New Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Proposal in 6 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Logo Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "10 Days Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "View all Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "just now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "The trip was an amazing and a life changing experience!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "5 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "3 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Jeny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Happy Hour! Free drinks at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Cafe-Bar all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "day long!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "agm-map", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "agm-marker", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "agm-info-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Cafe-Bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "- Nice Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "View all Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Total Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " 18% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "76.12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "16.40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "4.56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "chart", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Total Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " 24% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "chart", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Invoice Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " 20% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "chart", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "app-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "2 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "+ 1652 Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "You\u2019re getting more and more followers, keep it up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "4 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "+ 5 New Products were added!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Congratulations!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "1 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Database backup completed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Download the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "latest backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "2 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "+2 Friend Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "This is great, keep it up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "table", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Jeny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "View all Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "app-card", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "table", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Website down for one week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Today 2:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Loosing control on server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Authorizations keys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "27, Aug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Restoring default settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Today 9:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Loosing control on server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Restoring default settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Today 9:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Restoring default settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Today 9:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "215px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Your Tasks")("cardClass", "per-task-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Feeds")("cardClass", "feed-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Upcoming Deadlines")("cardClass", "feed-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Latest Activity")("cardClass", "latest-activity-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", 21.6776887)("longitude", 71.566261)("zoom", 8)("disableDefaultUI", false)("zoomControl", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", 21.6776887)("longitude", 71.566261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale1Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale2Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale3Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Latest Updates")("cardClass", "latest-update-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Recent Tickets")("cardClass", "table-card")("blockClass", "p-b-5");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmInfoWindow"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9jcm0tZGFzaGJvYXJkL2NybS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */", ".radial-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: transparent;\n  margin-bottom: 20px;\n  box-sizing: content-box;\n  width: 80px;\n  height: 80px;\n  font-size: 18px;\n}\n.radial-bar[_ngcontent-%COMP%]:after, .radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  color: #a1a2a3;\n}\n.radial-bar[_ngcontent-%COMP%]:after {\n  content: attr(data-label);\n  background-color: #f0f0f0;\n  z-index: 101;\n}\n.radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  z-index: 102;\n}\n.radial-bar[_ngcontent-%COMP%]:after, .radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin-left: 12px;\n  margin-top: 12px;\n  line-height: 56px;\n}\n.radial-bar.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-default.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-pink.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-purple.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-inverse.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-lg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n}\n.radial-bar-lg[_ngcontent-%COMP%]:after, .radial-bar-lg[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin-left: 15px;\n  margin-top: 15px;\n  line-height: 70px;\n}\n.radial-bar-sm[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 12px;\n}\n.radial-bar-sm[_ngcontent-%COMP%]:after, .radial-bar-sm[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-left: 7.5px;\n  margin-top: 7.5px;\n  line-height: 35px;\n}\n.radial-bar-xs[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 8px;\n}\n.radial-bar-xs[_ngcontent-%COMP%]:after, .radial-bar-xs[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 5.5px;\n  margin-top: 4.5px;\n  line-height: 21px;\n}\n.radial-bar[_ngcontent-%COMP%] {\n  background-clip: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY2hhcnRzL3JhZGlhbC9jc3MvcmFkaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBDQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBR0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjtBQUVBOztFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtBQUdGO0FBREE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQURBO0VBQ0UsOElBQUE7QUFJRjtBQUZBO0VBQ0UsK0lBQUE7QUFLRjtBQUhBO0VBQ0UsK0lBQUE7QUFNRjtBQUpBO0VBQ0UsK0lBQUE7QUFPRjtBQUxBO0VBQ0UsK0lBQUE7QUFRRjtBQU5BO0VBQ0UsK0lBQUE7QUFTRjtBQVBBO0VBQ0UsK0lBQUE7QUFVRjtBQVJBO0VBQ0UsK0lBQUE7QUFXRjtBQVRBO0VBQ0UsK0lBQUE7QUFZRjtBQVZBO0VBQ0UsK0lBQUE7QUFhRjtBQVhBO0VBQ0UsZ0pBQUE7QUFjRjtBQVpBO0VBQ0UsZ0pBQUE7QUFlRjtBQWJBO0VBQ0UsZ0pBQUE7QUFnQkY7QUFkQTtFQUNFLGdKQUFBO0FBaUJGO0FBZkE7RUFDRSxnSkFBQTtBQWtCRjtBQWhCQTtFQUNFLGdKQUFBO0FBbUJGO0FBakJBO0VBQ0UsZ0pBQUE7QUFvQkY7QUFsQkE7RUFDRSxnSkFBQTtBQXFCRjtBQW5CQTtFQUNFLGdKQUFBO0FBc0JGO0FBcEJBO0VBQ0UsZ0pBQUE7QUF1QkY7QUFyQkE7RUFDRSxnSkFBQTtBQXdCRjtBQXRCQTtFQUNFLDhJQUFBO0FBeUJGO0FBdkJBO0VBQ0UsK0lBQUE7QUEwQkY7QUF4QkE7RUFDRSwrSUFBQTtBQTJCRjtBQXpCQTtFQUNFLCtJQUFBO0FBNEJGO0FBMUJBO0VBQ0UsK0lBQUE7QUE2QkY7QUEzQkE7RUFDRSwrSUFBQTtBQThCRjtBQTVCQTtFQUNFLCtJQUFBO0FBK0JGO0FBN0JBO0VBQ0UsK0lBQUE7QUFnQ0Y7QUE5QkE7RUFDRSwrSUFBQTtBQWlDRjtBQS9CQTtFQUNFLCtJQUFBO0FBa0NGO0FBaENBO0VBQ0UsZ0pBQUE7QUFtQ0Y7QUFqQ0E7RUFDRSxnSkFBQTtBQW9DRjtBQWxDQTtFQUNFLGdKQUFBO0FBcUNGO0FBbkNBO0VBQ0UsZ0pBQUE7QUFzQ0Y7QUFwQ0E7RUFDRSxnSkFBQTtBQXVDRjtBQXJDQTtFQUNFLGdKQUFBO0FBd0NGO0FBdENBO0VBQ0UsZ0pBQUE7QUF5Q0Y7QUF2Q0E7RUFDRSxnSkFBQTtBQTBDRjtBQXhDQTtFQUNFLGdKQUFBO0FBMkNGO0FBekNBO0VBQ0UsZ0pBQUE7QUE0Q0Y7QUExQ0E7RUFDRSxnSkFBQTtBQTZDRjtBQTNDQTtFQUNFLDhJQUFBO0FBOENGO0FBNUNBO0VBQ0UsK0lBQUE7QUErQ0Y7QUE3Q0E7RUFDRSwrSUFBQTtBQWdERjtBQTlDQTtFQUNFLCtJQUFBO0FBaURGO0FBL0NBO0VBQ0UsK0lBQUE7QUFrREY7QUFoREE7RUFDRSwrSUFBQTtBQW1ERjtBQWpEQTtFQUNFLCtJQUFBO0FBb0RGO0FBbERBO0VBQ0UsK0lBQUE7QUFxREY7QUFuREE7RUFDRSwrSUFBQTtBQXNERjtBQXBEQTtFQUNFLCtJQUFBO0FBdURGO0FBckRBO0VBQ0UsZ0pBQUE7QUF3REY7QUF0REE7RUFDRSxnSkFBQTtBQXlERjtBQXZEQTtFQUNFLGdKQUFBO0FBMERGO0FBeERBO0VBQ0UsZ0pBQUE7QUEyREY7QUF6REE7RUFDRSxnSkFBQTtBQTRERjtBQTFEQTtFQUNFLGdKQUFBO0FBNkRGO0FBM0RBO0VBQ0UsZ0pBQUE7QUE4REY7QUE1REE7RUFDRSxnSkFBQTtBQStERjtBQTdEQTtFQUNFLGdKQUFBO0FBZ0VGO0FBOURBO0VBQ0UsZ0pBQUE7QUFpRUY7QUEvREE7RUFDRSxnSkFBQTtBQWtFRjtBQWhFQTtFQUNFLDhJQUFBO0FBbUVGO0FBakVBO0VBQ0UsK0lBQUE7QUFvRUY7QUFsRUE7RUFDRSwrSUFBQTtBQXFFRjtBQW5FQTtFQUNFLCtJQUFBO0FBc0VGO0FBcEVBO0VBQ0UsK0lBQUE7QUF1RUY7QUFyRUE7RUFDRSwrSUFBQTtBQXdFRjtBQXRFQTtFQUNFLCtJQUFBO0FBeUVGO0FBdkVBO0VBQ0UsK0lBQUE7QUEwRUY7QUF4RUE7RUFDRSwrSUFBQTtBQTJFRjtBQXpFQTtFQUNFLCtJQUFBO0FBNEVGO0FBMUVBO0VBQ0UsZ0pBQUE7QUE2RUY7QUEzRUE7RUFDRSxnSkFBQTtBQThFRjtBQTVFQTtFQUNFLGdKQUFBO0FBK0VGO0FBN0VBO0VBQ0UsZ0pBQUE7QUFnRkY7QUE5RUE7RUFDRSxnSkFBQTtBQWlGRjtBQS9FQTtFQUNFLGdKQUFBO0FBa0ZGO0FBaEZBO0VBQ0UsZ0pBQUE7QUFtRkY7QUFqRkE7RUFDRSxnSkFBQTtBQW9GRjtBQWxGQTtFQUNFLGdKQUFBO0FBcUZGO0FBbkZBO0VBQ0UsZ0pBQUE7QUFzRkY7QUFwRkE7RUFDRSxnSkFBQTtBQXVGRjtBQXJGQTtFQUNFLDhJQUFBO0FBd0ZGO0FBdEZBO0VBQ0UsK0lBQUE7QUF5RkY7QUF2RkE7RUFDRSwrSUFBQTtBQTBGRjtBQXhGQTtFQUNFLCtJQUFBO0FBMkZGO0FBekZBO0VBQ0UsK0lBQUE7QUE0RkY7QUExRkE7RUFDRSwrSUFBQTtBQTZGRjtBQTNGQTtFQUNFLCtJQUFBO0FBOEZGO0FBNUZBO0VBQ0UsK0lBQUE7QUErRkY7QUE3RkE7RUFDRSwrSUFBQTtBQWdHRjtBQTlGQTtFQUNFLCtJQUFBO0FBaUdGO0FBL0ZBO0VBQ0UsZ0pBQUE7QUFrR0Y7QUFoR0E7RUFDRSxnSkFBQTtBQW1HRjtBQWpHQTtFQUNFLGdKQUFBO0FBb0dGO0FBbEdBO0VBQ0UsZ0pBQUE7QUFxR0Y7QUFuR0E7RUFDRSxnSkFBQTtBQXNHRjtBQXBHQTtFQUNFLGdKQUFBO0FBdUdGO0FBckdBO0VBQ0UsZ0pBQUE7QUF3R0Y7QUF0R0E7RUFDRSxnSkFBQTtBQXlHRjtBQXZHQTtFQUNFLGdKQUFBO0FBMEdGO0FBeEdBO0VBQ0UsZ0pBQUE7QUEyR0Y7QUF6R0E7RUFDRSxnSkFBQTtBQTRHRjtBQTFHQTtFQUNFLDhJQUFBO0FBNkdGO0FBM0dBO0VBQ0UsK0lBQUE7QUE4R0Y7QUE1R0E7RUFDRSwrSUFBQTtBQStHRjtBQTdHQTtFQUNFLCtJQUFBO0FBZ0hGO0FBOUdBO0VBQ0UsK0lBQUE7QUFpSEY7QUEvR0E7RUFDRSwrSUFBQTtBQWtIRjtBQWhIQTtFQUNFLCtJQUFBO0FBbUhGO0FBakhBO0VBQ0UsK0lBQUE7QUFvSEY7QUFsSEE7RUFDRSwrSUFBQTtBQXFIRjtBQW5IQTtFQUNFLCtJQUFBO0FBc0hGO0FBcEhBO0VBQ0UsZ0pBQUE7QUF1SEY7QUFySEE7RUFDRSxnSkFBQTtBQXdIRjtBQXRIQTtFQUNFLGdKQUFBO0FBeUhGO0FBdkhBO0VBQ0UsZ0pBQUE7QUEwSEY7QUF4SEE7RUFDRSxnSkFBQTtBQTJIRjtBQXpIQTtFQUNFLGdKQUFBO0FBNEhGO0FBMUhBO0VBQ0UsZ0pBQUE7QUE2SEY7QUEzSEE7RUFDRSxnSkFBQTtBQThIRjtBQTVIQTtFQUNFLGdKQUFBO0FBK0hGO0FBN0hBO0VBQ0UsZ0pBQUE7QUFnSUY7QUE5SEE7RUFDRSxnSkFBQTtBQWlJRjtBQTdIQSx5QkFBQTtBQUNBO0VBQ0UsNklBQUE7QUFnSUY7QUE5SEE7RUFDRSw4SUFBQTtBQWlJRjtBQS9IQTtFQUNFLDhJQUFBO0FBa0lGO0FBaElBO0VBQ0UsOElBQUE7QUFtSUY7QUFqSUE7RUFDRSw4SUFBQTtBQW9JRjtBQWxJQTtFQUNFLDhJQUFBO0FBcUlGO0FBbklBO0VBQ0UsOElBQUE7QUFzSUY7QUFwSUE7RUFDRSw4SUFBQTtBQXVJRjtBQXJJQTtFQUNFLDhJQUFBO0FBd0lGO0FBdElBO0VBQ0UsOElBQUE7QUF5SUY7QUF2SUE7RUFDRSw4SUFBQTtBQTBJRjtBQXhJQTtFQUNFLDhJQUFBO0FBMklGO0FBeklBO0VBQ0UsOElBQUE7QUE0SUY7QUExSUE7RUFDRSw4SUFBQTtBQTZJRjtBQTNJQTtFQUNFLDhJQUFBO0FBOElGO0FBNUlBO0VBQ0UsOElBQUE7QUErSUY7QUE3SUE7RUFDRSw4SUFBQTtBQWdKRjtBQTlJQTtFQUNFLDhJQUFBO0FBaUpGO0FBL0lBO0VBQ0UsOElBQUE7QUFrSkY7QUFoSkE7RUFDRSw4SUFBQTtBQW1KRjtBQWpKQTtFQUNFLDhJQUFBO0FBb0pGO0FBL0lBLHNCQUFBO0FBQ0E7RUFDRSw4SUFBQTtBQWtKRjtBQWhKQTtFQUNFLCtJQUFBO0FBbUpGO0FBakpBO0VBQ0UsK0lBQUE7QUFvSkY7QUFsSkE7RUFDRSwrSUFBQTtBQXFKRjtBQW5KQTtFQUNFLCtJQUFBO0FBc0pGO0FBcEpBO0VBQ0UsK0lBQUE7QUF1SkY7QUFySkE7RUFDRSwrSUFBQTtBQXdKRjtBQXRKQTtFQUNFLCtJQUFBO0FBeUpGO0FBdkpBO0VBQ0UsK0lBQUE7QUEwSkY7QUF4SkE7RUFDRSwrSUFBQTtBQTJKRjtBQXpKQTtFQUNFLGdKQUFBO0FBNEpGO0FBMUpBO0VBQ0UsZ0pBQUE7QUE2SkY7QUEzSkE7RUFDRSxnSkFBQTtBQThKRjtBQTVKQTtFQUNFLGdKQUFBO0FBK0pGO0FBN0pBO0VBQ0UsZ0pBQUE7QUFnS0Y7QUE5SkE7RUFDRSxnSkFBQTtBQWlLRjtBQS9KQTtFQUNFLGdKQUFBO0FBa0tGO0FBaEtBO0VBQ0UsZ0pBQUE7QUFtS0Y7QUFqS0E7RUFDRSxnSkFBQTtBQW9LRjtBQWxLQTtFQUNFLGdKQUFBO0FBcUtGO0FBbktBO0VBQ0UsK0lBQUE7QUFzS0Y7QUFqS0Esd0JBQUE7QUFDQTtFQUNFLDhJQUFBO0FBb0tGO0FBbEtBO0VBQ0UsK0lBQUE7QUFxS0Y7QUFuS0E7RUFDRSwrSUFBQTtBQXNLRjtBQXBLQTtFQUNFLCtJQUFBO0FBdUtGO0FBcktBO0VBQ0UsK0lBQUE7QUF3S0Y7QUF0S0E7RUFDRSwrSUFBQTtBQXlLRjtBQXZLQTtFQUNFLCtJQUFBO0FBMEtGO0FBeEtBO0VBQ0UsK0lBQUE7QUEyS0Y7QUF6S0E7RUFDRSwrSUFBQTtBQTRLRjtBQTFLQTtFQUNFLCtJQUFBO0FBNktGO0FBM0tBO0VBQ0UsZ0pBQUE7QUE4S0Y7QUE1S0E7RUFDRSxnSkFBQTtBQStLRjtBQTdLQTtFQUNFLGdKQUFBO0FBZ0xGO0FBOUtBO0VBQ0UsZ0pBQUE7QUFpTEY7QUEvS0E7RUFDRSxnSkFBQTtBQWtMRjtBQWhMQTtFQUNFLGdKQUFBO0FBbUxGO0FBakxBO0VBQ0UsZ0pBQUE7QUFvTEY7QUFsTEE7RUFDRSxnSkFBQTtBQXFMRjtBQW5MQTtFQUNFLGdKQUFBO0FBc0xGO0FBcExBO0VBQ0UsZ0pBQUE7QUF1TEY7QUFyTEE7RUFDRSxnSkFBQTtBQXdMRjtBQW5MQSx5QkFBQTtBQUNBO0VBQ0UsOElBQUE7QUFzTEY7QUFwTEE7RUFDRSwrSUFBQTtBQXVMRjtBQXJMQTtFQUNFLCtJQUFBO0FBd0xGO0FBdExBO0VBQ0UsK0lBQUE7QUF5TEY7QUF2TEE7RUFDRSwrSUFBQTtBQTBMRjtBQXhMQTtFQUNFLCtJQUFBO0FBMkxGO0FBekxBO0VBQ0UsK0lBQUE7QUE0TEY7QUExTEE7RUFDRSwrSUFBQTtBQTZMRjtBQTNMQTtFQUNFLCtJQUFBO0FBOExGO0FBNUxBO0VBQ0UsK0lBQUE7QUErTEY7QUE3TEE7RUFDRSxnSkFBQTtBQWdNRjtBQTlMQTtFQUNFLGdKQUFBO0FBaU1GO0FBL0xBO0VBQ0UsZ0pBQUE7QUFrTUY7QUFoTUE7RUFDRSxnSkFBQTtBQW1NRjtBQWpNQTtFQUNFLGdKQUFBO0FBb01GO0FBbE1BO0VBQ0UsZ0pBQUE7QUFxTUY7QUFuTUE7RUFDRSxnSkFBQTtBQXNNRjtBQXBNQTtFQUNFLGdKQUFBO0FBdU1GO0FBck1BO0VBQ0UsZ0pBQUE7QUF3TUY7QUF0TUE7RUFDRSxnSkFBQTtBQXlNRjtBQXZNQTtFQUNFLGdKQUFBO0FBME1GO0FBdk1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBME1GO0FBeE1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBMk1GO0FBek1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBNE1GO0FBMU1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBNk1GO0FBM01BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBOE1GO0FBNU1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBK01GO0FBNU1BO0VBQ0UsNEJBQUE7QUErTUYiLCJmaWxlIjoic3JjL2Fzc2V0cy9jaGFydHMvcmFkaWFsL2Nzcy9yYWRpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQmFyIGNvbnRhaW5lclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnJhZGlhbC1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yYWRpYWwtYmFyOmFmdGVyLFxuLnJhZGlhbC1iYXIgPiBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTFhMmEzO1xufVxuLnJhZGlhbC1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB6LWluZGV4OiAxMDE7XG59XG4ucmFkaWFsLWJhciA+IGltZyB7XG4gIHotaW5kZXg6IDEwMjtcbn1cbi5yYWRpYWwtYmFyOmFmdGVyLFxuLnJhZGlhbC1iYXIgPiBpbWcge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEwOGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE2MmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIxNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzI0ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItODAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzc4ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItOTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDMyZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItOTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG4vKiAtLSBSYWRpYWwgRGVmYXVsdCAtLSAqL1xuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjg4ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzQyZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItODUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzk2ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMTAwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1MGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBQaW5rIC0tICovXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTEwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTI1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTQwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci01NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci03MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci04NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBQdXJwbGUgLS0gKi9cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItOTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBJbnZlcnNlIC0tICovXG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTEwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTI1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTQwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci01NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci03MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci04NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG5cbi5yYWRpYWwtYmFyLWxnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucmFkaWFsLWJhci1sZzphZnRlcixcbi5yYWRpYWwtYmFyLWxnID4gaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xufVxuLnJhZGlhbC1iYXItc20ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucmFkaWFsLWJhci1zbTphZnRlcixcbi5yYWRpYWwtYmFyLXNtID4gaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDcuNXB4O1xuICBtYXJnaW4tdG9wOiA3LjVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4ucmFkaWFsLWJhci14cyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuLnJhZGlhbC1iYXIteHM6YWZ0ZXIsXG4ucmFkaWFsLWJhci14cyA+IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgbWFyZ2luLXRvcDogNC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4ucmFkaWFsLWJhciB7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrmDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crm-dashboard',
                templateUrl: './crm-dashboard.component.html',
                styleUrls: [
                    './crm-dashboard.component.scss',
                    '../../../../assets/charts/radial/css/radial.scss'
                ]
            }]
    }], function () { return []; }, null); })();
function valIncomeArrow(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 3,
                hitRadius: 30,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transperant',
                fill: true,
                lineTension: 0,
                backgroundColor: f,
                data: b,
            }]
    };
}
function valIncomeBuildOption() {
    return {
        title: {
            display: false,
        },
        tooltips: {
            intersect: false,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: false
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        min: 1,
                        max: 45
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    };
}


/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: CrmDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardModule", function() { return CrmDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crm-dashboard.component */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts");
/* harmony import */ var _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crm-dashboard-routing.module */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");









class CrmDashboardModule {
}
CrmDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CrmDashboardModule });
CrmDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CrmDashboardModule_Factory(t) { return new (t || CrmDashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrmDashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrmDashboardModule, { declarations: [_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["CrmDashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrmDashboardRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrmDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrmDashboardRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
                ],
                declarations: [_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["CrmDashboardComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=crm-dashboard-crm-dashboard-module.js.map