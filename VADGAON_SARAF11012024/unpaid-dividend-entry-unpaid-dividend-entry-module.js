(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unpaid-dividend-entry-unpaid-dividend-entry-module"],{

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

/***/ "./src/app/shared/elements/scheme1.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/elements/scheme1.service.ts ***!
  \****************************************************/
/*! exports provided: Scheme1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheme1Service", function() { return Scheme1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class Scheme1Service {
    getCharacters() {
        return this.cloneOptions(Scheme1Service.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(Scheme1Service.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(Scheme1Service.PLAYER_ONE);
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
Scheme1Service.PLAYER_ONE = [
    { value: '0', label: '111' },
    { value: '1', label: '222' },
    { value: '2', label: '333' },
    { value: '3', label: 'NA' }
];
Scheme1Service.ɵfac = function Scheme1Service_Factory(t) { return new (t || Scheme1Service)(); };
Scheme1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Scheme1Service, factory: Scheme1Service.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scheme1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: UnpaidDividendEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpaidDividendEntryRoutingModule", function() { return UnpaidDividendEntryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unpaid-dividend-entry.component */ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.component.ts");





const routes = [
    {
        path: '',
        component: _unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_2__["UnpaidDividendEntryComponent"],
        data: {
            title: 'Unpaid Dividend Entry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class UnpaidDividendEntryRoutingModule {
}
UnpaidDividendEntryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpaidDividendEntryRoutingModule });
UnpaidDividendEntryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpaidDividendEntryRoutingModule_Factory(t) { return new (t || UnpaidDividendEntryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpaidDividendEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpaidDividendEntryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UnpaidDividendEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpaidDividendEntryComponent", function() { return UnpaidDividendEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/elements/memberno.service */ "./src/app/shared/elements/memberno.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");










function UnpaidDividendEntryComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnpaidDividendEntryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnpaidDividendEntryComponent_div_19_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.angForm.controls["Scheme"].errors == null ? null : ctx_r1.angForm.controls["Scheme"].errors.required);
} }
function UnpaidDividendEntryComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnpaidDividendEntryComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnpaidDividendEntryComponent_div_31_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.angForm.controls["MemberNo"].errors == null ? null : ctx_r2.angForm.controls["MemberNo"].errors.pattern) || (ctx_r2.angForm.controls["MemberNo"].errors == null ? null : ctx_r2.angForm.controls["MemberNo"].errors.required));
} }
function UnpaidDividendEntryComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.angForm.invalid);
} }
function UnpaidDividendEntryComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnpaidDividendEntryComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UnpaidDividendEntryComponent {
    constructor(fb, Scheme1Service, MembernoService) {
        this.fb = fb;
        this.Scheme1Service = Scheme1Service;
        this.MembernoService = MembernoService;
        this.dtExportButtonOptions = {};
        this.a = this.Scheme1Service.getCharacters();
        this.b = this.MembernoService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.dataSub = null;
        this.showButton = true;
        this.updateShow = false;
        this.message = {
            Scheme: " ",
            DividendAmount: " ",
            MemberNo: " ",
        };
        this.createForm();
    }
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/unpaid-dividend.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm"id="editbtn">Edit</button>' + ' ' + '<button  id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Scheme',
                    data: 'Scheme'
                }, {
                    title: 'Dividend Amount',
                    data: 'DividendAmount'
                }, {
                    title: 'Member No.',
                    data: 'MemberNo'
                }, {
                    title: 'Warrant Date',
                    data: 'WarrantDate'
                }, {
                    title: 'From Year',
                    data: 'FromYear'
                }, {
                    title: 'To Year',
                    data: 'ToYear'
                }
            ],
            dom: "Blrtip",
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ],
            rowCallback: (row, data, index) => {
                const self = this;
                $('td', row).off('click');
                $('td', row).on('click', '#editbtn', () => {
                    self.editClickHandler(data);
                });
                $('td', row).on('click', '#delbtn', () => {
                    self.delClickHandler(data);
                });
                return row;
            }
        };
        this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub = this.MembernoService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
    }
    runTimer() {
        const timer = setInterval(() => {
            this.timeLeft -= 1;
            if (this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    createForm() {
        this.angForm = this.fb.group({
            Scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            MemberNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            DividendAmount: ['',]
        });
    }
    submit() {
        console.log(this.angForm.valid);
        if (this.angForm.valid) {
            console.log(this.angForm.value);
        }
    }
    //  editClickHandler function for edit button clicked
    editClickHandler(info) {
        this.message.Scheme = info.Scheme;
        this.message.DividendAmount = info.DividendAmount;
        this.message.MemberNo = info.MemberNo;
        this.showButton = false;
        this.updateShow = true;
    }
    // updateData function for update data 
    updateData() {
        this.showButton = true;
        this.updateShow = false;
        // this.form.reset();
    }
    /**
    * delClickHandler function for delete button
      Swal sweetalert2
      @Swal.fire open a modal window to display message
    */
    //function for delete button clicked
    delClickHandler(info) {
        this.message.Scheme = info.Scheme;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete scheme." + this.message.Scheme + "  data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
}
UnpaidDividendEntryComponent.ɵfac = function UnpaidDividendEntryComponent_Factory(t) { return new (t || UnpaidDividendEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_3__["Scheme1Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_4__["MembernoService"])); };
UnpaidDividendEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnpaidDividendEntryComponent, selectors: [["app-unpaid-dividend-entry"]], decls: 43, vars: 15, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [2, "float", "right"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm"], [1, "form-group", "form-primary", "form-static-label"], ["placeholder", "Scheme *", "required", "", "title", "Compulsory Selection", "formControlName", "Scheme", 3, "ngClass", "options", "multiple"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "DividendAmount", "placeholder", " ", "id", "DividendAmount", "formControlName", "DividendAmount", 1, "form-control", 3, "value"], ["for", "DividendAmount"], ["placeholder", "Member No *", "required", "", "title", "Compulsory Selection", "formControlName", "MemberNo", 3, "ngClass", "options", "multiple"], ["class", "btn btn-primary ripple light", 3, "disabled", 4, "ngIf"], ["class", "btn btn-primary ripple light", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "btn", "btn-primary", "ripple", "light", 3, "disabled"], [1, "btn", "btn-primary", "ripple", "light", 3, "click"]], template: function UnpaidDividendEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Unpaid Dividend Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UnpaidDividendEntryComponent_Template_form_ngSubmit_10_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UnpaidDividendEntryComponent_div_19_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dividend Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UnpaidDividendEntryComponent_div_31_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UnpaidDividendEntryComponent_button_33_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UnpaidDividendEntryComponent_button_34_Template, 2, 0, "button", 19);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.a)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.Scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Scheme"].invalid && (ctx.angForm.controls["Scheme"].dirty || ctx.angForm.controls["Scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.DividendAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.b)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.MemberNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["MemberNo"].invalid && (ctx.angForm.controls["MemberNo"].dirty || ctx.angForm.controls["MemberNo"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9zaGFyZXMvdW5wYWlkLWRpdmlkZW5kLWVudHJ5L3VucGFpZC1kaXZpZGVuZC1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpaidDividendEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unpaid-dividend-entry',
                templateUrl: './unpaid-dividend-entry.component.html',
                styleUrls: ['./unpaid-dividend-entry.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_3__["Scheme1Service"] }, { type: _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_4__["MembernoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: UnpaidDividendEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnpaidDividendEntryModule", function() { return UnpaidDividendEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpaid-dividend-entry-routing.module */ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry-routing.module.ts");
/* harmony import */ var _unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unpaid-dividend-entry.component */ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.component.ts");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/memberno.service */ "./src/app/shared/elements/memberno.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");













class UnpaidDividendEntryModule {
}
UnpaidDividendEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnpaidDividendEntryModule });
UnpaidDividendEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnpaidDividendEntryModule_Factory(t) { return new (t || UnpaidDividendEntryModule)(); }, providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__["Scheme1Service"], _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_6__["MembernoService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnpaidDividendEntryRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnpaidDividendEntryModule, { declarations: [_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["UnpaidDividendEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnpaidDividendEntryRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnpaidDividendEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnpaidDividendEntryRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ],
                declarations: [_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["UnpaidDividendEntryComponent"]],
                providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__["Scheme1Service"], _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_6__["MembernoService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=unpaid-dividend-entry-unpaid-dividend-entry-module.js.map