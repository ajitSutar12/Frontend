(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/theme/dashboard/analytics/analytics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/theme/dashboard/analytics/analytics.component.ts");





const routes = [
    {
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"],
        data: {
            title: 'Analytics',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class AnalyticsRoutingModule {
}
AnalyticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsRoutingModule });
AnalyticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
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











class AnalyticsComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
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
            this.appSaleData1 = amountChart('#11c15b', [1, 15, 30, 15, 25, 35, 45, 20, 25, 30], 'transparent');
            this.appSaleData2 = amountChart('#448aff', [45, 30, 25, 35, 20, 35, 45, 20, 25, 1], 'transparent');
            this.appSaleData3 = amountChart('#ff5252', [1, 45, 24, 40, 20, 35, 10, 20, 45, 30], 'transparent');
            this.appSaleData4 = amountChart('#536dfe', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30], 'transparent');
            this.appSaleOption = buildChartOption();
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
        }, 75);
    }
    ngOnDestroy() {
        if (this.emailSentInterval) {
            clearInterval(this.emailSentInterval);
        }
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 273, vars: 40, consts: [[1, "page-body"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card"], [1, "card-block"], [1, "row", "align-items-center"], [1, "col-8"], [1, "text-c-purple"], [1, "text-muted", "m-b-0"], [1, "col-4", "text-right"], [1, "fa", "fa-bar-chart", "f-28"], [1, "card-footer", "bg-c-purple"], [1, "col-9"], [1, "text-white", "m-b-0"], [1, "col-3", "text-right"], [1, "fa", "fa-line-chart", "text-white", "f-16"], [1, "text-c-green"], [1, "fa", "fa-file-text-o", "f-28"], [1, "card-footer", "bg-c-green"], [1, "text-c-red"], [1, "fa", "fa-calendar-check-o", "f-28"], [1, "card-footer", "bg-c-red"], [1, "text-c-blue"], [1, "fa", "fa-hand-o-down", "f-28"], [1, "card-footer", "bg-c-blue"], [1, "col-xl-8", "col-md-12"], [3, "title"], ["id", "sales-analytics"], [1, "col-xl-4", "col-md-12"], [1, "row", "justify-content-end", "align-items-center"], [1, "col-md-6"], [1, "text-muted", "m-b-5"], ["id", "sales-prediction-chart"], ["id", "opened", 1, "text-c-blue"], ["id", "unopened", 1, "text-c-red"], ["id", "emails-sent-sales-chart"], [3, "title", "cardClass"], [1, "table-responsive"], [1, "table", "table-hover", "table-borderless"], [1, "chk-option"], [1, "checkbox-fade", "fade-in-primary"], [1, "check-task"], ["type", "checkbox", "value", ""], [1, "cr"], [1, "cr-icon", "fa", "fa-check", "txt-default"], [1, "d-inline-block", "align-middle"], ["id", "app-sale1", 3, "type", "data", "options"], ["id", "app-sale2", 3, "type", "data", "options"], ["id", "app-sale3", 3, "type", "data", "options"], ["id", "app-sale4", 3, "type", "data", "options"], [1, "text-center"], ["href", "javascript:", 1, "b-b-primary", "text-primary"], [1, "col-xl-4", "col-lg-12", "col-sm-12"], ["id", "new-user-chart", 3, "type", "data", "options"], [1, "card-footer"], [1, "row", "text-center", "b-t-default"], [1, "col-4", "b-r-default", "m-t-15"], [1, "col-4", "m-t-15"], [1, "col-sm-8"], ["id", "allocation-map"], [1, "col-sm-4"], ["id", "allocation-chart"], [1, "col-5"], [1, "fa", "fa-caret-down", "text-c-red", "m-l-10"], [1, "col-7"], ["id", "seo-chart1", 3, "type", "data", "options"], [1, "fa", "fa-caret-up", "text-c-green", "m-l-10"], ["id", "seo-chart2", 3, "type", "data", "options"]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "$30200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "% change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "290+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Page Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "% change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "145");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Task Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "% change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "% change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "$3987");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "25% Increased");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "(160-180 Sales)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "520 Opened");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "70 Unopened");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "app-card", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "table", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Avg Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Mega Able");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Powerful Admin Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "16,300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "chart", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "$53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "$15,652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Photoshop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Design Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "26,421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "chart", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "$35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "$18,785");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Guruable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Best Admin Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "8,265");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "chart", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "$98");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "$9,652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Flatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Admin App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "10,652");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "chart", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "$20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "$7,856");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "View all Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "chart", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Unsatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "290+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "% change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "app-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "$16,756");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "chart", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "49.54%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "chart", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Sales Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "335px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Sales Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Emails Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Application Sales")("cardClass", "table-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.appSaleData1)("options", ctx.appSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.appSaleData2)("options", ctx.appSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.appSaleData3)("options", ctx.appSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.appSaleData4)("options", ctx.appSaleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "New Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", "-20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "doughnut")("data", ctx.newUserData)("options", ctx.newUserOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Allocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "265px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "265px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("data", ctx.seo1Data)("options", ctx.seoOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("data", ctx.seo2Data)("options", ctx.seoOption);
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]], styles: ["#sales-analytics svg image {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZGFzaGJvYXJkL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9kYXNoYm9hcmQvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzYWxlcy1hbmFseXRpY3Mgc3ZnIGltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analytics',
                templateUrl: './analytics.component.html',
                styleUrls: ['./analytics.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();
function amountChart(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 1,
                hitRadius: 30,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#000000',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
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


/***/ }),

/***/ "./src/app/theme/dashboard/analytics/analytics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/dashboard/analytics/analytics.module.ts ***!
  \***************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/theme/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/theme/dashboard/analytics/analytics-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);







class AnalyticsModule {
}
AnalyticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _analytics_routing_module__WEBPACK_IMPORTED_MODULE_3__["AnalyticsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
                ],
                declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map