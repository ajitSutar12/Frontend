(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["t-dreceipt-type-master-t-dreceipt-type-master-module"],{

/***/ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TDReceiptTypeMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDReceiptTypeMasterRoutingModule", function() { return TDReceiptTypeMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _t_dreceipt_type_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-dreceipt-type-master.component */ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.component.ts");





const routes = [
    {
        path: '',
        component: _t_dreceipt_type_master_component__WEBPACK_IMPORTED_MODULE_2__["TDReceiptTypeMasterComponent"],
        data: {
            title: 'TD Receipt Type Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TDReceiptTypeMasterRoutingModule {
}
TDReceiptTypeMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TDReceiptTypeMasterRoutingModule });
TDReceiptTypeMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TDReceiptTypeMasterRoutingModule_Factory(t) { return new (t || TDReceiptTypeMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TDReceiptTypeMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TDReceiptTypeMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TDReceiptTypeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDReceiptTypeMasterComponent", function() { return TDReceiptTypeMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");








function TDReceiptTypeMasterComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TDReceiptTypeMasterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TDReceiptTypeMasterComponent_div_22_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.angForm.controls["ReceiptType"].errors == null ? null : ctx_r1.angForm.controls["ReceiptType"].errors.pattern) || (ctx_r1.angForm.controls["ReceiptType"].errors == null ? null : ctx_r1.angForm.controls["ReceiptType"].errors.required));
} }
function TDReceiptTypeMasterComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TDReceiptTypeMasterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TDReceiptTypeMasterComponent_div_31_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.angForm.controls["LastReceiptNo"].errors == null ? null : ctx_r2.angForm.controls["LastReceiptNo"].errors.pattern) || (ctx_r2.angForm.controls["LastReceiptNo"].errors == null ? null : ctx_r2.angForm.controls["LastReceiptNo"].errors.required));
} }
function TDReceiptTypeMasterComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.angForm.invalid);
} }
function TDReceiptTypeMasterComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TDReceiptTypeMasterComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TDReceiptTypeMasterComponent {
    constructor(fb) {
        this.fb = fb;
        this.dtExportButtonOptions = {};
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        //object created to get data when row is clicked
        this.message = {
            ReceiptType: "",
            LastReceiptNo: ""
        };
        this.createForm();
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/t_dreceipt_type.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Receipt Type',
                    data: 'ReceiptType'
                },
                {
                    title: 'Last Receipt No',
                    data: 'LastReceiptNo'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ],
            //row click handler code
            rowCallback: (row, data, index) => {
                const self = this;
                $('td', row).off('click');
                $('td', row).on('click', '#editbtn', () => {
                    self.editClickHandler(data);
                });
                $('td', row).on('click', '#delbtn', () => {
                    self.delClickHandler();
                });
                return row;
            }
        };
    }
    createForm() {
        this.angForm = this.fb.group({
            LastReceiptNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern],
            ReceiptType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]
        });
    }
    submit() {
        console.log(this.angForm.valid);
        if (this.angForm.valid) {
            console.log(this.angForm.value);
        }
    }
    //function toggle update to add button
    updateData() {
        this.showButton = true;
        this.updateShow = false;
    }
    //function for edit button clicked
    editClickHandler(info) {
        this.message.ReceiptType = info.ReceiptType;
        this.message.LastReceiptNo = info.LastReceiptNo;
        this.showButton = false;
        this.updateShow = true;
    }
    //function for delete button clicked
    delClickHandler() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your imaginary file is safe.', 'error');
            }
        });
    }
}
TDReceiptTypeMasterComponent.ɵfac = function TDReceiptTypeMasterComponent_Factory(t) { return new (t || TDReceiptTypeMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
TDReceiptTypeMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TDReceiptTypeMasterComponent, selectors: [["app-t-dreceipt-type-master"]], decls: 43, vars: 8, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [2, "float", "right"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "col-md"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "RECEIPT_TYPE", "placeholder", " ", "id", "ReceiptType", "required", "", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "ReceiptType", 1, "form-control", 3, "value"], ["for", "ReceiptType"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "LAST_RECEIPT_NO", "placeholder", " ", "id", "label-name", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "LastReceiptNo", 1, "form-control", 3, "value"], ["for", "label-name"], [1, "col-sm"], ["class", "btn btn-primary ripple light", 3, "disabled", 4, "ngIf"], ["class", "btn btn-primary ripple light", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "btn", "btn-primary", "ripple", "light", 3, "disabled"], [1, "btn", "btn-primary", "ripple", "light", 3, "click"]], template: function TDReceiptTypeMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TD Receipt Type Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TDReceiptTypeMasterComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Receipt Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TDReceiptTypeMasterComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Receipt No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TDReceiptTypeMasterComponent_div_31_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TDReceiptTypeMasterComponent_button_33_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TDReceiptTypeMasterComponent_button_34_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.ReceiptType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["ReceiptType"].invalid && (ctx.angForm.controls["ReceiptType"].dirty || ctx.angForm.controls["ReceiptType"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.LastReceiptNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["LastReceiptNo"].invalid && (ctx.angForm.controls["LastReceiptNo"].dirty || ctx.angForm.controls["LastReceiptNo"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9wb2xpY3ktc2V0dGluZ3MvdC1kcmVjZWlwdC10eXBlLW1hc3Rlci90LWRyZWNlaXB0LXR5cGUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TDReceiptTypeMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-t-dreceipt-type-master',
                templateUrl: './t-dreceipt-type-master.component.html',
                styleUrls: ['./t-dreceipt-type-master.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: TDReceiptTypeMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDReceiptTypeMasterModule", function() { return TDReceiptTypeMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _t_dreceipt_type_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-dreceipt-type-master.component */ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.component.ts");
/* harmony import */ var _t_dreceipt_type_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t-dreceipt-type-master-routing.module */ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








class TDReceiptTypeMasterModule {
}
TDReceiptTypeMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TDReceiptTypeMasterModule });
TDReceiptTypeMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TDReceiptTypeMasterModule_Factory(t) { return new (t || TDReceiptTypeMasterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _t_dreceipt_type_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["TDReceiptTypeMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TDReceiptTypeMasterModule, { declarations: [_t_dreceipt_type_master_component__WEBPACK_IMPORTED_MODULE_2__["TDReceiptTypeMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _t_dreceipt_type_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["TDReceiptTypeMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TDReceiptTypeMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _t_dreceipt_type_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["TDReceiptTypeMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                declarations: [_t_dreceipt_type_master_component__WEBPACK_IMPORTED_MODULE_2__["TDReceiptTypeMasterComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=t-dreceipt-type-master-t-dreceipt-type-master-module.js.map