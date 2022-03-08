(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interest-passing-interest-passing-module"],{

/***/ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-deletion/calculate-interest-deletion.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-deletion/calculate-interest-deletion.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: CalculateInterestDeletionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateInterestDeletionComponent", function() { return CalculateInterestDeletionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");



class CalculateInterestDeletionComponent {
    constructor() {
        this.dtExportButtonOptions = {};
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/datatable-data.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Name',
                    data: 'name'
                }, {
                    title: 'Position',
                    data: 'position'
                }, {
                    title: 'Office',
                    data: 'office'
                }, {
                    title: 'Age',
                    data: 'age'
                }, {
                    title: 'Start Date',
                    data: 'date'
                }, {
                    title: 'Salary',
                    data: 'salary'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ]
        };
    }
}
CalculateInterestDeletionComponent.ɵfac = function CalculateInterestDeletionComponent_Factory(t) { return new (t || CalculateInterestDeletionComponent)(); };
CalculateInterestDeletionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculateInterestDeletionComponent, selectors: [["app-calculate-interest-deletion"]], decls: 36, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], ["action", "javascript:", 1, "form-material"], [1, "card-block"], [1, "col-sm"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "Interest Date *", "type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "date", 1, "form-control"], [1, "btn", "btn-primary", "ripple", "light"], [1, "col-lg-9"], [1, "required"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"]], template: function CalculateInterestDeletionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Calculated Interest Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvY2FsY3VsYXRlLWludGVyZXN0LWRlbGV0aW9uL2NhbGN1bGF0ZS1pbnRlcmVzdC1kZWxldGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3V0aWxpdHkvaW50ZXJlc3QtcG9zdGluZy9pbnRlcmVzdC1wYXNzaW5nL2NhbGN1bGF0ZS1pbnRlcmVzdC1kZWxldGlvbi9jYWxjdWxhdGUtaW50ZXJlc3QtZGVsZXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculateInterestDeletionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculate-interest-deletion',
                templateUrl: './calculate-interest-deletion.component.html',
                styleUrls: ['./calculate-interest-deletion.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-passing/calculate-interest-passing.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-passing/calculate-interest-passing.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: CalculateInterestPassingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateInterestPassingComponent", function() { return CalculateInterestPassingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");



class CalculateInterestPassingComponent {
    constructor() {
        this.dtExportButtonOptions = {};
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/datatable-data.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Name',
                    data: 'name'
                }, {
                    title: 'Position',
                    data: 'position'
                }, {
                    title: 'Office',
                    data: 'office'
                }, {
                    title: 'Age',
                    data: 'age'
                }, {
                    title: 'Start Date',
                    data: 'date'
                }, {
                    title: 'Salary',
                    data: 'salary'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ]
        };
    }
}
CalculateInterestPassingComponent.ɵfac = function CalculateInterestPassingComponent_Factory(t) { return new (t || CalculateInterestPassingComponent)(); };
CalculateInterestPassingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculateInterestPassingComponent, selectors: [["app-calculate-interest-passing"]], decls: 36, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], ["action", "javascript:", 1, "form-material"], [1, "card-block"], [1, "col-sm"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "Interest Date *", "type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "date", 1, "form-control"], [1, "btn", "btn-primary", "ripple", "light"], [1, "col-lg-9"], [1, "required"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"]], template: function CalculateInterestPassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interest Voucher creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvY2FsY3VsYXRlLWludGVyZXN0LXBhc3NpbmcvY2FsY3VsYXRlLWludGVyZXN0LXBhc3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS91dGlsaXR5L2ludGVyZXN0LXBvc3RpbmcvaW50ZXJlc3QtcGFzc2luZy9jYWxjdWxhdGUtaW50ZXJlc3QtcGFzc2luZy9jYWxjdWxhdGUtaW50ZXJlc3QtcGFzc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculateInterestPassingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculate-interest-passing',
                templateUrl: './calculate-interest-passing.component.html',
                styleUrls: ['./calculate-interest-passing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-unpassing/calculate-interest-unpassing.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-unpassing/calculate-interest-unpassing.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CalculateInterestUnpassingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateInterestUnpassingComponent", function() { return CalculateInterestUnpassingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");



class CalculateInterestUnpassingComponent {
    constructor() {
        this.dtExportButtonOptions = {};
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/datatable-data.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Name',
                    data: 'name'
                }, {
                    title: 'Position',
                    data: 'position'
                }, {
                    title: 'Office',
                    data: 'office'
                }, {
                    title: 'Age',
                    data: 'age'
                }, {
                    title: 'Start Date',
                    data: 'date'
                }, {
                    title: 'Salary',
                    data: 'salary'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ]
        };
    }
}
CalculateInterestUnpassingComponent.ɵfac = function CalculateInterestUnpassingComponent_Factory(t) { return new (t || CalculateInterestUnpassingComponent)(); };
CalculateInterestUnpassingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculateInterestUnpassingComponent, selectors: [["app-calculate-interest-unpassing"]], decls: 36, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], ["action", "javascript:", 1, "form-material"], [1, "card-block"], [1, "col-sm"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "Interest Date *", "type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "date", 1, "form-control"], [1, "btn", "btn-primary", "ripple", "light"], [1, "col-lg-9"], [1, "required"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"]], template: function CalculateInterestUnpassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Calculated Interest Unpassing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Unpass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvY2FsY3VsYXRlLWludGVyZXN0LXVucGFzc2luZy9jYWxjdWxhdGUtaW50ZXJlc3QtdW5wYXNzaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvY2FsY3VsYXRlLWludGVyZXN0LXVucGFzc2luZy9jYWxjdWxhdGUtaW50ZXJlc3QtdW5wYXNzaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculateInterestUnpassingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculate-interest-unpassing',
                templateUrl: './calculate-interest-unpassing.component.html',
                styleUrls: ['./calculate-interest-unpassing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: EditInterestCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInterestCalculationComponent", function() { return EditInterestCalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");



class EditInterestCalculationComponent {
    constructor() {
        this.dtExportButtonOptions = {};
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/datatable-data.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Name',
                    data: 'name'
                }, {
                    title: 'Position',
                    data: 'position'
                }, {
                    title: 'Office',
                    data: 'office'
                }, {
                    title: 'Age',
                    data: 'age'
                }, {
                    title: 'Start Date',
                    data: 'date'
                }, {
                    title: 'Salary',
                    data: 'salary'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ]
        };
    }
}
EditInterestCalculationComponent.ɵfac = function EditInterestCalculationComponent_Factory(t) { return new (t || EditInterestCalculationComponent)(); };
EditInterestCalculationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditInterestCalculationComponent, selectors: [["app-edit-interest-calculation"]], decls: 57, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], ["action", "javascript:", 1, "form-material"], [1, "card-block"], [1, "col-sm"], [1, "form-group", "form-primary", "form-static-label"], ["type", "text", "name", "footer-email", "required", "", 1, "form-control"], [1, "form-bar"], [1, "float-label"], [1, "required"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "Interest Date *", "type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "date", 1, "form-control"], [1, "btn", "btn-primary", "ripple", "light"], [1, "col-lg-9"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"]], template: function EditInterestCalculationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit Interest Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "From A/c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "To A/c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvZWRpdC1pbnRlcmVzdC1jYWxjdWxhdGlvbi9lZGl0LWludGVyZXN0LWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvZWRpdC1pbnRlcmVzdC1jYWxjdWxhdGlvbi9lZGl0LWludGVyZXN0LWNhbGN1bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditInterestCalculationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-interest-calculation',
                templateUrl: './edit-interest-calculation.component.html',
                styleUrls: ['./edit-interest-calculation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/interest-passing-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: InterestPassingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPassingRoutingModule", function() { return InterestPassingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _interest_passing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interest-passing.component */ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing.component.ts");





const routes = [
    {
        path: '',
        component: _interest_passing_component__WEBPACK_IMPORTED_MODULE_2__["InterestPassingComponent"],
        data: {
            title: 'Interest Passing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class InterestPassingRoutingModule {
}
InterestPassingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterestPassingRoutingModule });
InterestPassingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterestPassingRoutingModule_Factory(t) { return new (t || InterestPassingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterestPassingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPassingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/interest-passing.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InterestPassingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPassingComponent", function() { return InterestPassingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _edit_interest_calculation_edit_interest_calculation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-interest-calculation/edit-interest-calculation.component */ "./src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.component.ts");
/* harmony import */ var _calculate_interest_passing_calculate_interest_passing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculate-interest-passing/calculate-interest-passing.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-passing/calculate-interest-passing.component.ts");
/* harmony import */ var _calculate_interest_unpassing_calculate_interest_unpassing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculate-interest-unpassing/calculate-interest-unpassing.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-unpassing/calculate-interest-unpassing.component.ts");
/* harmony import */ var _calculate_interest_deletion_calculate_interest_deletion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculate-interest-deletion/calculate-interest-deletion.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-deletion/calculate-interest-deletion.component.ts");









function InterestPassingComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-edit-interest-calculation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InterestPassingComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-calculate-interest-passing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InterestPassingComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-calculate-interest-unpassing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InterestPassingComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-calculate-interest-deletion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InterestPassingComponent {
    constructor() {
        this.EditInterestCalculationTrue = true;
        this.CalculateInterestPassingTrue = false;
        this.CalculateInterestUnpassingTrue = false;
        this.CalculateInterestDeletionTrue = false;
    }
    OpenLink(val) {
        // 
        if (val == 1) {
            this.EditInterestCalculationTrue = true;
            this.CalculateInterestPassingTrue = false;
            this.CalculateInterestUnpassingTrue = false;
            this.CalculateInterestDeletionTrue = false;
        }
        if (val == 2) {
            this.EditInterestCalculationTrue = false;
            this.CalculateInterestPassingTrue = true;
            this.CalculateInterestUnpassingTrue = false;
            this.CalculateInterestDeletionTrue = false;
        }
        if (val == 3) {
            this.EditInterestCalculationTrue = false;
            this.CalculateInterestPassingTrue = false;
            this.CalculateInterestUnpassingTrue = true;
            this.CalculateInterestDeletionTrue = false;
        }
        if (val == 4) {
            this.EditInterestCalculationTrue = false;
            this.CalculateInterestPassingTrue = false;
            this.CalculateInterestUnpassingTrue = false;
            this.CalculateInterestDeletionTrue = true;
        }
    }
    ngOnInit() {
    }
}
InterestPassingComponent.ɵfac = function InterestPassingComponent_Factory(t) { return new (t || InterestPassingComponent)(); };
InterestPassingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestPassingComponent, selectors: [["app-interest-passing"]], decls: 32, vars: 4, consts: [[1, "row"], [1, "col-sm-3"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-md-12"], [2, "max-width", "600px", "max-height", "450px"], [1, "basic-list"], ["routerLinkActive", "active", "id", "pointer", 1, "text-right", "f-w-600", 3, "click"], [1, "col-sm-9"], [4, "ngIf"]], template: function InterestPassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interest Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "perfect-scrollbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterestPassingComponent_Template_a_click_12_listener() { return ctx.OpenLink(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit Interest Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterestPassingComponent_Template_a_click_16_listener() { return ctx.OpenLink(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Calculate Interest Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterestPassingComponent_Template_a_click_20_listener() { return ctx.OpenLink(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Calculate Interest Unpassing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterestPassingComponent_Template_a_click_24_listener() { return ctx.OpenLink(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Calculate Interest Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InterestPassingComponent_div_28_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InterestPassingComponent_div_29_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InterestPassingComponent_div_30_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InterestPassingComponent_div_31_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EditInterestCalculationTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CalculateInterestPassingTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CalculateInterestUnpassingTrue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CalculateInterestDeletionTrue);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _edit_interest_calculation_edit_interest_calculation_component__WEBPACK_IMPORTED_MODULE_4__["EditInterestCalculationComponent"], _calculate_interest_passing_calculate_interest_passing_component__WEBPACK_IMPORTED_MODULE_5__["CalculateInterestPassingComponent"], _calculate_interest_unpassing_calculate_interest_unpassing_component__WEBPACK_IMPORTED_MODULE_6__["CalculateInterestUnpassingComponent"], _calculate_interest_deletion_calculate_interest_deletion_component__WEBPACK_IMPORTED_MODULE_7__["CalculateInterestDeletionComponent"]], styles: ["#pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9pbnRlcmVzdC1wb3N0aW5nL2ludGVyZXN0LXBhc3NpbmcvaW50ZXJlc3QtcGFzc2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3V0aWxpdHkvaW50ZXJlc3QtcG9zdGluZy9pbnRlcmVzdC1wYXNzaW5nL2ludGVyZXN0LXBhc3NpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPassingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interest-passing',
                templateUrl: './interest-passing.component.html',
                styleUrls: ['./interest-passing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-passing/interest-passing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: InterestPassingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPassingModule", function() { return InterestPassingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _interest_passing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interest-passing.component */ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing.component.ts");
/* harmony import */ var _interest_passing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interest-passing-routing.module */ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing-routing.module.ts");
/* harmony import */ var _edit_interest_calculation_edit_interest_calculation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-interest-calculation/edit-interest-calculation.component */ "./src/app/theme/utility/interest-posting/interest-passing/edit-interest-calculation/edit-interest-calculation.component.ts");
/* harmony import */ var _calculate_interest_passing_calculate_interest_passing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculate-interest-passing/calculate-interest-passing.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-passing/calculate-interest-passing.component.ts");
/* harmony import */ var _calculate_interest_unpassing_calculate_interest_unpassing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculate-interest-unpassing/calculate-interest-unpassing.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-unpassing/calculate-interest-unpassing.component.ts");
/* harmony import */ var _calculate_interest_deletion_calculate_interest_deletion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculate-interest-deletion/calculate-interest-deletion.component */ "./src/app/theme/utility/interest-posting/interest-passing/calculate-interest-deletion/calculate-interest-deletion.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");














const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class InterestPassingModule {
}
InterestPassingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterestPassingModule });
InterestPassingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterestPassingModule_Factory(t) { return new (t || InterestPassingModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _interest_passing_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterestPassingRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterestPassingModule, { declarations: [_interest_passing_component__WEBPACK_IMPORTED_MODULE_4__["InterestPassingComponent"], _edit_interest_calculation_edit_interest_calculation_component__WEBPACK_IMPORTED_MODULE_6__["EditInterestCalculationComponent"], _calculate_interest_passing_calculate_interest_passing_component__WEBPACK_IMPORTED_MODULE_7__["CalculateInterestPassingComponent"], _calculate_interest_unpassing_calculate_interest_unpassing_component__WEBPACK_IMPORTED_MODULE_8__["CalculateInterestUnpassingComponent"], _calculate_interest_deletion_calculate_interest_deletion_component__WEBPACK_IMPORTED_MODULE_9__["CalculateInterestDeletionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _interest_passing_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterestPassingRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPassingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _interest_passing_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterestPassingRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },
                ],
                declarations: [_interest_passing_component__WEBPACK_IMPORTED_MODULE_4__["InterestPassingComponent"], _edit_interest_calculation_edit_interest_calculation_component__WEBPACK_IMPORTED_MODULE_6__["EditInterestCalculationComponent"], _calculate_interest_passing_calculate_interest_passing_component__WEBPACK_IMPORTED_MODULE_7__["CalculateInterestPassingComponent"], _calculate_interest_unpassing_calculate_interest_unpassing_component__WEBPACK_IMPORTED_MODULE_8__["CalculateInterestUnpassingComponent"], _calculate_interest_deletion_calculate_interest_deletion_component__WEBPACK_IMPORTED_MODULE_9__["CalculateInterestDeletionComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=interest-passing-interest-passing-module.js.map