(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["n-paclassification-slab-master-n-paclassification-slab-master-module"],{

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

/***/ "./src/app/shared/elements/npcslab-master.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/elements/npcslab-master.service.ts ***!
  \***********************************************************/
/*! exports provided: npcslabMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "npcslabMasterService", function() { return npcslabMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class npcslabMasterService {
    getCharacters() {
        return this.cloneOptions(npcslabMasterService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(npcslabMasterService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(npcslabMasterService.PLAYER_ONE);
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
npcslabMasterService.PLAYER_ONE = [
    { value: '0', label: 'Standard' },
    { value: '1', label: 'Sub Standard' },
    { value: '2', label: 'Heading' },
    { value: '3', label: 'Doubtful Assets' },
    { value: '4', label: 'Loss Assets' }
];
npcslabMasterService.ɵfac = function npcslabMasterService_Factory(t) { return new (t || npcslabMasterService)(); };
npcslabMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: npcslabMasterService, factory: npcslabMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](npcslabMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: NPAClassificationSlabMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPAClassificationSlabMasterRoutingModule", function() { return NPAClassificationSlabMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _n_paclassification_slab_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./n-paclassification-slab-master.component */ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.ts");





const routes = [
    {
        path: '',
        component: _n_paclassification_slab_master_component__WEBPACK_IMPORTED_MODULE_2__["NPAClassificationSlabMasterComponent"],
        data: {
            title: 'NPA Classification Slab Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class NPAClassificationSlabMasterRoutingModule {
}
NPAClassificationSlabMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NPAClassificationSlabMasterRoutingModule });
NPAClassificationSlabMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NPAClassificationSlabMasterRoutingModule_Factory(t) { return new (t || NPAClassificationSlabMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NPAClassificationSlabMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NPAClassificationSlabMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: NPAClassificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPAClassificationService", function() { return NPAClassificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class NPAClassificationService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/npa-classification-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/npa-classification-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/npa-classification-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/npa-classification-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/npa-classification-master/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
}
NPAClassificationService.ɵfac = function NPAClassificationService_Factory(t) { return new (t || NPAClassificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
NPAClassificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NPAClassificationService, factory: NPAClassificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NPAClassificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: NPAClassificationSlabMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPAClassificationSlabMasterComponent", function() { return NPAClassificationSlabMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _n_paclassification_slab_master_component_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./n-paclassification-slab-master.component.service */ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



// Angular Datatable Directive 













const _c0 = ["autofocus"];
function NPAClassificationSlabMasterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_div_24_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.angForm.controls["EFFECT_DATE"].errors == null ? null : ctx_r2.angForm.controls["EFFECT_DATE"].errors.required) || (ctx_r2.angForm.controls["EFFECT_DATE"].errors == null ? null : ctx_r2.angForm.controls["EFFECT_DATE"].errors.maxlength) || (ctx_r2.angForm.controls["EFFECT_DATE"].errors == null ? null : ctx_r2.angForm.controls["EFFECT_DATE"].errors.minlength));
} }
function NPAClassificationSlabMasterComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_div_31_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors == null ? null : ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors.pattern) || (ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors == null ? null : ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors.required) || (ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors == null ? null : ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors.minlength) || (ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors == null ? null : ctx_r3.angForm.controls["NPA_BASE_DAYS"].errors.maxlength));
} }
function NPAClassificationSlabMasterComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_div_81_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.angForm.controls["SECURED_PERCENT"].errors == null ? null : ctx_r5.angForm.controls["SECURED_PERCENT"].errors.pattern) || (ctx_r5.angForm.controls["SECURED_PERCENT"].errors == null ? null : ctx_r5.angForm.controls["SECURED_PERCENT"].errors.max) || (ctx_r5.angForm.controls["SECURED_PERCENT"].errors == null ? null : ctx_r5.angForm.controls["SECURED_PERCENT"].errors.minlength) || (ctx_r5.angForm.controls["SECURED_PERCENT"].errors == null ? null : ctx_r5.angForm.controls["SECURED_PERCENT"].errors.maxlength));
} }
function NPAClassificationSlabMasterComponent_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_div_91_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors == null ? null : ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors.pattern) || (ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors == null ? null : ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors.max) || (ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors == null ? null : ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors.minlength) || (ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors == null ? null : ctx_r7.angForm.controls["UNSECURED_PERCENT"].errors.maxlength));
} }
function NPAClassificationSlabMasterComponent_button_93_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_button_93_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Classification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_button_94_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_button_94_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.updateField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Classification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_tbody_120_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_tbody_120_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const indexOfelement_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.editField(indexOfelement_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_tbody_120_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const indexOfelement_r28 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.delField(indexOfelement_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r27 = ctx.$implicit;
    const indexOfelement_r28 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r28 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.NPA_CLASS === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.NPA_CLASS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.NPA_DESCRIPTION === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.NPA_DESCRIPTION === "" ? "-" : data_r27.NPA_DESCRIPTION, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.FROM_DAYS === "" || data_r27.FROM_DAYS === undefined || data_r27.FROM_DAYS === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.FROM_DAYS === "" || data_r27.FROM_DAYS === undefined || data_r27.FROM_DAYS === null ? "-" : data_r27.FROM_DAYS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.TO_DAYS === "" || data_r27.TO_DAYS === undefined || data_r27.TO_DAYS === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.TO_DAYS === "" || data_r27.TO_DAYS === undefined || data_r27.TO_DAYS === null ? "-" : data_r27.TO_DAYS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.FROM_MONTHS === "" || data_r27.FROM_MONTHS === undefined || data_r27.FROM_MONTHS === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.FROM_MONTHS === "" || data_r27.FROM_MONTHS === undefined || data_r27.FROM_MONTHS === null ? "-" : data_r27.FROM_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.TO_MONTHS === "" || data_r27.TO_MONTHS === undefined || data_r27.TO_MONTHS === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.TO_MONTHS === "" || data_r27.TO_MONTHS === undefined || data_r27.TO_MONTHS === null ? "-" : data_r27.TO_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.SECURED_PERCENT === "" || data_r27.SECURED_PERCENT === undefined || data_r27.SECURED_PERCENT === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.SECURED_PERCENT === "" || data_r27.SECURED_PERCENT === undefined || data_r27.SECURED_PERCENT === null ? "-" : data_r27.SECURED_PERCENT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r27.UNSECURED_PERCENT === "" || data_r27.UNSECURED_PERCENT === undefined || data_r27.UNSECURED_PERCENT === null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r27.UNSECURED_PERCENT === "" || data_r27.UNSECURED_PERCENT === undefined || data_r27.UNSECURED_PERCENT === null ? "-" : data_r27.UNSECURED_PERCENT, "");
} }
function NPAClassificationSlabMasterComponent_tbody_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_tbody_120_tr_1_Template, 23, 17, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.multiField);
} }
function NPAClassificationSlabMasterComponent_tbody_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_button_124_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_button_124_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.submit(ctx_r32.angForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.angForm.invalid);
} }
function NPAClassificationSlabMasterComponent_button_125_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_button_125_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NPAClassificationSlabMasterComponent_button_127_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_button_127_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.angForm.invalid);
} }
function NPAClassificationSlabMasterComponent_tbody_136_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NPAClassificationSlabMasterComponent_tbody_136_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const data_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.editClickHandler(data_r39.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r39.EFFECT_DATE === "" || data_r39.EFFECT_DATE == null ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r39.EFFECT_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r39.NPA_BASE_DAYS === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r39.NPA_BASE_DAYS, " ");
} }
function NPAClassificationSlabMasterComponent_tbody_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NPAClassificationSlabMasterComponent_tbody_136_tr_1_Template, 7, 4, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.INPAClass);
} }
function NPAClassificationSlabMasterComponent_tbody_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
// Handling datatable data
class DataTableResponse {
}
class NPAClassificationSlabMasterComponent {
    constructor(fb, npaservice, http) {
        this.fb = fb;
        this.npaservice = npaservice;
        this.http = http;
        //api 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.formSubmitted = false;
        // For reloading angular datatable after CRUD operation
        this.dtExportButtonOptions = {};
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        //variables for pagination
        this.page = 1;
        this.itemsPerPage = 10;
        this.currentJustify = 'start';
        this.active = 1;
        this.activeKeep = 1;
        //filter variable
        this.filterData = {};
        this.ngNPAClass = null;
        this.NPAClass = [
            { id: 'ST', label: 'Standard', subClassNo: '1' },
            { id: 'SS', label: 'Sub Standard', subClassNo: '1' },
            { id: 'DB', label: 'Doubtful Assets1', subClassNo: '1' },
            { id: 'DB', label: 'Doubtful Assets2', subClassNo: '2' },
            { id: 'DB', label: 'Doubtful Assets3', subClassNo: '3' },
            { id: 'LS', label: 'Loss Assets', subClassNo: '1' },
            { id: 'H', label: '--Heading--', subClassNo: '1' },
        ];
        this.multiField = [];
        //variable to get ID to update
        this.updateID = 0;
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        this.addShowButton = true;
        this.UpdateShowButton = false;
        this.newbtnShow = false;
        this.isDisableMonth = false;
        this.isDisableDay = false;
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                dataTableParameters['filterData'] = this.filterData;
                this.http
                    .post(this.url + '/npa-classification-master', dataTableParameters).subscribe(resp => {
                    this.INPAClass = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsTotal,
                        data: []
                    });
                });
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action',
                },
                {
                    data: 'EFFECT_DATE',
                    title: 'Effect Date'
                },
                {
                    data: 'NPA_BASE_DAYS',
                    title: 'Base Days'
                }
            ],
            dom: "Blrtip",
        };
    }
    createForm() {
        this.angForm = this.fb.group({
            EFFECT_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            NPA_CLASS: ['',],
            SUB_CLASS_NO: [''],
            NPA_DESCRIPTION: ['',],
            FROM_MONTHS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            FROM_DAYS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            TO_MONTHS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            TO_DAYS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            SECURED_PERCENT: ['0.00', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            UNSECURED_PERCENT: ['0.00', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            NPA_BASE_DAYS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    selectedNPA() {
        if (this.ngNPAClass.id == "H") {
            this.angForm.controls['TO_DAYS'].disable();
            this.angForm.controls['FROM_MONTHS'].disable();
            this.angForm.controls['TO_MONTHS'].disable();
            this.angForm.controls['FROM_DAYS'].disable();
            this.angForm.controls['SECURED_PERCENT'].disable();
            this.angForm.controls['UNSECURED_PERCENT'].disable();
            this.angForm.patchValue({
                SECURED_PERCENT: 0.00,
                UNSECURED_PERCENT: 0.00,
                FROM_DAYS: '',
                FROM_MONTHS: '',
                TO_MONTHS: '',
                TO_DAYS: ''
            });
        }
        else {
            this.angForm.controls['TO_DAYS'].enable();
            this.angForm.controls['FROM_MONTHS'].enable();
            this.angForm.controls['TO_MONTHS'].enable();
            this.angForm.controls['FROM_DAYS'].enable();
            this.angForm.controls['SECURED_PERCENT'].enable();
            this.angForm.controls['UNSECURED_PERCENT'].enable();
        }
    }
    checkEffectDate() {
        let effectDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.angForm.controls['EFFECT_DATE'].value).format('DD/MM/YYYY');
        this.npaservice.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                if (data.find(data => data['EFFECT_DATE'] != (effectDate == ''))) {
                    if (data.find(data => data['EFFECT_DATE'] == effectDate)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            icon: 'info',
                            title: 'This Effect Date is Already Exist',
                        });
                        this.angForm.controls['EFFECT_DATE'].reset();
                    }
                }
            }
        });
    }
    //checks percentage of secured
    checkPercent(event) {
        if (Number(event) > 100) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Input percentage upto 100', 'info');
            this.angForm.patchValue({
                SECURED_PERCENT: '0.00'
            });
        }
    }
    //checks percentage of unsecured
    checkUnsecurePercent(event) {
        if (Number(event) > 100) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Input percentage upto 100', 'info');
            this.angForm.patchValue({
                UNSECURED_PERCENT: '0.00'
            });
        }
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    //enable/disable from month and to month
    disableMonth() {
        if (this.angForm.controls['FROM_DAYS'].value != '') {
            this.angForm.controls['FROM_MONTHS'].disable();
            this.angForm.controls['TO_MONTHS'].disable();
            this.isDisableMonth = true;
        }
        else {
            this.angForm.controls['FROM_MONTHS'].enable();
            this.angForm.controls['TO_MONTHS'].enable();
            this.angForm.controls['FROM_DAYS'].disable();
            this.angForm.controls['TO_DAYS'].disable();
            this.angForm.patchValue({
                FROM_DAYS: 0,
                TO_DAYS: 0
            });
            this.isDisableMonth = false;
        }
    }
    //enable/disable from Days and to Days
    disableDays() {
        if (this.angForm.controls['FROM_MONTHS'].value != '') {
            this.angForm.controls['FROM_DAYS'].disable();
            this.angForm.controls['TO_DAYS'].disable();
            this.isDisableDay = true;
        }
        else {
            this.angForm.controls['FROM_DAYS'].enable();
            this.angForm.controls['TO_DAYS'].enable();
            this.angForm.controls['FROM_MONTHS'].disable();
            this.angForm.controls['TO_MONTHS'].disable();
            this.angForm.patchValue({
                FROM_MONTHS: 0,
                TO_MONTHS: 0
            });
            this.isDisableDay = false;
        }
    }
    //compare from and to Days
    compareDays() {
        if (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Days Must Greater Than From Days', 'info');
            this.angForm.patchValue({
                TO_DAYS: ''
            });
        }
    }
    //compare from and to Month
    compareMonths() {
        if (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Months Must Greater Than From Months', 'info');
            this.angForm.patchValue({
                TO_MONTHS: ''
            });
        }
    }
    //add object into array
    addField() {
        let fromDay = document.getElementById("FROM_DAYS").value;
        let today = document.getElementById("TO_DAYS").value;
        let fromMonth = document.getElementById("FROM_MONTHS").value;
        let toMonth = document.getElementById("TO_MONTHS").value;
        let SECURED_PERCENT = document.getElementById("SECURED_PERCENT").value;
        let UNSECURED_PERCENT = document.getElementById("UNSECURED_PERCENT").value;
        if (this.ngNPAClass.id == "H") {
            const formVal = this.angForm.value;
            var object = {
                NPA_CLASS: this.ngNPAClass.id,
                SUB_CLASS_NO: this.ngNPAClass.subClassNo,
                NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
                FROM_MONTHS: formVal.FROM_MONTHS,
                FROM_DAYS: formVal.FROM_DAYS,
                TO_MONTHS: formVal.TO_MONTHS,
                TO_DAYS: formVal.TO_DAYS,
                SECURED_PERCENT: formVal.SECURED_PERCENT,
                UNSECURED_PERCENT: formVal.UNSECURED_PERCENT
            };
            this.multiField.push(object);
            this.resetField();
        }
        else {
            if (this.ngNPAClass == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Select NPA Class', 'info');
            }
            else if (this.isDisableDay == false && (fromDay == null || fromDay == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add From Days', 'info');
            }
            else if (this.isDisableMonth == false && (fromMonth == null || fromMonth == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add From Months', 'info');
            }
            else if (this.isDisableDay == false && (today == null || today == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add To Days', 'info');
            }
            else if (this.isDisableMonth == false && (toMonth == null || toMonth == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add To Months', 'info');
            }
            else if (SECURED_PERCENT == null || SECURED_PERCENT == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add Secured percentage', 'info');
            }
            else if (UNSECURED_PERCENT == null || UNSECURED_PERCENT == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add Unsecured percentage', 'info');
            }
            else if (this.isDisableDay == false && (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value))) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Days Must Greater Than From Days', 'info');
            }
            else if (this.isDisableMonth == false && (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value))) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Months Must Greater Than From Months', 'info');
            }
            else 
            // if ((Number(this.angForm.controls['TO_DAYS'].value) > Number(this.angForm.controls['FROM_DAYS'].value)) && (Number(this.angForm.controls['TO_MONTHS'].value) > Number(this.angForm.controls['FROM_MONTHS'].value)))
            {
                const formVal = this.angForm.value;
                var object = {
                    NPA_CLASS: this.ngNPAClass.id,
                    SUB_CLASS_NO: this.ngNPAClass.subClassNo,
                    NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
                    FROM_MONTHS: formVal.FROM_MONTHS,
                    FROM_DAYS: formVal.FROM_DAYS,
                    TO_MONTHS: formVal.TO_MONTHS,
                    TO_DAYS: formVal.TO_DAYS,
                    SECURED_PERCENT: formVal.SECURED_PERCENT,
                    UNSECURED_PERCENT: formVal.UNSECURED_PERCENT
                };
                this.multiField.push(object);
                this.resetField();
            }
        }
    }
    //edit multifield array element
    editField(id) {
        this.arrIndex = id;
        this.arrID = this.multiField[id].id;
        this.addShowButton = false;
        this.UpdateShowButton = true;
        if (this.multiField[id].FROM_DAYS != '' && this.multiField[id].FROM_DAYS != undefined) {
            this.angForm.controls['FROM_MONTHS'].disable();
            this.angForm.controls['TO_MONTHS'].disable();
            this.angForm.controls['FROM_DAYS'].enable();
            this.angForm.controls['TO_DAYS'].enable();
            this.isDisableMonth = true;
            this.isDisableDay = false;
        }
        else {
            this.angForm.controls['FROM_MONTHS'].enable();
            this.angForm.controls['TO_MONTHS'].enable();
            this.angForm.controls['FROM_DAYS'].disable();
            this.angForm.controls['TO_DAYS'].disable();
            this.isDisableMonth = false;
            this.isDisableDay = true;
        }
        if (this.multiField[id].NPA_CLASS == "H") {
            this.angForm.controls['TO_DAYS'].disable();
            this.angForm.controls['FROM_MONTHS'].disable();
            this.angForm.controls['TO_MONTHS'].disable();
            this.angForm.controls['FROM_DAYS'].disable();
            this.angForm.controls['SECURED_PERCENT'].disable();
            this.angForm.controls['UNSECURED_PERCENT'].disable();
        }
        else {
            this.angForm.controls['TO_DAYS'].enable();
            this.angForm.controls['FROM_MONTHS'].enable();
            this.angForm.controls['TO_MONTHS'].enable();
            this.angForm.controls['FROM_DAYS'].enable();
            this.angForm.controls['SECURED_PERCENT'].enable();
            this.angForm.controls['UNSECURED_PERCENT'].enable();
        }
        this.angForm.patchValue({
            NPA_CLASS: this.multiField[id].NPA_CLASS,
            NPA_DESCRIPTION: this.multiField[id].NPA_DESCRIPTION,
            FROM_MONTHS: this.multiField[id].FROM_MONTHS,
            FROM_DAYS: this.multiField[id].FROM_DAYS,
            TO_MONTHS: this.multiField[id].TO_MONTHS,
            TO_DAYS: this.multiField[id].TO_DAYS,
            SECURED_PERCENT: this.multiField[id].SECURED_PERCENT,
            UNSECURED_PERCENT: this.multiField[id].UNSECURED_PERCENT,
        });
    }
    //update object in multifield array
    updateField() {
        let fromDay = document.getElementById("FROM_DAYS").value;
        let today = document.getElementById("TO_DAYS").value;
        let fromMonth = document.getElementById("FROM_MONTHS").value;
        let toMonth = document.getElementById("TO_MONTHS").value;
        let SECURED_PERCENT = document.getElementById("SECURED_PERCENT").value;
        let UNSECURED_PERCENT = document.getElementById("UNSECURED_PERCENT").value;
        if (this.ngNPAClass.id == "H" || this.angForm.controls['NPA_CLASS'].value == "H") {
            let index = this.arrIndex;
            this.addShowButton = true;
            this.UpdateShowButton = false;
            const formVal = this.angForm.value;
            var object = {
                NPA_CLASS: this.ngNPAClass,
                SUB_CLASS_NO: this.ngNPAClass.subClassNo,
                NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
                FROM_MONTHS: formVal.FROM_MONTHS,
                FROM_DAYS: formVal.FROM_DAYS,
                TO_MONTHS: formVal.TO_MONTHS,
                TO_DAYS: formVal.TO_DAYS,
                SECURED_PERCENT: formVal.SECURED_PERCENT,
                UNSECURED_PERCENT: formVal.UNSECURED_PERCENT,
                id: this.arrID
            };
            if (typeof (formVal.NPA_CLASS) == 'string') {
                object['NPA_CLASS'] = formVal.NPA_CLASS;
            }
            else {
                object['NPA_CLASS'] = this.ngNPAClass.id;
            }
            this.multiField[index] = object;
            this.resetField();
            this.ngNPAClass = null;
        }
        else {
            if (this.ngNPAClass == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Select NPA Class', 'info');
            }
            else if (this.isDisableDay == false && (fromDay == null || fromDay == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add From Days', 'info');
            }
            else if (this.isDisableMonth == false && (fromMonth == null || fromMonth == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add From Months', 'info');
            }
            else if (this.isDisableDay == false && (today == null || today == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add To Days', 'info');
            }
            else if (this.isDisableMonth == false && (toMonth == null || toMonth == '')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add To Months', 'info');
            }
            else if (SECURED_PERCENT == null || SECURED_PERCENT == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add Secured percentage', 'info');
            }
            else if (UNSECURED_PERCENT == null || UNSECURED_PERCENT == '') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add Unsecured percentage', 'info');
            }
            else if (this.isDisableDay == false && (Number(this.angForm.controls['TO_DAYS'].value) <= Number(this.angForm.controls['FROM_DAYS'].value))) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Days Must Greater Than From Days', 'info');
            }
            else if (this.isDisableMonth == false && (Number(this.angForm.controls['TO_MONTHS'].value) <= Number(this.angForm.controls['FROM_MONTHS'].value))) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'To Months Must Greater Than From Months', 'info');
            }
            else {
                let index = this.arrIndex;
                this.addShowButton = true;
                this.UpdateShowButton = false;
                const formVal = this.angForm.value;
                var object = {
                    NPA_CLASS: this.ngNPAClass,
                    SUB_CLASS_NO: this.ngNPAClass.subClassNo,
                    NPA_DESCRIPTION: formVal.NPA_DESCRIPTION,
                    FROM_MONTHS: formVal.FROM_MONTHS,
                    FROM_DAYS: formVal.FROM_DAYS,
                    TO_MONTHS: formVal.TO_MONTHS,
                    TO_DAYS: formVal.TO_DAYS,
                    SECURED_PERCENT: formVal.SECURED_PERCENT,
                    UNSECURED_PERCENT: formVal.UNSECURED_PERCENT,
                    id: this.arrID
                };
                if (typeof (formVal.NPA_CLASS) == 'string') {
                    object['NPA_CLASS'] = formVal.NPA_CLASS;
                }
                else {
                    object['NPA_CLASS'] = this.ngNPAClass.id;
                }
                this.multiField[index] = object;
                this.resetField();
                this.ngNPAClass = null;
            }
        }
    }
    //delete array element
    delField(id) {
        this.multiField.splice(id, 1);
    }
    //reset multifield array
    resetField() {
        this.ngNPAClass = null;
        // this.angForm.controls['NPA_DESCRIPTION'].reset();
        // this.angForm.controls['FROM_MONTHS'].reset();
        // this.angForm.controls['FROM_DAYS'].reset();
        // this.angForm.controls['TO_MONTHS'].reset();
        // this.angForm.controls['TO_DAYS'].reset();
        this.angForm.patchValue({
            SECURED_PERCENT: 0.00,
            UNSECURED_PERCENT: 0.00,
            FROM_DAYS: '',
            NPA_DESCRIPTION: '',
            FROM_MONTHS: '',
            TO_MONTHS: '',
            TO_DAYS: ''
        });
        this.isDisableMonth = false;
        this.isDisableDay = false;
    }
    submit() {
        if (this.angForm.valid) {
            if (this.multiField.length != 0) {
                const formVal = this.angForm.value;
                const dataToSend = {
                    'EFFECT_DATE': moment__WEBPACK_IMPORTED_MODULE_6__(formVal.EFFECT_DATE).format('DD/MM/YYYY'),
                    'NPA_BASE_DAYS': formVal.NPA_BASE_DAYS,
                    'MultiField': this.multiField
                };
                this.npaservice.postData(dataToSend).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Success!", "Data Added Successfully !", "success");
                    // to reload after insertion of data
                    // this.rerender();
                    this.dtElement.dtInstance.then((dtInstance) => {
                        dtInstance.ajax.reload();
                    });
                }, (error) => {
                    console.log(error);
                });
                this.resetForm();
                this.multiField = [];
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Info', 'Please Add NPA Classification Details', 'info');
            }
        }
    }
    //Method for append data into fields
    editClickHandler(id) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.npaservice.getFormData(id).subscribe(data => {
            this.updatecheckdata = data;
            this.updateID = data.id;
            this.multiField = data.NPAClass;
            this.angForm.patchValue({
                'EFFECT_DATE': data.EFFECT_DATE,
                'NPA_BASE_DAYS': data.NPA_BASE_DAYS,
            });
        });
    }
    //Method for update data 
    updateData() {
        let data = this.angForm.value;
        let opdate;
        data['id'] = this.updateID;
        if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
            (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (opdate = '', data['EFFECT_DATE'] = opdate) : (opdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment__WEBPACK_IMPORTED_MODULE_6__(opdate).format('DD/MM/YYYY'));
        }
        data['MultiField'] = this.multiField;
        this.npaservice.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.multiField = [];
            this.ngNPAClass = null;
            this.resetForm();
        });
    }
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.resetForm();
    }
    resetForm() {
        this.createForm();
        this.multiField = [];
        this.ngNPAClass = null;
    }
    //function for delete button clicked
    delClickHandler(info) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Serial No.data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    ngAfterViewInit() {
        this.myInputField.nativeElement.focus();
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.columns().every(function () {
                const that = this;
                $('#table tfoot tr').appendTo('#table thead');
                $("input", this.footer()).on("keyup change", function () {
                    if (this["value"] != "") {
                        that.search(this["value"]).draw();
                    }
                    else {
                        that.search(this["value"]).draw();
                    }
                });
            });
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
NPAClassificationSlabMasterComponent.ɵfac = function NPAClassificationSlabMasterComponent_Factory(t) { return new (t || NPAClassificationSlabMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_n_paclassification_slab_master_component_service__WEBPACK_IMPORTED_MODULE_7__["NPAClassificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
NPAClassificationSlabMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NPAClassificationSlabMasterComponent, selectors: [["app-n-paclassification-slab-master"]], viewQuery: function NPAClassificationSlabMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtExportButtonOptions = _t.first);
    } }, decls: 146, vars: 25, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-4"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "EFFECT_DATE", "id", "EFFECT_DATE", "required", "", "minlength", "10", "maxlength", "10", "formControlName", "EFFECT_DATE", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngClass", "maxDate", "bsValue", "bsValueChange", "focusout", "keypress"], ["autofocus", ""], ["for", "EFFECT_DATE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-3"], ["type", "text", "name", "NPA_BASE_DAYS", "placeholder", " ", "pattern", "^[0-9]+$", "title", " Input allowed only  0-9", "minlength", "1", "maxlength", "4", "id", "NPA_BASE_DAYS", "formControlName", "NPA_BASE_DAYS", 1, "form-control", 2, "text-align", "right", 3, "focus", "keypress"], ["for", "NPA_BASE_DAYS"], [1, "form-group", "form-primary", "form-static-label"], ["id", "NPA_CLASS", "bindLabel", "label", "formControlName", "NPA_CLASS", "placeholder", "NPA Class", 3, "items", "ngModel", "change", "ngModelChange"], ["for", "NPA_CLASS"], ["type", "text", "name", "NPA_DESCRIPTION", "formControlName", "NPA_DESCRIPTION", "placeholder", " ", "maxlength", "60", "id", "NPA_DESCRIPTION", 1, "form-control"], ["for", "NPA_DESCRIPTION"], [1, "col-sm-2"], ["type", "text", "name", "FROM_DAYS", "placeholder", " ", "id", "FROM_DAYS", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "maxlength", "4", "formControlName", "FROM_DAYS", 1, "form-control", 2, "text-align", "right", 3, "focus", "focusout", "keypress"], ["for", "FROM_DAYS"], ["type", "text", "name", "FROM_MONTHS", "placeholder", " ", "id", "FROM_MONTHS", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "maxlength", "4", "formControlName", "FROM_MONTHS", 1, "form-control", 2, "text-align", "right", 3, "focus", "keypress", "focusout"], ["for", "FROM_MONTHS"], ["type", "text", "name", "TO_DAYS", "placeholder", " ", "id", "TO_DAYS", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "maxlength", "4", "formControlName", "TO_DAYS", 1, "form-control", 2, "text-align", "right", 3, "keypress", "focus", "focusout"], ["for", "TO_DAYS"], ["type", "text", "name", "TO_MONTHS", "placeholder", " ", "id", "TO_MONTHS", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "maxlength", "4", "formControlName", "TO_MONTHS", 1, "form-control", 2, "text-align", "right", 3, "focusout", "focus", "keypress"], ["for", "TO_MONTHS"], ["type", "text", "name", "SECURED_PERCENT", "placeholder", " ", "id", "SECURED_PERCENT", "pattern", "\\d{1,3}(\\.\\d{1,2})?", "max", "100", "maxlength", "5", "title", "Input allowed only 0-9", "formControlName", "SECURED_PERCENT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "keypress"], ["secure", ""], ["for", "SECURED_PERCENT"], ["type", "text", "name", "UNSECURED_PERCENT", "placeholder", " ", "id", "UNSECURED_PERCENT", "pattern", "\\d{1,3}(\\.\\d{1,2})?", "title", "Input allowed only 0-9", "max", "100", "maxlength", "5", "formControlName", "UNSECURED_PERCENT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "keypress"], ["unsecure", ""], ["for", "UNSECURED_PERCENT"], [1, "col-sm"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [4, "ngIf"], [1, "col-sm", 2, "float", "right"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], [1, "card", "shadow"], ["id", "table", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "EFFECT_DATE", 1, "form-control"], ["type", "text", "name", "NPA_BASE_DAYS", 1, "form-control"], [1, "alert", "alert-danger"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["id", "deletebutton", "placement", "bottom", "ngbTooltip", "Delete", 1, "fa", "fa-fw", "fa-trash-o", 3, "click"], [1, "td_right"], [3, "ngClass"], ["colspan", "10", 1, "no-data-available", 2, "text-align", "center"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "10", 1, "no-data-available"]], template: function NPAClassificationSlabMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NPA Classification Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function NPAClassificationSlabMasterComponent_Template_input_bsValueChange_18_listener() { return ctx.checkEffectDate(); })("focusout", function NPAClassificationSlabMasterComponent_Template_input_focusout_18_listener() { return ctx.checkEffectDate(); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_18_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Effective Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NPAClassificationSlabMasterComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_28_listener($event) { return ctx.selectAllContent($event); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_28_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Base Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NPAClassificationSlabMasterComponent_div_31_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NPAClassificationSlabMasterComponent_Template_ng_select_change_36_listener() { return ctx.selectedNPA(); })("ngModelChange", function NPAClassificationSlabMasterComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.ngNPAClass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NPA Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "NPA Class Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_50_listener($event) { return ctx.selectAllContent($event); })("focusout", function NPAClassificationSlabMasterComponent_Template_input_focusout_50_listener() { return ctx.disableMonth(); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_50_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "From Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_56_listener($event) { return ctx.selectAllContent($event); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_56_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function NPAClassificationSlabMasterComponent_Template_input_focusout_56_listener() { return ctx.disableDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "From Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_63_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_63_listener($event) { return ctx.selectAllContent($event); })("focusout", function NPAClassificationSlabMasterComponent_Template_input_focusout_63_listener() { return ctx.compareDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "To Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function NPAClassificationSlabMasterComponent_Template_input_focusout_69_listener() { return ctx.compareMonths(); })("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_69_listener($event) { return ctx.selectAllContent($event); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_69_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "To Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_75_listener($event) { return ctx.selectAllContent($event); })("keyup", function NPAClassificationSlabMasterComponent_Template_input_keyup_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76); return ctx.checkPercent(_r4.value); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_75_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Secured Percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, NPAClassificationSlabMasterComponent_div_81_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NPAClassificationSlabMasterComponent_Template_input_focus_85_listener($event) { return ctx.selectAllContent($event); })("keyup", function NPAClassificationSlabMasterComponent_Template_input_keyup_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86); return ctx.checkUnsecurePercent(_r6.value); })("keypress", function NPAClassificationSlabMasterComponent_Template_input_keypress_85_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Unsecured Percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, NPAClassificationSlabMasterComponent_div_91_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, NPAClassificationSlabMasterComponent_button_93_Template, 2, 0, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, NPAClassificationSlabMasterComponent_button_94_Template, 2, 0, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Serial No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "NPA Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "NPA Class Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "From Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "To Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "From Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "To Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Secured Percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "UnSecured Percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, NPAClassificationSlabMasterComponent_tbody_120_Template, 2, 1, "tbody", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, NPAClassificationSlabMasterComponent_tbody_121_Template, 4, 0, "tbody", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, NPAClassificationSlabMasterComponent_button_124_Template, 2, 1, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, NPAClassificationSlabMasterComponent_button_125_Template, 2, 0, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, NPAClassificationSlabMasterComponent_button_127_Template, 2, 1, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, NPAClassificationSlabMasterComponent_tbody_136_Template, 2, 1, "tbody", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, NPAClassificationSlabMasterComponent_tbody_137_Template, 4, 0, "tbody", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tfoot", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx.formSubmitted))("maxDate", ctx.maxDate)("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["EFFECT_DATE"].invalid && (ctx.angForm.controls["EFFECT_DATE"].dirty || ctx.angForm.controls["EFFECT_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["NPA_BASE_DAYS"].invalid && (ctx.angForm.controls["NPA_BASE_DAYS"].dirty || ctx.angForm.controls["NPA_BASE_DAYS"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.NPAClass)("ngModel", ctx.ngNPAClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["SECURED_PERCENT"].invalid && (ctx.angForm.controls["SECURED_PERCENT"].dirty || ctx.angForm.controls["SECURED_PERCENT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["UNSECURED_PERCENT"].invalid && (ctx.angForm.controls["UNSECURED_PERCENT"].dirty || ctx.angForm.controls["UNSECURED_PERCENT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addShowButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UpdateShowButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.multiField == null ? null : ctx.multiField.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.multiField == null ? null : ctx.multiField.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.INPAClass == null ? null : ctx.INPAClass.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.INPAClass == null ? null : ctx.INPAClass.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9wb2xpY3ktc2V0dGluZ3Mvbi1wYWNsYXNzaWZpY2F0aW9uLXNsYWItbWFzdGVyL24tcGFjbGFzc2lmaWNhdGlvbi1zbGFiLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NPAClassificationSlabMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-n-paclassification-slab-master',
                templateUrl: './n-paclassification-slab-master.component.html',
                styleUrls: ['./n-paclassification-slab-master.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _n_paclassification_slab_master_component_service__WEBPACK_IMPORTED_MODULE_7__["NPAClassificationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, { myInputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["autofocus"]
        }], dtExportButtonOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NPAClassificationSlabMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPAClassificationSlabMasterModule", function() { return NPAClassificationSlabMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _n_paclassification_slab_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./n-paclassification-slab-master.component */ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.component.ts");
/* harmony import */ var _n_paclassification_slab_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./n-paclassification-slab-master-routing.module */ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_npcslab_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/npcslab-master.service */ "./src/app/shared/elements/npcslab-master.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");














class NPAClassificationSlabMasterModule {
}
NPAClassificationSlabMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NPAClassificationSlabMasterModule });
NPAClassificationSlabMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NPAClassificationSlabMasterModule_Factory(t) { return new (t || NPAClassificationSlabMasterModule)(); }, providers: [_shared_elements_npcslab_master_service__WEBPACK_IMPORTED_MODULE_7__["npcslabMasterService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _n_paclassification_slab_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["NPAClassificationSlabMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NPAClassificationSlabMasterModule, { declarations: [_n_paclassification_slab_master_component__WEBPACK_IMPORTED_MODULE_4__["NPAClassificationSlabMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _n_paclassification_slab_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["NPAClassificationSlabMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NPAClassificationSlabMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _n_paclassification_slab_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["NPAClassificationSlabMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
                ],
                declarations: [_n_paclassification_slab_master_component__WEBPACK_IMPORTED_MODULE_4__["NPAClassificationSlabMasterComponent"]],
                providers: [_shared_elements_npcslab_master_service__WEBPACK_IMPORTED_MODULE_7__["npcslabMasterService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=n-paclassification-slab-master-n-paclassification-slab-master-module.js.map