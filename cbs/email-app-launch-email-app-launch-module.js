(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-app-launch-email-app-launch-module"],{

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailAppLaunchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchRoutingModule", function() { return EmailAppLaunchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-app-launch.component */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts");





const routes = [
    {
        path: '',
        component: _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__["EmailAppLaunchComponent"],
        data: {
            title: 'App Launch',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - app launch',
            status: true
        }
    }
];
class EmailAppLaunchRoutingModule {
}
EmailAppLaunchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailAppLaunchRoutingModule });
EmailAppLaunchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailAppLaunchRoutingModule_Factory(t) { return new (t || EmailAppLaunchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailAppLaunchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailAppLaunchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmailAppLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchComponent", function() { return EmailAppLaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmailAppLaunchComponent {
    constructor() {
        document.querySelector('body').setAttribute('yahoo', 'fix');
        document.querySelector('body').setAttribute('style', 'margin: 0; padding:0; background-color: #444; background-image: none;');
    }
    ngOnInit() {
    }
}
EmailAppLaunchComponent.ɵfac = function EmailAppLaunchComponent_Factory(t) { return new (t || EmailAppLaunchComponent)(); };
EmailAppLaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailAppLaunchComponent, selectors: [["app-email-app-launch"]], decls: 63, vars: 0, consts: [["align", "center", "border", "0", "cellpadding", "0", "cellspacing", "0", 1, "content", 2, "border-collapse", "collapse", "width", "100%", "max-width", "600px"], [2, "padding", "15px 10px 15px 10px"], ["border", "0", "cellpadding", "0", "cellspacing", "0", "width", "100%"], ["align", "center", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px", "line-height", "1"], ["href", "javascript:", 2, "color", "#4680ff"], ["align", "center", "bgcolor", "#4680ff ", 2, "padding", "20px 20px 20px 20px", "color", "#ffffff", "font-family", "Arial, sans-serif", "font-size", "36px", "font-weight", "bold"], ["src", "assets/images/email/launch.png", "alt", "Launch Icon", "width", "200", "height", "200", 2, "display", "block"], ["align", "center", "bgcolor", "#ffffff", 2, "padding", "40px 20px 40px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "20px", "line-height", "30px", "border-bottom", "1px solid #f6f6f6"], ["align", "center", "bgcolor", "#f9f9f9", 2, "padding", "30px 20px 30px 20px", "font-family", "Arial, sans-serif", "border-bottom", "1px solid #f6f6f6"], ["bgcolor", "#4680ff", "border", "0", "cellspacing", "0", "cellpadding", "0", 1, "buttonwrapper"], ["align", "center", "height", "50", 1, "button", 2, "padding", "0 25px 0 25px", "font-family", "Arial, sans-serif", "font-size", "16px", "font-weight", "bold"], ["href", "javascript:", 2, "color", "#ffffff", "text-align", "center", "text-decoration", "none"], ["bgcolor", "#ffffff", 2, "padding", "30px 20px 10px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "20px", "line-height", "30px"], ["bgcolor", "#ffffff", 2, "padding", "10px 20px 5px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "15px", "line-height", "24px"], ["bgcolor", "#ffffff", 2, "padding", "10px 20px 30px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "15px", "line-height", "24px", "border-bottom", "1px solid #f6f6f6"], ["bgcolor", "#ffffff", 2, "padding", "10px 20px 20px 20px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "15px", "line-height", "24px", "border-bottom", "1px solid #f6f6f6"], ["align", "center", "bgcolor", "#dddddd", 2, "padding", "15px 10px 15px 10px", "color", "#555555", "font-family", "Arial, sans-serif", "font-size", "12px", "line-height", "18px"], ["align", "center", "width", "100%", 2, "color", "#fff", "font-family", "Arial, sans-serif", "font-size", "12px"]], template: function EmailAppLaunchComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Our App is live! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "You can sign up with 50% discount only for today!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Up Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " How our App can help you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus. Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus. Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Company Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "985 Example St. \u2022 Suite A1S2 \u2022 San Francisco, CA 12458 USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 2017-18 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mega Able");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {\n  body[yahoo] .buttonwrapper {\n    background-color: transparent !important;\n  }\n  body[yahoo] .button {\n    padding: 0 !important;\n  }\n  body[yahoo] .button a {\n    background-color: #9b59b6;\n    padding: 15px 25px !important;\n  }\n}\n\n@media only screen and (min-device-width: 601px) {\n  .content {\n    width: 600px !important;\n  }\n  .col387 {\n    width: 387px !important;\n  }\n}\n\ntd, th {\n  white-space: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZW1haWwvZW1haWwtdGVtcGxhdGUvZW1haWwtYXBwLWxhdW5jaC9lbWFpbC1hcHAtbGF1bmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBNkIsd0NBQXdDO0VBRXJFO0VBREE7SUFBc0IscUJBQXFCO0VBSTNDO0VBSEE7SUFBd0IseUJBQXlCO0lBQUUsNkJBQTZCO0VBT2hGO0FBQ0Y7O0FBTEE7RUFDRTtJQUFXLHVCQUF1QjtFQVNsQztFQVJBO0lBQVUsdUJBQXVCO0VBV2pDO0FBQ0Y7O0FBVEE7RUFDRSxtQkFBbUI7QUFZckIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9lbWFpbC9lbWFpbC10ZW1wbGF0ZS9lbWFpbC1hcHAtbGF1bmNoL2VtYWlsLWFwcC1sYXVuY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSwgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTUwcHgpIHtcclxuICBib2R5W3lhaG9vXSAuYnV0dG9ud3JhcHBlciB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cclxuICBib2R5W3lhaG9vXSAuYnV0dG9uIHsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XHJcbiAgYm9keVt5YWhvb10gLmJ1dHRvbiBhIHsgYmFja2dyb3VuZC1jb2xvcjogIzliNTliNjsgcGFkZGluZzogMTVweCAyNXB4ICFpbXBvcnRhbnQ7IH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjAxcHgpIHtcclxuICAuY29udGVudCB7IHdpZHRoOiA2MDBweCAhaW1wb3J0YW50OyB9XHJcbiAgLmNvbDM4NyB7IHdpZHRoOiAzODdweCAhaW1wb3J0YW50OyB9XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailAppLaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-app-launch',
                templateUrl: './email-app-launch.component.html',
                styleUrls: ['./email-app-launch.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-app-launch/email-app-launch.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EmailAppLaunchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAppLaunchModule", function() { return EmailAppLaunchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-app-launch.component */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.component.ts");
/* harmony import */ var _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-app-launch-routing.module */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class EmailAppLaunchModule {
}
EmailAppLaunchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailAppLaunchModule });
EmailAppLaunchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailAppLaunchModule_Factory(t) { return new (t || EmailAppLaunchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailAppLaunchRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailAppLaunchModule, { declarations: [_email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__["EmailAppLaunchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailAppLaunchRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailAppLaunchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _email_app_launch_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailAppLaunchRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_email_app_launch_component__WEBPACK_IMPORTED_MODULE_2__["EmailAppLaunchComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=email-app-launch-email-app-launch-module.js.map