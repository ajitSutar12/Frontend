(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-header-footer-reg-social-header-footer-reg-module"],{

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegRoutingModule", function() { return SocialHeaderFooterRegRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-header-footer-reg.component */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");





const routes = [
    {
        path: '',
        component: _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_2__["SocialHeaderFooterRegComponent"],
        data: {
            title: 'Social Header & Footer Registration'
        }
    }
];
class SocialHeaderFooterRegRoutingModule {
}
SocialHeaderFooterRegRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialHeaderFooterRegRoutingModule });
SocialHeaderFooterRegRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialHeaderFooterRegRoutingModule_Factory(t) { return new (t || SocialHeaderFooterRegRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialHeaderFooterRegRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialHeaderFooterRegRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegComponent", function() { return SocialHeaderFooterRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");








const _c0 = function () { return ["/dashboard/default/"]; };
const _c1 = function () { return ["/user/profile/"]; };
const _c2 = function () { return ["/auth/lock-screen/"]; };
const _c3 = function () { return ["/auth/login/simple/"]; };
const _c4 = function () { return ["/dashboard/default"]; };
class SocialHeaderFooterRegComponent {
    constructor() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light';
        this.headerTheme = 'theme1';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    ngOnInit() {
    }
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    setHeaderAttributes(windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    }
    toggleHeaderNavRight() {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    }
    toggleLiveNotification() {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
    }
    toggleProfileNotification() {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
    }
    notificationOutsideClick(ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    }
    searchOn() {
        document.querySelector('#main-search').classList.add('open');
        const searchInterval = setInterval(() => {
            if (this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            this.searchWidth = this.searchWidth + 15;
            this.searchWidthString = this.searchWidth + 'px';
        }, 35);
    }
    searchOff() {
        const searchInterval = setInterval(() => {
            if (this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            this.searchWidth = this.searchWidth - 15;
            this.searchWidthString = this.searchWidth + 'px';
        }, 35);
    }
}
SocialHeaderFooterRegComponent.ɵfac = function SocialHeaderFooterRegComponent_Factory(t) { return new (t || SocialHeaderFooterRegComponent)(); };
SocialHeaderFooterRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialHeaderFooterRegComponent, selectors: [["app-social-header-footer-reg"]], decls: 180, vars: 23, consts: [["id", "pcoded", 1, "pcoded", 3, "resize"], [1, "pcoded-overlay-box"], [1, "pcoded-container", "navbar-wrapper"], [1, "navbar", "header-navbar", "pcoded-header"], [1, "navbar-wrapper"], [1, "navbar-logo"], [1, "ripple", "light", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "Mega Able"], ["href", "javascript:", 1, "mobile-options", "ripple", "light", 3, "click"], [1, "icon-more"], [1, "navbar-container"], [1, "nav-left"], [1, "ripple", "light"], [1, "sidebar_toggle"], ["href", "javascript:"], [1, "icon-menu"], [1, "header-search"], ["id", "main-search", 1, "main-search", "morphsearch-search"], [1, "input-group"], [1, "input-group-prepend", "search-close", 3, "click"], [1, "icon-close", "input-group-text"], [1, "form-control"], [1, "input-group-append", "search-btn", 3, "click"], [1, "icon-search", "input-group-text"], ["appToggleFullScreen", "", 1, "ripple", "light"], [1, "icon-fullscreen"], [1, "nav-right", 3, "ngClass"], [1, "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], [1, "icon-bell"], [1, "badge", "bg-c-red"], [1, "show-notification"], [1, "label", "label-danger"], [1, "ripple"], [1, "media"], ["src", "assets/images/avatar-2.jpg", "alt", "Generic placeholder image", 1, "d-flex", "align-self-center", "img-radius"], [1, "media-body"], [1, "notification-user"], [1, "notification-msg"], [1, "notification-time"], ["src", "assets/images/avatar-4.jpg", "alt", "Generic placeholder image", 1, "d-flex", "align-self-center", "img-radius"], ["src", "assets/images/avatar-3.jpg", "alt", "Generic placeholder image", 1, "d-flex", "align-self-center", "img-radius"], [1, "user-profile", "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], ["src", "assets/images/avatar-4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "icon-angle-down"], [1, "show-notification", "profile-notification"], [1, "icon-settings"], [3, "routerLink"], [1, "icon-user"], [1, "icon-email"], ["target", "_blank", 3, "routerLink"], [1, "icon-lock"], [1, "icon-layout-sidebar-left"], [1, "login-block"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "md-float-material", "form-material", "m-t-40", "m-b-40"], [1, "auth-box", "card"], [1, "card-block"], [1, "row", "m-b-20"], [1, "col-md-12"], [1, "text-center", "txt-primary"], [1, "col-md-6"], ["href", "javascript:", 1, "btn", "btn-facebook", "m-b-20", "btn-block", "ripple", "light"], [1, "fa", "fa-facebook"], ["href", "javascript:", 1, "btn", "btn-twitter", "m-b-0", "btn-block", "ripple", "light"], [1, "fa", "fa-twitter"], [1, "text-muted", "text-center", "p-b-5"], [1, "form-group", "form-primary"], ["type", "text", "name", "user-name", "required", "", 1, "form-control"], [1, "form-bar"], [1, "float-label"], ["type", "text", "name", "email", "required", "", 1, "form-control"], [1, "col-sm-6"], ["type", "password", "name", "password", "required", "", 1, "form-control"], ["type", "password", "name", "confirm-password", "required", "", 1, "form-control"], [1, "row", "m-t-25", "text-left"], [1, "checkbox-fade", "fade-in-primary"], ["type", "checkbox", "value", ""], [1, "cr"], [1, "cr-icon", "fa", "fa-check", "txt-primary"], [1, "text-inverse"], [1, "row", "m-t-30"], ["type", "button", 1, "btn", "btn-primary", "btn-md", "btn-block", "waves-light", "text-center", "m-b-20", "ripple"], [1, "col-md-10"], [1, "text-inverse", "text-left", "m-b-0"], [1, "text-inverse", "text-left"], [1, "col-md-2"], ["src", "assets/images/auth/Logo-small-bottom.png", "alt", "small-logo.png"], [1, "footer"], [1, "text-center", "m-b-0"]], template: function SocialHeaderFooterRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SocialHeaderFooterRegComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialHeaderFooterRegComponent_Template_a_click_8_listener() { return ctx.toggleHeaderNavRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialHeaderFooterRegComponent_Template_span_click_19_listener() { return ctx.searchOff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialHeaderFooterRegComponent_Template_span_click_22_listener() { return ctx.searchOn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function SocialHeaderFooterRegComponent_Template_li_clickOutside_28_listener() { return ctx.notificationOutsideClick("live"); })("click", function SocialHeaderFooterRegComponent_Template_li_click_28_listener() { return ctx.toggleLiveNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Joseph William");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sara Soudein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function SocialHeaderFooterRegComponent_Template_li_clickOutside_68_listener() { return ctx.notificationOutsideClick("profile"); })("click", function SocialHeaderFooterRegComponent_Template_li_click_68_listener() { return ctx.toggleProfileNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " My Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Lock Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "section", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "form", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sign up with your regular account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Choose Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Your Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "I read and accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Terms & Conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Send me the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " weekly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sign up now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Thank you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Back to website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 88);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Copyright \u00A9 2017 MEGA ABLE ADMIN , All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("nav-type", ctx.navType)("pcoded-device-type", ctx.pcodedDeviceType)("fream-type", ctx.freamType)("layout-type", ctx.layoutType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("header-theme", ctx.headerTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.searchWidthString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@mobileHeaderNavRight", ctx.navRight)("ngClass", ctx.navRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.liveNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@notificationBottom", ctx.liveNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.profileNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@notificationBottom", ctx.profileNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullScreenDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVnaXN0cmF0aW9uL3NvY2lhbC1oZWFkZXItZm9vdGVyLXJlZy9zb2NpYWwtaGVhZGVyLWZvb3Rlci1yZWcuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notificationBottom', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('an-off <=> an-animate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileHeaderNavRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('nav-off <=> nav-on', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialHeaderFooterRegComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-header-footer-reg',
                templateUrl: './social-header-footer-reg.component.html',
                styleUrls: ['./social-header-footer-reg.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notificationBottom', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('an-off <=> an-animate', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileHeaderNavRight', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('nav-off <=> nav-on', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegModule", function() { return SocialHeaderFooterRegModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-header-footer-reg.component */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");
/* harmony import */ var _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-header-footer-reg-routing.module */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class SocialHeaderFooterRegModule {
}
SocialHeaderFooterRegModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialHeaderFooterRegModule });
SocialHeaderFooterRegModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialHeaderFooterRegModule_Factory(t) { return new (t || SocialHeaderFooterRegModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialHeaderFooterRegRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialHeaderFooterRegModule, { declarations: [_social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_2__["SocialHeaderFooterRegComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialHeaderFooterRegRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialHeaderFooterRegModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialHeaderFooterRegRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_2__["SocialHeaderFooterRegComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=social-header-footer-reg-social-header-footer-reg-module.js.map