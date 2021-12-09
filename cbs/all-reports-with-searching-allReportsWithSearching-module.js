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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AllReportsWithSearchingComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllReportsWithSearchingComponent_tr_28_Template_button_click_7_listener() { const item_r2 = ctx.$implicit; return item_r2.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2 == null ? null : item_r2.file == null ? null : item_r2.file.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, (item_r2 == null ? null : item_r2.file == null ? null : item_r2.file.size) / 1024 / 1024, ".2"), " MB ");
} }
const URL = 'http://localhost:3000/fileupload/';
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
    constructor() {
        // editClickHandler(data: Object | any[]) {
        //   throw new Error('Method not implemented.');
        // }
        // runTimer() {
        //   const timer = setInterval(() => {
        //     this.timeLeft -= 1;
        //     if (this.timeLeft === 0) {
        //       clearInterval(timer);
        //     }
        //   }, 1000);
        // }
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: URL,
            disableMultipart: false,
            autoUpload: true,
            method: 'post',
            itemAlias: 'attachment',
            allowedFileType: ['image', 'pdf']
        });
    }
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
    onFileSelected(event) {
        const file = event[0];
        console.log(file);
    }
}
AllReportsWithSearchingComponent.ɵfac = function AllReportsWithSearchingComponent_Factory(t) { return new (t || AllReportsWithSearchingComponent)(); };
AllReportsWithSearchingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllReportsWithSearchingComponent, selectors: [["app-all-reports-with-searching"]], decls: 29, vars: 2, consts: [[1, "card"], [1, "container", "mt-5", "mb-5"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["for", "files", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], [1, "hidden-file"], ["type", "file", "ng2FileSelect", "", 3, "uploader", "onFileSelected"], ["fileInput", ""], [1, "btn-group", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-group-icon", "btn-group-divider"], [1, "ion-plus-round"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-md-9", "mt-5"], [1, "table"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-danger", "btn-xs", 3, "click"], [1, "glyphicon", "glyphicon-trash"]], template: function AllReportsWithSearchingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileSelected", function AllReportsWithSearchingComponent_Template_input_onFileSelected_10_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllReportsWithSearchingComponent_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AllReportsWithSearchingComponent_tr_28_Template, 10, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uploader.queue);
    } }, directives: [ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvYWxsLXJlcG9ydHMtd2l0aC1zZWFyY2hpbmcvYWxsLXJlcG9ydHMtd2l0aC1zZWFyY2hpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';





class AllReportsWithSearchingModule {
}
AllReportsWithSearchingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AllReportsWithSearchingModule });
AllReportsWithSearchingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AllReportsWithSearchingModule_Factory(t) { return new (t || AllReportsWithSearchingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            // ChartModule
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AllReportsWithSearchingModule, { declarations: [_all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__["AllReportsWithSearchingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        // ChartModule
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReportsWithSearchingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _allReportsWithSearching_routing_module__WEBPACK_IMPORTED_MODULE_3__["allReportsWithSearchingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    // ChartModule
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
                ],
                declarations: [_all_reports_with_searching_component__WEBPACK_IMPORTED_MODULE_2__["AllReportsWithSearchingComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=all-reports-with-searching-allReportsWithSearching-module.js.map