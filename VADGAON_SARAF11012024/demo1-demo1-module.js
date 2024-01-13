(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo1-demo1-module"],{

/***/ "./node_modules/rxjs-compat/Observable.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Observable = rxjs_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js"));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/map.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/add/operator/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/shared/elements/title.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/elements/title.service.ts ***!
  \**************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class TitleService {
    getCharacters() {
        return this.cloneOptions(TitleService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(TitleService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(TitleService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }
    loadOptions(options) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }
    cloneOptions(options) {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
TitleService.PLAYER_ONE = [
    { value: '0', label: 'Mr.' },
    { value: '1', label: 'Mrs.' },
    { value: '2', label: 'Miss' }
];
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(); };
TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/demo1/demo1-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/default/demo1/demo1-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: Demo1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1RoutingModule", function() { return Demo1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _demo1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo1.component */ "./src/app/theme/dashboard/default/demo1/demo1.component.ts");





const routes = [
    {
        path: '',
        component: _demo1_component__WEBPACK_IMPORTED_MODULE_2__["Demo1Component"],
        data: {
            title: 'Demo1',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class Demo1RoutingModule {
}
Demo1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Demo1RoutingModule });
Demo1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Demo1RoutingModule_Factory(t) { return new (t || Demo1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Demo1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Demo1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/demo1/demo1.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/dashboard/default/demo1/demo1.component.ts ***!
  \******************************************************************/
/*! exports provided: Demo1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Component", function() { return Demo1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");
/* harmony import */ var _demo1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo1.service */ "./src/app/theme/dashboard/default/demo1/demo1.service.ts");






// class DataTablesResponse {
//   data: any[];
//   draw: number;
//   recordsFiltered: number;
//   recordsTotal: number;
// }
// interface Person {
//   A_BALCODE: number;
//   A_ACHEAD: string;
//   A_ACTYPE: string;
// }
class Demo1Component {
    constructor(service) {
        this.service = service;
        //   dtOptions: DataTables.Settings = {};
        //   persons:Person[];
        // //Data:any;
        //   jsonData: any;
        //   page: any;
        //   filter: any;
        //   filterObject = new Array();
        //   constructor(private http: HttpClient) {}
        //   ngOnInit(): void {
        //       this.dtOptions = {
        //         pagingType: 'full_numbers',
        //         pageLength: 10,
        //         serverSide: true,
        //         processing:true,
        //         lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
        //         ajax: (dataTableParameters:any , callback)=>{
        //           console.log(dataTableParameters.start),
        //           dataTableParameters.minNumber=dataTableParameters.start+1;
        //           console.log(dataTableParameters.minNumber),
        //           dataTableParameters.maxNumber =
        //           dataTableParameters.start + dataTableParameters.length;
        //           let datatableRequestParam: any;
        //           this.page=dataTableParameters.start/dataTableParameters.length;
        //           if(dataTableParameters.search.value !='')
        //           {
        //             this.filter = dataTableParameters.search.value;
        //             this.filterObject = [
        //               {name: "A_BALCODE", type: "default"},
        //               {name: "A_ACHEAD", type: "default"},
        //               {name: "A_ACTYPE", type: "default"}
        //             ]
        //             datatableRequestParam = {
        //               page : this.page,
        //               limit : dataTableParameters.length,
        //               filter : dataTableParameters.search.value,
        //               filter_in : this.filterObject
        //             }
        //           }
        //           else
        //           {
        //             datatableRequestParam = {
        //               page : this.page,
        //               limit : dataTableParameters.length
        //             }
        //           }
        //           console.log(  dataTableParameters.minNumber,
        //             dataTableParameters.maxNumber);
        //           console.log('All Params',dataTableParameters);
        //           this.http
        //           .post<DataTablesResponse>(
        //             'http://localhost:4000/gl-statement-code',
        //            dataTableParameters
        //           ).subscribe(resp => {
        //             this.persons= resp.data;
        //             // console.log("this is table data");
        //             // console.log(resp);  
        //             callback({
        //               recordsTotal: resp.recordsTotal,
        //               recordsFiltered:resp.recordsTotal,
        //               data: resp.data
        //             });
        //           });
        //         },
        //         columns: [{ data: 'A_BALCODE' }, {  data: 'A_ACHEAD' }, {  data: 'A_ACTYPE' }]
        //       };
        //     }
        this.dropdownEnabled = true;
        this.config = ngx_treeview__WEBPACK_IMPORTED_MODULE_2__["TreeviewConfig"].create({
            hasAllCheckBox: true,
            hasFilter: true,
            hasCollapseExpand: true,
            decoupleChildFromParent: false,
            maxHeight: 400
        });
        this.buttonClasses = [
            'btn-outline-primary',
            'btn-outline-secondary',
            'btn-outline-success',
            'btn-outline-danger',
            'btn-outline-warning',
            'btn-outline-info',
            'btn-outline-light',
            'btn-outline-dark'
        ];
        this.buttonClass = this.buttonClasses[0];
    }
    ngOnInit() {
        this.items = this.service.getBooks();
    }
    onFilterChange(value) {
        console.log('filter:', value);
    }
}
Demo1Component.ɵfac = function Demo1Component_Factory(t) { return new (t || Demo1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo1_service__WEBPACK_IMPORTED_MODULE_3__["Demo1Service"])); };
Demo1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Demo1Component, selectors: [["app-demo1"]], decls: 13, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-sm"], [1, "form-group"], [3, "config", "items", "filterChange", "selectedChange"]], template: function Demo1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-treeview", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function Demo1Component_Template_ngx_treeview_filterChange_12_listener($event) { return ctx.onFilterChange($event); })("selectedChange", function Demo1Component_Template_ngx_treeview_selectedChange_12_listener($event) { return ctx.values = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("items", ctx.items);
    } }, directives: [ngx_treeview__WEBPACK_IMPORTED_MODULE_2__["TreeviewComponent"]], styles: [".border-lable-flt[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.border-lable-flt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .border-lable-flt[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: text;\n  font-size: 95%;\n  opacity: 1;\n  transition: all 0.2s;\n  top: -0.99em;\n  left: 0.75rem;\n  z-index: 3;\n  line-height: 2;\n  padding: 0 1px;\n}\n\n.border-lable-flt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after, .border-lable-flt[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  background: white;\n  height: 2px;\n  top: 50%;\n  left: -0.2em;\n  right: -0.2em;\n  z-index: -1;\n}\n\n.border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 1;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:placeholder-shown:not(:focus)::-webkit-input-placeholder {\n  opacity: 0;\n}\n\n.border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:placeholder-shown:not(:focus)    + *[_ngcontent-%COMP%] {\n  font-size: 110%;\n  opacity: 0.5;\n  top: 0.3em;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 100%;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 130%;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]:not(:last-child), .input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]:not(:last-child)   .form-control[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-right: 0;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]:not(:first-child)   .form-control[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  border-color: black;\n  box-shadow: none !important;\n  outline: none;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZGFzaGJvYXJkL2RlZmF1bHQvZGVtbzEvZGVtbzEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBRUEsNEJBQUE7RUFBQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFISjs7QUFNQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BOztFQUVJLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7O0VBRUksNEJBQUE7RUFDQSx5QkFBQTtBQUxKOztBQVFBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9kYXNoYm9hcmQvZGVmYXVsdC9kZW1vMS9kZW1vMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItbGFibGUtZmx0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3JkZXItbGFibGUtZmx0IGxhYmVsLFxuLmJvcmRlci1sYWJsZS1mbHQ+c3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICAvLyBmb250LXNpemU6IDc1JTtcbiAgICBmb250LXNpemU6IDk1JTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIHRvcDogLS45OWVtO1xuICAgIGxlZnQ6IDAuNzVyZW07XG4gICAgei1pbmRleDogMztcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBwYWRkaW5nOiAwIDFweDtcbn1cblxuLmJvcmRlci1sYWJsZS1mbHQgbGFiZWw6OmFmdGVyLFxuLmJvcmRlci1sYWJsZS1mbHQ+c3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAtLjJlbTtcbiAgICByaWdodDogLS4yZW07XG4gICAgei1pbmRleDogLTE7XG59XG5cbi5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG5cbn1cblxuLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbDpwbGFjZWhvbGRlci1zaG93bjpub3QoOmZvY3VzKTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgIFxufVxuXG4uYm9yZGVyLWxhYmxlLWZsdCAuZm9ybS1jb250cm9sOnBsYWNlaG9sZGVyLXNob3duOm5vdCg6Zm9jdXMpKyoge1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICB0b3A6IC4zZW07XG4gICBcbn1cblxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBoZWlnaHQ6IDEzMCU7XG4gICAgXG59XG5cbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdDpub3QoOmxhc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0Om5vdCg6bGFzdC1jaGlsZCkgLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgXG59XG5cbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdDpub3QoOmZpcnN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdDpub3QoOmZpcnN0LWNoaWxkKSAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIFxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Demo1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo1',
                templateUrl: './demo1.component.html',
                styleUrls: ['./demo1.component.scss'],
            }]
    }], function () { return [{ type: _demo1_service__WEBPACK_IMPORTED_MODULE_3__["Demo1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/demo1/demo1.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/dashboard/default/demo1/demo1.module.ts ***!
  \***************************************************************/
/*! exports provided: Demo1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Module", function() { return Demo1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _demo1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo1.component */ "./src/app/theme/dashboard/default/demo1/demo1.component.ts");
/* harmony import */ var _demo1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo1-routing.module */ "./src/app/theme/dashboard/default/demo1/demo1-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_statment_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/statment-type.service */ "./src/app/shared/elements/statment-type.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/elements/title.service */ "./src/app/shared/elements/title.service.ts");
/* harmony import */ var _demo1_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo1.service */ "./src/app/theme/dashboard/default/demo1/demo1.service.ts");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");















class Demo1Module {
}
Demo1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Demo1Module });
Demo1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Demo1Module_Factory(t) { return new (t || Demo1Module)(); }, providers: [_shared_elements_statment_type_service__WEBPACK_IMPORTED_MODULE_6__["StatementTypeService"], _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], _demo1_service__WEBPACK_IMPORTED_MODULE_11__["Demo1Service"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _demo1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Demo1RoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_treeview__WEBPACK_IMPORTED_MODULE_12__["TreeviewModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Demo1Module, { declarations: [_demo1_component__WEBPACK_IMPORTED_MODULE_2__["Demo1Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _demo1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Demo1RoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_treeview__WEBPACK_IMPORTED_MODULE_12__["TreeviewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Demo1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _demo1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Demo1RoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ngx_treeview__WEBPACK_IMPORTED_MODULE_12__["TreeviewModule"].forRoot()
                ],
                declarations: [_demo1_component__WEBPACK_IMPORTED_MODULE_2__["Demo1Component"]],
                providers: [_shared_elements_statment_type_service__WEBPACK_IMPORTED_MODULE_6__["StatementTypeService"], _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], _demo1_service__WEBPACK_IMPORTED_MODULE_11__["Demo1Service"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/default/demo1/demo1.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/dashboard/default/demo1/demo1.service.ts ***!
  \****************************************************************/
/*! exports provided: Demo1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Demo1Service", function() { return Demo1Service; });
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import {map, retry} from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable()
// export class Demo1Service {
//   httpData: any;
//   url:string;
//   url1 = "http://localhost:4000/gl-statement-code";
//   constructor(private _http: HttpClient) {

class Demo1Service {
    getBooks() {
        const masterMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Master', value: 1, children: [
                {
                    text: 'General Ledger', value: 101, children: [
                        { text: 'GL Statement Code', value: 10101 },
                        { text: 'GL Account Master', value: 10102 },
                        { text: 'GL Report Master', value: 10103 },
                        { text: 'GL Report Linking', value: 10104 },
                        { text: 'Budget Master', value: 10105 },
                    ]
                },
                {
                    text: 'Customer', value: 102, children: [
                        { text: 'Customer Id', value: 10201 },
                        { text: 'Shares Master', value: 10202 },
                        { text: 'Anamat / General Sub Master', value: 10203 },
                        { text: 'Saving Master', value: 10204 },
                        { text: 'Current Account Master', value: 10205 },
                        { text: 'Term Deposits Master', value: 10206 },
                        { text: 'Cash Credit Master', value: 10207 },
                        { text: 'Term Loan Master', value: 10208 },
                        { text: 'Dispute Loan Master', value: 10209 },
                        { text: 'Pigmy Agent Master', value: 10210 },
                        { text: 'Pigmy Account Master', value: 10211 },
                        { text: 'Dead Stock Master', value: 10212 },
                    ]
                },
                {
                    text: 'Balance Entry', value: 103, children: [
                        { text: 'Balance Updation', value: 10301 },
                        { text: 'Reconciliation Opening Transaction Entry', value: 10302 },
                        { text: 'Reconciliation Transaction Entry', value: 10303 },
                        { text: 'Loan Installment Edit and Close Date Updation', value: 10304 },
                    ]
                },
                {
                    text: 'Policy Settings', value: 104, children: [
                        { text: 'Information', value: 10401 },
                        { text: 'Definations', value: 10402 },
                        { text: 'Sizewise Balance Modification', value: 10403 },
                        { text: 'TD Receipt Type Master', value: 10404 },
                        { text: 'NPA Classification Slab Master ', value: 10405 },
                    ]
                },
                {
                    text: 'Maintainance', value: 105, children: [
                        { text: 'Security Details', value: 10501 },
                        { text: 'Loan And CC Interest Rate Changes', value: 10502 },
                        { text: 'Deposit / Loan Interest Rate Edit / Change', value: 10503 },
                        { text: 'NPA Opening Details Entry', value: 10504 },
                        { text: 'Interest Posting Flag Updation', value: 10505 },
                        { text: 'Accountwise Document Acceptance', value: 10506 },
                        { text: 'Noting Charges', value: 10507 },
                    ]
                },
                {
                    text: 'Instruction', value: 106, children: [
                        { text: 'Over Draft', value: 10601 },
                        { text: 'Standing Instruction', value: 10602 },
                        { text: 'Interest Instruction', value: 10603 },
                        { text: 'Special', value: 10604 },
                        { text: 'Freeze Account', value: 10605 },
                        { text: 'Reminder Instruction', value: 10606 },
                        { text: 'Revoke Standing Instructions', value: 10607 },
                        { text: 'Revoke Interest Instruction', value: 10608 },
                        { text: 'Revoke Special Instruction', value: 10609 },
                        { text: 'Lien Mark Clear', value: 10610 },
                    ]
                },
                {
                    text: 'Investment', value: 107, children: [
                        { text: 'Account Opening', value: 10701 },
                        { text: 'Transaction Entry', value: 10702 },
                        { text: 'Account Closing', value: 10703 },
                        { text: 'Account Open Passing', value: 10704 },
                        { text: 'Transaction Passing', value: 10705 },
                        { text: 'Account Close Passing', value: 10706 },
                    ]
                },
                {
                    text: 'Shares/Dividend', value: 108, children: [
                        { text: 'Unpaid Dividend Entry', value: 10801 },
                        { text: 'Year Wise Unpaid Dividend Entry', value: 10802 },
                        { text: 'Dividend Transfer Entry', value: 10803 },
                        { text: 'Dividend Transfer Posting', value: 10804 },
                        { text: 'Dividend Calculation', value: 10805 },
                        { text: 'Dividend Posting', value: 10806 },
                    ]
                },
                {
                    text: 'SignatureScanning', value: 109
                },
                {
                    text: 'DDBankCityMaster', value: 110
                },
            ]
        });
        const transactionMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Transaction', value: 2, children: [
                {
                    text: 'Voucher Entry', value: 201
                },
                {
                    text: 'Multi Voucher', value: 202
                },
                {
                    text: 'Batch Transfer Voucher', value: 203
                },
                {
                    text: 'Member Dividend And Payable Dividend Transaction', value: 24
                },
                {
                    text: 'Member Transfer', value: 205, children: [
                        { text: 'Member Transfer Transaction', value: 20501 },
                        { text: 'Branch And Salary Division Changes', value: 20502 },
                        { text: 'Trasferred Member Opening Balances', value: 20503 },
                    ]
                },
                {
                    text: 'Recovery', value: 206, children: [
                        { text: 'Recovery Processing', value: 20601 },
                        { text: 'Recovery Modification', value: 20602 },
                        { text: 'Recovery Posting', value: 20603 },
                        { text: 'Recovery Data Import Export', value: 20604 },
                    ]
                },
                {
                    text: 'Member Loan', value: 207, children: [
                        { text: 'Loan Application', value: 20701 },
                        { text: 'Loan Sanction', value: 20702 },
                    ]
                },
                {
                    text: 'DD Transaction', value: 208
                },
                {
                    text: 'Pigmy Chart Entry', value: 209
                },
                {
                    text: 'Dividend Pay', value: 210, children: [
                        { text: 'Dividend Paid Mark(Salary Division)', value: 21001 },
                        { text: 'Dividend Pay(Salary Division)', value: 21002 },
                    ]
                },
                {
                    text: 'Cash Credit A/c Renewal', value: 211
                },
                {
                    text: 'Share Transaction', value: 212
                },
                {
                    text: 'Term Deposit Account Closing', value: 213
                },
                {
                    text: 'Term Deposite A/c Renewal', value: 214
                },
                {
                    text: 'Cash Denomination', value: 215, children: [
                        { text: 'Accept Denomination', value: 21501 },
                        { text: 'Payment Denomination', value: 21502 },
                        { text: 'Cash In Denomination', value: 21503 },
                        { text: 'Cash Out Denomination', value: 21504 },
                        { text: 'cash Initialisation Entry', value: 21505 },
                        { text: 'Safe Valult To Cashier', value: 21506 },
                        { text: 'Cashier To Safe Vault', value: 21507 },
                    ]
                },
                {
                    text: 'Passbook Printing', value: 216, children: [
                        { text: 'Passbook Issue', value: 21601 },
                        { text: 'Passbook Entry Print', value: 21602 },
                    ]
                },
                {
                    text: 'Term Deposit Receipt Printing', value: 217, children: [
                        { text: 'Deposit Receipt Print', value: 21701 },
                    ]
                },
                {
                    text: 'Dead Stock Purchase', value: 218
                },
                {
                    text: 'Dead Stock Transaction', value: 219
                },
                {
                    text: 'Reconciliation Entry', value: 220
                },
            ]
        });
        const passingMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Passing', value: 3, children: [
                {
                    text: 'Centralised Passing', value: 301, children: []
                },
                {
                    text: 'Shares Transaction Passing', value: 302, children: []
                },
                {
                    text: 'Unapproval', value: 303, children: [
                        { text: 'Unapproval Multivoucher', value: 30301 },
                        { text: 'Unapproval Voucher', value: 30302 },
                        { text: 'Unapproval Deposit Closing', value: 30303 },
                        { text: 'Unapproval Deposit Posting', value: 30304 },
                    ]
                },
                {
                    text: 'Master Unlock', value: 304, children: []
                },
            ]
        });
        const viewMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'View', value: 4, children: [
                {
                    text: 'Account Enquiry', value: 401
                },
                {
                    text: 'Ledger View', value: 402
                },
                {
                    text: 'Shares Ledger View', value: 403
                },
                {
                    text: 'Voucher View', value: 404
                },
                {
                    text: 'Customer View', value: 405
                },
                {
                    text: 'Guarantor View', value: 406
                },
                {
                    text: 'Member View', value: 407
                },
                {
                    text: 'Master Card', value: 408
                },
                {
                    text: 'Member Liablity View', value: 409
                },
                {
                    text: 'Other View', value: 410
                },
            ]
        });
        const reportMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Reports', value: 5, children: [
                {
                    text: 'All Reports With Searching', value: 501
                },
                {
                    text: 'Daily Reports', value: 502
                },
                {
                    text: 'Statement', value: 503
                },
                {
                    text: 'Balance Book', value: 504
                },
                {
                    text: 'Registers', value: 505
                },
                {
                    text: 'Denomination Reports', value: 506
                },
                {
                    text: 'Term Deposit Reports', value: 507
                },
                {
                    text: 'Loan Reports', value: 508
                },
                {
                    text: 'NPA Reports', value: 509
                },
                {
                    text: 'Shares ARR', value: 510
                },
                {
                    text: 'Shares ADR', value: 511
                },
                {
                    text: 'Notice', value: 512
                },
                {
                    text: 'Other Reports', value: 513
                },
                {
                    text: 'MIS Reports', value: 514
                },
                {
                    text: 'Final Reports', value: 515
                },
            ]
        });
        const utilityMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Utility', value: 6, children: [
                {
                    text: 'Day Begin', value: 601
                },
                {
                    text: 'Day End', value: 602, children: [
                        { text: 'counter Work Day End', value: 60201 },
                        { text: 'pigmy Day End', value: 60202 }
                    ]
                },
                {
                    text: 'Back Dated Day Open', value: 603
                },
                {
                    text: 'Receipt Printing Designing', value: 604
                },
                {
                    text: 'Holiday', value: 605
                },
                {
                    text: 'Interest Posting', value: 606, children: [
                        { text: 'Interest Calculation', value: 60601 },
                        { text: 'Interest List', value: 60602 },
                        { text: 'Interest Passing', value: 60603 }
                    ]
                },
                {
                    text: 'Process And Calculation Menu', value: 607
                },
                {
                    text: 'Dead Stock Process', value: 608
                },
                {
                    text: 'Dividend', value: 609, children: [
                        { text: 'Dividend List', value: 60901 },
                        { text: 'Dividend Post', value: 60902 }
                    ]
                },
                {
                    text: 'Statement Head Insert', value: 610
                },
                {
                    text: 'Change Password', value: 611
                },
                {
                    text: 'Role Defination', value: 612
                },
                {
                    text: 'User Defination', value: 613
                },
                {
                    text: 'Cashier User Maintainance', value: 614
                },
                {
                    text: 'Shares Contribution Credit To Shares', value: 615
                },
                {
                    text: 'Silver Jubilee Amount Credit To Shares', value: 616
                },
                {
                    text: 'Masik Bachat Deposit Withdrawl', value: 617
                },
                {
                    text: 'Scheme Amount Transfer Entry', value: 618
                },
                {
                    text: 'Scheme Parameters', value: 619
                },
                {
                    text: 'Calculator', value: 620
                },
                {
                    text: 'Remind Me', value: 621
                },
                {
                    text: 'Data Backup', value: 622
                },
                {
                    text: 'PataSeva Support Register', value: 623
                },
                {
                    text: 'Sheres Data Export / Import', value: 624
                },
                {
                    text: 'Daybook Import / Export', value: 625
                },
                {
                    text: 'Demand Draft Data Export/ Import', value: 626
                },
            ]
        });
        const windowMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Windows', value: 7, children: [
                {
                    text: 'CaseCade', value: 701
                },
                {
                    text: 'Tile Horizontaily', value: 702
                },
                {
                    text: 'Tile Vertically', value: 703
                },
            ]
        });
        const hotkeysMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'Hot Key', value: 8
        });
        const exitMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_0__["TreeviewItem"]({
            text: 'exit', value: 9
        });
        return [
            masterMenu,
            transactionMenu,
            passingMenu,
            viewMenu,
            reportMenu,
            utilityMenu,
            windowMenu,
            hotkeysMenu,
            exitMenu
        ];
    }
}


/***/ })

}]);
//# sourceMappingURL=demo1-demo1-module.js.map