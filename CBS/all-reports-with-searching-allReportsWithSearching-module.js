(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-reports-with-searching-allReportsWithSearching-module"],{

/***/ "./src/app/theme/reports/all-reports-with-searching/all-reports-with-searching.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/reports/all-reports-with-searching/all-reports-with-searching.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AllReportsWithSearchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsWithSearchingComponent", function() { return AllReportsWithSearchingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AllReportsWithSearchingComponent {
    // dtExportButtonOptions: any = {}; //Datatable variable
    // dataSub: any;
    // StatementTypeService: any;
    // characters: any;
    // timeLeft: number;
    //object created to get data when row is clicked
    //  message = {
    //   Code: "",
    // };
    //function for delete button clicked
    // delClickHandler(info:any):void  {
    //   this.message.Code=info.Code;
    //       Swal.fire({
    //     title: 'Are you sure?',
    //     text: "Do you want to delete Statement Code." + this.message.Code + "  data", 
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#229954',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         'Deleted!',
    //         'Your data has been deleted.',
    //         'success'
    //       )
    //     } else if (
    //       result.dismiss === Swal.DismissReason.cancel
    //     ) {
    //       Swal.fire(
    //         'Cancelled',
    //         'Your data is safe.',
    //         'error'
    //       )
    //     }
    //   })
    // } 
    constructor() { }
    ngOnInit() {
        // this.dtExportButtonOptions = {
        //   ajax: 'fake-data/0.RepoDataDemo.json',
        //   columns: [
        //     {
        //       title: 'Action',
        //       render: function (data: any, type: any, full: any) {
        //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
        //       }
        //     },
        //     {
        //       data: 'id',
        //       title: 'id'
        //     },
        //     {
        //       data: 'firstName',
        //       title: 'firstName'
        //     },
        //     {
        //       data: 'lastName',
        //       title: 'lastName'
        //     },
        //     {
        //       data: 'id',
        //       title: 'id'
        //     },
        //     {
        //       data: 'firstName',
        //       title: 'firstName'
        //     },
        //     {
        //       data: 'lastName',
        //       title: 'lastName'
        //     },
        //     {
        //       data: 'firstName',
        //       title: 'firstName'
        //     },
        //     {
        //       data: 'lastName',
        //       title: 'lastName'
        //     },
        //     {
        //       data: 'firstName',
        //       title: 'firstName'
        //     },
        //     {
        //       data: 'lastName',
        //       title: 'lastName'
        //     },{
        //       data: 'firstName',
        //       title: 'firstName'
        //     },
        //     {
        //       data: 'lastName',
        //       title: 'lastName'
        //     }
        //    ],
        //   dom: 'Bfrtip',
        //   buttons: [
        //     'copy',
        //     'print',
        //     'excel',
        //     'csv'
        //   ],
        //    //row click handler code
        //    rowCallback: (row: Node, data: any[] | Object, index: number) => {
        //     const self = this;
        //     $('td', row).off('click');
        //     $('td', row).on('click', '#editbtn', () => {
        //       self.editClickHandler(data);
        //     });
        //     $('td', row).on('click', '#delbtn', () => {
        //       self.delClickHandler(data);
        //     });
        //     return row;
        //   }
        //  };
        // this.runTimer();
        // this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
        //   this.characters = options;
        // });
    }
}
AllReportsWithSearchingComponent.ɵfac = function AllReportsWithSearchingComponent_Factory(t) { return new (t || AllReportsWithSearchingComponent)(); };
AllReportsWithSearchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllReportsWithSearchingComponent, selectors: [["app-all-reports-with-searching"]], decls: 0, vars: 0, template: function AllReportsWithSearchingComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvYWxsLXJlcG9ydHMtd2l0aC1zZWFyY2hpbmcvYWxsLXJlcG9ydHMtd2l0aC1zZWFyY2hpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReportsWithSearchingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-reports-with-searching',
                templateUrl: './all-reports-with-searching.component.html',
                styleUrls: ['./all-reports-with-searching.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: allReportsWithSearchingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allReportsWithSearchingRoutingModule", function() { return allReportsWithSearchingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-reports-with-searching.component */ "./src/app/theme/reports/all-reports-with-searching/all-reports-with-searching.component.ts");





const routes = [
    {
        path: '',
        component: _all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__["AllReportsWithSearchingComponent"],
        data: {
            title: 'All Reports With Searching',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class allReportsWithSearchingRoutingModule {
}
allReportsWithSearchingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: allReportsWithSearchingRoutingModule });
allReportsWithSearchingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function allReportsWithSearchingRoutingModule_Factory(t) { return new (t || allReportsWithSearchingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](allReportsWithSearchingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](allReportsWithSearchingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AllReportsWithSearchingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsWithSearchingModule", function() { return AllReportsWithSearchingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-reports-with-searching.component */ "./src/app/theme/reports/all-reports-with-searching/all-reports-with-searching.component.ts");
/* harmony import */ var _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allReportsWithSearching-routing.module */ "./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");





// import {ChartModule} from 'angular2-chartjs';


class AllReportsWithSearchingModule {
}
AllReportsWithSearchingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AllReportsWithSearchingModule });
AllReportsWithSearchingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AllReportsWithSearchingModule_Factory(t) { return new (t || AllReportsWithSearchingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            // ChartModule
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AllReportsWithSearchingModule, { declarations: [_all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__["AllReportsWithSearchingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        // ChartModule
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReportsWithSearchingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    // ChartModule
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
                ],
                declarations: [_all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__["AllReportsWithSearchingComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=all-reports-with-searching-allReportsWithSearching-module.js.map