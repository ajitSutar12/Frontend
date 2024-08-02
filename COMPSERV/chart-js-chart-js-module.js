(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-js-chart-js-module"],{

/***/ "./src/app/theme/chart/chart-js/chart-js-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/chart/chart-js/chart-js-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChartJsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsRoutingModule", function() { return ChartJsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chart_js_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-js.component */ "./src/app/theme/chart/chart-js/chart-js.component.ts");





const routes = [
    {
        path: '',
        component: _chart_js_component__WEBPACK_IMPORTED_MODULE_2__["ChartJsComponent"],
        data: {
            title: 'ChartJs',
            icon: 'icon-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - chart js',
            status: true
        }
    }
];
class ChartJsRoutingModule {
}
ChartJsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartJsRoutingModule });
ChartJsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartJsRoutingModule_Factory(t) { return new (t || ChartJsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartJsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartJsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/chart/chart-js/chart-js.component.ts ***!
  \************************************************************/
/*! exports provided: ChartJsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsComponent", function() { return ChartJsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);




class ChartJsComponent {
    constructor() {
        this.type = 'doughnut';
        this.data = {
            labels: [
                'A', 'B', 'C', 'D '
            ],
            datasets: [{
                    data: [40, 10, 40, 10],
                    backgroundColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ],
                    borderWidth: [
                        '0px',
                        '0px',
                        '0px',
                        '0px'
                    ],
                    borderColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ]
                }]
        };
        /*Bar chart Start*/
        this.type1 = 'bar';
        this.data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50],
                }, {
                    label: 'My second dataset',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
        };
        /*Bar chart End*/
        /*Radar chart Start*/
        this.type2 = 'radar';
        this.data2 = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(100, 221, 187, 0.52)',
                    borderColor: 'rgba(72, 206, 168, 0.88)',
                    pointBackgroundColor: 'rgba(51, 175, 140, 0.88)',
                    pointBorderColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBackgroundColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBorderColor: 'rgba(107, 226, 193, 0.98)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255, 204, 189, 0.95)',
                    borderColor: 'rgba(255, 165, 138, 0.95)',
                    pointBackgroundColor: 'rgba(255, 116, 22, 0.94)',
                    pointBorderColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBackgroundColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBorderColor: 'rgba(255, 165, 138, 0.95)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
        };
        this.options2 = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        };
        /*Radar chart End*/
        /*Polar chart*/
        this.type3 = 'polarArea';
        this.data3 = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        '#7E81CB',
                        '#1ABC9C',
                        '#B8EDF0',
                        '#B4C1D7',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#a1a4ec',
                        '#2adab7',
                        '#a7e7ea',
                        '#a5b0c3',
                        '#10e6ef'
                    ],
                    label: 'My dataset' // for legend
                }],
            labels: [
                'Blue',
                'Green',
                'Light Blue',
                'grey',
                'Sea Green'
            ]
        };
        this.options3 = {
            elements: {
                arc: {
                    borderColor: ''
                }
            }
        };
        /*Polar chart*/
        /*Pie chart*/
        this.type4 = 'pie';
        this.data4 = {
            labels: [
                'Blue',
                'Orange',
                'Sea Green'
            ],
            datasets: [{
                    data: [30, 30, 40],
                    backgroundColor: [
                        '#25A6F7',
                        '#FB9A7D',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#6cc4fb',
                        '#ffb59f',
                        '#0dedf7'
                    ]
                }]
        };
        this.type5 = 'bubble';
        this.data5 = {
            datasets: [{
                    label: 'First Dataset',
                    data: [{
                            x: 20,
                            y: 20,
                            r: 15
                        }, {
                            x: 10,
                            y: 15,
                            r: 10
                        }, {
                            x: 25,
                            y: 11,
                            r: 8
                        }, {
                            x: 15,
                            y: 13,
                            r: 8
                        }, {
                            x: 35,
                            y: 18,
                            r: 6
                        }, {
                            x: 40,
                            y: 10,
                            r: 10
                        }],
                    backgroundColor: '#FF6384',
                    hoverBackgroundColor: '#FF6384',
                }]
        };
        this.options5 = {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        this.type6 = 'line';
        this.options6 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            min: 1,
                            max: 1000
                        }
                    }]
            }
        };
    }
    ngOnInit() {
    }
}
ChartJsComponent.ɵfac = function ChartJsComponent_Factory(t) { return new (t || ChartJsComponent)(); };
ChartJsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartJsComponent, selectors: [["app-chart-js"]], decls: 26, vars: 38, consts: [[1, "page-body"], [1, "row"], [1, "col-md-12", "col-lg-4"], [3, "title", "headerContent"], [3, "type", "data"], [3, "type", "data", "options"], [2, "width", "100%", "height", "470px", 3, "type", "data", "options"]], template: function ChartJsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "DOUGHNUT CHART")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Radar chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type2)("data", ctx.data2)("options", ctx.options2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Polar chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type3)("data", ctx.data3)("options", ctx.options3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Pie chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type4)("data", ctx.data4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Bar chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type1)("data", ctx.data1)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Bubble chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type5)("data", ctx.data5)("options", ctx.options5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Scales chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type6)("data", ctx.data5)("options", ctx.options6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Time Scale chart")("headerContent", "Lorem ipsum dolor sit amet, consectetur adipisicing elit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type6)("data", ctx.data5)("options", ctx.options7);
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NoYXJ0L2NoYXJ0LWpzL2NoYXJ0LWpzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartJsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-js',
                templateUrl: './chart-js.component.html',
                styleUrls: ['./chart-js.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/chart/chart-js/chart-js.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/chart/chart-js/chart-js.module.ts ***!
  \*********************************************************/
/*! exports provided: ChartJsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJsModule", function() { return ChartJsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chart_js_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-js.component */ "./src/app/theme/chart/chart-js/chart-js.component.ts");
/* harmony import */ var _chart_js_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-js-routing.module */ "./src/app/theme/chart/chart-js/chart-js-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);







class ChartJsModule {
}
ChartJsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartJsModule });
ChartJsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartJsModule_Factory(t) { return new (t || ChartJsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chart_js_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartJsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartJsModule, { declarations: [_chart_js_component__WEBPACK_IMPORTED_MODULE_2__["ChartJsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chart_js_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartJsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartJsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chart_js_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChartJsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"]
                ],
                declarations: [_chart_js_component__WEBPACK_IMPORTED_MODULE_2__["ChartJsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=chart-js-chart-js-module.js.map