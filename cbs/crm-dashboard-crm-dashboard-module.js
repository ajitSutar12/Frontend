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
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmInfoWindow"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9jcm0tZGFzaGJvYXJkL2NybS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */", ".radial-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: transparent;\n  margin-bottom: 20px;\n  box-sizing: content-box;\n  width: 80px;\n  height: 80px;\n  font-size: 18px;\n}\n.radial-bar[_ngcontent-%COMP%]:after, .radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  color: #a1a2a3;\n}\n.radial-bar[_ngcontent-%COMP%]:after {\n  content: attr(data-label);\n  background-color: #f0f0f0;\n  z-index: 101;\n}\n.radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  z-index: 102;\n}\n.radial-bar[_ngcontent-%COMP%]:after, .radial-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin-left: 12px;\n  margin-top: 12px;\n  line-height: 56px;\n}\n.radial-bar.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-default.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-pink.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-purple.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n\n.radial-bar-inverse.radial-bar-0[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-10[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-15[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-20[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-25[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-30[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-35[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-40[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-45[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-50[_ngcontent-%COMP%] {\n  background-image: linear-gradient(270deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-55[_ngcontent-%COMP%] {\n  background-image: linear-gradient(288deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-60[_ngcontent-%COMP%] {\n  background-image: linear-gradient(306deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-65[_ngcontent-%COMP%] {\n  background-image: linear-gradient(324deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-70[_ngcontent-%COMP%] {\n  background-image: linear-gradient(342deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-75[_ngcontent-%COMP%] {\n  background-image: linear-gradient(360deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-80[_ngcontent-%COMP%] {\n  background-image: linear-gradient(378deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-85[_ngcontent-%COMP%] {\n  background-image: linear-gradient(396deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-90[_ngcontent-%COMP%] {\n  background-image: linear-gradient(414deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-95[_ngcontent-%COMP%] {\n  background-image: linear-gradient(432deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-100[_ngcontent-%COMP%] {\n  background-image: linear-gradient(450deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-lg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n}\n.radial-bar-lg[_ngcontent-%COMP%]:after, .radial-bar-lg[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin-left: 15px;\n  margin-top: 15px;\n  line-height: 70px;\n}\n.radial-bar-sm[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 12px;\n}\n.radial-bar-sm[_ngcontent-%COMP%]:after, .radial-bar-sm[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-left: 7.5px;\n  margin-top: 7.5px;\n  line-height: 35px;\n}\n.radial-bar-xs[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 8px;\n}\n.radial-bar-xs[_ngcontent-%COMP%]:after, .radial-bar-xs[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 5.5px;\n  margin-top: 4.5px;\n  line-height: 21px;\n}\n.radial-bar[_ngcontent-%COMP%] {\n  background-clip: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY2hhcnRzL3JhZGlhbC9jc3MvcmFkaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBDQUMwQztBQUUxQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFHbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUFqQjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7QUFFZDtBQUFBO0VBQ0UsWUFBWTtBQUdkO0FBREE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUluQjtBQURBO0VBQ0UsOElBQThJO0FBSWhKO0FBRkE7RUFDRSwrSUFBK0k7QUFLako7QUFIQTtFQUNFLCtJQUErSTtBQU1qSjtBQUpBO0VBQ0UsK0lBQStJO0FBT2pKO0FBTEE7RUFDRSwrSUFBK0k7QUFRako7QUFOQTtFQUNFLCtJQUErSTtBQVNqSjtBQVBBO0VBQ0UsK0lBQStJO0FBVWpKO0FBUkE7RUFDRSwrSUFBK0k7QUFXako7QUFUQTtFQUNFLCtJQUErSTtBQVlqSjtBQVZBO0VBQ0UsK0lBQStJO0FBYWpKO0FBWEE7RUFDRSxnSkFBZ0o7QUFjbEo7QUFaQTtFQUNFLGdKQUFnSjtBQWVsSjtBQWJBO0VBQ0UsZ0pBQWdKO0FBZ0JsSjtBQWRBO0VBQ0UsZ0pBQWdKO0FBaUJsSjtBQWZBO0VBQ0UsZ0pBQWdKO0FBa0JsSjtBQWhCQTtFQUNFLGdKQUFnSjtBQW1CbEo7QUFqQkE7RUFDRSxnSkFBZ0o7QUFvQmxKO0FBbEJBO0VBQ0UsZ0pBQWdKO0FBcUJsSjtBQW5CQTtFQUNFLGdKQUFnSjtBQXNCbEo7QUFwQkE7RUFDRSxnSkFBZ0o7QUF1QmxKO0FBckJBO0VBQ0UsZ0pBQWdKO0FBd0JsSjtBQXRCQTtFQUNFLDhJQUE4STtBQXlCaEo7QUF2QkE7RUFDRSwrSUFBK0k7QUEwQmpKO0FBeEJBO0VBQ0UsK0lBQStJO0FBMkJqSjtBQXpCQTtFQUNFLCtJQUErSTtBQTRCako7QUExQkE7RUFDRSwrSUFBK0k7QUE2QmpKO0FBM0JBO0VBQ0UsK0lBQStJO0FBOEJqSjtBQTVCQTtFQUNFLCtJQUErSTtBQStCako7QUE3QkE7RUFDRSwrSUFBK0k7QUFnQ2pKO0FBOUJBO0VBQ0UsK0lBQStJO0FBaUNqSjtBQS9CQTtFQUNFLCtJQUErSTtBQWtDako7QUFoQ0E7RUFDRSxnSkFBZ0o7QUFtQ2xKO0FBakNBO0VBQ0UsZ0pBQWdKO0FBb0NsSjtBQWxDQTtFQUNFLGdKQUFnSjtBQXFDbEo7QUFuQ0E7RUFDRSxnSkFBZ0o7QUFzQ2xKO0FBcENBO0VBQ0UsZ0pBQWdKO0FBdUNsSjtBQXJDQTtFQUNFLGdKQUFnSjtBQXdDbEo7QUF0Q0E7RUFDRSxnSkFBZ0o7QUF5Q2xKO0FBdkNBO0VBQ0UsZ0pBQWdKO0FBMENsSjtBQXhDQTtFQUNFLGdKQUFnSjtBQTJDbEo7QUF6Q0E7RUFDRSxnSkFBZ0o7QUE0Q2xKO0FBMUNBO0VBQ0UsZ0pBQWdKO0FBNkNsSjtBQTNDQTtFQUNFLDhJQUE4STtBQThDaEo7QUE1Q0E7RUFDRSwrSUFBK0k7QUErQ2pKO0FBN0NBO0VBQ0UsK0lBQStJO0FBZ0RqSjtBQTlDQTtFQUNFLCtJQUErSTtBQWlEako7QUEvQ0E7RUFDRSwrSUFBK0k7QUFrRGpKO0FBaERBO0VBQ0UsK0lBQStJO0FBbURqSjtBQWpEQTtFQUNFLCtJQUErSTtBQW9Eako7QUFsREE7RUFDRSwrSUFBK0k7QUFxRGpKO0FBbkRBO0VBQ0UsK0lBQStJO0FBc0RqSjtBQXBEQTtFQUNFLCtJQUErSTtBQXVEako7QUFyREE7RUFDRSxnSkFBZ0o7QUF3RGxKO0FBdERBO0VBQ0UsZ0pBQWdKO0FBeURsSjtBQXZEQTtFQUNFLGdKQUFnSjtBQTBEbEo7QUF4REE7RUFDRSxnSkFBZ0o7QUEyRGxKO0FBekRBO0VBQ0UsZ0pBQWdKO0FBNERsSjtBQTFEQTtFQUNFLGdKQUFnSjtBQTZEbEo7QUEzREE7RUFDRSxnSkFBZ0o7QUE4RGxKO0FBNURBO0VBQ0UsZ0pBQWdKO0FBK0RsSjtBQTdEQTtFQUNFLGdKQUFnSjtBQWdFbEo7QUE5REE7RUFDRSxnSkFBZ0o7QUFpRWxKO0FBL0RBO0VBQ0UsZ0pBQWdKO0FBa0VsSjtBQWhFQTtFQUNFLDhJQUE4STtBQW1FaEo7QUFqRUE7RUFDRSwrSUFBK0k7QUFvRWpKO0FBbEVBO0VBQ0UsK0lBQStJO0FBcUVqSjtBQW5FQTtFQUNFLCtJQUErSTtBQXNFako7QUFwRUE7RUFDRSwrSUFBK0k7QUF1RWpKO0FBckVBO0VBQ0UsK0lBQStJO0FBd0VqSjtBQXRFQTtFQUNFLCtJQUErSTtBQXlFako7QUF2RUE7RUFDRSwrSUFBK0k7QUEwRWpKO0FBeEVBO0VBQ0UsK0lBQStJO0FBMkVqSjtBQXpFQTtFQUNFLCtJQUErSTtBQTRFako7QUExRUE7RUFDRSxnSkFBZ0o7QUE2RWxKO0FBM0VBO0VBQ0UsZ0pBQWdKO0FBOEVsSjtBQTVFQTtFQUNFLGdKQUFnSjtBQStFbEo7QUE3RUE7RUFDRSxnSkFBZ0o7QUFnRmxKO0FBOUVBO0VBQ0UsZ0pBQWdKO0FBaUZsSjtBQS9FQTtFQUNFLGdKQUFnSjtBQWtGbEo7QUFoRkE7RUFDRSxnSkFBZ0o7QUFtRmxKO0FBakZBO0VBQ0UsZ0pBQWdKO0FBb0ZsSjtBQWxGQTtFQUNFLGdKQUFnSjtBQXFGbEo7QUFuRkE7RUFDRSxnSkFBZ0o7QUFzRmxKO0FBcEZBO0VBQ0UsZ0pBQWdKO0FBdUZsSjtBQXJGQTtFQUNFLDhJQUE4STtBQXdGaEo7QUF0RkE7RUFDRSwrSUFBK0k7QUF5RmpKO0FBdkZBO0VBQ0UsK0lBQStJO0FBMEZqSjtBQXhGQTtFQUNFLCtJQUErSTtBQTJGako7QUF6RkE7RUFDRSwrSUFBK0k7QUE0RmpKO0FBMUZBO0VBQ0UsK0lBQStJO0FBNkZqSjtBQTNGQTtFQUNFLCtJQUErSTtBQThGako7QUE1RkE7RUFDRSwrSUFBK0k7QUErRmpKO0FBN0ZBO0VBQ0UsK0lBQStJO0FBZ0dqSjtBQTlGQTtFQUNFLCtJQUErSTtBQWlHako7QUEvRkE7RUFDRSxnSkFBZ0o7QUFrR2xKO0FBaEdBO0VBQ0UsZ0pBQWdKO0FBbUdsSjtBQWpHQTtFQUNFLGdKQUFnSjtBQW9HbEo7QUFsR0E7RUFDRSxnSkFBZ0o7QUFxR2xKO0FBbkdBO0VBQ0UsZ0pBQWdKO0FBc0dsSjtBQXBHQTtFQUNFLGdKQUFnSjtBQXVHbEo7QUFyR0E7RUFDRSxnSkFBZ0o7QUF3R2xKO0FBdEdBO0VBQ0UsZ0pBQWdKO0FBeUdsSjtBQXZHQTtFQUNFLGdKQUFnSjtBQTBHbEo7QUF4R0E7RUFDRSxnSkFBZ0o7QUEyR2xKO0FBekdBO0VBQ0UsZ0pBQWdKO0FBNEdsSjtBQTFHQTtFQUNFLDhJQUE4STtBQTZHaEo7QUEzR0E7RUFDRSwrSUFBK0k7QUE4R2pKO0FBNUdBO0VBQ0UsK0lBQStJO0FBK0dqSjtBQTdHQTtFQUNFLCtJQUErSTtBQWdIako7QUE5R0E7RUFDRSwrSUFBK0k7QUFpSGpKO0FBL0dBO0VBQ0UsK0lBQStJO0FBa0hqSjtBQWhIQTtFQUNFLCtJQUErSTtBQW1Iako7QUFqSEE7RUFDRSwrSUFBK0k7QUFvSGpKO0FBbEhBO0VBQ0UsK0lBQStJO0FBcUhqSjtBQW5IQTtFQUNFLCtJQUErSTtBQXNIako7QUFwSEE7RUFDRSxnSkFBZ0o7QUF1SGxKO0FBckhBO0VBQ0UsZ0pBQWdKO0FBd0hsSjtBQXRIQTtFQUNFLGdKQUFnSjtBQXlIbEo7QUF2SEE7RUFDRSxnSkFBZ0o7QUEwSGxKO0FBeEhBO0VBQ0UsZ0pBQWdKO0FBMkhsSjtBQXpIQTtFQUNFLGdKQUFnSjtBQTRIbEo7QUExSEE7RUFDRSxnSkFBZ0o7QUE2SGxKO0FBM0hBO0VBQ0UsZ0pBQWdKO0FBOEhsSjtBQTVIQTtFQUNFLGdKQUFnSjtBQStIbEo7QUE3SEE7RUFDRSxnSkFBZ0o7QUFnSWxKO0FBOUhBO0VBQ0UsZ0pBQWdKO0FBaUlsSjtBQTdIQSx5QkFBQTtBQUNBO0VBQ0UsNklBQTZJO0FBZ0kvSTtBQTlIQTtFQUNFLDhJQUE4STtBQWlJaEo7QUEvSEE7RUFDRSw4SUFBOEk7QUFrSWhKO0FBaElBO0VBQ0UsOElBQThJO0FBbUloSjtBQWpJQTtFQUNFLDhJQUE4STtBQW9JaEo7QUFsSUE7RUFDRSw4SUFBOEk7QUFxSWhKO0FBbklBO0VBQ0UsOElBQThJO0FBc0loSjtBQXBJQTtFQUNFLDhJQUE4STtBQXVJaEo7QUFySUE7RUFDRSw4SUFBOEk7QUF3SWhKO0FBdElBO0VBQ0UsOElBQThJO0FBeUloSjtBQXZJQTtFQUNFLDhJQUE4STtBQTBJaEo7QUF4SUE7RUFDRSw4SUFBOEk7QUEySWhKO0FBeklBO0VBQ0UsOElBQThJO0FBNEloSjtBQTFJQTtFQUNFLDhJQUE4STtBQTZJaEo7QUEzSUE7RUFDRSw4SUFBOEk7QUE4SWhKO0FBNUlBO0VBQ0UsOElBQThJO0FBK0loSjtBQTdJQTtFQUNFLDhJQUE4STtBQWdKaEo7QUE5SUE7RUFDRSw4SUFBOEk7QUFpSmhKO0FBL0lBO0VBQ0UsOElBQThJO0FBa0poSjtBQWhKQTtFQUNFLDhJQUE4STtBQW1KaEo7QUFqSkE7RUFDRSw4SUFBOEk7QUFvSmhKO0FBL0lBLHNCQUFBO0FBQ0E7RUFDRSw4SUFBOEk7QUFrSmhKO0FBaEpBO0VBQ0UsK0lBQStJO0FBbUpqSjtBQWpKQTtFQUNFLCtJQUErSTtBQW9Kako7QUFsSkE7RUFDRSwrSUFBK0k7QUFxSmpKO0FBbkpBO0VBQ0UsK0lBQStJO0FBc0pqSjtBQXBKQTtFQUNFLCtJQUErSTtBQXVKako7QUFySkE7RUFDRSwrSUFBK0k7QUF3SmpKO0FBdEpBO0VBQ0UsK0lBQStJO0FBeUpqSjtBQXZKQTtFQUNFLCtJQUErSTtBQTBKako7QUF4SkE7RUFDRSwrSUFBK0k7QUEySmpKO0FBekpBO0VBQ0UsZ0pBQWdKO0FBNEpsSjtBQTFKQTtFQUNFLGdKQUFnSjtBQTZKbEo7QUEzSkE7RUFDRSxnSkFBZ0o7QUE4SmxKO0FBNUpBO0VBQ0UsZ0pBQWdKO0FBK0psSjtBQTdKQTtFQUNFLGdKQUFnSjtBQWdLbEo7QUE5SkE7RUFDRSxnSkFBZ0o7QUFpS2xKO0FBL0pBO0VBQ0UsZ0pBQWdKO0FBa0tsSjtBQWhLQTtFQUNFLGdKQUFnSjtBQW1LbEo7QUFqS0E7RUFDRSxnSkFBZ0o7QUFvS2xKO0FBbEtBO0VBQ0UsZ0pBQWdKO0FBcUtsSjtBQW5LQTtFQUNFLCtJQUErSTtBQXNLako7QUFqS0Esd0JBQUE7QUFDQTtFQUNFLDhJQUE4STtBQW9LaEo7QUFsS0E7RUFDRSwrSUFBK0k7QUFxS2pKO0FBbktBO0VBQ0UsK0lBQStJO0FBc0tqSjtBQXBLQTtFQUNFLCtJQUErSTtBQXVLako7QUFyS0E7RUFDRSwrSUFBK0k7QUF3S2pKO0FBdEtBO0VBQ0UsK0lBQStJO0FBeUtqSjtBQXZLQTtFQUNFLCtJQUErSTtBQTBLako7QUF4S0E7RUFDRSwrSUFBK0k7QUEyS2pKO0FBektBO0VBQ0UsK0lBQStJO0FBNEtqSjtBQTFLQTtFQUNFLCtJQUErSTtBQTZLako7QUEzS0E7RUFDRSxnSkFBZ0o7QUE4S2xKO0FBNUtBO0VBQ0UsZ0pBQWdKO0FBK0tsSjtBQTdLQTtFQUNFLGdKQUFnSjtBQWdMbEo7QUE5S0E7RUFDRSxnSkFBZ0o7QUFpTGxKO0FBL0tBO0VBQ0UsZ0pBQWdKO0FBa0xsSjtBQWhMQTtFQUNFLGdKQUFnSjtBQW1MbEo7QUFqTEE7RUFDRSxnSkFBZ0o7QUFvTGxKO0FBbExBO0VBQ0UsZ0pBQWdKO0FBcUxsSjtBQW5MQTtFQUNFLGdKQUFnSjtBQXNMbEo7QUFwTEE7RUFDRSxnSkFBZ0o7QUF1TGxKO0FBckxBO0VBQ0UsZ0pBQWdKO0FBd0xsSjtBQW5MQSx5QkFBQTtBQUNBO0VBQ0UsOElBQThJO0FBc0xoSjtBQXBMQTtFQUNFLCtJQUErSTtBQXVMako7QUFyTEE7RUFDRSwrSUFBK0k7QUF3TGpKO0FBdExBO0VBQ0UsK0lBQStJO0FBeUxqSjtBQXZMQTtFQUNFLCtJQUErSTtBQTBMako7QUF4TEE7RUFDRSwrSUFBK0k7QUEyTGpKO0FBekxBO0VBQ0UsK0lBQStJO0FBNExqSjtBQTFMQTtFQUNFLCtJQUErSTtBQTZMako7QUEzTEE7RUFDRSwrSUFBK0k7QUE4TGpKO0FBNUxBO0VBQ0UsK0lBQStJO0FBK0xqSjtBQTdMQTtFQUNFLGdKQUFnSjtBQWdNbEo7QUE5TEE7RUFDRSxnSkFBZ0o7QUFpTWxKO0FBL0xBO0VBQ0UsZ0pBQWdKO0FBa01sSjtBQWhNQTtFQUNFLGdKQUFnSjtBQW1NbEo7QUFqTUE7RUFDRSxnSkFBZ0o7QUFvTWxKO0FBbE1BO0VBQ0UsZ0pBQWdKO0FBcU1sSjtBQW5NQTtFQUNFLGdKQUFnSjtBQXNNbEo7QUFwTUE7RUFDRSxnSkFBZ0o7QUF1TWxKO0FBck1BO0VBQ0UsZ0pBQWdKO0FBd01sSjtBQXRNQTtFQUNFLGdKQUFnSjtBQXlNbEo7QUF2TUE7RUFDRSxnSkFBZ0o7QUEwTWxKO0FBdk1BO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBME1qQjtBQXhNQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBMk1uQjtBQXpNQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQTRNakI7QUExTUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQTZNbkI7QUEzTUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUE4TWhCO0FBNU1BOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUErTW5CO0FBNU1BO0VBQ0UsNEJBQTRCO0FBK005QiIsImZpbGUiOiJzcmMvYXNzZXRzL2NoYXJ0cy9yYWRpYWwvY3NzL3JhZGlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQmFyIGNvbnRhaW5lclxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5yYWRpYWwtYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5yYWRpYWwtYmFyOmFmdGVyLFxyXG4ucmFkaWFsLWJhciA+IGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjYTFhMmEzO1xyXG59XHJcbi5yYWRpYWwtYmFyOmFmdGVyIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgei1pbmRleDogMTAxO1xyXG59XHJcbi5yYWRpYWwtYmFyID4gaW1nIHtcclxuICB6LWluZGV4OiAxMDI7XHJcbn1cclxuLnJhZGlhbC1iYXI6YWZ0ZXIsXHJcbi5yYWRpYWwtYmFyID4gaW1nIHtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBsaW5lLWhlaWdodDogNTZweDtcclxufVxyXG5cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0wIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0xNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0yMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0zMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci0zNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci00NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci01MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTYwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci02NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTc1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci04MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTkwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci05NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItODAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItOTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItODAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItOTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjMmVkOGI2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItODAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItOTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjMDBiY2Q0IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItODAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItOTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjZjFjNDBmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci01IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEwOGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTIwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE2MmRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTM1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIxNmRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNDUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTUwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci02MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTY1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzI0ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci03NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTgwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzc4ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci05MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTk1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDMyZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuXHJcblxyXG4vKiAtLSBSYWRpYWwgRGVmYXVsdCAtLSAqL1xyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci01IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEwOGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTIwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE2MmRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTM1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIxNmRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNDUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTUwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci01NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTY1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzI0ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci03MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTgwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzc4ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci04NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTk1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDMyZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0xMDAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0gUmFkaWFsIFBpbmsgLS0gKi9cclxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0xMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0yNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci00MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNzAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItODAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItODUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItOTUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMTAwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLSBSYWRpYWwgUHVycGxlIC0tICovXHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTI2ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0yMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0zNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNDAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjM0ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci01MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTU1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjg4ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNjAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci02NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTcwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzQyZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNzUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci04MCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTg1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzk2ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItOTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci05NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTEwMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1MGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tIFJhZGlhbCBJbnZlcnNlIC0tICovXHJcbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0wIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci01IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEwOGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMTAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTI2ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0xNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTIwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE2MmRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMjUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0zMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTM1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIxNmRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcclxufVxyXG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItNDAge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjM0ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci00NSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTUwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTU1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjg4ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTYwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTY1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzI0ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTcwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzQyZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTc1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTgwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzc4ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTg1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzk2ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTkwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTk1IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDMyZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XHJcbn1cclxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTEwMCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1MGRlZywgIzRjNTY2NyA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xyXG59XHJcblxyXG4ucmFkaWFsLWJhci1sZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5yYWRpYWwtYmFyLWxnOmFmdGVyLFxyXG4ucmFkaWFsLWJhci1sZyA+IGltZyB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbn1cclxuLnJhZGlhbC1iYXItc20ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJhZGlhbC1iYXItc206YWZ0ZXIsXHJcbi5yYWRpYWwtYmFyLXNtID4gaW1nIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcuNXB4O1xyXG4gIG1hcmdpbi10b3A6IDcuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5yYWRpYWwtYmFyLXhzIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuLnJhZGlhbC1iYXIteHM6YWZ0ZXIsXHJcbi5yYWRpYWwtYmFyLXhzID4gaW1nIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUuNXB4O1xyXG4gIG1hcmdpbi10b3A6IDQuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcblxyXG4ucmFkaWFsLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxufVxyXG4iXX0= */"] });
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