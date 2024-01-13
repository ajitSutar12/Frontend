(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-widget-chart-widget-module"],{

/***/ "./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChartWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetRoutingModule", function() { return ChartWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-widget.component */ "./src/app/theme/widget/chart-widget/chart-widget.component.ts");





const routes = [
    {
        path: '',
        component: _chart_widget_component__WEBPACK_IMPORTED_MODULE_2__["ChartWidgetComponent"],
        data: {
            title: 'Widget Chart',
            icon: 'icon-view-grid',
            caption: 'More than 100+ widget',
            status: true
        }
    }
];
class ChartWidgetRoutingModule {
}
ChartWidgetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartWidgetRoutingModule });
ChartWidgetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartWidgetRoutingModule_Factory(t) { return new (t || ChartWidgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartWidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartWidgetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChartWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetComponent", function() { return ChartWidgetComponent; });
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
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_9__);











class ChartWidgetComponent {
    constructor() {
        this.realTimeChartData = [];
        this.realTimeVisitData = [];
        this.firstDate = new Date();
        this.firstDate.setDate(this.firstDate.getDate() - 500);
        this.generateChartData();
        this.generateVisitChartData();
    }
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
            this.avgValueData = valIncome('#536dfe', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#8698fe');
            this.avgValueOption = valIncomeBuildOption();
            this.avgIncomeData = valIncome('#11c15b', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#57d38b');
            this.avgIncomeOption = valIncomeBuildOption();
            this.newUserData = {
                datasets: [{
                        data: [10, 34, 5],
                        backgroundColor: ['#11c15b', '#448aff', '#ff5252'],
                        label: 'Dataset 1'
                    }],
                labels: ['Satisfied', 'Unsatisfied', 'NA']
            };
            this.newUserOption = {
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: '',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            };
            AmCharts.makeChart('sales-analytics', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'marginRight': 40,
                'marginLeft': 40,
                'autoMarginOffset': 20,
                'dataDateFormat': 'YYYY-MM-DD',
                'valueAxes': [{
                        'id': 'v1',
                        'axisAlpha': 0,
                        'position': 'left',
                        'ignoreAxisWidth': true
                    }],
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'graphs': [{
                        'id': 'g1',
                        'balloon': {
                            'drop': true,
                            'adjustBorderColor': false,
                            'color': '#ffffff',
                            'type': 'smoothedLine'
                        },
                        'fillAlphas': 0.5,
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'lineColor': '#11c15b',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 3,
                        'title': 'red line',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'value',
                        'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                    }],
                'chartCursor': {
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'zoomable': false,
                    'valueZoomable': true,
                    'valueLineAlpha': 0.5
                },
                'chartScrollbar': {
                    'autoGridCount': true,
                    'graph': 'g1',
                    'oppositeAxis': true,
                    'scrollbarHeight': 90
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2012-07-27',
                        'value': 13
                    }, {
                        'date': '2012-07-28',
                        'value': 11
                    }, {
                        'date': '2012-07-29',
                        'value': 15
                    }, {
                        'date': '2012-07-30',
                        'value': 16
                    }, {
                        'date': '2012-07-31',
                        'value': 18
                    }, {
                        'date': '2012-08-01',
                        'value': 13
                    }, {
                        'date': '2012-08-02',
                        'value': 22
                    }, {
                        'date': '2012-08-03',
                        'value': 23
                    }, {
                        'date': '2012-08-04',
                        'value': 20
                    }, {
                        'date': '2012-08-05',
                        'value': 17
                    }, {
                        'date': '2012-08-06',
                        'value': 16
                    }, {
                        'date': '2012-08-07',
                        'value': 18
                    }, {
                        'date': '2012-08-08',
                        'value': 21
                    }, {
                        'date': '2012-08-09',
                        'value': 26
                    }, {
                        'date': '2012-08-10',
                        'value': 24
                    }, {
                        'date': '2012-08-11',
                        'value': 29
                    }, {
                        'date': '2012-08-12',
                        'value': 32
                    }, {
                        'date': '2012-08-13',
                        'value': 18
                    }, {
                        'date': '2012-08-14',
                        'value': 24
                    }, {
                        'date': '2012-08-15',
                        'value': 22
                    }, {
                        'date': '2012-08-16',
                        'value': 18
                    }, {
                        'date': '2012-08-17',
                        'value': 19
                    }, {
                        'date': '2012-08-18',
                        'value': 14
                    }, {
                        'date': '2012-08-19',
                        'value': 15
                    }, {
                        'date': '2012-08-20',
                        'value': 12
                    }, {
                        'date': '2012-08-21',
                        'value': 8
                    }, {
                        'date': '2012-08-22',
                        'value': 9
                    }, {
                        'date': '2012-08-23',
                        'value': 8
                    }, {
                        'date': '2012-08-24',
                        'value': 7
                    }, {
                        'date': '2012-08-25',
                        'value': 5
                    }, {
                        'date': '2012-08-26',
                        'value': 11
                    }, {
                        'date': '2012-08-27',
                        'value': 13
                    }, {
                        'date': '2012-08-28',
                        'value': 18
                    }, {
                        'date': '2012-08-29',
                        'value': 20
                    }, {
                        'date': '2012-08-30',
                        'value': 29
                    }, {
                        'date': '2012-08-31',
                        'value': 33
                    }, {
                        'date': '2012-09-01',
                        'value': 42
                    }, {
                        'date': '2012-09-02',
                        'value': 35
                    }, {
                        'date': '2012-09-03',
                        'value': 31
                    }, {
                        'date': '2012-09-04',
                        'value': 47
                    }, {
                        'date': '2012-09-05',
                        'value': 52
                    }, {
                        'date': '2012-09-06',
                        'value': 46
                    }, {
                        'date': '2012-09-07',
                        'value': 41
                    }, {
                        'date': '2012-09-08',
                        'value': 43
                    }, {
                        'date': '2012-09-09',
                        'value': 40
                    }, {
                        'date': '2012-09-10',
                        'value': 39
                    }, {
                        'date': '2012-09-11',
                        'value': 34
                    }, {
                        'date': '2012-09-12',
                        'value': 29
                    }, {
                        'date': '2012-09-13',
                        'value': 34
                    }, {
                        'date': '2012-09-14',
                        'value': 37
                    }, {
                        'date': '2012-09-15',
                        'value': 42
                    }, {
                        'date': '2012-09-16',
                        'value': 49
                    }, {
                        'date': '2012-09-17',
                        'value': 46
                    }, {
                        'date': '2012-09-18',
                        'value': 47
                    }, {
                        'date': '2012-09-19',
                        'value': 55
                    }, {
                        'date': '2012-09-20',
                        'value': 59
                    }, {
                        'date': '2012-09-21',
                        'value': 58
                    }, {
                        'date': '2012-09-22',
                        'value': 57
                    }, {
                        'date': '2012-09-23',
                        'value': 61
                    }, {
                        'date': '2012-09-24',
                        'value': 59
                    }, {
                        'date': '2012-09-25',
                        'value': 67
                    }, {
                        'date': '2012-09-26',
                        'value': 65
                    }, {
                        'date': '2012-09-27',
                        'value': 61
                    }, {
                        'date': '2012-09-28',
                        'value': 66
                    }, {
                        'date': '2012-09-29',
                        'value': 69
                    }, {
                        'date': '2012-09-30',
                        'value': 71
                    }, {
                        'date': '2012-10-01',
                        'value': 67
                    }, {
                        'date': '2012-10-02',
                        'value': 63
                    }, {
                        'date': '2012-10-03',
                        'value': 46
                    }, {
                        'date': '2012-10-04',
                        'value': 32
                    }, {
                        'date': '2012-10-05',
                        'value': 21
                    }, {
                        'date': '2012-10-06',
                        'value': 18
                    }, {
                        'date': '2012-10-07',
                        'value': 21
                    }, {
                        'date': '2012-10-08',
                        'value': 28
                    }, {
                        'date': '2012-10-09',
                        'value': 27
                    }, {
                        'date': '2012-10-10',
                        'value': 36
                    }, {
                        'date': '2012-10-11',
                        'value': 33
                    }, {
                        'date': '2012-10-12',
                        'value': 31
                    }, {
                        'date': '2012-10-13',
                        'value': 30
                    }, {
                        'date': '2012-10-14',
                        'value': 34
                    }, {
                        'date': '2012-10-15',
                        'value': 38
                    }, {
                        'date': '2012-10-16',
                        'value': 37
                    }, {
                        'date': '2012-10-17',
                        'value': 44
                    }, {
                        'date': '2012-10-18',
                        'value': 49
                    }, {
                        'date': '2012-10-19',
                        'value': 53
                    }, {
                        'date': '2012-10-20',
                        'value': 57
                    }, {
                        'date': '2012-10-21',
                        'value': 60
                    }, {
                        'date': '2012-10-22',
                        'value': 61
                    }, {
                        'date': '2012-10-23',
                        'value': 69
                    }, {
                        'date': '2012-10-24',
                        'value': 67
                    }, {
                        'date': '2012-10-25',
                        'value': 72
                    }, {
                        'date': '2012-10-26',
                        'value': 77
                    }, {
                        'date': '2012-10-27',
                        'value': 75
                    }, {
                        'date': '2012-10-28',
                        'value': 70
                    }, {
                        'date': '2012-10-29',
                        'value': 72
                    }, {
                        'date': '2012-10-30',
                        'value': 70
                    }, {
                        'date': '2012-10-31',
                        'value': 72
                    }, {
                        'date': '2012-11-01',
                        'value': 73
                    }, {
                        'date': '2012-11-02',
                        'value': 67
                    }, {
                        'date': '2012-11-03',
                        'value': 68
                    }, {
                        'date': '2012-11-04',
                        'value': 65
                    }, {
                        'date': '2012-11-05',
                        'value': 71
                    }, {
                        'date': '2012-11-06',
                        'value': 75
                    }, {
                        'date': '2012-11-07',
                        'value': 74
                    }, {
                        'date': '2012-11-08',
                        'value': 71
                    }, {
                        'date': '2012-11-09',
                        'value': 76
                    }, {
                        'date': '2012-11-10',
                        'value': 77
                    }, {
                        'date': '2012-11-11',
                        'value': 81
                    }, {
                        'date': '2012-11-12',
                        'value': 83
                    }, {
                        'date': '2012-11-13',
                        'value': 80
                    }, {
                        'date': '2012-11-14',
                        'value': 81
                    }, {
                        'date': '2012-11-15',
                        'value': 87
                    }, {
                        'date': '2012-11-16',
                        'value': 82
                    }, {
                        'date': '2012-11-17',
                        'value': 86
                    }, {
                        'date': '2012-11-18',
                        'value': 80
                    }, {
                        'date': '2012-11-19',
                        'value': 87
                    }, {
                        'date': '2012-11-20',
                        'value': 83
                    }, {
                        'date': '2012-11-21',
                        'value': 85
                    }, {
                        'date': '2012-11-22',
                        'value': 84
                    }, {
                        'date': '2012-11-23',
                        'value': 82
                    }, {
                        'date': '2012-11-24',
                        'value': 73
                    }, {
                        'date': '2012-11-25',
                        'value': 71
                    }, {
                        'date': '2012-11-26',
                        'value': 75
                    }, {
                        'date': '2012-11-27',
                        'value': 79
                    }, {
                        'date': '2012-11-28',
                        'value': 70
                    }, {
                        'date': '2012-11-29',
                        'value': 73
                    }, {
                        'date': '2012-11-30',
                        'value': 61
                    }, {
                        'date': '2012-12-01',
                        'value': 62
                    }, {
                        'date': '2012-12-02',
                        'value': 66
                    }, {
                        'date': '2012-12-03',
                        'value': 65
                    }, {
                        'date': '2012-12-04',
                        'value': 73
                    }, {
                        'date': '2012-12-05',
                        'value': 79
                    }, {
                        'date': '2012-12-06',
                        'value': 78
                    }, {
                        'date': '2012-12-07',
                        'value': 78
                    }, {
                        'date': '2012-12-08',
                        'value': 78
                    }, {
                        'date': '2012-12-09',
                        'value': 74
                    }, {
                        'date': '2012-12-10',
                        'value': 73
                    }, {
                        'date': '2012-12-11',
                        'value': 75
                    }, {
                        'date': '2012-12-12',
                        'value': 70
                    }, {
                        'date': '2012-12-13',
                        'value': 77
                    }, {
                        'date': '2012-12-14',
                        'value': 67
                    }, {
                        'date': '2012-12-15',
                        'value': 62
                    }, {
                        'date': '2012-12-16',
                        'value': 64
                    }, {
                        'date': '2012-12-17',
                        'value': 61
                    }, {
                        'date': '2012-12-18',
                        'value': 59
                    }, {
                        'date': '2012-12-19',
                        'value': 53
                    }, {
                        'date': '2012-12-20',
                        'value': 54
                    }, {
                        'date': '2012-12-21',
                        'value': 56
                    }, {
                        'date': '2012-12-22',
                        'value': 59
                    }, {
                        'date': '2012-12-23',
                        'value': 58
                    }, {
                        'date': '2012-12-24',
                        'value': 55
                    }, {
                        'date': '2012-12-25',
                        'value': 52
                    }, {
                        'date': '2012-12-26',
                        'value': 54
                    }, {
                        'date': '2012-12-27',
                        'value': 50
                    }, {
                        'date': '2012-12-28',
                        'value': 50
                    }, {
                        'date': '2012-12-29',
                        'value': 51
                    }, {
                        'date': '2012-12-30',
                        'value': 52
                    }, {
                        'date': '2012-12-31',
                        'value': 58
                    }, {
                        'date': '2013-01-01',
                        'value': 60
                    }, {
                        'date': '2013-01-02',
                        'value': 67
                    }, {
                        'date': '2013-01-03',
                        'value': 64
                    }, {
                        'date': '2013-01-04',
                        'value': 66
                    }, {
                        'date': '2013-01-05',
                        'value': 60
                    }, {
                        'date': '2013-01-06',
                        'value': 63
                    }, {
                        'date': '2013-01-07',
                        'value': 61
                    }, {
                        'date': '2013-01-08',
                        'value': 60
                    }, {
                        'date': '2013-01-09',
                        'value': 65
                    }, {
                        'date': '2013-01-10',
                        'value': 75
                    }, {
                        'date': '2013-01-11',
                        'value': 77
                    }, {
                        'date': '2013-01-12',
                        'value': 78
                    }, {
                        'date': '2013-01-13',
                        'value': 70
                    }, {
                        'date': '2013-01-14',
                        'value': 70
                    }, {
                        'date': '2013-01-15',
                        'value': 73
                    }, {
                        'date': '2013-01-16',
                        'value': 71
                    }, {
                        'date': '2013-01-17',
                        'value': 74
                    }, {
                        'date': '2013-01-18',
                        'value': 78
                    }, {
                        'date': '2013-01-19',
                        'value': 85
                    }, {
                        'date': '2013-01-20',
                        'value': 82
                    }, {
                        'date': '2013-01-21',
                        'value': 83
                    }, {
                        'date': '2013-01-22',
                        'value': 88
                    }, {
                        'date': '2013-01-23',
                        'value': 85
                    }, {
                        'date': '2013-01-24',
                        'value': 85
                    }, {
                        'date': '2013-01-25',
                        'value': 80
                    }, {
                        'date': '2013-01-26',
                        'value': 87
                    }, {
                        'date': '2013-01-27',
                        'value': 84
                    }, {
                        'date': '2013-01-28',
                        'value': 83
                    }, {
                        'date': '2013-01-29',
                        'value': 84
                    }, {
                        'date': '2013-01-30',
                        'value': 81
                    }]
            });
            this.thisMonthData = avgValChart('#11c15b', [30, 15, 25, 35, 30, 20, 25, 30, 15, 1], '#11c15b');
            this.thisMonthOption = buildChartOption();
            this.sale1Data = saleChart('#b71c1c', [25, 28, 20, 20, 25, 30, 15, 25, 28, 35, 30, 20, 18, 25], 'transparent');
            this.sale2Data = saleChart('#00692c', [25, 28, 20, 20, 25, 30, 15, 25, 28, 35, 30, 20, 18, 25], 'transparent');
            this.sale3Data = saleChart('#0f4aa5', [25, 28, 20, 20, 25, 30, 15, 25, 28, 35, 30, 20, 18, 25], 'transparent');
            this.saleOption = saleBuildOption();
            const monthly_expense = AmCharts.makeChart('monthly-expense', {
                'theme': 'light',
                'hideCredits': true,
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 1,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': -90,
                        'endAngle': 90,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#d6d6d6',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#11c15b',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 1,
                        'innerRadius': '0%',
                        'startWidth': 13,
                        'nailRadius': 10,
                        'nailAlpha': 1,
                        'radius': '140%'
                    }]
            });
            this.eValInterval = setInterval(() => {
                const value = Math.round(Math.random() * 100);
                monthly_expense.arrows[0].setValue(value);
                monthly_expense.axes[0].setTopText(value + ' %');
                const newText = value ? value * 10 : 0;
                document.getElementById('exp-val').innerHTML = '<span>$' + newText + '</span>';
                monthly_expense.axes[0].bands[1].setEndValue(value);
            }, 2000);
            AmCharts.makeChart('daily-visitor', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'precision': 2,
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
                    'dashLength': 1,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'enabled': false
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '1',
                        'market1': 85
                    }, {
                        'date': '2',
                        'market1': 74
                    }, {
                        'date': '3',
                        'market1': 78
                    }, {
                        'date': '4',
                        'market1': 85
                    }, {
                        'date': '5',
                        'market1': 82
                    }, {
                        'date': '6',
                        'market1': 83
                    }, {
                        'date': '7',
                        'market1': 72
                    }, {
                        'date': '8',
                        'market1': 85
                    }]
            });
            AmCharts.makeChart('daily-sales', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataProvider': [{
                        'country': 'USA',
                        'visits': 10,
                        'color': '#536dfe'
                    }, {
                        'country': 'Russia',
                        'visits': 8,
                        'color': '#ff5252'
                    }, {
                        'country': 'South Korea',
                        'visits': 5,
                        'color': '#11c15b'
                    }, {
                        'country': 'Canada',
                        'visits': 7,
                        'color': '#448aff'
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        'lineAlpha': 0,
                        'gridAlpha': 0,
                        'position': 'left',
                        'fontSize': 0
                    }],
                'startDuration': 1,
                'graphs': [{
                        'balloonText': '<b>[[category]]: [[value]]</b>',
                        'fillColorsField': 'color',
                        'fillAlphas': 0.9,
                        'lineAlpha': 0.2,
                        'type': 'column',
                        'valueField': 'visits'
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'country',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'axisAlpha': 1,
                    'lineAlpha': 0,
                    'gridAlpha': 0
                },
                'export': {
                    'enabled': true
                }
            });
            AmCharts.makeChart('storage-space', {
                'hideCredits': true,
                'type': 'pie',
                'startDuration': 0,
                'theme': 'light',
                'labelRadius': 0,
                'pullOutRadius': 0,
                'labelText': '',
                'colorField': 'color',
                'legend': {
                    'enabled': false,
                },
                'innerRadius': '00%',
                'dataProvider': [{
                        'country': 'Lithuania',
                        'litres': 501.9,
                        'color': '#448aff'
                    }, {
                        'country': 'Czech Republic',
                        'litres': 301.9,
                        'color': '#ffe100'
                    }, {
                        'country': 'Ireland',
                        'litres': 201.1,
                        'color': '#ff5252'
                    }, {
                        'country': 'india',
                        'litres': 220.1,
                        'color': '#11c15b'
                    }],
                'valueField': 'litres',
                'export': {
                    'enabled': true
                }
            });
            AmCharts.makeChart('allocation-map', {
                'type': 'map',
                'hideCredits': true,
                'theme': 'light',
                'colorSteps': 10,
                'dataProvider': {
                    'map': 'usaLow',
                    'areas': [{
                            'id': 'US-AL',
                            'value': 4447100
                        }, {
                            'id': 'US-AK',
                            'value': 626932
                        }, {
                            'id': 'US-AZ',
                            'value': 5130632
                        }, {
                            'id': 'US-AR',
                            'value': 2673400
                        }, {
                            'id': 'US-CA',
                            'value': 33871648
                        }, {
                            'id': 'US-CO',
                            'value': 4301261
                        }, {
                            'id': 'US-CT',
                            'value': 3405565
                        }, {
                            'id': 'US-DE',
                            'value': 783600
                        }, {
                            'id': 'US-FL',
                            'value': 15982378
                        }, {
                            'id': 'US-GA',
                            'value': 8186453
                        }, {
                            'id': 'US-HI',
                            'value': 1211537
                        }, {
                            'id': 'US-ID',
                            'value': 1293953
                        }, {
                            'id': 'US-IL',
                            'value': 12419293
                        }, {
                            'id': 'US-IN',
                            'value': 6080485
                        }, {
                            'id': 'US-IA',
                            'value': 2926324
                        }, {
                            'id': 'US-KS',
                            'value': 2688418
                        }, {
                            'id': 'US-KY',
                            'value': 4041769
                        }, {
                            'id': 'US-LA',
                            'value': 4468976
                        }, {
                            'id': 'US-ME',
                            'value': 1274923
                        }, {
                            'id': 'US-MD',
                            'value': 5296486
                        }, {
                            'id': 'US-MA',
                            'value': 6349097
                        }, {
                            'id': 'US-MI',
                            'value': 9938444
                        }, {
                            'id': 'US-MN',
                            'value': 4919479
                        }, {
                            'id': 'US-MS',
                            'value': 2844658
                        }, {
                            'id': 'US-MO',
                            'value': 5595211
                        }, {
                            'id': 'US-MT',
                            'value': 902195
                        }, {
                            'id': 'US-NE',
                            'value': 1711263
                        }, {
                            'id': 'US-NV',
                            'value': 1998257
                        }, {
                            'id': 'US-NH',
                            'value': 1235786
                        }, {
                            'id': 'US-NJ',
                            'value': 8414350
                        }, {
                            'id': 'US-NM',
                            'value': 1819046
                        }, {
                            'id': 'US-NY',
                            'value': 18976457
                        }, {
                            'id': 'US-NC',
                            'value': 8049313
                        }, {
                            'id': 'US-ND',
                            'value': 642200
                        }, {
                            'id': 'US-OH',
                            'value': 11353140
                        }, {
                            'id': 'US-OK',
                            'value': 3450654
                        }, {
                            'id': 'US-OR',
                            'value': 3421399
                        }, {
                            'id': 'US-PA',
                            'value': 12281054
                        }, {
                            'id': 'US-RI',
                            'value': 1048319
                        }, {
                            'id': 'US-SC',
                            'value': 4012012
                        }, {
                            'id': 'US-SD',
                            'value': 754844
                        }, {
                            'id': 'US-TN',
                            'value': 5689283
                        }, {
                            'id': 'US-TX',
                            'value': 20851820
                        }, {
                            'id': 'US-UT',
                            'value': 2233169
                        }, {
                            'id': 'US-VT',
                            'value': 608827
                        }, {
                            'id': 'US-VA',
                            'value': 7078515
                        }, {
                            'id': 'US-WA',
                            'value': 5894121
                        }, {
                            'id': 'US-WV',
                            'value': 1808344
                        }, {
                            'id': 'US-WI',
                            'value': 5363675
                        }, {
                            'id': 'US-WY',
                            'value': 493782
                        }]
                },
                'areasSettings': {
                    'autoZoom': true
                },
                'export': {
                    'enabled': true
                }
            });
            AmCharts.makeChart('allocation-chart', {
                'hideCredits': true,
                'type': 'pie',
                'startDuration': 0,
                'theme': 'light',
                'labelRadius': 0,
                'pullOutRadius': 0,
                'labelText': '',
                'colorField': 'color',
                'legend': {
                // 'enabled':false,
                },
                'innerRadius': '70%',
                'dataProvider': [{
                        'country': 'Lithuania',
                        'litres': 501.9,
                        'color': '#85C5E3'
                    }, {
                        'country': 'Czech Republic',
                        'litres': 301.9,
                        'color': '#6AA3C4'
                    }, {
                        'country': 'Ireland',
                        'litres': 201.1,
                        'color': '#6097B9'
                    }, {
                        'country': 'india',
                        'litres': 220.1,
                        'color': '#4E81A4'
                    }],
                'valueField': 'litres'
            });
            this.seo1Data = seoChart('#536dfe', [1, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], 'transparent');
            this.seo2Data = seoChart('#11c15b', [1, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], '#11c15b');
            this.seoOption = seoBuildOption();
            this.secLineData = secChart('#fff', [10, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 10], 'transparent');
            this.secBarData = secChart('#00692c', [15, 10, 15, 20, 25, 30, 15, 5, 20, 25, 35, 20, 10, 12, 5], '#00692c');
            this.secOption = secBuildOption();
            AmCharts.makeChart('sec-ecommerce-bar-chart', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataProvider': [{
                        'visits': 10
                    }, {
                        'visits': 15
                    }, {
                        'visits': 12
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 6
                    }, {
                        'visits': 10
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }, {
                        'visits': 16
                    }, {
                        'visits': 8
                    }, {
                        'visits': 10
                    }, {
                        'visits': 9
                    }, {
                        'visits': 12
                    }, {
                        'visits': 10
                    }, {
                        'visits': 13
                    }, {
                        'visits': 11
                    }],
                'valueAxes': [{
                        'gridAlpha': 0.1,
                        'dashLength': 0
                    }],
                'gridAboveGraphs': true,
                'startDuration': 1,
                'graphs': [{
                        'balloonText': 'Active User: <b>[[value]]</b>',
                        'fillAlphas': 1,
                        'lineAlpha': 1,
                        'lineColor': '#536dfe',
                        'type': 'column',
                        'valueField': 'visits',
                        'columnWidth': 0.5
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axesAlpha': 0,
                    'lineAlpha': 0,
                    'fontSize': 0,
                    'tickLength': 0
                },
                'export': {
                    'enabled': true
                }
            });
            this.seoAnalytics1Data = saleChart('#448aff', [25, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], 'transparent');
            this.seoAnalytics2Data = saleChart('#11c15b', [25, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], 'transparent');
            this.seoAnalytics3Data = saleChart('#536dfe', [25, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], 'transparent');
            this.seoAnalytics4Data = saleChart('#ff5252', [25, 30, 15, 20, 25, 30, 15, 25, 35, 30, 20, 10, 12, 1], 'transparent');
            this.seoAnalyticsOption = saleBuildOption();
            this.saleIncome1Data = valIncome('#448aff', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#7badff');
            this.saleIncome2Data = valIncome('#11c15b', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#57d38b');
            this.saleIncome3Data = valIncome('#ff5252', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#ff8585');
            this.saleIncomeOption = valIncomeBuildOption();
            this.saleReport1Data = saleReportChart('#448aff', [25, 30, 15, 20, 25, 30, 15, 1], '#448aff');
            this.saleReport2Data = saleReportChart('#11c15b', [25, 30, 15, 20, 25, 30, 15, 1], '#11c15b');
            this.saleReport3Data = saleReportChart('#536dfe', [25, 30, 15, 20, 25, 30, 15, 1], '#536dfe');
            this.saleReport4Data = saleReportChart('#ff5252', [25, 30, 15, 20, 25, 30, 15, 1], '#ff5252');
            this.saleReportOption = saleReportBuildOption();
            const real_time_chart = AmCharts.makeChart('real-time-chart', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'zoomOutButton': {
                    'backgroundColor': '#000000',
                    'backgroundAlpha': 0.15
                },
                'dataProvider': this.realTimeChartData,
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'minPeriod': 'DD',
                    'dashLength': 1,
                    'gridAlpha': 0.15,
                    'axisColor': '#DADADA'
                },
                'graphs': [{
                        'id': 'g1',
                        'valueField': 'visits',
                        'bullet': 'round',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 2,
                        'lineThickness': 2,
                        'lineColor': '#448aff',
                        'negativeLineColor': '#ff5252',
                        'hideBulletsCount': 50
                    }],
                'chartCursor': {
                    'cursorPosition': 'mouse'
                }
            });
            let days = 31;
            setInterval(() => {
                real_time_chart.dataProvider.shift();
                days++;
                const newDate = new Date(this.firstDate);
                newDate.setDate(newDate.getDate() + days);
                const visits = Math.round(Math.random() * 40) - 20;
                real_time_chart.dataProvider.push({
                    date: newDate,
                    visits: visits
                });
                real_time_chart.validateData();
            }, 1000);
            const sales_prediction_chart = AmCharts.makeChart('sales-prediction-chart', {
                'theme': 'light',
                'hideCredits': true,
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 0,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0.,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': -140,
                        'endAngle': 140,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#ff9797',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#ff5252',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 1,
                        'innerRadius': '0%',
                        'startWidth': 10,
                        'nailRadius': 8,
                        'nailAlpha': 1,
                        'radius': '140%'
                    }]
            });
            setInterval(() => {
                const value = Math.round(Math.random() * 100);
                sales_prediction_chart.arrows[0].setValue(value);
                sales_prediction_chart.axes[0].setTopText(value + ' %');
                sales_prediction_chart.axes[0].bands[1].setEndValue(value);
            }, 2000);
            const emails_sent_sales_chart = AmCharts.makeChart('emails-sent-sales-chart', {
                'theme': 'light',
                'hideCredits': true,
                'type': 'gauge',
                'axes': [{
                        'topTextFontSize': 0,
                        'topTextYOffset': 0,
                        'topTextColor': '#fff',
                        'axisColor': '#31d6ea',
                        'axisThickness': 0,
                        'endValue': 100,
                        'gridInside': false,
                        'inside': true,
                        'radius': '50%',
                        'fontSize': 0.,
                        'valueInterval': 100,
                        'tickAlpha': 0,
                        'startAngle': 0,
                        'endAngle': 360,
                        'unit': '%',
                        'bandOutlineAlpha': 0,
                        'bands': [{
                                'color': '#448aff',
                                'endValue': 100,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }, {
                                'color': '#ff5252',
                                'endValue': 0,
                                'innerRadius': '105%',
                                'radius': '170%',
                                'gradientRatio': [0],
                                'startValue': 0
                            }]
                    }],
                'arrows': [{
                        'alpha': 0,
                        'innerRadius': '100%',
                        'borderAlpha': 0,
                        'nailAlpha': 0,
                    }]
            });
            this.emailSentInterval = setInterval(() => {
                const value = Math.round(Math.random() * 100);
                document.getElementById('opened').innerHTML = ((1000 - (value * 10)) + ' opened');
                document.getElementById('unopened').innerHTML = ((value * 10) + ' unopened');
                emails_sent_sales_chart.axes[0].bands[1].setEndValue(value);
            }, 2000);
            AmCharts.makeChart('project-earning', {
                'type': 'serial',
                'hideCredits': true,
                'theme': 'light',
                'dataProvider': [{
                        'type': 'UI',
                        'visits': 10
                    }, {
                        'type': 'UX',
                        'visits': 15
                    }, {
                        'type': 'Web',
                        'visits': 12
                    }, {
                        'type': 'App',
                        'visits': 16
                    }, {
                        'type': 'SEO',
                        'visits': 8
                    }],
                'valueAxes': [{
                        'gridAlpha': 0.3,
                        'gridColor': '#fff',
                        'axisColor': 'transparent',
                        'color': '#fff',
                        'dashLength': 0
                    }],
                'gridAboveGraphs': true,
                'startDuration': 1,
                'graphs': [{
                        'balloonText': 'Active User: <b>[[value]]</b>',
                        'fillAlphas': 1,
                        'lineAlpha': 1,
                        'lineColor': '#fff',
                        'type': 'column',
                        'valueField': 'visits',
                        'columnWidth': 0.5
                    }],
                'chartCursor': {
                    'categoryBalloonEnabled': false,
                    'cursorAlpha': 0,
                    'zoomable': false
                },
                'categoryField': 'type',
                'categoryAxis': {
                    'gridPosition': 'start',
                    'gridAlpha': 0,
                    'axesAlpha': 0,
                    'lineAlpha': 0,
                    'fontSize': 12,
                    'color': '#fff',
                    'tickLength': 0
                },
                'export': {
                    'enabled': false
                }
            });
            const realtime_visit_chart = AmCharts.makeChart('realtime-visit-chart', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
                'zoomOutButton': {
                    'backgroundColor': '#000000',
                    'backgroundAlpha': 0.15
                },
                'dataProvider': this.realTimeVisitData,
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'minPeriod': 'DD',
                    'dashLength': 1,
                    'gridAlpha': 0.15,
                    'axisColor': '#DADADA'
                },
                'graphs': [{
                        'id': 'g1',
                        'valueField': 'visits1',
                        'bullet': 'round',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 0,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'type': 'smoothedLine',
                        'lineColor': '#448aff',
                        'hideBulletsCount': 10
                    }, {
                        'id': 'g2',
                        'valueField': 'visits2',
                        'bullet': 'round',
                        'type': 'smoothedLine',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 2,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'lineColor': '#ff5252',
                        'hideBulletsCount': 50
                    }, {
                        'id': 'g3',
                        'valueField': 'visits3',
                        'bullet': 'round',
                        'type': 'smoothedLine',
                        'bulletBorderColor': '#FFFFFF',
                        'bulletBorderThickness': 0,
                        'lineThickness': 3,
                        'bulletAlpha': 0,
                        'lineColor': '#11c15b',
                        'hideBulletsCount': 0
                    }],
                'chartCursor': {
                    'cursorPosition': 'mouse'
                }
            });
            let day_count = 11;
            setInterval(() => {
                realtime_visit_chart.dataProvider.shift();
                day_count++;
                const newDate = new Date(this.firstDate);
                newDate.setDate(newDate.getDate() + day_count);
                const visits1 = Math.round(Math.random() * 10);
                const visits2 = Math.round(Math.random() * 10);
                const visits3 = Math.round(Math.random() * 10);
                realtime_visit_chart.dataProvider.push({
                    date: newDate,
                    visits1: visits1,
                    visits2: visits2,
                    visits3: visits3
                });
                realtime_visit_chart.validateData();
            }, 2000);
            this.totalSale1Data = valIncomeArrow('#536dfe', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#8698fe');
            this.totalSale2Data = valIncomeArrow('#11c15b', [30, 15, 25, 35, 30, 20, 15, 20, 25, 40, 25, 30, 22, 31], '#57d38b');
            this.totalSale3Data = valIncomeArrow('#448aff', [25, 30, 20, 15, 20, 25, 31, 22, 30, 15, 25, 35, 30, 40], '#7badff');
            this.totalSaleOption = valIncomeBuildOption();
            this.pageViewData = pageViewChart('#ff5252', [24, 30, 28, 27, 29, 30, 25, 28, 35, 34, 26, 33, 25, 31], 'transparent');
            this.pageViewOption = pageViewBuildOption();
            this.bounceRateData = bounceRateChart('#448aff', [22, 29, 25, 28, 24, 27], '#d9e8ff');
            this.bounceRateOption = bounceRateBuildOption();
            AmCharts.makeChart('product-sales-chart', {
                'type': 'serial',
                'theme': 'light',
                'hideCredits': true,
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
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.9,
                        'lineColor': '#448aff',
                        'type': 'smoothedLine',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#ff5252',
                        'lineThickness': 0,
                        'lineColor': '#ff5252',
                        'type': 'smoothedLine',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g3',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.9,
                        'bulletColor': '#11c15b',
                        'lineThickness': 0,
                        'lineColor': '#11c15b',
                        'type': 'smoothedLine',
                        'title': 'Mobile',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'sales1',
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
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 40
                    }, {
                        'date': '2013-03-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 30,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 0,
                        'market2': 20,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 25,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-08-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 30
                    }, {
                        'date': '2013-09-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-10-01',
                        'market1': 0,
                        'market2': 50,
                        'sales1': 0
                    }, {
                        'date': '2013-11-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 65
                    }, {
                        'date': '2013-12-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }]
            });
        }, 1);
    }
    ngOnDestroy() {
        if (this.emailSentInterval) {
            clearInterval(this.emailSentInterval);
        }
        if (this.eValInterval) {
            clearInterval(this.eValInterval);
        }
    }
    generateChartData() {
        for (let day = 0; day < 30; day++) {
            const newDate = new Date(this.firstDate);
            newDate.setDate(newDate.getDate() + day);
            const visits = Math.round(Math.random() * 40) - 20;
            this.realTimeChartData.push({
                'date': newDate,
                'visits': visits
            });
        }
    }
    generateVisitChartData() {
        for (let day = 0; day < 10; day++) {
            const newDate = new Date(this.firstDate);
            newDate.setDate(newDate.getDate() + day);
            const visits1 = Math.round(Math.random() * 10);
            const visits2 = Math.round(Math.random() * 10);
            const visits3 = Math.round(Math.random() * 10);
            this.realTimeVisitData.push({
                'date': newDate,
                'visits1': visits1,
                'visits2': visits2,
                'visits3': visits3
            });
        }
    }
}
ChartWidgetComponent.ɵfac = function ChartWidgetComponent_Factory(t) { return new (t || ChartWidgetComponent)(); };
ChartWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartWidgetComponent, selectors: [["app-chart-widget"]], decls: 555, vars: 158, consts: [[1, "page-body"], [1, "row"], [1, "col-xl-4", "col-md-12"], [3, "title", "cardClass"], [1, "row", "per-task-block", "text-center"], [1, "col-6"], ["data-label", "45%", 1, "radial-bar", "radial-bar-45", "radial-bar-lg", "radial-bar-primary"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-round", "btn-sm", "ripple", "light"], ["data-label", "30%", 1, "radial-bar", "radial-bar-30", "radial-bar-lg", "radial-bar-primary"], [1, "btn", "btn-primary", "btn-outline-primary", "btn-round", "btn-sm", "ripple", "light"], [1, "col-xl-8", "col-md-12"], [3, "title"], ["id", "revenue-map"], [1, "col-xl-4", "col-lg-6", "col-sm-12"], [3, "title", "blockClass", "cardClass"], ["id", "avg-value", 3, "type", "data", "options"], ["id", "avg-income", 3, "type", "data", "options"], [1, "col-xl-4", "col-lg-12", "col-sm-12"], ["id", "new-user-chart", 3, "type", "data", "options"], ["id", "sales-analytics"], [1, "col-sm-12", "col-md-6", "col-xl-12"], [1, "card"], [1, "card-block"], [1, "col"], [1, "col-auto"], [1, "label", "label-success"], [1, "col-sm-8"], ["id", "this-month", 3, "type", "data", "options"], [1, "card", "quater-card"], [1, "text-muted", "m-b-15"], [1, "f-right"], [1, "progress"], [1, "progress-bar", "bg-c-blue"], [1, "m-t-15"], [1, "progress-bar", "bg-c-green"], [1, "col-xl-4", "col-md-6"], [1, "card", "o-hidden"], [1, "card-block", "bg-c-red", "text-white", "o-hidden"], [1, "fa", "fa-line-chart", "m-r-15"], ["id", "sale-chart1", 3, "type", "data", "options"], [1, "card-footer", "text-center"], [1, "col-6", "b-r-default"], [1, "text-muted", "m-b-0"], [1, "card-block", "bg-c-green", "text-white", "o-hidden"], ["id", "sale-chart2", 3, "type", "data", "options"], [1, "card-block", "bg-c-blue", "text-white", "o-hidden"], ["id", "sale-chart3", 3, "type", "data", "options"], [1, "col-xl-3", "col-md-6"], ["title", "'Monthly Expense'"], ["id", "monthly-expense"], [1, "row", "text-center"], ["id", "exp-val", 1, "text-muted"], ["title", "'Daily Visitors'"], ["id", "daily-visitor"], [1, "fa", "fa-arrow-up", "text-c-green", "m-r-10"], ["id", "daily-sales"], [1, "text-c-blue"], ["id", "storage-space"], ["id", "allocation-map"], [1, "col-sm-4"], ["id", "allocation-chart"], [1, "row", "align-items-center"], [1, "col-5"], [1, "fa", "fa-caret-down", "text-c-red", "m-l-10"], [1, "col-7"], ["id", "seo-chart1", 3, "type", "data", "options"], [1, "fa", "fa-caret-up", "text-c-green", "m-l-10"], ["id", "seo-chart2", 3, "type", "data", "options"], [1, "card-block", "bg-c-green", "p-b-0"], [1, "row", "text-white"], [1, "m-b-5"], [1, "col", "text-right"], ["id", "sec-ecommerce-chart-line", 3, "type", "data", "options"], [1, "row", "justify-content-center"], [1, "col-8"], ["id", "sec-ecommerce-chart-bar", 3, "type", "data", "options"], [1, "card-footer"], [1, "text-muted", "m-b-5"], [1, "row", "justify-content-center", "text-center"], ["id", "sec-ecommerce-bar-chart"], [1, "row", "justify-content-center", "text-center", "b-t-default", "m-t-15", "p-t-20"], [1, "col-3", "b-r-default"], [1, "col-3"], [1, "card-block", "o-hidden"], ["id", "seo-analytics1", 3, "type", "data", "options"], ["id", "seo-analytics2", 3, "type", "data", "options"], ["id", "seo-analytics3", 3, "type", "data", "options"], ["id", "seo-analytics4", 3, "type", "data", "options"], [1, "card-header"], [1, "col-4"], ["id", "sal-income", 3, "type", "data", "options"], ["id", "rent-income", 3, "type", "data", "options"], ["id", "income-analysis", 3, "type", "data", "options"], [1, "col-md-12"], [1, "card-block", "text-center"], [1, "col-xl-3", "col-md-6", "m-t-10", "m-b-10"], ["id", "sale-report-1", 3, "type", "data", "options"], [1, "fa", "fa-caret-up", "text-c-green", "m-r-10"], ["id", "sale-report-2", 3, "type", "data", "options"], [1, "fa", "fa-caret-down", "text-c-red", "m-r-10"], ["id", "sale-report-3", 3, "type", "data", "options"], ["id", "sale-report-4", 3, "type", "data", "options"], ["id", "real-time-chart"], [1, "row", "justify-content-end", "align-items-center"], [1, "col-md-6"], ["id", "sales-prediction-chart"], ["id", "opened", 1, "text-c-blue"], ["id", "unopened", 1, "text-c-red"], ["id", "emails-sent-sales-chart"], [1, "card-block", "bg-c-blue"], ["id", "project-earning"], [1, "text-muted", "m-b-30", "m-t-15"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], ["id", "realtime-visit-chart"], [1, "text-c-green", "f-w-500"], [1, "fa", "fa-caret-up", "m-r-15"], [1, "col-4", "b-r-default"], ["id", "tot-lead", 3, "type", "data", "options"], [1, "text-c-red", "f-w-500"], [1, "fa", "fa-caret-down", "m-r-15"], ["id", "tot-vendor", 3, "type", "data", "options"], ["id", "invoice-gen", 3, "type", "data", "options"], ["id", "page-view", 3, "type", "data", "options"], [1, "m-b-0", "text-muted"], ["id", "bounce-rate", 3, "type", "data", "options"], [1, "col-xl-8", "col-md-6"], ["id", "product-sales-chart"]], template: function ChartWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "495");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "chart", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$256.23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "+20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "chart", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "This Quarter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$3,9452.50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "$3,9452.50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "87");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Online Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Offline Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sales Per Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "chart", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "$4230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "321");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Today Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "chart", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "3562");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Monthly Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Today Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "chart", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "1695");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Monthly Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "52");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Today Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "app-card", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "h6", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "app-card", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "3,652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "1652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Products Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "1652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Products Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "$16,756");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "chart", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "49.54%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "chart", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "$654");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "+1.65(2.56%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "chart", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "$2654.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Sales in Nov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "From Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "$1860.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "$294.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Real-Time Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "53k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "10k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Unsatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Site Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "chart", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "chart", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "28000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Total Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "chart", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "59600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Total Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "chart", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Sale Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "chart", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Rent Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "chart", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Income Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "chart", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Daily Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "chart", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "$16524");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Weekly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "chart", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "$6423");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "chart", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "$14524");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Yearly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "chart", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "$8652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "$3987");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "25% Increased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "(160-180 Sales)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "h6", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "520 Opened");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "h6", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "70 Unopened");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "h6", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Total completed project and earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "h6", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h3", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "175");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "h6", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Total Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "h3", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "76.6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Total Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "p", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " 18% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "76.12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "16.40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "4.56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "chart", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Total Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "p", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](492, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, " 24% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "chart", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Invoice Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "p", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, " 20% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "chart", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "7562");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Increase in Page Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "chart", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "562");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Bounce Rate of Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "chart", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Your Tasks")("cardClass", "per-task-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "215px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Average Value")("blockClass", "p-0")("cardClass", "o-hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.avgValueData)("options", ctx.avgValueOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Average Income")("blockClass", "p-0")("cardClass", "o-hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.avgIncomeData)("options", ctx.avgIncomeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "doughnut")("data", ctx.newUserData)("options", ctx.newUserOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Sales Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "460px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.thisMonthData)("options", ctx.thisMonthOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.sale1Data)("options", ctx.saleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.sale2Data)("options", ctx.saleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.sale3Data)("options", ctx.saleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Daily Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "150px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Allocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "265px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "265px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seo1Data)("options", ctx.seoOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.seo2Data)("options", ctx.seoOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.secLineData)("options", ctx.secOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-125px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.secBarData)("options", ctx.secOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "300px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-25px")("margin-bottom", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seoAnalytics1Data)("options", ctx.seoAnalyticsOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-25px")("margin-bottom", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seoAnalytics2Data)("options", ctx.seoAnalyticsOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-25px")("margin-bottom", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seoAnalytics3Data)("options", ctx.seoAnalyticsOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-25px")("margin-bottom", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seoAnalytics4Data)("options", ctx.seoAnalyticsOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.saleIncome1Data)("options", ctx.saleIncomeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.saleIncome2Data)("options", ctx.saleIncomeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.saleIncome3Data)("options", ctx.saleIncomeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.saleReport1Data)("options", ctx.saleReportOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.saleReport2Data)("options", ctx.saleReportOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.saleReport3Data)("options", ctx.saleReportOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.saleReport4Data)("options", ctx.saleReportOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Realtime Data of Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "330px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Sales Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Emails Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Realtime Data of Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "280px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale1Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale2Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.totalSale3Data)("options", ctx.totalSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-bottom", "-100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.pageViewData)("options", ctx.pageViewOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-bottom", "-100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.bounceRateData)("options", ctx.bounceRateOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Products Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "400px");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]], styles: ["#sales-analytics svg image {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvd2lkZ2V0L2NoYXJ0LXdpZGdldC9jaGFydC13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS93aWRnZXQvY2hhcnQtd2lkZ2V0L2NoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzYWxlcy1hbmFseXRpY3Mgc3ZnIGltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */", "/* -------------------------------------\n * Bar container\n * ------------------------------------- */\n.radial-bar {\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: transparent;\n  margin-bottom: 20px;\n  box-sizing: content-box;\n  width: 80px;\n  height: 80px;\n  font-size: 18px;\n}\n.radial-bar:after,\n.radial-bar > img {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  color: #a1a2a3;\n}\n.radial-bar:after {\n  content: attr(data-label);\n  background-color: #f0f0f0;\n  z-index: 101;\n}\n.radial-bar > img {\n  z-index: 102;\n}\n.radial-bar:after,\n.radial-bar > img {\n  width: 56px;\n  height: 56px;\n  margin-left: 12px;\n  margin-top: 12px;\n  line-height: 56px;\n}\n.radial-bar.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-primary.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-50 {\n  background-image: linear-gradient(270deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-55 {\n  background-image: linear-gradient(288deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-60 {\n  background-image: linear-gradient(306deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-65 {\n  background-image: linear-gradient(324deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-70 {\n  background-image: linear-gradient(342deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-75 {\n  background-image: linear-gradient(360deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-80 {\n  background-image: linear-gradient(378deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-85 {\n  background-image: linear-gradient(396deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-90 {\n  background-image: linear-gradient(414deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-95 {\n  background-image: linear-gradient(432deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-success.radial-bar-100 {\n  background-image: linear-gradient(450deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-50 {\n  background-image: linear-gradient(270deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-55 {\n  background-image: linear-gradient(288deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-60 {\n  background-image: linear-gradient(306deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-65 {\n  background-image: linear-gradient(324deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-70 {\n  background-image: linear-gradient(342deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-75 {\n  background-image: linear-gradient(360deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-80 {\n  background-image: linear-gradient(378deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-85 {\n  background-image: linear-gradient(396deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-90 {\n  background-image: linear-gradient(414deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-95 {\n  background-image: linear-gradient(432deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-info.radial-bar-100 {\n  background-image: linear-gradient(450deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-50 {\n  background-image: linear-gradient(270deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-55 {\n  background-image: linear-gradient(288deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-60 {\n  background-image: linear-gradient(306deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-65 {\n  background-image: linear-gradient(324deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-70 {\n  background-image: linear-gradient(342deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-75 {\n  background-image: linear-gradient(360deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-80 {\n  background-image: linear-gradient(378deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-85 {\n  background-image: linear-gradient(396deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-90 {\n  background-image: linear-gradient(414deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-95 {\n  background-image: linear-gradient(432deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-warning.radial-bar-100 {\n  background-image: linear-gradient(450deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-50 {\n  background-image: linear-gradient(270deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-55 {\n  background-image: linear-gradient(288deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-60 {\n  background-image: linear-gradient(306deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-65 {\n  background-image: linear-gradient(324deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-70 {\n  background-image: linear-gradient(342deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-75 {\n  background-image: linear-gradient(360deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-80 {\n  background-image: linear-gradient(378deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-85 {\n  background-image: linear-gradient(396deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-90 {\n  background-image: linear-gradient(414deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-95 {\n  background-image: linear-gradient(432deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-danger.radial-bar-100 {\n  background-image: linear-gradient(450deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6);\n}\n/* -- Radial Default -- */\n.radial-bar-default.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-50 {\n  background-image: linear-gradient(270deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-55 {\n  background-image: linear-gradient(288deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-60 {\n  background-image: linear-gradient(306deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-65 {\n  background-image: linear-gradient(324deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-70 {\n  background-image: linear-gradient(342deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-75 {\n  background-image: linear-gradient(360deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-80 {\n  background-image: linear-gradient(378deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-85 {\n  background-image: linear-gradient(396deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-90 {\n  background-image: linear-gradient(414deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-95 {\n  background-image: linear-gradient(432deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-default.radial-bar-100 {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6);\n}\n/* -- Radial Pink -- */\n.radial-bar-pink.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-50 {\n  background-image: linear-gradient(270deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-55 {\n  background-image: linear-gradient(288deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-60 {\n  background-image: linear-gradient(306deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-65 {\n  background-image: linear-gradient(324deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-70 {\n  background-image: linear-gradient(342deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-75 {\n  background-image: linear-gradient(360deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-80 {\n  background-image: linear-gradient(378deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-85 {\n  background-image: linear-gradient(396deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-90 {\n  background-image: linear-gradient(414deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-95 {\n  background-image: linear-gradient(432deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-pink.radial-bar-100 {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6);\n}\n/* -- Radial Purple -- */\n.radial-bar-purple.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-50 {\n  background-image: linear-gradient(270deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-55 {\n  background-image: linear-gradient(288deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-60 {\n  background-image: linear-gradient(306deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-65 {\n  background-image: linear-gradient(324deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-70 {\n  background-image: linear-gradient(342deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-75 {\n  background-image: linear-gradient(360deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-80 {\n  background-image: linear-gradient(378deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-85 {\n  background-image: linear-gradient(396deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-90 {\n  background-image: linear-gradient(414deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-95 {\n  background-image: linear-gradient(432deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-purple.radial-bar-100 {\n  background-image: linear-gradient(450deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6);\n}\n/* -- Radial Inverse -- */\n.radial-bar-inverse.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-inverse.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6);\n}\n.radial-bar-lg {\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n}\n.radial-bar-lg:after,\n.radial-bar-lg > img {\n  width: 70px;\n  height: 70px;\n  margin-left: 15px;\n  margin-top: 15px;\n  line-height: 70px;\n}\n.radial-bar-sm {\n  width: 50px;\n  height: 50px;\n  font-size: 12px;\n}\n.radial-bar-sm:after,\n.radial-bar-sm > img {\n  width: 35px;\n  height: 35px;\n  margin-left: 7.5px;\n  margin-top: 7.5px;\n  line-height: 35px;\n}\n.radial-bar-xs {\n  width: 30px;\n  height: 30px;\n  font-size: 8px;\n}\n.radial-bar-xs:after,\n.radial-bar-xs > img {\n  width: 20px;\n  height: 20px;\n  margin-left: 5.5px;\n  margin-top: 4.5px;\n  line-height: 21px;\n}\n.radial-bar {\n  background-clip: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY2hhcnRzL3JhZGlhbC9jc3MvcmFkaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBDQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBR0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjtBQUVBOztFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtBQUdGO0FBREE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQURBO0VBQ0UsOElBQUE7QUFJRjtBQUZBO0VBQ0UsK0lBQUE7QUFLRjtBQUhBO0VBQ0UsK0lBQUE7QUFNRjtBQUpBO0VBQ0UsK0lBQUE7QUFPRjtBQUxBO0VBQ0UsK0lBQUE7QUFRRjtBQU5BO0VBQ0UsK0lBQUE7QUFTRjtBQVBBO0VBQ0UsK0lBQUE7QUFVRjtBQVJBO0VBQ0UsK0lBQUE7QUFXRjtBQVRBO0VBQ0UsK0lBQUE7QUFZRjtBQVZBO0VBQ0UsK0lBQUE7QUFhRjtBQVhBO0VBQ0UsZ0pBQUE7QUFjRjtBQVpBO0VBQ0UsZ0pBQUE7QUFlRjtBQWJBO0VBQ0UsZ0pBQUE7QUFnQkY7QUFkQTtFQUNFLGdKQUFBO0FBaUJGO0FBZkE7RUFDRSxnSkFBQTtBQWtCRjtBQWhCQTtFQUNFLGdKQUFBO0FBbUJGO0FBakJBO0VBQ0UsZ0pBQUE7QUFvQkY7QUFsQkE7RUFDRSxnSkFBQTtBQXFCRjtBQW5CQTtFQUNFLGdKQUFBO0FBc0JGO0FBcEJBO0VBQ0UsZ0pBQUE7QUF1QkY7QUFyQkE7RUFDRSxnSkFBQTtBQXdCRjtBQXRCQTtFQUNFLDhJQUFBO0FBeUJGO0FBdkJBO0VBQ0UsK0lBQUE7QUEwQkY7QUF4QkE7RUFDRSwrSUFBQTtBQTJCRjtBQXpCQTtFQUNFLCtJQUFBO0FBNEJGO0FBMUJBO0VBQ0UsK0lBQUE7QUE2QkY7QUEzQkE7RUFDRSwrSUFBQTtBQThCRjtBQTVCQTtFQUNFLCtJQUFBO0FBK0JGO0FBN0JBO0VBQ0UsK0lBQUE7QUFnQ0Y7QUE5QkE7RUFDRSwrSUFBQTtBQWlDRjtBQS9CQTtFQUNFLCtJQUFBO0FBa0NGO0FBaENBO0VBQ0UsZ0pBQUE7QUFtQ0Y7QUFqQ0E7RUFDRSxnSkFBQTtBQW9DRjtBQWxDQTtFQUNFLGdKQUFBO0FBcUNGO0FBbkNBO0VBQ0UsZ0pBQUE7QUFzQ0Y7QUFwQ0E7RUFDRSxnSkFBQTtBQXVDRjtBQXJDQTtFQUNFLGdKQUFBO0FBd0NGO0FBdENBO0VBQ0UsZ0pBQUE7QUF5Q0Y7QUF2Q0E7RUFDRSxnSkFBQTtBQTBDRjtBQXhDQTtFQUNFLGdKQUFBO0FBMkNGO0FBekNBO0VBQ0UsZ0pBQUE7QUE0Q0Y7QUExQ0E7RUFDRSxnSkFBQTtBQTZDRjtBQTNDQTtFQUNFLDhJQUFBO0FBOENGO0FBNUNBO0VBQ0UsK0lBQUE7QUErQ0Y7QUE3Q0E7RUFDRSwrSUFBQTtBQWdERjtBQTlDQTtFQUNFLCtJQUFBO0FBaURGO0FBL0NBO0VBQ0UsK0lBQUE7QUFrREY7QUFoREE7RUFDRSwrSUFBQTtBQW1ERjtBQWpEQTtFQUNFLCtJQUFBO0FBb0RGO0FBbERBO0VBQ0UsK0lBQUE7QUFxREY7QUFuREE7RUFDRSwrSUFBQTtBQXNERjtBQXBEQTtFQUNFLCtJQUFBO0FBdURGO0FBckRBO0VBQ0UsZ0pBQUE7QUF3REY7QUF0REE7RUFDRSxnSkFBQTtBQXlERjtBQXZEQTtFQUNFLGdKQUFBO0FBMERGO0FBeERBO0VBQ0UsZ0pBQUE7QUEyREY7QUF6REE7RUFDRSxnSkFBQTtBQTRERjtBQTFEQTtFQUNFLGdKQUFBO0FBNkRGO0FBM0RBO0VBQ0UsZ0pBQUE7QUE4REY7QUE1REE7RUFDRSxnSkFBQTtBQStERjtBQTdEQTtFQUNFLGdKQUFBO0FBZ0VGO0FBOURBO0VBQ0UsZ0pBQUE7QUFpRUY7QUEvREE7RUFDRSxnSkFBQTtBQWtFRjtBQWhFQTtFQUNFLDhJQUFBO0FBbUVGO0FBakVBO0VBQ0UsK0lBQUE7QUFvRUY7QUFsRUE7RUFDRSwrSUFBQTtBQXFFRjtBQW5FQTtFQUNFLCtJQUFBO0FBc0VGO0FBcEVBO0VBQ0UsK0lBQUE7QUF1RUY7QUFyRUE7RUFDRSwrSUFBQTtBQXdFRjtBQXRFQTtFQUNFLCtJQUFBO0FBeUVGO0FBdkVBO0VBQ0UsK0lBQUE7QUEwRUY7QUF4RUE7RUFDRSwrSUFBQTtBQTJFRjtBQXpFQTtFQUNFLCtJQUFBO0FBNEVGO0FBMUVBO0VBQ0UsZ0pBQUE7QUE2RUY7QUEzRUE7RUFDRSxnSkFBQTtBQThFRjtBQTVFQTtFQUNFLGdKQUFBO0FBK0VGO0FBN0VBO0VBQ0UsZ0pBQUE7QUFnRkY7QUE5RUE7RUFDRSxnSkFBQTtBQWlGRjtBQS9FQTtFQUNFLGdKQUFBO0FBa0ZGO0FBaEZBO0VBQ0UsZ0pBQUE7QUFtRkY7QUFqRkE7RUFDRSxnSkFBQTtBQW9GRjtBQWxGQTtFQUNFLGdKQUFBO0FBcUZGO0FBbkZBO0VBQ0UsZ0pBQUE7QUFzRkY7QUFwRkE7RUFDRSxnSkFBQTtBQXVGRjtBQXJGQTtFQUNFLDhJQUFBO0FBd0ZGO0FBdEZBO0VBQ0UsK0lBQUE7QUF5RkY7QUF2RkE7RUFDRSwrSUFBQTtBQTBGRjtBQXhGQTtFQUNFLCtJQUFBO0FBMkZGO0FBekZBO0VBQ0UsK0lBQUE7QUE0RkY7QUExRkE7RUFDRSwrSUFBQTtBQTZGRjtBQTNGQTtFQUNFLCtJQUFBO0FBOEZGO0FBNUZBO0VBQ0UsK0lBQUE7QUErRkY7QUE3RkE7RUFDRSwrSUFBQTtBQWdHRjtBQTlGQTtFQUNFLCtJQUFBO0FBaUdGO0FBL0ZBO0VBQ0UsZ0pBQUE7QUFrR0Y7QUFoR0E7RUFDRSxnSkFBQTtBQW1HRjtBQWpHQTtFQUNFLGdKQUFBO0FBb0dGO0FBbEdBO0VBQ0UsZ0pBQUE7QUFxR0Y7QUFuR0E7RUFDRSxnSkFBQTtBQXNHRjtBQXBHQTtFQUNFLGdKQUFBO0FBdUdGO0FBckdBO0VBQ0UsZ0pBQUE7QUF3R0Y7QUF0R0E7RUFDRSxnSkFBQTtBQXlHRjtBQXZHQTtFQUNFLGdKQUFBO0FBMEdGO0FBeEdBO0VBQ0UsZ0pBQUE7QUEyR0Y7QUF6R0E7RUFDRSxnSkFBQTtBQTRHRjtBQTFHQTtFQUNFLDhJQUFBO0FBNkdGO0FBM0dBO0VBQ0UsK0lBQUE7QUE4R0Y7QUE1R0E7RUFDRSwrSUFBQTtBQStHRjtBQTdHQTtFQUNFLCtJQUFBO0FBZ0hGO0FBOUdBO0VBQ0UsK0lBQUE7QUFpSEY7QUEvR0E7RUFDRSwrSUFBQTtBQWtIRjtBQWhIQTtFQUNFLCtJQUFBO0FBbUhGO0FBakhBO0VBQ0UsK0lBQUE7QUFvSEY7QUFsSEE7RUFDRSwrSUFBQTtBQXFIRjtBQW5IQTtFQUNFLCtJQUFBO0FBc0hGO0FBcEhBO0VBQ0UsZ0pBQUE7QUF1SEY7QUFySEE7RUFDRSxnSkFBQTtBQXdIRjtBQXRIQTtFQUNFLGdKQUFBO0FBeUhGO0FBdkhBO0VBQ0UsZ0pBQUE7QUEwSEY7QUF4SEE7RUFDRSxnSkFBQTtBQTJIRjtBQXpIQTtFQUNFLGdKQUFBO0FBNEhGO0FBMUhBO0VBQ0UsZ0pBQUE7QUE2SEY7QUEzSEE7RUFDRSxnSkFBQTtBQThIRjtBQTVIQTtFQUNFLGdKQUFBO0FBK0hGO0FBN0hBO0VBQ0UsZ0pBQUE7QUFnSUY7QUE5SEE7RUFDRSxnSkFBQTtBQWlJRjtBQTdIQSx5QkFBQTtBQUNBO0VBQ0UsNklBQUE7QUFnSUY7QUE5SEE7RUFDRSw4SUFBQTtBQWlJRjtBQS9IQTtFQUNFLDhJQUFBO0FBa0lGO0FBaElBO0VBQ0UsOElBQUE7QUFtSUY7QUFqSUE7RUFDRSw4SUFBQTtBQW9JRjtBQWxJQTtFQUNFLDhJQUFBO0FBcUlGO0FBbklBO0VBQ0UsOElBQUE7QUFzSUY7QUFwSUE7RUFDRSw4SUFBQTtBQXVJRjtBQXJJQTtFQUNFLDhJQUFBO0FBd0lGO0FBdElBO0VBQ0UsOElBQUE7QUF5SUY7QUF2SUE7RUFDRSw4SUFBQTtBQTBJRjtBQXhJQTtFQUNFLDhJQUFBO0FBMklGO0FBeklBO0VBQ0UsOElBQUE7QUE0SUY7QUExSUE7RUFDRSw4SUFBQTtBQTZJRjtBQTNJQTtFQUNFLDhJQUFBO0FBOElGO0FBNUlBO0VBQ0UsOElBQUE7QUErSUY7QUE3SUE7RUFDRSw4SUFBQTtBQWdKRjtBQTlJQTtFQUNFLDhJQUFBO0FBaUpGO0FBL0lBO0VBQ0UsOElBQUE7QUFrSkY7QUFoSkE7RUFDRSw4SUFBQTtBQW1KRjtBQWpKQTtFQUNFLDhJQUFBO0FBb0pGO0FBL0lBLHNCQUFBO0FBQ0E7RUFDRSw4SUFBQTtBQWtKRjtBQWhKQTtFQUNFLCtJQUFBO0FBbUpGO0FBakpBO0VBQ0UsK0lBQUE7QUFvSkY7QUFsSkE7RUFDRSwrSUFBQTtBQXFKRjtBQW5KQTtFQUNFLCtJQUFBO0FBc0pGO0FBcEpBO0VBQ0UsK0lBQUE7QUF1SkY7QUFySkE7RUFDRSwrSUFBQTtBQXdKRjtBQXRKQTtFQUNFLCtJQUFBO0FBeUpGO0FBdkpBO0VBQ0UsK0lBQUE7QUEwSkY7QUF4SkE7RUFDRSwrSUFBQTtBQTJKRjtBQXpKQTtFQUNFLGdKQUFBO0FBNEpGO0FBMUpBO0VBQ0UsZ0pBQUE7QUE2SkY7QUEzSkE7RUFDRSxnSkFBQTtBQThKRjtBQTVKQTtFQUNFLGdKQUFBO0FBK0pGO0FBN0pBO0VBQ0UsZ0pBQUE7QUFnS0Y7QUE5SkE7RUFDRSxnSkFBQTtBQWlLRjtBQS9KQTtFQUNFLGdKQUFBO0FBa0tGO0FBaEtBO0VBQ0UsZ0pBQUE7QUFtS0Y7QUFqS0E7RUFDRSxnSkFBQTtBQW9LRjtBQWxLQTtFQUNFLGdKQUFBO0FBcUtGO0FBbktBO0VBQ0UsK0lBQUE7QUFzS0Y7QUFqS0Esd0JBQUE7QUFDQTtFQUNFLDhJQUFBO0FBb0tGO0FBbEtBO0VBQ0UsK0lBQUE7QUFxS0Y7QUFuS0E7RUFDRSwrSUFBQTtBQXNLRjtBQXBLQTtFQUNFLCtJQUFBO0FBdUtGO0FBcktBO0VBQ0UsK0lBQUE7QUF3S0Y7QUF0S0E7RUFDRSwrSUFBQTtBQXlLRjtBQXZLQTtFQUNFLCtJQUFBO0FBMEtGO0FBeEtBO0VBQ0UsK0lBQUE7QUEyS0Y7QUF6S0E7RUFDRSwrSUFBQTtBQTRLRjtBQTFLQTtFQUNFLCtJQUFBO0FBNktGO0FBM0tBO0VBQ0UsZ0pBQUE7QUE4S0Y7QUE1S0E7RUFDRSxnSkFBQTtBQStLRjtBQTdLQTtFQUNFLGdKQUFBO0FBZ0xGO0FBOUtBO0VBQ0UsZ0pBQUE7QUFpTEY7QUEvS0E7RUFDRSxnSkFBQTtBQWtMRjtBQWhMQTtFQUNFLGdKQUFBO0FBbUxGO0FBakxBO0VBQ0UsZ0pBQUE7QUFvTEY7QUFsTEE7RUFDRSxnSkFBQTtBQXFMRjtBQW5MQTtFQUNFLGdKQUFBO0FBc0xGO0FBcExBO0VBQ0UsZ0pBQUE7QUF1TEY7QUFyTEE7RUFDRSxnSkFBQTtBQXdMRjtBQW5MQSx5QkFBQTtBQUNBO0VBQ0UsOElBQUE7QUFzTEY7QUFwTEE7RUFDRSwrSUFBQTtBQXVMRjtBQXJMQTtFQUNFLCtJQUFBO0FBd0xGO0FBdExBO0VBQ0UsK0lBQUE7QUF5TEY7QUF2TEE7RUFDRSwrSUFBQTtBQTBMRjtBQXhMQTtFQUNFLCtJQUFBO0FBMkxGO0FBekxBO0VBQ0UsK0lBQUE7QUE0TEY7QUExTEE7RUFDRSwrSUFBQTtBQTZMRjtBQTNMQTtFQUNFLCtJQUFBO0FBOExGO0FBNUxBO0VBQ0UsK0lBQUE7QUErTEY7QUE3TEE7RUFDRSxnSkFBQTtBQWdNRjtBQTlMQTtFQUNFLGdKQUFBO0FBaU1GO0FBL0xBO0VBQ0UsZ0pBQUE7QUFrTUY7QUFoTUE7RUFDRSxnSkFBQTtBQW1NRjtBQWpNQTtFQUNFLGdKQUFBO0FBb01GO0FBbE1BO0VBQ0UsZ0pBQUE7QUFxTUY7QUFuTUE7RUFDRSxnSkFBQTtBQXNNRjtBQXBNQTtFQUNFLGdKQUFBO0FBdU1GO0FBck1BO0VBQ0UsZ0pBQUE7QUF3TUY7QUF0TUE7RUFDRSxnSkFBQTtBQXlNRjtBQXZNQTtFQUNFLGdKQUFBO0FBME1GO0FBdk1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBME1GO0FBeE1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBMk1GO0FBek1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBNE1GO0FBMU1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBNk1GO0FBM01BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBOE1GO0FBNU1BOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBK01GO0FBNU1BO0VBQ0UsNEJBQUE7QUErTUYiLCJmaWxlIjoic3JjL2Fzc2V0cy9jaGFydHMvcmFkaWFsL2Nzcy9yYWRpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQmFyIGNvbnRhaW5lclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnJhZGlhbC1iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yYWRpYWwtYmFyOmFmdGVyLFxuLnJhZGlhbC1iYXIgPiBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYTFhMmEzO1xufVxuLnJhZGlhbC1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB6LWluZGV4OiAxMDE7XG59XG4ucmFkaWFsLWJhciA+IGltZyB7XG4gIHotaW5kZXg6IDEwMjtcbn1cbi5yYWRpYWwtYmFyOmFmdGVyLFxuLnJhZGlhbC1iYXIgPiBpbWcge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG59XG5cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEwOGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE2MmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIxNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItNjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzI0ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItODAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzc4ZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXIucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItOTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDMyZGVnLCAjNDA5OWZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICM0MDk5ZmYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wcmltYXJ5LnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXByaW1hcnkucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzQwOTlmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNDA5OWZmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHJpbWFyeS5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM0MDk5ZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzQwOTlmZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICMyZWQ4YjYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1zdWNjZXNzLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXN1Y2Nlc3MucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzJlZDhiNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMmVkOGI2IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItc3VjY2Vzcy5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICMyZWQ4YjYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzJlZDhiNiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICMwMGJjZDQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbmZvLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWluZm8ucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgIzAwYmNkNCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBiY2Q0IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW5mby5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICMwMGJjZDQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwYmNkNCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci01IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMDhkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0xNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTIwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNjJkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci0zMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTk4ZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTM1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMTZkZWcsICNmMWM0MGYgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci13YXJuaW5nLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXdhcm5pbmcucmFkaWFsLWJhci00NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjUyZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTUwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTY1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMyNGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTgwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM3OGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTk1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQzMmRlZywgI2YxYzQwZiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjFjNDBmIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItd2FybmluZy5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICNmMWM0MGYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2YxYzQwZiA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItNzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgI0ZGNTM3MCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRkY1MzcwIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGFuZ2VyLnJhZGlhbC1iYXItOTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjRkY1MzcwIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRjUzNzAgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kYW5nZXIucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRhbmdlci5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICNGRjUzNzAgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0ZGNTM3MCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG4vKiAtLSBSYWRpYWwgRGVmYXVsdCAtLSAqL1xuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjg4ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTYwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwNmRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItNzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzQyZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItODUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzk2ZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgRkU4QTdEIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItZGVmYXVsdC5yYWRpYWwtYmFyLTkwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQxNGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWRlZmF1bHQucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsIEZFOEE3RCA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCBGRThBN0QgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1kZWZhdWx0LnJhZGlhbC1iYXItMTAwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1MGRlZywgRkU4QTdEIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIEZFOEE3RCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBQaW5rIC0tICovXG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTEwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTI1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjZmI2ZDlkIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcGluay5yYWRpYWwtYmFyLTQwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICNmYjZkOWQgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1waW5rLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci01NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci03MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci04NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICNmYjZkOWQgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXBpbmsucmFkaWFsLWJhci0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCBGRThBN0QgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZiNmQ5ZCA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBQdXJwbGUgLS0gKi9cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDEyNmRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTE1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItMjUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTMwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxOThkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDIzNGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTQ1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNTJkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTU1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI4OGRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNjAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzA2ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTcwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM0MmRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItNzUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTg1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM5NmRlZywgIzcyNjZiYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNzI2NmJhIDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItcHVycGxlLnJhZGlhbC1iYXItOTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDE0ZGVnLCAjNzI2NmJhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM3MjY2YmEgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1wdXJwbGUucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLXB1cnBsZS5yYWRpYWwtYmFyLTEwMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NTBkZWcsICM3MjY2YmEgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzcyNjZiYSA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cblxuXG5cbi8qIC0tIFJhZGlhbCBJbnZlcnNlIC0tICovXG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTA4ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTEwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxMjZkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE0NGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0yMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTYyZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTI1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItMzAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDE5OGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0zNSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Q2ZDZkNiA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMjE2ZGVnLCAjNGM1NjY3IDUwJSwgI2Q2ZDZkNiA1MCUsICNkNmQ2ZDYpO1xufVxuLnJhZGlhbC1iYXItaW52ZXJzZS5yYWRpYWwtYmFyLTQwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDZkNmQ2IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyMzRkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG4ucmFkaWFsLWJhci1pbnZlcnNlLnJhZGlhbC1iYXItNDUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkNmQ2ZDYgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI1MmRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci01MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci01NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyODhkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci02MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMDZkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci02NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMjRkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci03MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNDJkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci03NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci04MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNzhkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci04NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzOTZkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci05MCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MTRkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci05NSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0MzJkZWcsICM0YzU2NjcgNTAlLCB0cmFuc3BhcmVudCA1MCUsIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzRjNTY2NyA1MCUsICNkNmQ2ZDYgNTAlLCAjZDZkNmQ2KTtcbn1cbi5yYWRpYWwtYmFyLWludmVyc2UucmFkaWFsLWJhci0xMDAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUwZGVnLCAjNGM1NjY3IDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICM0YzU2NjcgNTAlLCAjZDZkNmQ2IDUwJSwgI2Q2ZDZkNik7XG59XG5cbi5yYWRpYWwtYmFyLWxnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucmFkaWFsLWJhci1sZzphZnRlcixcbi5yYWRpYWwtYmFyLWxnID4gaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xufVxuLnJhZGlhbC1iYXItc20ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucmFkaWFsLWJhci1zbTphZnRlcixcbi5yYWRpYWwtYmFyLXNtID4gaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDcuNXB4O1xuICBtYXJnaW4tdG9wOiA3LjVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4ucmFkaWFsLWJhci14cyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuLnJhZGlhbC1iYXIteHM6YWZ0ZXIsXG4ucmFkaWFsLWJhci14cyA+IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1LjVweDtcbiAgbWFyZ2luLXRvcDogNC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4ucmFkaWFsLWJhciB7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-widget',
                templateUrl: './chart-widget.component.html',
                styleUrls: [
                    './chart-widget.component.scss',
                    '../../../../assets/charts/radial/css/radial.scss'
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();
function valIncome(a, b, f) {
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
                pointBackgroundColor: '#000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: f,
                data: b,
            }]
    };
}
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
function avgValChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: '#fff',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function buildChartOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
function saleChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointBorderWidth: 5,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                lineTension: 0,
                backgroundColor: f,
                data: b,
            }]
    };
}
function saleBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                left: 10,
                right: 10,
                top: 25,
                bottom: 25
            }
        }
    };
}
function seoChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 2,
                pointHoverRadius: 4,
                pointBorderWidth: 5,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: '#000000',
                fill: true,
                lineTension: 0,
                backgroundColor: f,
                data: b,
            }]
    };
}
function seoBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                left: 30,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    };
}
function secChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 2,
                pointHoverRadius: 4,
                pointBorderWidth: 5,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                lineTension: 0,
                backgroundColor: f,
                data: b,
            }]
    };
}
function secBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                left: 30,
                right: 10,
                top: 20,
                bottom: 0
            }
        }
    };
}
function saleReportChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                lineTension: 0,
                backgroundColor: f,
                data: b,
            }]
    };
}
function saleReportBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    };
}
function pageViewChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 2,
                pointColor: '#ffffff',
                pointHoverRadius: 4,
                pointBorderWidth: 5,
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
function pageViewBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            position: 'nearest',
            mode: 'index',
            intersect: false,
            yPadding: 10,
            xPadding: 10,
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                left: 10,
                right: 10,
                top: 20,
                bottom: 20
            }
        }
    };
}
function bounceRateChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointRadius: 0,
                pointColor: '#ffffff',
                pointHoverRadius: 4,
                pointBorderWidth: 5,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: a,
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                cubicInterpolationMode: 'monotone',
                backgroundColor: f,
                data: b
            }]
    };
}
function bounceRateBuildOption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            intersect: false,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
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
                top: 20,
                bottom: 0
            }
        }
    };
}


/***/ }),

/***/ "./src/app/theme/widget/chart-widget/chart-widget.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/widget/chart-widget/chart-widget.module.ts ***!
  \******************************************************************/
/*! exports provided: ChartWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartWidgetModule", function() { return ChartWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-widget.component */ "./src/app/theme/widget/chart-widget/chart-widget.component.ts");
/* harmony import */ var _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-widget-routing.module */ "./src/app/theme/widget/chart-widget/chart-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);







class ChartWidgetModule {
}
ChartWidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartWidgetModule });
ChartWidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartWidgetModule_Factory(t) { return new (t || ChartWidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartWidgetModule, { declarations: [_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__["ChartWidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartWidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chart_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartWidgetRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
                ],
                declarations: [_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__["ChartWidgetComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=chart-widget-chart-widget-module.js.map