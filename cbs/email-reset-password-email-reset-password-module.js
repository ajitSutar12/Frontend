(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-reset-password-email-reset-password-module"],{

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmailResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordRoutingModule", function() { return EmailResetPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-reset-password.component */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts");





const routes = [
    {
        path: '',
        component: _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["EmailResetPasswordComponent"],
        data: {
            title: 'Password Reset',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - password reset',
            status: true
        }
    }
];
class EmailResetPasswordRoutingModule {
}
EmailResetPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailResetPasswordRoutingModule });
EmailResetPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailResetPasswordRoutingModule_Factory(t) { return new (t || EmailResetPasswordRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailResetPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailResetPasswordRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmailResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordComponent", function() { return EmailResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmailResetPasswordComponent {
    constructor() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
    }
    ngOnInit() {
    }
}
EmailResetPasswordComponent.ɵfac = function EmailResetPasswordComponent_Factory(t) { return new (t || EmailResetPasswordComponent)(); };
EmailResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailResetPasswordComponent, selectors: [["app-email-reset-password"]], decls: 47, vars: 0, consts: [["align", "center", "border", "0", "cellpadding", "0", "cellspacing", "0", 1, "content", 2, "border-collapse", "collapse", "width", "100%", "max-width", "600px"], [2, "padding", "15px 10px 15px 10px"], ["border", "0", "cellpadding", "0", "cellspacing", "0", "width", "100%"], ["align", "center", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px"], ["href", "javascript:", 2, "color", "#4680ff"], ["align", "center", "bgcolor", "#4680ff", 2, "padding", "20px 20px 20px 20px", "color", "#ffffff", "font-family", "Arial, sans-serif", "font-size", "36px", "font-weight", "bold"], ["src", "assets/images/email/proui_logo.png", "alt", "ProUI Logo", "width", "152", "height", "152", 2, "display", "block"], ["align", "center", "bgcolor", "#ffffff", 2, "padding", "40px 20px 40px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "20px", "line-height", "30px", "border-bottom", "1px solid #f6f6f6"], ["align", "center", "bgcolor", "#f9f9f9", 2, "padding", "20px 20px 0 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "20px", "line-height", "30px"], ["align", "center", "bgcolor", "#f9f9f9", 2, "padding", "30px 20px 30px 20px", "font-family", "Arial, sans-serif", "border-bottom", "1px solid #f6f6f6"], ["bgcolor", "#4680ff", "border", "0", "cellspacing", "0", "cellpadding", "0", 1, "buttonwrapper"], ["align", "center", "height", "50", 1, "button", 2, "padding", "0 25px 0 25px", "font-family", "Arial, sans-serif", "font-size", "16px", "font-weight", "bold"], ["href", "javascript:", 2, "color", "#ffffff", "text-align", "center", "text-decoration", "none"], ["align", "center", "bgcolor", "#ffffff", 2, "padding", "10px 20px 10px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "15px", "line-height", "24px"], ["href", "javascript:", 2, "color", "#1b8bf9"], ["align", "center", "bgcolor", "#dddddd", 2, "padding", "15px 10px 15px 10px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "12px", "line-height", "18px"], ["align", "center", "width", "100%", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px"]], template: function EmailResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email not displaying correctly? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View it in your browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forgot your password? Let's get you a new one!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Account:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " cl***03@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Help! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I didn't request this!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Company Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "985 Example St. \u2022 Suite A1S2 \u2022 San Francisco, CA 12458 USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 2017-18 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Able 7.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo] .buttonwrapper {\n    background-color: transparent !important;\n  }\n  body[yahoo] .button {\n    padding: 0 !important;\n  }\n  body[yahoo] .button a {\n    background-color: #9b59b6;\n    padding: 15px 25px !important;\n  }\n}\n\n@media only screen and (min-device-width: 601px) {\n  .content {\n    width: 600px !important;\n  }\n  .col387 {\n    width: 387px !important;\n  }\n}\n\ntd, th {\n  white-space: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZW1haWwvZW1haWwtdGVtcGxhdGUvZW1haWwtcmVzZXQtcGFzc3dvcmQvZW1haWwtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUE2Qix3Q0FBd0M7RUFFckU7RUFEQTtJQUFzQixxQkFBcUI7RUFJM0M7RUFIQTtJQUF3Qix5QkFBeUI7SUFBRSw2QkFBNkI7RUFPaEY7QUFDRjs7QUFMQTtFQUNFO0lBQVcsdUJBQXVCO0VBU2xDO0VBUkE7SUFBVSx1QkFBdUI7RUFXakM7QUFDRjs7QUFUQTtFQUNFLG1CQUFtQjtBQVlyQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2VtYWlsL2VtYWlsLXRlbXBsYXRlL2VtYWlsLXJlc2V0LXBhc3N3b3JkL2VtYWlsLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCksIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU1MHB4KSB7XHJcbiAgYm9keVt5YWhvb10gLmJ1dHRvbndyYXBwZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XHJcbiAgYm9keVt5YWhvb10gLmJ1dHRvbiB7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxyXG4gIGJvZHlbeWFob29dIC5idXR0b24gYSB7IGJhY2tncm91bmQtY29sb3I6ICM5YjU5YjY7IHBhZGRpbmc6IDE1cHggMjVweCAhaW1wb3J0YW50OyB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDYwMXB4KSB7XHJcbiAgLmNvbnRlbnQgeyB3aWR0aDogNjAwcHggIWltcG9ydGFudDsgfVxyXG4gIC5jb2wzODcgeyB3aWR0aDogMzg3cHggIWltcG9ydGFudDsgfVxyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-reset-password',
                templateUrl: './email-reset-password.component.html',
                styleUrls: ['./email-reset-password.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-reset-password/email-reset-password.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailResetPasswordModule", function() { return EmailResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-reset-password.component */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.component.ts");
/* harmony import */ var _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-reset-password-routing.module */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class EmailResetPasswordModule {
}
EmailResetPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailResetPasswordModule });
EmailResetPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailResetPasswordModule_Factory(t) { return new (t || EmailResetPasswordModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailResetPasswordRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailResetPasswordModule, { declarations: [_email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["EmailResetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailResetPasswordRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailResetPasswordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _email_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailResetPasswordRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_email_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["EmailResetPasswordComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=email-reset-password-email-reset-password-module.js.map