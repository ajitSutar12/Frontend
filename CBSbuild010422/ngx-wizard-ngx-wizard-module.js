(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ngx-wizard-ngx-wizard-module"],{

/***/ "./src/app/theme/forms/ngx-wizard/address/address.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/address/address.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AddressComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddressComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddressComponent {
    constructor(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Where do you live?';
    }
    ngOnInit() {
        this.address = this.formDataService.getAddress();
    }
    save(form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setAddress(this.address);
        const firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    cancel() {
        this.router.navigate(['work'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
AddressComponent.ɵfac = function AddressComponent_Factory(t) { return new (t || AddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
AddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddressComponent, selectors: [["app-mt-wizard-address"]], decls: 45, vars: 10, consts: [["novalidate", "", 1, "editForm"], ["addressForm", "ngForm"], [1, "tab-pane", "active"], [1, "head", "text-center"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "street", 1, "form-control-label"], ["required", "", "id", "street", "name", "street", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], [1, "col-12", "col-sm-4"], ["for", "city", 1, "form-control-label"], ["required", "", "id", "city", "name", "city", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], [1, "col-4", "col-sm-offset-1", "col-sm-3"], ["for", "state", 1, "form-control-label"], ["required", "", "id", "state", "name", "state", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["state", "ngModel"], [1, "col-offset-1", "col-7", "col-sm-offset-1", "col-sm-3"], ["for", "zip", 1, "form-control-label"], ["required", "", "id", "zip", "name", "zip", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["zip", "ngModel"], [1, "form-group", "text-center"], ["uiSref", "work", "type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "click"], [2, "margin-right", "10px"], [1, "feather", "icon-chevron-left"], ["uiSref", "result", "type", "button", 1, "btn", "btn-raised", "btn-info", 3, "disabled", "click"], [2, "margin-left", "10px"], [1, "feather", "icon-chevron-right"], [1, "form-text", "text-danger"]], template: function AddressComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_11_listener($event) { return ctx.address.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddressComponent_small_13_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_19_listener($event) { return ctx.address.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddressComponent_small_21_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_26_listener($event) { return ctx.address.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddressComponent_small_28_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddressComponent_Template_input_ngModelChange_33_listener($event) { return ctx.address.zip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddressComponent_small_35_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressComponent_Template_button_click_37_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.save(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.valid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address.zip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Zvcm1zL25neC13aXphcmQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mt-wizard-address',
                templateUrl: './address.component.html',
                styleUrls: ['./address.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }, { type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/data/formData.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/data/formData.model.ts ***!
  \***************************************************************/
/*! exports provided: FormData, Personal, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
class FormData {
    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
class Personal {
}
class Address {
}


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/data/formData.service.ts ***!
  \*****************************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/theme/forms/ngx-wizard/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");





class FormDataService {
    constructor(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    getPersonal() {
        const personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    }
    setPersonal(data) {
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].personal);
    }
    getWork() {
        return this.formData.work;
    }
    setWork(data) {
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].work);
    }
    getAddress() {
        const address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }
    setAddress(data) {
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].address);
    }
    getFormData() {
        return this.formData;
    }
    resetFormData() {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }
    isFormValid() {
        return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
    }
}
FormDataService.ɵfac = function FormDataService_Factory(t) { return new (t || FormDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"])); };
FormDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormDataService, factory: FormDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class NavbarComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.page = 'Personal';
    }
    ngOnInit() {
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(event => {
            let currentRoute = this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            this.page = currentRoute.snapshot.data['title'];
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-msw-navbar"]], decls: 28, vars: 4, consts: [["id", "status-buttons", 1, "board-inner"], ["id", "myTab", 1, "nav", "nav-tabs", "nav-fill"], [1, "liner"], [1, "active", "nav-item"], ["uiSrefActive", "active", "uiSref", "personal", "data-toggle", "tab", "title", "personal", 3, "ngClass"], [1, "round-tabs", "one"], [1, "feather", "icon-user-check"], [1, "nav-item"], ["uiSrefActive", "active", "uiSref", "work", "data-toggle", "tab", "title", "work", 3, "ngClass"], [1, "round-tabs", "two"], [1, "feather", "icon-message-circle"], ["uiSrefActive", "active", "uiSref", "address", "data-toggle", "tab", "title", "address", 3, "ngClass"], [1, "round-tabs", "three"], [1, "feather", "icon-map"], ["uiSrefActive", "active", "uiSref", "result", "data-toggle", "tab", "title", "completed", 3, "ngClass"], [1, "round-tabs", "four"], [1, "feather", "icon-airplay"], [1, "clearfix"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Personal" ? "nav-link active" : "nav-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Work" ? "nav-link active" : "nav-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Address" ? "nav-link active" : "nav-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Result" ? "nav-link active" : "nav-link");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Zvcm1zL25neC13aXphcmQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-msw-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/ngx-wizard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NGXWizardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXWizardRoutingModule", function() { return NGXWizardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/theme/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "./src/app/theme/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address/address.component */ "./src/app/theme/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/result.component */ "./src/app/theme/forms/ngx-wizard/result/result.component.ts");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts");









const routes = [
    {
        path: '',
        component: _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_6__["NGXFormWizardComponent"],
        data: {
            title: 'ngx-wizard'
        },
        children: [
            {
                path: 'wizard',
                component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalComponent"],
                data: {
                    title: 'Personal'
                }
            },
            {
                path: 'work',
                component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"],
                data: {
                    title: 'Work'
                }
            },
            {
                path: 'address',
                component: _address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"],
                data: {
                    title: 'Address'
                }
            },
            {
                path: 'result',
                component: _result_result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"],
                data: {
                    title: 'Result'
                }
            }
        ]
    }
];
class NGXWizardRoutingModule {
}
NGXWizardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NGXWizardRoutingModule });
NGXWizardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NGXWizardRoutingModule_Factory(t) { return new (t || NGXWizardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NGXWizardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NGXWizardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
const routedComponents = [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_6__["NGXFormWizardComponent"]];


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts ***!
  \****************************************************************/
/*! exports provided: NGXFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardComponent", function() { return NGXFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts");





class NGXFormWizardComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    }
}
NGXFormWizardComponent.ɵfac = function NGXFormWizardComponent_Factory(t) { return new (t || NGXFormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NGXFormWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NGXFormWizardComponent, selectors: [["app-multi-step-wizard"]], decls: 9, vars: 1, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], ["id", "ngx", 1, "ngx-form-wizard"], [3, "title"], [1, "board"], [1, "tab-content"]], template: function NGXFormWizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-msw-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "NGX Wizard");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-bottom: 8px;\n}\n\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n  \n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZm9ybXMvbmd4LXdpemFyZC9uZ3gtd2l6YXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFBZ0MsVUFBQTtBQUVsQzs7QUFBQTtFQUNFLDhCQUFBO0VBQWdDLFFBQUE7QUFJbEMiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9mb3Jtcy9uZ3gtd2l6YXJkL25neC13aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWNvbnRlbnQgLnRhYi1wYW5le1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NGXFormWizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-step-wizard',
                templateUrl: './ngx-wizard.component.html',
                styleUrls: ['./ngx-wizard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/ngx-wizard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/ngx-wizard.module.ts ***!
  \*************************************************************/
/*! exports provided: NGXFormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardModule", function() { return NGXFormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/theme/forms/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/theme/forms/ngx-wizard/navbar/navbar.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/theme/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "./src/app/theme/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address/address.component */ "./src/app/theme/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "./src/app/theme/forms/ngx-wizard/result/result.component.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ngx-wizard-routing.module */ "./src/app/theme/forms/ngx-wizard/ngx-wizard-routing.module.ts");














class NGXFormWizardModule {
}
NGXFormWizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NGXFormWizardModule, bootstrap: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"]] });
NGXFormWizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NGXFormWizardModule_Factory(t) { return new (t || NGXFormWizardModule)(); }, providers: [{ provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"] },
        { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"] }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_12__["NGXWizardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NGXFormWizardModule, { declarations: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_6__["AddressComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_12__["NGXWizardRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NGXFormWizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_12__["NGXWizardRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
                ],
                providers: [{ provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"] },
                    { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"] }],
                declarations: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_6__["AddressComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"]],
                bootstrap: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/personal/personal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/personal/personal.component.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function PersonalComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PersonalComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PersonalComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PersonalComponent {
    constructor(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Please tell us about yourself.';
    }
    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
    }
    save(form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setPersonal(this.personal);
        const firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work);
        if (firstState.length > 0) { }
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-mt-wizard-personal"]], decls: 34, vars: 8, consts: [["novalidate", "", 1, "editForm"], ["personalForm", "ngForm"], [1, "tab-pane", "active"], [1, "head", "text-center"], [1, "row"], [1, "col-12"], [1, "col-12", "col-sm-6"], [1, "form-group"], ["for", "firstname", 1, "form-control-label"], ["required", "", "id", "firstname", "name", "firstname", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["for", "lastname", 1, "form-control-label"], ["required", "", "id", "lastname", "name", "lastname", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["for", "email", 1, "form-control-label"], ["required", "", "email", "", "id", "email", "name", "email", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "form-group", "text-center"], ["type", "button", "uiSref", "work", 1, "btn", "btn-success", "btn-raised", 3, "disabled", "click"], [2, "margin-left", "10px"], [1, "feather", "icon-chevron-right"], [1, "form-text", "text-danger"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.personal.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PersonalComponent_small_15_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_20_listener($event) { return ctx.personal.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PersonalComponent_small_22_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_26_listener($event) { return ctx.personal.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PersonalComponent_small_28_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.save(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.personal.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.personal.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.valid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.personal.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Zvcm1zL25neC13aXphcmQvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mt-wizard-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }, { type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/result/result.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/result/result.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts");




class ResultComponent {
    constructor(router, route, formDataService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.title = 'Thank You!';
        this.isFormValid = false;
    }
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }
    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-mt-wizard-result"]], inputs: { formData: "formData" }, decls: 42, vars: 7, consts: [[1, "tab-pane", "active"], [1, "head", "text-center"], [1, "narrow", "text-center"], [1, "row"], [1, "col-offset-1", "col-10", "col-sm-offset-3", "col-sm-8", "col-md-offset-4", "col-md-8"], [1, "col-3", "col-sm-2"], [1, "form-group"], [1, "form-control-label"], [1, "col-9", "col-sm-10"], [1, "text-center"], ["uiSref", "personal", 1, "btn", "btn-success", "btn-raised", 3, "disabled", "click"], [2, "margin-left", "10px"], [1, "feather", "icon-arrow-right"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Here is a copy of the information you have entered: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Work: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_38_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.firstName + " " + ctx.formData.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.work, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.street, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.city + " " + ctx.formData.state + " " + ctx.formData.zip, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isFormValid);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Zvcm1zL25neC13aXphcmQvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mt-wizard-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"] }]; }, { formData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/work/work.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/work/work.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/theme/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class WorkComponent {
    constructor(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'What do you do?';
    }
    ngOnInit() {
        this.workType = this.formDataService.getWork();
    }
    save(form) {
        if (!form.valid) {
            return;
        }
        this.formDataService.setWork(this.workType);
        const firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work);
        this.router.navigate(['address'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    cancel() {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-mt-wizard-work"]], decls: 37, vars: 5, consts: [["novalidate", "", 1, "editForm"], ["workForm", "ngForm"], [1, "tab-pane", "active"], [1, "head", "text-center"], [1, "row"], [1, "col-offset-4", "col-10", "col-sm-offset-5", "col-sm-4"], [1, "form-group", "form-radio"], [1, "radio", "radiofill", "radio-success", "radio-inline"], ["type", "radio", "required", "", "name", "work", "checked", "checked", "value", "Design", 3, "ngModel", "ngModelChange"], ["work", "ngModel"], [1, "helper"], [1, "radio", "radiofill", "radio-info", "radio-inline"], ["type", "radio", "required", "", "name", "work", "checked", "checked", "value", "Code", 3, "ngModel", "ngModelChange"], [1, "radio", "radiofill", "radio-warning", "radio-inline"], ["type", "radio", "required", "", "name", "work", "checked", "checked", "value", "Deploy", 3, "ngModel", "ngModelChange"], [1, "form-group", "text-center", "space-20"], ["uiSref", "personal", "type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "click"], [2, "margin-right", "10px"], [1, "feather", "icon-chevron-left"], ["uiSref", "address", "type", "button", 1, "btn", "btn-raised", "btn-info", 3, "disabled", "click"], [2, "margin-left", "10px"], [1, "feather", "icon-chevron-right"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkComponent_Template_input_ngModelChange_12_listener($event) { return ctx.workType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkComponent_Template_input_ngModelChange_18_listener($event) { return ctx.workType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkComponent_Template_input_ngModelChange_24_listener($event) { return ctx.workType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deploy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_29_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.save(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Zvcm1zL25neC13aXphcmQvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mt-wizard-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }, { type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts ***!
  \*******************************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
const STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/forms/ngx-wizard/workflow/workflow.service.ts ***!
  \*********************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/theme/forms/ngx-wizard/workflow/workflow.model.ts");



class WorkflowService {
    constructor() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].address, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].result, valid: false }
        ];
    }
    validateStep(step) {
        let found = false;
        for (let i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    }
    resetSteps() {
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }
    getFirstInvalidStep(step) {
        let found = false;
        let valid = true;
        let redirectToStep = '';
        for (let i = 0; i < this.workflow.length && !found && valid; i++) {
            const item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(); };
WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ngx-wizard-ngx-wizard-module.js.map