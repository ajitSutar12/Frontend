(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-active-code-email-active-code-module"],{

/***/ "./src/app/theme/email/email-template/email-active-code/email-active-code-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-active-code/email-active-code-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EmailActiveCodeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailActiveCodeRoutingModule", function() { return EmailActiveCodeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _email_active_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-active-code.component */ "./src/app/theme/email/email-template/email-active-code/email-active-code.component.ts");





const routes = [
    {
        path: '',
        component: _email_active_code_component__WEBPACK_IMPORTED_MODULE_2__["EmailActiveCodeComponent"],
        data: {
            title: 'Activation Code',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - activation code',
            status: true
        }
    }
];
class EmailActiveCodeRoutingModule {
}
EmailActiveCodeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailActiveCodeRoutingModule });
EmailActiveCodeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailActiveCodeRoutingModule_Factory(t) { return new (t || EmailActiveCodeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailActiveCodeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailActiveCodeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-active-code/email-active-code.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-active-code/email-active-code.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmailActiveCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailActiveCodeComponent", function() { return EmailActiveCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmailActiveCodeComponent {
    constructor() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
    }
    ngOnInit() {
    }
}
EmailActiveCodeComponent.ɵfac = function EmailActiveCodeComponent_Factory(t) { return new (t || EmailActiveCodeComponent)(); };
EmailActiveCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailActiveCodeComponent, selectors: [["app-email-active-code"]], decls: 39, vars: 0, consts: [["align", "center", "border", "0", "cellpadding", "0", "cellspacing", "0", 1, "content", 2, "border-collapse", "collapse", "width", "100%", "max-width", "600px"], [2, "padding", "15px 10px 15px 10px"], ["border", "0", "cellpadding", "0", "cellspacing", "0", "width", "100%"], ["align", "center", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px", "line-height", "1"], ["href", "javascript:", 2, "color", "#4680ff"], ["align", "center", "bgcolor", "#4680ff ", 2, "padding", "20px 20px 20px 20px", "color", "#ffffff", "font-family", "Arial, sans-serif", "font-size", "36px", "font-weight", "bold"], ["src", "assets/images/email/proui_logo.png", "alt", "ProUI Logo", "width", "152", "height", "152", 2, "display", "block"], ["align", "center", "bgcolor", "#ffffff", 2, "padding", "75px 20px 40px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "20px", "line-height", "30px", "border-bottom", "1px solid #f6f6f6"], ["align", "center", "bgcolor", "#f9f9f9", 2, "padding", "30px 20px 30px 20px", "font-family", "Arial, sans-serif"], ["bgcolor", "#4680ff", "border", "0", "cellspacing", "0", "cellpadding", "0", 1, "buttonwrapper"], ["align", "center", "height", "50", 1, "button", 2, "padding", "0 25px 0 25px", "font-family", "Arial, sans-serif", "font-size", "16px", "font-weight", "bold"], ["href", "javascript:", 2, "color", "#ffffff", "text-align", "center", "text-decoration", "none"], ["align", "center", "bgcolor", "#dddddd", 2, "padding", "15px 10px 15px 10px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "12px", "line-height", "18px"], ["align", "center", "width", "100%", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px"]], template: function EmailActiveCodeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Just one more step...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Click the big button below to activate your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Activate Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Company Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "985 Example St. \u2022 Suite A1S2 \u2022 San Francisco, CA 12458 USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2017-18 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Able 7.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo][_ngcontent-%COMP%]   .buttonwrapper[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n  }\n\n  body[yahoo][_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  body[yahoo][_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: #9b59b6;\n    padding: 15px 25px !important;\n  }\n}\n@media only screen and (min-device-width: 601px) {\n  .content[_ngcontent-%COMP%] {\n    width: 600px !important;\n  }\n\n  .col387[_ngcontent-%COMP%] {\n    width: 387px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZW1haWwvZW1haWwtdGVtcGxhdGUvZW1haWwtYWN0aXZlLWNvZGUvZW1haWwtYWN0aXZlLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUE2Qix3Q0FBQTtFQUU3Qjs7RUFEQTtJQUFzQixxQkFBQTtFQUt0Qjs7RUFKQTtJQUF3Qix5QkFBQTtJQUEyQiw2QkFBQTtFQVNuRDtBQUNGO0FBUEE7RUFDRTtJQUFXLHVCQUFBO0VBVVg7O0VBVEE7SUFBVSx1QkFBQTtFQWFWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9lbWFpbC9lbWFpbC10ZW1wbGF0ZS9lbWFpbC1hY3RpdmUtY29kZS9lbWFpbC1hY3RpdmUtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpLCBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1NTBweCkge1xyXG4gIGJvZHlbeWFob29dIC5idXR0b253cmFwcGVyIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxyXG4gIGJvZHlbeWFob29dIC5idXR0b24geyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cclxuICBib2R5W3lhaG9vXSAuYnV0dG9uIGEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI1OWI2OyBwYWRkaW5nOiAxNXB4IDI1cHggIWltcG9ydGFudDsgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MDFweCkge1xyXG4gIC5jb250ZW50IHsgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7IH1cclxuICAuY29sMzg3IHsgd2lkdGg6IDM4N3B4ICFpbXBvcnRhbnQ7IH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailActiveCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-active-code',
                templateUrl: './email-active-code.component.html',
                styleUrls: ['./email-active-code.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-active-code/email-active-code.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-active-code/email-active-code.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EmailActiveCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailActiveCodeModule", function() { return EmailActiveCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_active_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-active-code.component */ "./src/app/theme/email/email-template/email-active-code/email-active-code.component.ts");
/* harmony import */ var _email_active_code_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-active-code-routing.module */ "./src/app/theme/email/email-template/email-active-code/email-active-code-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class EmailActiveCodeModule {
}
EmailActiveCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailActiveCodeModule });
EmailActiveCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailActiveCodeModule_Factory(t) { return new (t || EmailActiveCodeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _email_active_code_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailActiveCodeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailActiveCodeModule, { declarations: [_email_active_code_component__WEBPACK_IMPORTED_MODULE_2__["EmailActiveCodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _email_active_code_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailActiveCodeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailActiveCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _email_active_code_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailActiveCodeRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_email_active_code_component__WEBPACK_IMPORTED_MODULE_2__["EmailActiveCodeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=email-active-code-email-active-code-module.js.map