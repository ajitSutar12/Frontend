(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-login-basic-login-module"],{

/***/ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BasicLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginRoutingModule", function() { return BasicLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");





const routes = [
    {
        path: '',
        component: _basic_login_component__WEBPACK_IMPORTED_MODULE_2__["BasicLoginComponent"],
        data: {
            title: 'Simple Login'
        }
    }
];
class BasicLoginRoutingModule {
}
BasicLoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicLoginRoutingModule });
BasicLoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicLoginRoutingModule_Factory(t) { return new (t || BasicLoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicLoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginComponent", function() { return BasicLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function () { return ["/auth/forgot"]; };
function BasicLoginComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/auth/resetpassword"]; };
class BasicLoginComponent {
    constructor(router, http, _authService) {
        this.router = router;
        this.http = http;
        this._authService = _authService;
        this.isInvalidNumber = false;
        this.isInvalidPassword = false;
        this.passType = 'password';
        this.resetPassword = false;
        this.forgetPassword = true;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.bankname = null;
        this.maxAttempts = 3;
        this.failedLoginAttempts = {};
    }
    ngOnInit() {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
        this.http.get(this.url + '/system-master-parameters/').subscribe((data) => {
            this.bankname = data[0].BANK_NAME;
            this.currentDate = data[0].CURRENT_DATE;
        });
    }
    login() {
        let dataObject = {
            "username": this.mobileno,
            "password": this.password
        };
        this._authService.login(dataObject).subscribe(data => {
            let userid = data.user.id;
            if (data.user.LOG_STATUS == '1') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: '',
                    text: "User is already logged in",
                    icon: 'error',
                    confirmButtonColor: '#229954',
                    confirmButtonText: 'OK'
                });
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_2__(data.user.EXP_DATE, 'DD/MM/YYYY') >= moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate, 'DD/MM/YYYY')) {
                localStorage.setItem('countoftabs', '1');
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('system_master', JSON.stringify(data.system_master));
                // window.open('/CBS/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
                // window.open('/CBS/dashboard/default','','toolbar=0,titlebar=0,fullscreen=1,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=600,left = 82,top = 54');
                // window.open('/dashboard/default', "_blank", "toolbar=yes,scrollbars=yes,fullscreen=1,resizable=yes,top=00,left=1000,width=5000,height=1000");
                let userData = localStorage.getItem('user');
                let result = JSON.parse(userData);
                let object = {
                    USERID: userid,
                    BRANCH_CODE: result.branchId
                };
                this._authService.findOutLogin(object).subscribe(login => {
                    if (login) {
                        this.router.navigate(['/dashboard/default']);
                    }
                    else {
                        this.router.navigate(['/user/profile']);
                    }
                    let expfromdate = moment__WEBPACK_IMPORTED_MODULE_2__(data.user.EXP_DATE, 'DD/MM/YYYY').subtract(10, 'days').format('DD/MM/YYYY');
                    let exptodate = moment__WEBPACK_IMPORTED_MODULE_2__(data.user.EXP_DATE, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                    if (moment__WEBPACK_IMPORTED_MODULE_2__(expfromdate, 'DD/MM/YYYY') <= moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate, 'DD/MM/YYYY') && moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate, 'DD/MM/YYYY') <= moment__WEBPACK_IMPORTED_MODULE_2__(exptodate, 'DD/MM/YYYY')) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Warning', `Your password will expire on ${data.user.EXP_DATE}. Please update your password before expire.`, 'warning');
                    }
                });
                this._authService.loginuserupdate(userid).subscribe(data => { });
                this.http.get('https://ipapi.co/json/').subscribe((response) => {
                    let obj = {
                        USERID: userid,
                        IPADDRESS: response.ip,
                        BRANCH_CODE: result.branchId
                    };
                    this._authService.LOGINHISTORY(obj).subscribe(data => { });
                }, (error) => {
                    console.error(error);
                });
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_2__(data.user.EXP_DATE, 'DD/MM/YYYY') < moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDate, 'DD/MM/YYYY')) {
                this.resetPassword = true;
                this.forgetPassword = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Your password is expired please reset your password', 'error');
            }
            this.failedLoginAttempts[this.mobileno] = 0;
        }, err => {
            if (err.error.statusCode == 401) {
                this.incrementFailedLoginAttempts(this.mobileno);
                let loginAttempts = this.getFailedLoginAttempts(this.mobileno);
                if (loginAttempts >= this.maxAttempts) {
                    this._authService.updateinactiveUser(dataObject).subscribe(data => { });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('OOPs', 'User blocked...Please contact to Admin', 'error');
                    this.failedLoginAttempts[this.mobileno] = 0;
                }
                else
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: '',
                        text: "Your access denied",
                        icon: 'error',
                        confirmButtonColor: '#229954',
                        confirmButtonText: 'OK'
                    });
            }
            else if (err.error.statusCode == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: '',
                    text: err.error.message,
                    icon: 'error',
                    confirmButtonColor: '#229954',
                    confirmButtonText: 'OK'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: '',
                    text: "Please Check Your Username And Password",
                    icon: 'error',
                    confirmButtonColor: '#229954',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
    showHidePassword() {
        if (this.passType == 'password') {
            this.passType = 'text';
        }
        else {
            this.passType = 'password';
        }
    }
    incrementFailedLoginAttempts(username) {
        if (!this.failedLoginAttempts[username]) {
            this.failedLoginAttempts[username] = 1;
        }
        else {
            this.failedLoginAttempts[username]++;
        }
    }
    getFailedLoginAttempts(username) {
        return this.failedLoginAttempts[username] || 0;
    }
}
BasicLoginComponent.ɵfac = function BasicLoginComponent_Factory(t) { return new (t || BasicLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
BasicLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicLoginComponent, selectors: [["app-basic-login"]], decls: 71, vars: 7, consts: [[1, "login-block"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["action", "javascript:"], [1, "card", "mb-3", 2, "max-width", "1200px"], [1, "row", "no-gutt", "ers"], [1, "col-md-12", "inline-block"], ["src", "assets/BPK.jpg", "alt", "...", 1, "card-img"], [1, "card-title", "bank-name"], [1, "row", 2, "margin-top", "-15px"], [1, "col-sm-8"], [1, "card"], [1, "card-body", 2, "text-align", "center"], ["src", "assets/images/loginImg.png", 1, "img-fluid", 2, "width", "66%"], [1, "col-sm-4"], [1, "card", 2, "padding-bottom", "5%"], [1, "card-body"], [1, "row", "m-b-20"], [1, "col-md-12"], [1, "text-center"], [1, "col-sm-11"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "mobileno", "placeholder", " ", "id", "mobileno", "required", "", "maxlength", "10", "title", "Input allowed only A-Z", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "mobileno"], [1, "required"], ["name", "password", "placeholder", " ", "id", "password", "required", "", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}", "maxlength", "12", "title", "Input allowed only A-Z", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], [2, "display", "block", "margin-left", "95%", "margin-top", "-10%"], ["toggle", "#password-field", 1, "fa", "fa-fw", "fa-eye", "field-icon", "toggle-password", 2, "margin", "12px 0px 0px -19px", 3, "click"], ["for", "password"], [1, "row", "m-t-25", "text-left"], [1, "col-12"], [1, "forgot-phone", "text-right", "f-left"], [1, "text-right", "f-w-600", 3, "routerLink"], ["class", "forgot-phone text-right f-right", 4, "ngIf"], [1, "row", "m-t-30"], ["mdbRippleRadius", "", 1, "btn", "btn-primary", "btn-md", "btn-block", "waves-light", "text-center", "m-b-20", 3, "click"], [2, "color", "white"], [1, "row", "no-gutters"], [1, "col-md-12", 2, "padding", "2.5%"], ["src", "assets/images/comp.png", "alt", "small-logo.png", 1, "com-logo"], [2, "text-align", "center", "margin-top", "5px", "position", "sticky"], [1, "prod-logo", 2, "float", "right"], [2, "color", "black"], [2, "color", "#f7ba12"], [1, "forgot-phone", "text-right", "f-right"]], template: function BasicLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicLoginComponent_Template_input_ngModelChange_30_listener($event) { return ctx.mobileno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "sub", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BasicLoginComponent_Template_input_ngModelChange_39_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicLoginComponent_Template_span_click_41_listener() { return ctx.showHidePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sub", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Reset Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BasicLoginComponent_div_51_Template, 3, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicLoginComponent_Template_button_click_54_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Compserv Systems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "seva");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.bankname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passType)("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgetPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".card-img[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 100px;\n  margin-left: 50px;\n  text-align: right;\n}\n\n.com-logo[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  margin-left: 3%;\n  position: absolute;\n  height: 40px;\n}\n\n.prod-logo[_ngcontent-%COMP%] {\n  float: right;\n  \n  left: 85%;\n  top: 34%;\n  \n  margin-bottom: 0%;\n  position: absolute;\n}\n\n.bank-name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: -23px;\n  position: absolute;\n  left: 30%;\n  top: 65%;\n  color: brown;\n  font-weight: 700;\n}\n\n@media only screen and (max-width: 480px) {\n  .card-img[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 100px;\n    margin-left: 0px;\n    text-align: right;\n  }\n\n  .bank-name[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-top: -26px;\n    position: absolute;\n    left: 29%;\n    top: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvYXV0aC9sb2dpbi9iYXNpYy1sb2dpbi9iYXNpYy1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFETjs7RUFJRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvbG9naW4vYmFzaWMtbG9naW4vYmFzaWMtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNvbS1sb2dvIHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnByb2QtbG9nbyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDkwJTsgKi9cclxuICAgIGxlZnQ6IDg1JTtcclxuICAgIHRvcDogMzQlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogLTZweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxufVxyXG5cclxuLmJhbmstbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNhcmQtaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhbmstbmFtZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjklO1xyXG4gICAgICAgIHRvcDogNjUlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic-login',
                templateUrl: './basic-login.component.html',
                styleUrls: ['./basic-login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.module.ts ***!
  \********************************************************************/
/*! exports provided: BasicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login-routing.module */ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/theme/auth/auth.service.ts");








class BasicLoginModule {
}
BasicLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicLoginModule });
BasicLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicLoginModule_Factory(t) { return new (t || BasicLoginModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicLoginRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicLoginModule, { declarations: [_basic_login_component__WEBPACK_IMPORTED_MODULE_2__["BasicLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicLoginRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicLoginRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                declarations: [_basic_login_component__WEBPACK_IMPORTED_MODULE_2__["BasicLoginComponent"]],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=basic-login-basic-login-module.js.map