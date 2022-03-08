(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./src/app/theme/auth/resetpassword/resetpassword-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/auth/resetpassword/resetpassword-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ResetpasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordRoutingModule", function() { return ResetpasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resetpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.component */ "./src/app/theme/auth/resetpassword/resetpassword.component.ts");





const routes = [
    {
        path: '',
        component: _resetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordComponent"],
        data: {
            title: 'resetpassword'
        }
    }
];
class ResetpasswordRoutingModule {
}
ResetpasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResetpasswordRoutingModule });
ResetpasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResetpasswordRoutingModule_Factory(t) { return new (t || ResetpasswordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetpasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/auth/resetpassword/resetpassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/auth/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-password-validator */ "./node_modules/ng-password-validator/__ivy_ngcc__/fesm2015/ng-password-validator.js");







class ResetpasswordComponent {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.options = {
            placement: "bottom",
            "animation-duration": 500
        };
    }
    ngOnInit() {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    }
    isValid(event) {
        if (this.inputValue && this.inputValue.length) {
            if (event) {
                this.toastr.success("Password is Valid.", "Successful!");
            }
            else {
                this.toastr.error("Password is invalid.", "Error!");
            }
        }
    }
    onInput(event) {
        this.inputValue = event.target.value;
    }
    //function to confirm password
    checkPassword() {
        let password1 = (document.getElementById("Create_Password").value);
        let password2 = (document.getElementById("Confirm_Password").value);
        // If password not entered
        if (password1 == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please enter Password !", "warning");
        }
        // If confirm password not entered
        else if (password2 == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please enter confirm password!", "warning");
        }
        // alert ("Please enter confirm password");
        // If Not same return False.    
        else if (password1 != password2) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Password did not match: Please try again...!", "warning");
        }
        // If same return True.
        // else{
        //   Swal.fire("Success!", "Password Match!", "success");
        //     // alert("Password Match: Welcome to GeeksforGeeks!")
        // }
    }
    //reset password
    resetpassword() {
        if (this.currentPassword == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Please insert you current password', 'error');
        }
        else if (this.newPassword != this.confirmPassword) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Your password not matched', 'error');
        }
        else {
            let resetpassword = {
                'currentPassword': this.currentPassword,
                'newPassword': this.newPassword,
                'confirmPassword': this.confirmPassword,
                'email': this.email
            };
            this._authService.resetPassword(resetpassword).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Password Reset Successfully', 'success');
                this.router.navigate(['/auth/login/simple']);
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', error.error.message, 'error');
            });
        }
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 51, vars: 7, consts: [[1, "login-block"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], ["action", "javascript:"], [1, "auth-box", "card"], [1, "card-block"], [1, "row", "m-b-20"], [1, "col-md-12"], [1, "text-left"], [1, "col-sm"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "email", "name", "AC_EMAILID", "placeholder", " ", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.com$", "title", "Enter valid Email", "id", "AC_EMAILID", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "AC_EMAILID"], ["type", "email", "name", "currentPassword", "placeholder", " ", "title", "Enter valid Email", "id", "Current_Password", 1, "form-control", 3, "NgPasswordValidator", "ngModel", "valid", "keyup", "ngModelChange"], ["for", "Current_Password"], ["type", "password", "name", "Create_Password", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$", "minlength", "4", "placeholder", " ", "id", "Create_Password", "required", "", 1, "form-control", 3, "NgPasswordValidator", "ngModel", "valid", "keyup", "ngModelChange"], ["for", "Create_Password"], [1, "required"], ["type", "password", "name", "Confirm_Password", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$", "placeholder", " ", "id", "Confirm_Password", 1, "form-control", 3, "NgPasswordValidator", "ngModel", "focusout", "valid", "keyup", "ngModelChange"], ["for", "Confirm_Password"], ["type", "button", 1, "btn", "btn-primary", "btn-md", "btn-block", "waves-light", "text-center", "m-b-20", "ripple", 3, "click"], [1, "col-md-8"], [1, "col-md-4"], ["src", "assets/images/comp.png", "alt", "small-logo.png"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Registered Email id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valid", function ResetpasswordComponent_Template_input_valid_22_listener($event) { return ctx.isValid($event); })("keyup", function ResetpasswordComponent_Template_input_keyup_22_listener($event) { return ctx.onInput($event); })("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_22_listener($event) { return ctx.currentPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valid", function ResetpasswordComponent_Template_input_valid_29_listener($event) { return ctx.isValid($event); })("keyup", function ResetpasswordComponent_Template_input_keyup_29_listener($event) { return ctx.onInput($event); })("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_29_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "sub", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function ResetpasswordComponent_Template_input_focusout_38_listener() { return ctx.checkPassword(); })("valid", function ResetpasswordComponent_Template_input_valid_38_listener($event) { return ctx.isValid($event); })("keyup", function ResetpasswordComponent_Template_input_keyup_38_listener($event) { return ctx.onInput($event); })("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_38_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "sub", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetpasswordComponent_Template_button_click_45_listener() { return ctx.resetpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NgPasswordValidator", ctx.options)("ngModel", ctx.currentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NgPasswordValidator", ctx.options)("ngModel", ctx.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NgPasswordValidator", ctx.options)("ngModel", ctx.confirmPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_password_validator__WEBPACK_IMPORTED_MODULE_5__["NgPasswordValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['./resetpassword.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/auth/resetpassword/resetpassword.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/auth/resetpassword/resetpassword.module.ts ***!
  \******************************************************************/
/*! exports provided: ResetpasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordModule", function() { return ResetpasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _resetpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.component */ "./src/app/theme/auth/resetpassword/resetpassword.component.ts");
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword-routing.module */ "./src/app/theme/auth/resetpassword/resetpassword-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-password-validator */ "./node_modules/ng-password-validator/__ivy_ngcc__/fesm2015/ng-password-validator.js");








class ResetpasswordModule {
}
ResetpasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResetpasswordModule });
ResetpasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResetpasswordModule_Factory(t) { return new (t || ResetpasswordModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng_password_validator__WEBPACK_IMPORTED_MODULE_6__["NgPasswordValidatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetpasswordModule, { declarations: [_resetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ng_password_validator__WEBPACK_IMPORTED_MODULE_6__["NgPasswordValidatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ng_password_validator__WEBPACK_IMPORTED_MODULE_6__["NgPasswordValidatorModule"]
                ],
                declarations: [_resetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module.js.map