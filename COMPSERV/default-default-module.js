(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default-default-module"],{

/***/ "./src/app/theme/dashboard/default/default-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");





const routes = [
    {
        path: '',
        component: _default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        data: {
            title: 'Default',
            status: false
        },
        children: [
            {
                path: 'demo',
                loadChildren: () => Promise.all(/*! import() | demo-demo-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~a0fa725c"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b2eeeb56"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~demand-draft-dei-demand-draft-dei-module~demo-demo-module~for~51e11cb8"), __webpack_require__.e("demo-demo-module")]).then(__webpack_require__.bind(null, /*! ./demo/demo.module */ "./src/app/theme/dashboard/default/demo/demo.module.ts")).then(m => m.DemoModule)
            },
            {
                path: 'demo1',
                loadChildren: () => Promise.all(/*! import() | demo1-demo1-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~a0fa725c"), __webpack_require__.e("default~demo1-demo1-module~role-defination-role-defination-module"), __webpack_require__.e("common"), __webpack_require__.e("demo1-demo1-module")]).then(__webpack_require__.bind(null, /*! ./demo1/demo1.module */ "./src/app/theme/dashboard/default/demo1/demo1.module.ts")).then(m => m.Demo1Module)
            }
        ]
    }
];
class DefaultRoutingModule {
}
DefaultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultRoutingModule });
DefaultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultRoutingModule_Factory(t) { return new (t || DefaultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/default.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.component.ts ***!
  \**************************************************************/
/*! exports provided: DefaultComponent, AppToDoListReadDirective, AppToDoListRemoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToDoListReadDirective", function() { return AppToDoListReadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToDoListRemoveDirective", function() { return AppToDoListRemoveDirective; });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function () { return { "background": "url(assets/m.png) no-repeat", "background-size": "cover", "height": "600px", "width": "1500px" }; };
class DefaultComponent {
    constructor() {
        this.options = {
            position: ['bottom', 'right'],
        };
    }
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
            this.thisMonthData = avgValChart('#11c15b', [30, 15, 25, 35, 30, 20, 25, 30, 15, 1], '#11c15b');
            this.thisMonthOption = buildChartOption();
        }, 75);
    }
    ngAfterViewInit() {
        /* setTimeout(() => {
          this.options  = {
            position : ['bottom', 'right'],
            maxStack: 8,
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: true,
            lastOnBottom: true,
            clickToClose: true,
            preventDuplicates: false,
            preventLastDuplicates: false,
            theClass: 'bg-c-red no-icon',
            rtl: false,
            animate: 'rotate'
          };
          this.servicePNotify.html(
            '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="icon-settings"></i> for apply live styles very first time in Angular 5.</p>',
            'success'
          );
        }, 75); */
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 7, vars: 2, consts: [[1, "container-fluid"], [1, "row", 3, "ngStyle"], [1, "col-sm-12"], [1, "welcome-container"], [1, "welcome-text"], [1, "welcome-word"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], styles: ["#sales-analytics svg image {\n  display: none;\n}\n\n#sales-analytics svg image {\n  display: none;\n}\n\nh2 {\n  top: 300px;\n  left: 200px;\n}\n\n.content {\n  position: relative;\n}\n\n.content h2 {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  font-size: 5em;\n}\n\n.content h2:nth-child(1) {\n  color: transparent;\n  -webkit-text-stroke: 2px white;\n}\n\n.content h2:nth-child(2) {\n  color: orange;\n  animation: animate 4s ease-in-out infinite;\n}\n\n.content {\n  position: relative;\n}\n\n.content1 {\n  position: relative;\n}\n\n.content1 h2 {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  font-size: 5em;\n}\n\n.content1 h2:nth-child(1) {\n  color: transparent;\n  -webkit-text-stroke: 2px white;\n}\n\n.content1 h2:nth-child(2) {\n  color: orange;\n  animation: animate 4s ease-in-out infinite;\n}\n\n.content1 {\n  position: relative;\n}\n\n.content2 {\n  position: relative;\n}\n\n.content2 h2 {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  font-size: 5em;\n}\n\n.content2 h2:nth-child(1) {\n  color: transparent;\n  -webkit-text-stroke: 2px white;\n}\n\n.content2 h2:nth-child(2) {\n  color: orange;\n  animation: animate 4s ease-in-out infinite;\n}\n\n.content2 {\n  position: relative;\n}\n\n@keyframes animate {\n  0%, 100% {\n    -webkit-clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\n            clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\n            clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);\n  }\n}\n\n.welcome-container {\n  text-align: center;\n  padding: 40px 20px;\n}\n\n.welcome-text {\n  font-family: \"Arial\", sans-serif;\n  font-size: 48px;\n  font-weight: bold;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.welcome-word {\n  display: inline-block;\n  margin: 0 10px;\n  padding: 5px 10px;\n  background: linear-gradient(45deg, #2c3e50, #3498db);\n  color: white;\n  border-radius: 5px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.welcome-word:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZGFzaGJvYXJkL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFhQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBVkY7O0FBWUE7RUFDRSxrQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFFQSxnQ0FBQTtFQUNBLGNBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtBQVZGOztBQVlBO0VBQ0Usa0JBQUE7QUFURjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUVBLGdDQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtBQVhGOztBQWdCQTtFQUNFLGtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFFQSxnQ0FBQTtFQUNBLGNBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0FBZEY7O0FBZ0JBO0VBQ0Usa0JBQUE7QUFiRjs7QUFlQTtFQUVFO0lBRUksNkdBQUE7WUFBQSxxR0FBQTtFQWRKO0VBaUJBO0lBQ0ksNkdBQUE7WUFBQSxxR0FBQTtFQWZKO0FBQ0Y7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWZGOztBQW1CQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBcUJBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FBbEJGOztBQXFCQTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFsQkYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9kYXNoYm9hcmQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NhbGVzLWFuYWx5dGljcyBzdmcgaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3NhbGVzLWFuYWx5dGljcyBzdmcgaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLy8gKiB7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gfVxyXG5cclxuLy8gYm9keSB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6ICMwMDA7XHJcbi8vIH1cclxuaDJ7XHJcbiAgdG9wOiAzMDBweDtcclxuICBsZWZ0OjIwMHB4XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRlbnQgaDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuXHJcbi5jb250ZW50IGgyOm50aC1jaGlsZCgxKSB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRlbnQgaDI6bnRoLWNoaWxkKDIpIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSA0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW50MSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudDEgaDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuXHJcbi5jb250ZW50MSBoMjpudGgtY2hpbGQoMSkge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50MSBoMjpudGgtY2hpbGQoMikge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbi5jb250ZW50MSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW50MiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudDIgaDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuXHJcbi5jb250ZW50MiBoMjpudGgtY2hpbGQoMSkge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAycHggd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50MiBoMjpudGgtY2hpbGQoMikge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbi5jb250ZW50MiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcblxyXG4gIDAlLFxyXG4gIDEwMCUge1xyXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgNDUlLCAxNSUgNDQlLCAzMiUgNTAlLCA1NCUgNjAlLCA3MCUgNjElLCA4NCUgNTklLCAxMDAlIDUyJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwJSA2MCUsIDE2JSA2NSUsIDM0JSA2NiUsIDUxJSA2MiUsIDY3JSA1MCUsIDg0JSA0NSUsIDEwMCUgNDYlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gIH1cclxufVxyXG4ud2VsY29tZS1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiBcclxufVxyXG5cclxuLndlbGNvbWUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBcclxuICBcclxufVxyXG5cclxuLndlbGNvbWUtd29yZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzJjM2U1MCwgIzM0OThkYik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLndlbGNvbWUtd29yZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();
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
class AppToDoListReadDirective {
    constructor(el) {
        this.el = el;
    }
    onClick($event) {
        (this.el.nativeElement.parentElement).classList.toggle('done-task');
    }
}
AppToDoListReadDirective.ɵfac = function AppToDoListReadDirective_Factory(t) { return new (t || AppToDoListReadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppToDoListReadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppToDoListReadDirective, selectors: [["", "appToDoListRead", ""]], hostBindings: function AppToDoListReadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppToDoListReadDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppToDoListReadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToDoListRead]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();
class AppToDoListRemoveDirective {
    constructor(el) {
        this.el = el;
    }
    onClick($event) {
        (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
    }
}
AppToDoListRemoveDirective.ɵfac = function AppToDoListRemoveDirective_Factory(t) { return new (t || AppToDoListRemoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppToDoListRemoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppToDoListRemoveDirective, selectors: [["", "appToDoListRemove", ""]], hostBindings: function AppToDoListRemoveDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppToDoListRemoveDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppToDoListRemoveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToDoListRemove]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/default.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/dashboard/default/default.module.ts ***!
  \***********************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.component */ "./src/app/theme/dashboard/default/default.component.ts");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-routing.module */ "./src/app/theme/dashboard/default/default-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");






/*import {SimpleNotificationsModule} from 'angular2-notifications';*/



class DefaultModule {
}
DefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DefaultModule, bootstrap: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"]] });
DefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DefaultModule_Factory(t) { return new (t || DefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
            /*SimpleNotificationsModule.forRoot(),*/
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DefaultModule, { declarations: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
        _default_component__WEBPACK_IMPORTED_MODULE_2__["AppToDoListReadDirective"],
        _default_component__WEBPACK_IMPORTED_MODULE_2__["AppToDoListRemoveDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _default_routing_module__WEBPACK_IMPORTED_MODULE_3__["DefaultRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                    /*SimpleNotificationsModule.forRoot(),*/
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
                ],
                declarations: [
                    _default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                    _default_component__WEBPACK_IMPORTED_MODULE_2__["AppToDoListReadDirective"],
                    _default_component__WEBPACK_IMPORTED_MODULE_2__["AppToDoListRemoveDirective"],
                ],
                bootstrap: [_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default-default-module.js.map