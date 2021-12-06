(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");






const routes = [
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: '/auth/login/simple',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-dashboard-dashboard-module */ "theme-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./theme/dashboard/dashboard.module */ "./src/app/theme/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'master',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-master-master-module */ "theme-master-master-module").then(__webpack_require__.bind(null, /*! ./theme/master/master.module */ "./src/app/theme/master/master.module.ts")).then(m => m.MasterModule)
            },
            {
                path: 'transaction',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-transaction-transaction-module */ "theme-transaction-transaction-module").then(__webpack_require__.bind(null, /*! ./theme/transaction/transaction.module */ "./src/app/theme/transaction/transaction.module.ts")).then(m => m.TransactionModule)
            },
            {
                path: 'passing',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-passing-passing-module */ "theme-passing-passing-module").then(__webpack_require__.bind(null, /*! ./theme/passing/passing.module */ "./src/app/theme/passing/passing.module.ts")).then(m => m.PassingModule)
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-view-view-module */ "theme-view-view-module").then(__webpack_require__.bind(null, /*! ./theme/view/view.module */ "./src/app/theme/view/view.module.ts")).then(m => m.ViewModule)
            },
            {
                path: 'reports',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-reports-reports-module */ "theme-reports-reports-module").then(__webpack_require__.bind(null, /*! ./theme/reports/reports.module */ "./src/app/theme/reports/reports.module.ts")).then(m => m.ReportsModule)
            },
            {
                path: 'utility',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-utility-utility-module */ "theme-utility-utility-module").then(__webpack_require__.bind(null, /*! ./theme/utility/utility.module */ "./src/app/theme/utility/utility.module.ts")).then(m => m.UtilityModule)
            },
            {
                path: 'windows',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-windows-windows-module */ "theme-windows-windows-module").then(__webpack_require__.bind(null, /*! ./theme/windows/windows.module */ "./src/app/theme/windows/windows.module.ts")).then(m => m.WindowsModule)
            },
            {
                path: 'hotKeys',
                loadChildren: () => Promise.all(/*! import() | theme-hot-keys-hot-keys-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("theme-hot-keys-hot-keys-module")]).then(__webpack_require__.bind(null, /*! ./theme/hot-keys/hot-keys.module */ "./src/app/theme/hot-keys/hot-keys.module.ts")).then(m => m.HotkeysModule)
            },
            {
                path: 'exit',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-exit-exit-module */ "theme-exit-exit-module").then(__webpack_require__.bind(null, /*! ./theme/exit/exit.module */ "./src/app/theme/exit/exit.module.ts")).then(m => m.ExitModule)
            },
            {
                path: 'navigation',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-navigation-navigation-module */ "theme-navigation-navigation-module").then(__webpack_require__.bind(null, /*! ./theme/navigation/navigation.module */ "./src/app/theme/navigation/navigation.module.ts")).then(m => m.NavigationModule)
            },
            {
                path: 'widget',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-widget-widget-module */ "theme-widget-widget-module").then(__webpack_require__.bind(null, /*! ./theme/widget/widget.module */ "./src/app/theme/widget/widget.module.ts")).then(m => m.WidgetModule)
            },
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-ui-elements-basic-basic-module */ "theme-ui-elements-basic-basic-module").then(__webpack_require__.bind(null, /*! ./theme/ui-elements/basic/basic.module */ "./src/app/theme/ui-elements/basic/basic.module.ts")).then(m => m.BasicModule)
            },
            {
                path: 'advance',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-ui-elements-advance-advance-module */ "theme-ui-elements-advance-advance-module").then(__webpack_require__.bind(null, /*! ./theme/ui-elements/advance/advance.module */ "./src/app/theme/ui-elements/advance/advance.module.ts")).then(m => m.AdvanceModule)
            },
            /*{
              path: 'animations',
              loadChildren: () => import('./theme/ui-elements/animation/animation.module').then(m => m.AnimationModule)
            },*/
            {
                path: 'forms',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-forms-forms-module */ "theme-forms-forms-module").then(__webpack_require__.bind(null, /*! ./theme/forms/forms.module */ "./src/app/theme/forms/forms.module.ts")).then(m => m.FormsModule)
            },
            {
                path: 'bootstrap-table',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-table-bootstrap-table-bootstrap-table-module */ "theme-table-bootstrap-table-bootstrap-table-module").then(__webpack_require__.bind(null, /*! ./theme/table/bootstrap-table/bootstrap-table.module */ "./src/app/theme/table/bootstrap-table/bootstrap-table.module.ts")).then(m => m.BootstrapTableModule)
            },
            {
                path: 'data-table',
                loadChildren: () => Promise.all(/*! import() | theme-table-tbl-datatable-tbl-datatable-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("theme-table-tbl-datatable-tbl-datatable-module")]).then(__webpack_require__.bind(null, /*! ./theme/table/tbl-datatable/tbl-datatable.module */ "./src/app/theme/table/tbl-datatable/tbl-datatable.module.ts")).then(m => m.TblDatatableModule)
            },
            {
                path: 'user',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-user-user-module */ "theme-user-user-module").then(__webpack_require__.bind(null, /*! ./theme/user/user.module */ "./src/app/theme/user/user.module.ts")).then(m => m.UserModule)
            },
            {
                path: 'email',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-email-email-module */ "theme-email-email-module").then(__webpack_require__.bind(null, /*! ./theme/email/email.module */ "./src/app/theme/email/email.module.ts")).then(m => m.EmailModule)
            },
            {
                path: 'crm-contact',
                loadChildren: () => Promise.all(/*! import() | theme-crm-contact-crm-contact-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("theme-crm-contact-crm-contact-module")]).then(__webpack_require__.bind(null, /*! ./theme/crm-contact/crm-contact.module */ "./src/app/theme/crm-contact/crm-contact.module.ts")).then(m => m.CrmContactModule)
            },
            {
                path: 'task',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-task-task-module */ "theme-task-task-module").then(__webpack_require__.bind(null, /*! ./theme/task/task.module */ "./src/app/theme/task/task.module.ts")).then(m => m.TaskModule)
            },
            {
                path: 'editor',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-extension-editor-editor-module */ "theme-extension-editor-editor-module").then(__webpack_require__.bind(null, /*! ./theme/extension/editor/editor.module */ "./src/app/theme/extension/editor/editor.module.ts")).then(m => m.EditorModule)
            },
            {
                path: 'invoice',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-extension-invoice-invoice-module */ "theme-extension-invoice-invoice-module").then(__webpack_require__.bind(null, /*! ./theme/extension/invoice/invoice.module */ "./src/app/theme/extension/invoice/invoice.module.ts")).then(m => m.InvoiceModule)
            },
            {
                path: 'file-upload-ui',
                loadChildren: () => Promise.all(/*! import() | theme-extension-file-upload-ui-file-upload-ui-module */[__webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~34724a2e"), __webpack_require__.e("theme-extension-file-upload-ui-file-upload-ui-module")]).then(__webpack_require__.bind(null, /*! ./theme/extension/file-upload-ui/file-upload-ui.module */ "./src/app/theme/extension/file-upload-ui/file-upload-ui.module.ts")).then(m => m.FileUploadUiModule)
            },
            {
                path: 'full-event-calendar',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-extension-full-event-calendar-full-event-calendar-module */ "theme-extension-full-event-calendar-full-event-calendar-module").then(__webpack_require__.bind(null, /*! ./theme/extension/full-event-calendar/full-event-calendar.module */ "./src/app/theme/extension/full-event-calendar/full-event-calendar.module.ts")).then(m => m.FullEventCalendarModule)
            },
            {
                path: 'charts',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-chart-chart-module */ "theme-chart-chart-module").then(__webpack_require__.bind(null, /*! ./theme/chart/chart.module */ "./src/app/theme/chart/chart.module.ts")).then(m => m.ChartModule)
            },
            {
                path: 'map',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-map-map-module */ "theme-map-map-module").then(__webpack_require__.bind(null, /*! ./theme/map/map.module */ "./src/app/theme/map/map.module.ts")).then(m => m.MapModule)
            },
            {
                path: 'simple-page',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-simple-page-simple-page-module */ "theme-simple-page-simple-page-module").then(__webpack_require__.bind(null, /*! ./theme/simple-page/simple-page.module */ "./src/app/theme/simple-page/simple-page.module.ts")).then(m => m.SimplePageModule)
            }
        ]
    },
    {
        path: '',
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => Promise.all(/*! import() | theme-auth-auth-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~c85ad180"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~34151e30"), __webpack_require__.e("theme-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./theme/auth/auth.module */ "./src/app/theme/auth/auth.module.ts")).then(m => m.AuthModule)
            },
            {
                path: 'maintenance/error',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-maintenance-error-error-module */ "theme-maintenance-error-error-module").then(__webpack_require__.bind(null, /*! ./theme/maintenance/error/error.module */ "./src/app/theme/maintenance/error/error.module.ts")).then(m => m.ErrorModule)
            },
            {
                path: 'maintenance/coming-soon',
                loadChildren: () => Promise.all(/*! import() | theme-maintenance-coming-soon-coming-soon-module */[__webpack_require__.e("common"), __webpack_require__.e("theme-maintenance-coming-soon-coming-soon-module")]).then(__webpack_require__.bind(null, /*! ./theme/maintenance/coming-soon/coming-soon.module */ "./src/app/theme/maintenance/coming-soon/coming-soon.module.ts")).then(m => m.ComingSoonModule)
            },
            {
                path: 'email/email-template',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-email-email-template-email-template-module */ "theme-email-email-template-email-template-module").then(__webpack_require__.bind(null, /*! ./theme/email/email-template/email-template.module */ "./src/app/theme/email/email-template/email-template.module.ts")).then(m => m.EmailTemplateModule)
            },
            {
                path: 'maintenance/offline-ui',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-maintenance-offline-ui-offline-ui-module */ "theme-maintenance-offline-ui-offline-ui-module").then(__webpack_require__.bind(null, /*! ./theme/maintenance/offline-ui/offline-ui.module */ "./src/app/theme/maintenance/offline-ui/offline-ui.module.ts")).then(m => m.OfflineUiModule)
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");







class AppComponent {
    //sample comment
    constructor(router, _hotkeysService) {
        this.router = router;
        this._hotkeysService = _hotkeysService;
        this.title = 'Welcome || Your Bank Name';
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
        this.addHotKeys();
    }
    addHotKeys() {
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"](['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
            'fn+f2', 'fn+f3', 'fn+f4', 'fn+f5', 'fn+f6', 'fn+f7', 'fn+f8', 'ctrl+f8', 'ctrl+f3', 'fn+f9', 'fn+f10', 'fn+f11', 'fn+f12',
            'ctrl+a', 'ctrl+shift+a', 'ctrl+shift+b', 'ctrl+shift+d', 'ctrl+e'], (event, combo) => {
            if (combo === 'fn+f2' || combo === 'f2') {
                this.router.navigate(['/utility/calculator']);
            }
            if (combo === 'fn+f3' || combo === 'f3') {
                this.router.navigate(['/transaction/voucherEntry']);
            }
            if (combo === 'fn+f4' || combo === 'f4') {
                this.router.navigate(['/transaction/multiVoucher']);
            }
            if (combo === 'fn+f8' || combo === 'f8') {
                this.router.navigate(['/view/accountEnquiry']);
            }
            if (combo === 'ctrl+f8' || combo === 'ctrl+f8') {
                this.router.navigate(['/view/customerView']);
            }
            if (combo === 'fn+f9' || combo === 'f9') {
                this.router.navigate(['/view/ledgerView']);
            }
            if (combo === 'fn+f11' || combo === 'f11') {
                this.router.navigate(['/view/managerView']);
            }
            if (combo === 'fn+f12' || combo === 'f12') {
                this.router.navigate(['/passing/centralisedPassing']);
            }
            if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
                this.router.navigate(['/view/voucherView']);
            }
            if (combo === 'ctrl+shift+b' || combo === 'ctrl+shift+b') {
                // this.router.navigate(['/transfer/batchVoucher']);
                this.router.navigate(['/transaction/batchVoucher']);
            }
            return false;
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/admin/breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/hot-keys/hot-keys.component */ "./src/app/theme/hot-keys/hot-keys.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_theme_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/theme/auth/auth.interceptor.service */ "./src/app/theme/auth/auth.interceptor.service.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__["MenuItems"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: _app_theme_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptorServices"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__["HotkeyModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
        _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsComponent"],
        _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_12__["HotKeysComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__["HotkeyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                    _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                    _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsComponent"],
                    _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_12__["HotKeysComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__["HotkeyModule"].forRoot(),
                ],
                providers: [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__["MenuItems"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                        useClass: _app_theme_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptorServices"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");















function AdminComponent_div_123_ul_3_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r9.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r9.value);
} }
const _c0 = function () { return ["active"]; };
function AdminComponent_div_123_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_123_ul_3_li_1_span_8_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", asideItem_r4.external, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r4.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r4.badge);
} }
function AdminComponent_div_123_ul_3_li_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r15.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r15.value);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function AdminComponent_div_123_ul_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_123_ul_3_li_2_a_1_span_7_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r4.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, asideItem_r4.main_state, asideItem_r4.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r4.badge);
} }
function AdminComponent_div_123_ul_3_li_2_ng_template_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r18.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r18.value);
} }
const _c2 = function (a1) { return ["/", a1]; };
function AdminComponent_div_123_ul_3_li_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_123_ul_3_li_2_ng_template_2_span_7_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r4.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, asideItem_r4.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r4.badge);
} }
function AdminComponent_div_123_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_123_ul_3_li_2_a_1_Template, 9, 13, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_123_ul_3_li_2_ng_template_2_Template, 9, 12, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r4.main_state)("ngIfElse", _r12);
} }
function AdminComponent_div_123_ul_3_li_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r23.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r23.value);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r29.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r29.value);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_1_span_7_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildren_r24.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, asideItem_r4.state, asideChildren_r24.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", asideChildren_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r24.badge);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r34.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r34.value);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSubBadge_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenSubBadge_r38.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSubBadge_r38.value);
} }
const _c3 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_span_8_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSub_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const asideChildren_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildrenSub_r35.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c3, asideItem_r4.state, asideChildren_r24.state, asideChildrenSub_r35.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSub_r35.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildrenSub_r35.badge);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_Template, 10, 12, "div", 103);
} if (rf & 2) {
    const asideChildrenSub_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildrenSub_r35 != null);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r42.fireClickLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_Template_a_mouseover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r44.fireClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_span_7_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_Template, 1, 1, "ng-template", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r27.dropDownIcon)("subitem-icon", ctx_r27.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildren_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r24.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r24.children);
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_1_Template, 9, 11, "li", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_li_2_Template, 11, 9, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r24.type !== "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r24.type === "sub");
} }
function AdminComponent_div_123_ul_3_li_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_123_ul_3_li_3_ng_template_12_div_0_Template, 3, 2, "div", 103);
} if (rf & 2) {
    const asideChildren_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r24 != null);
} }
function AdminComponent_div_123_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function AdminComponent_div_123_ul_3_li_3_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.fireClickLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminComponent_div_123_ul_3_li_3_Template_a_mouseover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.fireClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_div_123_ul_3_li_3_span_9_Template, 2, 4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminComponent_div_123_ul_3_li_3_ng_template_12_Template, 1, 1, "ng-template", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r7.dropDownIcon)("subitem-icon", ctx_r7.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r4.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r4.children);
} }
function AdminComponent_div_123_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_123_ul_3_li_1_Template, 10, 13, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_123_ul_3_li_2_Template, 4, 5, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_123_ul_3_li_3_Template, 13, 14, "li", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("item-border", ctx_r3.itemBorder)("item-border-style", ctx_r3.itemBorderStyle)("subitem-border", ctx_r3.subItemBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r4.type === "external");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r4.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r4.type === "sub");
} }
function AdminComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_123_ul_3_Template, 4, 7, "ul", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItems_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("menu-title-theme", ctx_r0.menuTitleTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", asideItems_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menuListData);
} }
const _c4 = function () { return ["/dashboard/default/"]; };
const _c5 = function () { return ["/user/profile/"]; };
const _c6 = function () { return ["/auth/login/simple/"]; };
class AdminComponent {
    constructor(menuItems) {
        this.menuItems = menuItems;
        this.scroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 56) {
                if (this.isSidebarChecked === true) {
                    this.pcodedSidebarPosition = 'fixed';
                }
                if (this.pcodedDeviceType === 'desktop') {
                    this.headerFixedTop = '0';
                }
                this.sidebarFixedNavHeight = '100%';
            }
            else {
                if (this.pcodedDeviceType === 'desktop') {
                    this.headerFixedTop = 'auto';
                }
                this.pcodedSidebarPosition = 'absolute';
                this.sidebarFixedNavHeight = '';
            }
        };
        this.animateSidebar = '';
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
        this.layoutType = 'light'; // light(default) dark(dark)
        this.headerTheme = 'theme1'; // theme1(default)
        this.pcodedHeaderPosition = 'fixed';
        this.headerFixedTop = 'auto';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.chatSlideInOut = 'out';
        this.innerChatSlideInOut = 'out';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.toggleOn = true;
        this.toggleIcon = 'icon-toggle-right';
        this.navBarTheme = 'themelight1'; // themelight1(default) theme1(dark)
        this.activeItemTheme = 'theme1';
        this.pcodedSidebarPosition = 'fixed';
        this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
        this.dropDownIcon = 'style3';
        this.subItemIcon = 'style7';
        this.displayBoxLayout = 'd-none';
        this.isVerticalLayoutChecked = false;
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        this.headerFixedMargin = '56px'; // 56px
        this.sidebarFixedHeight = 'calc(100vh - 60px)'; // calc(100vh - 190px)
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.itemBorder = true;
        this.isCollapsedSideBar = 'no-block';
        this.perfectDisable = '';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        this.setHeaderAttributes(this.windowWidth);
        // dark theme
        /*this.setLayoutType('dark');*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');*/
        // dark-light theme
        /*this.setNavBarTheme('theme1');*/
        // box layout
        /*this.setHeaderPosition();
        this.setSidebarPosition();
        this.setVerticalLayout();*/
        // sidebar img
        /*this.setLayoutType('img');*/
        //Menu item filter as per user role
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        this.userData = result;
        let menuData = '';
        result.RoleDefine.forEach(ele => {
            if (menuData == '') {
                menuData = ele.Role.Rolehaspermission.Menus;
            }
            else {
                menuData = menuData + ',' + ele.Role.Rolehaspermission.Menus;
            }
        });
        let resultArray = result.RoleDefine[0].Role.Rolehaspermission.Menus;
        this.barnchName = result.branch.NAME;
        this.bankName = result.branch.syspara[0].BANK_NAME;
        //console.log(resultArray);
        let arrayList1 = menuData.split(',');
        var arrayList = arrayList1.map(function (x) {
            return parseInt(x, 10);
        });
        arrayList.sort(function (a, b) { return b - a; });
        //console.log(arrayList);
        let menuItemList = this.menuItems.getAll();
        this.meunItemList = menuItemList[0].main;
        var meunItemList = menuItemList[0].main;
        this.meunItemList.forEach(function (element, index) {
            //debugger
            if (arrayList.includes(element.id)) {
                if (element.children != [] && element.children != undefined) {
                    element.children.forEach(function (ele, index1) {
                        if (arrayList.includes(ele.id)) {
                            if (ele.children != [] && ele.children != undefined) {
                                //debugger
                                ele.children.forEach(function (ele1, index2) {
                                    if (arrayList.includes(ele1.id)) {
                                    }
                                    else {
                                        delete meunItemList[index].children[index1].children[index2];
                                    }
                                });
                            }
                        }
                        else {
                            delete meunItemList[index].children[index1];
                        }
                    });
                }
            }
            else {
                delete meunItemList[index];
            }
        });
        this.menuItem = menuItemList;
        //console.log(this.menuItem[0].main)
        // this.menuItem[0].main.forEach(ele=>{
        //   if(ele == null){
        //     //console.log('null value')
        //   }
        // })
        var first = this.menuItem[0].main.findIndex(function (el) {
            return (el !== null);
        });
        //console.log(this.menuItem[0].main.length);
        for (let i = 0; i < this.menuItem[0].main.length; i++) {
            //console.log(this.menuItem[0].main[i]);
            // this.menuItem[0].main.splice(i,1);
        }
        var arrSor = [];
        this.menuItem[0].main.forEach(function (el) {
            if (el === null) {
                arrSor.push(el);
            }
            else {
                arrSor.unshift(el);
            }
        });
        this.menuListData = arrSor.reverse();
        //console.log(this.menuItem[0].main)
        // var filtered = this.menuItem[0].main.filter(function (el) {
        //   return el != null;
        // });
        // this.menuListData = filtered;
        // //console.log(this.menuListData);
    }
    deleteMainMenu(ele) {
        //console.log(ele)
    }
    ngOnInit() {
        this.setBackgroundPattern('theme1');
    }
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        let reSizeFlag = true;
        if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 992) {
            reSizeFlag = false;
        }
        else if (this.pcodedDeviceType === 'phone' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }
    setHeaderAttributes(windowWidth) {
        if (windowWidth <= 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    }
    setMenuAttributes(windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 992) {
            this.pcodedDeviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = 'auto';
            this.headerFixedMargin = '0';
        }
        else if (windowWidth < 768) {
            this.pcodedDeviceType = 'phone';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = 'auto';
            this.headerFixedMargin = '0';
        }
        else {
            this.pcodedDeviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
            this.toggleIcon = 'icon-toggle-right';
            this.headerFixedMargin = '56px';
        }
        /*else if (windowWidth >= 1024 && windowWidth < 1366) {
          this.pcodedDeviceType = 'desktop';
          this.verticalNavType = 'collapsed';
          this.verticalEffect = 'shrink';
          this.toggleIcon = 'icon-toggle-left';
          this.perfectDisable = 'disabled';
          this.sidebarFixedHeight = '100%';
        }*/
    }
    toggleHeaderNavRight() {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
        this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
        if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    }
    toggleLiveNotification() {
        if (this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
        if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    }
    toggleProfileNotification() {
        if (this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
        if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    }
    notificationOutsideClick(ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    }
    toggleChat() {
        if (this.innerChatSlideInOut === 'in') {
            this.innerChatSlideInOut = 'out';
        }
        else {
            this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
        }
    }
    toggleInnerChat() {
        this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
    }
    searchOn() {
        document.querySelector('#main-search').classList.add('open');
        this.searchInterval = setInterval(() => {
            if (this.searchWidth >= 200) {
                clearInterval(this.searchInterval);
                return false;
            }
            this.searchWidth = this.searchWidth + 15;
            this.searchWidthString = this.searchWidth + 'px';
        }, 35);
    }
    searchOff() {
        this.searchInterval = setInterval(() => {
            if (this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(this.searchInterval);
                return false;
            }
            this.searchWidth = this.searchWidth - 15;
            this.searchWidthString = this.searchWidth + 'px';
        }, 35);
    }
    ngOnDestroy() {
        if (this.searchInterval) {
            clearInterval(this.searchInterval);
        }
    }
    toggleOpened(e) {
        if (this.windowWidth <= 992) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            if (this.navRight === 'nav-on') {
                this.toggleHeaderNavRight();
            }
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        this.toggleIcon = this.verticalNavType === 'expanded' ? 'icon-toggle-right' : 'icon-toggle-left';
        this.animateSidebar = 'pcoded-toggle-animate';
        if (this.verticalNavType === 'collapsed') {
            this.perfectDisable = 'disabled';
            this.sidebarFixedHeight = '100%';
        }
        else {
            this.perfectDisable = '';
        }
        if (this.verticalNavType === 'collapsed' && this.isHeaderChecked === false) {
            this.setSidebarPosition();
        }
        setTimeout(() => {
            this.animateSidebar = '';
        }, 500);
    }
    onClickedOutsideSidebar(e) {
        if ((this.windowWidth <= 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
            this.toggleIcon = 'icon-toggle-left';
        }
    }
    toggleRightbar() {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    }
    setNavBarTheme(theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.sidebarImg = 'false';
        }
        else {
            this.menuTitleTheme = 'theme9';
            this.navBarTheme = 'theme1';
            this.sidebarImg = 'false';
        }
    }
    setLayoutType(type) {
        if (type === 'dark') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.add('dark');
            this.setBackgroundPattern('theme1');
            this.menuTitleTheme = 'theme9';
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'light') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'img') {
            this.sidebarImg = 'true';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.activeItemTheme = 'theme1';
        }
    }
    setVerticalLayout() {
        this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
        if (this.isVerticalLayoutChecked) {
            this.verticalLayout = 'box';
            this.displayBoxLayout = '';
            this.pcodedHeaderPosition = 'relative';
            this.pcodedSidebarPosition = 'absolute';
            this.headerFixedMargin = '';
        }
        else {
            this.verticalLayout = 'wide';
            this.displayBoxLayout = 'd-none';
            this.pcodedHeaderPosition = 'fixed';
            this.pcodedSidebarPosition = 'fixed';
            this.headerFixedMargin = '56px';
        }
    }
    setBackgroundPattern(pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
        // this.menuTitleTheme = this.freamType = this.activeItemTheme = this.headerTheme = pattern;
    }
    setSidebarPosition() {
        if (this.verticalNavType !== 'collapsed') {
            this.isSidebarChecked = !this.isSidebarChecked;
            this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
            this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 56px)' : '100%';
            if (this.isHeaderChecked === false) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
        }
    }
    setHeaderPosition() {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '56px' : '';
        if (this.isHeaderChecked === false) {
            window.addEventListener('scroll', this.scroll, true);
            window.scrollTo(0, 0);
        }
        else {
            window.removeEventListener('scroll', this.scroll, true);
            if (this.pcodedDeviceType === 'desktop') {
                this.headerFixedTop = 'auto';
            }
            this.pcodedSidebarPosition = 'fixed';
            if (this.verticalNavType !== 'collapsed') {
                this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 56px)' : 'calc(100vh + 56px)';
            }
        }
    }
    toggleOpenedSidebar() {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
        if (this.verticalNavType !== 'collapsed') {
            this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 56px)' : 'calc(100vh - 56px)';
        }
    }
    hoverOutsideSidebar() {
        if (this.verticalNavType === 'collapsed') {
            const mainEle = document.querySelectorAll('.pcoded-trigger');
            for (let i = 0; i < mainEle.length; i++) {
                mainEle[i].classList.remove('pcoded-trigger');
            }
        }
    }
    fireClick(e) {
        if (this.verticalNavType === 'collapsed') {
            const parentEle = e.target.parentNode.parentNode;
            if (parentEle.classList.contains('pcoded-trigger')) {
                const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < subEle.length; i++) {
                    if (subEle[i].classList.contains('pcoded-trigger')) {
                        subEle[i].classList.remove('pcoded-trigger');
                    }
                }
            }
            else {
                e.target.click();
            }
        }
    }
    fireClickLeave(e) {
        if (this.verticalNavType === 'collapsed') {
            const parentEle = e.target.parentNode.parentNode;
            const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
            for (let i = 0; i < subEle.length; i++) {
                if (subEle[i].classList.contains('pcoded-trigger')) {
                    subEle[i].classList.remove('pcoded-trigger');
                }
            }
        }
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 139, vars: 53, consts: [["id", "pcoded", 1, "pcoded", 3, "resize"], [1, "pcoded-overlay-box"], [1, "pcoded-container", "navbar-wrapper"], [1, "navbar", "header-navbar", "pcoded-header"], [1, "navbar-wrapper"], [1, "navbar-logo"], [1, "ripple", "light", 3, "routerLink"], ["src", "assets/images/comp.png", "alt", "Compserv", 1, "img-fluid"], ["id", "mobile-collapse", "href", "javascript:", 1, "mobile-menu", "ripple", "light", 3, "exclude", "click", "clickOutside"], [1, "icon-menu"], ["href", "javascript:", 1, "mobile-options", "ripple", "light", 3, "click"], [1, "icon-more"], [1, "navbar-container"], [1, "nav-left"], [1, "header-notification", "ripple", "light"], ["href", "javascript:"], [2, "font-size", "16px", "font-weight", "bold"], [1, "ripple", "light]"], [1, "sidebar_toggle"], [1, "nav-right", 3, "ngClass"], [1, "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], [1, "icon-bell"], [1, "badge", "bg-c-red"], [1, "show-notification", 3, "ngClass"], [1, "ripple"], [1, "media"], [1, "media-body"], [1, "notification-user"], [1, "notification-msg"], [1, "notification-time"], [1, "user-profile", "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], ["src", "assets/images/user.png", "alt", "User-Profile-Image", 1, "img-radius"], [1, "icon-angle-down"], [1, "show-notification", "profile-notification", 3, "ngClass"], [3, "routerLink"], [1, "icon-user"], [3, "routerLink", "click"], [1, "icon-layout-sidebar-left"], [1, "showChat_inner"], [1, "media", "chat-inner-header"], [1, "back_chatBox"], [1, "fa", "fa-chevron-left", 3, "click"], [1, "media", "chat-messages"], ["href", "javascript:", 1, "media-left", "photo-table"], ["src", "assets/images/avatar-3.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "media-body", "chat-menu-content"], [1, ""], [1, "chat-cont"], [1, "chat-time"], [1, "media-body", "chat-menu-reply"], [1, "media-right", "photo-table"], ["src", "assets/images/avatar-4.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "chat-reply-box"], [1, "right-icon-control"], ["action", "javascrpit:", 1, "form-material"], [1, "form-group", "form-primary"], ["type", "text", "name", "footer-email", "required", "", 1, "form-control"], [1, "form-bar"], [1, "float-label"], [1, "fa", "fa-search", "m-r-10"], [1, "form-icon"], [1, "btn", "btn-success", "btn-icon", "ripple", "light"], [1, "fa", "fa-paper-plane"], [1, "pcoded-main-container"], [1, "pcoded-wrapper"], ["id", "main_navbar", "sub-item-theme", "theme2", "active-item-style", "style0", 1, "pcoded-navbar", 3, "exclude", "clickOutside", "mouseleave"], [3, "config", "ngClass"], ["appAccordion", "", 1, "pcoded-inner-navbar", "main-menu"], [1, "main-menu-header"], ["src", "assets/images/comp.png", "alt", "User-Profile-Image", 1, "img-menu-user"], [1, "user-details"], ["id", "more-details", 2, "font-weight", "bold", 3, "click"], [2, "max-width", "600px", "max-height", "600px"], ["class", "d-color", 4, "ngFor", "ngForOf"], [1, "pcoded-content"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["id", "styleSelector", 3, "ngClass"], [1, "customfooter"], [1, "text-muted"], ["behavior", "scroll", "direction", "left", "scrollamount", "5"], [1, "text"], [1, "d-color"], [1, "pcoded-navigation-label"], ["class", "pcoded-item pcoded-left-item", "appAccordionLink", "", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", 1, "pcoded-item", "pcoded-left-item", 3, "group"], ["appAccordionLink", "", 3, "routerLinkActive", "group", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", 3, "routerLinkActive", "group", "mouseleave", 4, "ngIf"], ["appAccordionLink", "", 3, "routerLinkActive", "group"], ["appAccordionToggle", "", 1, "ripple", 3, "routerLinkActive", "href", "target"], [1, "pcoded-micon"], [1, "pcoded-mtext"], [3, "class", 4, "ngFor", "ngForOf"], [1, "pcoded-mcaret"], ["class", "ripple", "appAccordionToggle", "", 3, "routerLinkActive", "routerLink", "target", 4, "ngIf", "ngIfElse"], ["mainContent", ""], ["appAccordionToggle", "", 1, "ripple", 3, "routerLinkActive", "routerLink", "target"], ["appAccordionLink", "", 1, "pcoded-hasmenu", 3, "routerLinkActive", "group", "mouseleave"], ["href", "javascript:;", "appAccordionToggle", "", 3, "routerLinkActive", "mouseover"], [1, "ripple", "menu-ripple"], [1, "pcoded-submenu"], ["ngFor", "", 3, "ngForOf"], [4, "ngIf"], [3, "routerLinkActive", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", "group", "sub-toggled", 3, "routerLinkActive", "mouseleave", 4, "ngIf"], [3, "routerLinkActive"], [3, "routerLinkActive", "routerLink", "target"], [1, "icon-angle-right"], ["appAccordionLink", "", "group", "sub-toggled", 1, "pcoded-hasmenu", 3, "routerLinkActive", "mouseleave"], [1, "icon-direction-alt"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_8_listener($event) { return ctx.toggleOpened($event); })("clickOutside", function AdminComponent_Template_a_clickOutside_8_listener($event) { return ctx.onClickedOutsideSidebar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_10_listener() { return ctx.toggleHeaderNavRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_li_clickOutside_25_listener() { return ctx.notificationOutsideClick("live"); })("click", function AdminComponent_Template_li_click_25_listener() { return ctx.toggleLiveNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Some Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Some Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Some Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet, consectetuer elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "30 minutes ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_li_clickOutside_60_listener() { return ctx.notificationOutsideClick("profile"); })("click", function AdminComponent_Template_li_click_60_listener() { return ctx.toggleProfileNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_72_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_i_click_78_listener() { return ctx.toggleInnerChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Josephin Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "form", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Share Your Thoughts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nav", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_nav_clickOutside_113_listener($event) { return ctx.onClickedOutsideSidebar($event); })("mouseleave", function AdminComponent_Template_nav_mouseleave_113_listener() { return ctx.hoverOutsideSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "perfect-scrollbar", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_120_listener() { return ctx.toggleOpenedSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "perfect-scrollbar", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AdminComponent_div_123_Template, 4, 3, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "footer", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "marquee", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Tomorrow there will be holiday to bank.........");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("nav-type", ctx.navType)("theme-layout", ctx.themeLayout)("vertical-placement", ctx.verticalPlacement)("vertical-layout", ctx.verticalLayout)("pcoded-device-type", ctx.pcodedDeviceType)("vertical-nav-type", ctx.verticalNavType)("vertical-effect", ctx.verticalEffect)("vnavigation-view", ctx.vnavigationView)("fream-type", ctx.freamType)("sidebar-img", ctx.sidebarImg)("sidebar-img-type", ctx.sidebarImgType)("layout-type", ctx.layoutType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("header-theme", ctx.headerTheme)("pcoded-header-position", ctx.pcodedHeaderPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", "#main_navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bankName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@mobileHeaderNavRight", ctx.navRight)("ngClass", ctx.navRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.liveNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@notificationBottom", ctx.liveNotification)("ngClass", ctx.liveNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.profileNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userData.F_NAME, " ", ctx.userData.L_NAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@notificationBottom", ctx.profileNotification)("ngClass", ctx.profileNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx.innerChatSlideInOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.headerFixedMargin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.headerFixedTop)("height", ctx.sidebarFixedNavHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", "#mobile-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("navbar-theme", ctx.navBarTheme)("active-item-theme", ctx.activeItemTheme)("pcoded-header-position", ctx.pcodedHeaderPosition)("pcoded-navbar-position", ctx.pcodedSidebarPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "235px")("max-height", ctx.sidebarFixedHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("ngClass", ctx.perfectDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.barnchName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getAll());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.configOpenRightBar);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarComponent"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_10__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_12__["AccordionLinkDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_13__["AccordionAnchorDirective"]], styles: [".customfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  height: 30px;\n  width: 100%;\n  background: white;\n  align-items: center;\n  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.2);\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #1b1717;\n  font-size: 15px;\n  text-decoration: none;\n  align-items: center;\n  padding-top: 3px;\n  padding-bottom: 2px;\n}\n\n.bank[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBR25CLCtDQUErQztBQUNuRDs7QUFFQTtFQUNJLGNBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC00cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggLTRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwcHggLTRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRleHQge1xuICAgIGNvbG9yOiByZ2IoMjcsIDIzLCAyMyk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLmJhbmsge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notificationBottom', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'visible',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('an-off <=> an-animate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    width: '280px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    width: '0',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
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
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileMenuTop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('no-block <=> yes-block', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notificationBottom', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'visible',
                            height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('an-off <=> an-animate', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            width: '280px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            width: '0',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
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
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileMenuTop', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('no-block <=> yes-block', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BreadcrumbsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", breadcrumb_r1.status === false ? "not-active" : "")("routerLink", breadcrumb_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r1.label);
} }
const _c0 = function () { return ["/dashboard/default/"]; };
class BreadcrumbsComponent {
    constructor(router, route, titleService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.tempState = [];
        this.title = 'Welcome';
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(() => {
            this.breadcrumbs = [];
            this.tempState = [];
            let currentRoute = this.route.root, url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(routes => {
                    if (routes.outlet === 'primary') {
                        const routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        if (routes.snapshot.data.title !== undefined) {
                            let status = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status = routes.snapshot.data.status;
                            }
                            let icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            let caption = false;
                            if (routes.snapshot.data.caption !== undefined) {
                                caption = routes.snapshot.data.caption;
                            }
                            if (!this.tempState.includes(routes.snapshot.data.title)) {
                                this.tempState.push(routes.snapshot.data.title);
                                this.title = routes.snapshot.data.title;
                                this.breadcrumbs.push({
                                    label: routes.snapshot.data.title,
                                    icon: icon,
                                    caption: caption,
                                    status: status,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
                this.titleService.setTitle(this.title + ' | Your Bank Name');
            } while (currentRoute);
        });
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 5, vars: 3, consts: [[1, "breadcrumb-title"], [1, "breadcrumb-item"], [1, "bread", 3, "routerLink"], [1, "fa", "fa-home"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "bread", 3, "ngClass", "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbsComponent_li_4_Template, 3, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".not-active[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/admin/title/title.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/title/title.component.ts ***!
  \*******************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class TitleComponent {
    constructor(router, route, titleService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(() => {
            let currentRoute = this.route.root;
            let title = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(routes => {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.title;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            if (title !== undefined) {
                this.titleService.setTitle(title + ' | Welcome Your Bank Name');
            }
        });
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 1, vars: 0, template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title',
                template: '<span></span>'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _admin_title_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/title/title.component */ "./src/app/layout/admin/title/title.component.ts");





class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], _admin_title_title_component__WEBPACK_IMPORTED_MODULE_3__["TitleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__);





class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    closeOtherLinks(openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                const toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
        }
        this.navlinks.forEach((link) => {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]).subscribe((event) => {
            this.countState = 0;
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordion]',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");




class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pcoded-trigger", ctx.open);
    } }, inputs: { group: "group", open: "open" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.pcoded-trigger']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card-animation.ts ***!
  \***********************************************/
/*! exports provided: cardToggle, cardClose, cardIconToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardIconToggle", function() { return cardIconToggle; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);
const cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms')),
]);
const cardIconToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardIconToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        width: '35px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('an-off <=> an-animate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);


/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/card/card-toggle.directive.ts ***!
  \******************************************************/
/*! exports provided: CardToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function() { return CardToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardToggleDirective {
    constructor(el) {
        this.el = el;
    }
    onToggle($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('fa-minus');
        this.el.nativeElement.classList.toggle('fa-plus');
    }
}
CardToggleDirective.ɵfac = function CardToggleDirective_Factory(t) { return new (t || CardToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CardToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardToggleDirective, selectors: [["", "appCardToggleEvent", ""]], hostBindings: function CardToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardToggleDirective_click_HostBindingHandler($event) { return ctx.onToggle($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCardToggleEvent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/card/card-animation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");





function CardComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.headerContent);
} }
function CardComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_div_5_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.toggleCardOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_div_5_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.toggleCardOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_1_div_5_li_2_Template, 2, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_1_div_5_li_3_Template, 2, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_Template_i_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.fullScreen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_Template_i_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.cardRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_div_5_Template_i_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.closeCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardIconToggle", ctx_r4.cardIconToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx_r4.fullCardIcon, " full-card");
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_1_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_1_div_5_Template, 12, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.classHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.classHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.cardOptionBlock);
} }
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*", [["", 8, "code-header"]]];
const _c1 = ["*", ".code-header"];
class CardComponent {
    constructor() {
        this.classHeader = false;
        this.cardOptionBlock = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
        this.fullCardIcon = 'fa-expand';
        this.cardIconToggle = 'an-off';
    }
    ngOnInit() {
        if (this.cardOptionBlock) {
            this.cardToggle = 'false';
        }
    }
    toggleCard(event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }
    toggleCardOption() {
        this.isCardToggled = !this.isCardToggled;
        this.cardIconToggle = this.cardIconToggle === 'an-off' ? 'an-animate' : 'an-off';
    }
    closeCard(event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
    fullScreen(event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
    }
    cardRefresh() {
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout(() => {
            this.cardLoad = '';
            this.loadCard = false;
        }, 3000);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { headerContent: "headerContent", title: "title", blockClass: "blockClass", cardClass: "cardClass", classHeader: "classHeader", cardOptionBlock: "cardOptionBlock" }, ngContentSelectors: _c1, decls: 6, vars: 10, consts: [[3, "ngClass"], ["class", "card-header ripple", 4, "ngIf"], [1, "card-block-hid"], [1, "card-block", 3, "ngClass"], ["class", "card-loader", 4, "ngIf"], [1, "card-header", "ripple"], [4, "ngIf"], ["class", "card-header-right", 4, "ngIf"], [1, "card-header-right"], [1, "list-unstyled", "card-option"], [3, "click", 4, "ngIf"], [3, "click"], ["appCardToggleEvent", "", 1, "fa", "fa-minus", "minimize-card", 3, "click"], [1, "fa", "fa-refresh", "reload-card", 3, "click"], [1, "fa", "fa-trash", "close-card", 3, "click"], [1, "fa", "fa", "open-card-option", "fa-wrench"], [1, "fa", "fa", "open-card-option", "fa-times"], [1, "card-loader"], [1, "fa", "fa-spinner", "rotate-refresh"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("card ", ctx.fullCard, " ", ctx.cardLoad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardClose", ctx.cardClose)("ngClass", ctx.cardClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardToggle", ctx.cardToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.blockClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["CardToggleDirective"]], styles: [".card .card-header .card-header-right .card-option {\n  width: 140px;\n  transition: unset;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLFlBQVk7RUFDWixpQkFBaUI7QUFGekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgLmNhcmQtaGVhZGVye1xyXG4gICAgLmNhcmQtaGVhZGVyLXJpZ2h0e1xyXG4gICAgICAuY2FyZC1vcHRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2, data: { animation: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardIconToggle"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                animations: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardIconToggle"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { headerContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blockClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardOptionBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/elements/data-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/elements/data-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class DataFilterPipe {
    transform(array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, row => row.name.indexOf(query) > -1);
        }
        return array;
    }
}
DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) { return new (t || DataFilterPipe)(); };
DataFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dataFilter", type: DataFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: "dataFilter"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToggleFullScreenDirective {
    onClick() {
        /*if (screenfull.enabled) {
          screenfull.toggle();
        }*/
    }
}
ToggleFullScreenDirective.ɵfac = function ToggleFullScreenDirective_Factory(t) { return new (t || ToggleFullScreenDirective)(); };
ToggleFullScreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToggleFullScreenDirective, selectors: [["", "appToggleFullScreen", ""]], hostBindings: function ToggleFullScreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullScreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullScreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToggleFullScreen]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const MENUITEMS = [
    {
        label: '',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'sub',
                icon: 'icon-home',
                children: [
                    {
                        state: 'default',
                        short_label: 'D',
                        name: 'Default',
                        type: 'sub',
                        children: [
                            {
                                state: 'demo',
                                name: 'Demo'
                            },
                            {
                                state: 'demo1',
                                name: 'Demo1',
                                target: false
                            }
                        ]
                    },
                ]
            },
            {
                state: 'master',
                short_label: 'D',
                name: 'Master',
                type: 'sub',
                icon: 'icon-home',
                id: 1,
                children: [
                    {
                        state: 'generalLedger',
                        name: 'General Ledger',
                        short_label: 'D',
                        type: 'sub',
                        id: 2,
                        children: [
                            {
                                state: 'gl-statement-code',
                                name: 'GL Statement Code',
                                id: 3
                            },
                            {
                                state: 'gl-accounts-master',
                                name: 'GL Accounts Master',
                                id: 4
                            },
                            {
                                state: 'gl-report-master',
                                name: 'GL Report Master',
                                id: 5
                            },
                            {
                                state: 'gl-report-linking',
                                name: 'GL Report Linking',
                                id: 6
                            },
                            {
                                state: 'budget-master',
                                name: 'Budget Master',
                                id: 7
                            },
                        ]
                    },
                    {
                        state: 'customer',
                        name: 'Customer',
                        short_label: 'D',
                        type: 'sub',
                        id: 8,
                        children: [
                            {
                                state: 'customerId',
                                name: 'Customer Id',
                                id: 9
                            },
                            {
                                state: 'sharesMaster',
                                name: 'Shares Master',
                                id: 10
                            },
                            {
                                state: 'anamatGSM',
                                name: 'Anamat / General Sub Master',
                                id: 11
                            },
                            {
                                state: 'savingMaster',
                                name: 'Saving Master',
                                id: 12
                            },
                            {
                                state: 'currentAccountMaster',
                                name: 'Current Account Master',
                                id: 13
                            },
                            {
                                state: 'termDepositsMaster',
                                name: 'Term Deposits Master',
                                id: 14
                            },
                            {
                                state: 'cashCreditMaster',
                                name: 'Cash Credit Master',
                                id: 15
                            },
                            {
                                state: 'termLoanMaster',
                                name: 'Term Loan Master',
                                id: 16
                            },
                            {
                                state: 'disputeLoanMaster',
                                name: 'Dispute Loan Master',
                                id: 17
                            },
                            {
                                state: 'pigmyAgentMaster',
                                name: 'Pigmy Agent Master',
                                id: 18
                            },
                            {
                                state: 'pigmyAccountMaster',
                                name: 'Pigmy Account Master',
                                id: 19
                            },
                            {
                                state: 'deadStockMaster',
                                name: 'Dead Stock Master',
                                id: 20
                            },
                            {
                                state: 'accountOpening',
                                name: 'Investment Master',
                                id: 52
                            },
                        ]
                    },
                    {
                        state: 'balanceEntry',
                        short_label: 'D',
                        name: 'Balance Entry',
                        type: 'sub',
                        id: 21,
                        children: [
                            {
                                state: 'balanceUpdation',
                                name: 'Balance Updation',
                                id: 22
                            },
                            {
                                state: 'reconciliationOTE',
                                name: 'Reconciliation Opening Transaction Entry',
                                id: 23
                            },
                            {
                                state: 'reconciliationTE',
                                name: 'Reconciliation Transaction Entry',
                                id: 24
                            },
                            {
                                state: 'loanieacdu',
                                name: 'Loan Installment Edit and Close Date Updation',
                                id: 25
                            },
                        ]
                    },
                    {
                        state: 'PolicySettings',
                        name: 'Policy Settings',
                        short_label: 'D',
                        type: 'sub',
                        id: 26,
                        children: [
                            {
                                state: 'information',
                                name: 'Information',
                                id: 27
                            },
                            {
                                state: 'definations',
                                name: 'Definations',
                                id: 28
                            },
                            {
                                state: 'sizewiseBalanceModification',
                                name: 'Sizewise Balance Modification',
                                id: 29
                            },
                            {
                                state: 'tDReceiptTypeMaster',
                                name: 'TD Receipt Type Master',
                                id: 30
                            },
                            {
                                state: 'nPAClassificationSlabMaster',
                                name: 'NPA Classification Slab Master ',
                                id: 31
                            },
                        ]
                    },
                    {
                        state: 'Maintainance',
                        name: 'Maintainance',
                        short_label: 'D',
                        type: 'sub',
                        id: 32,
                        children: [
                            {
                                state: 'securityDetails',
                                name: 'Security Details',
                                id: 33
                            },
                            {
                                state: 'loanAndCCInterestRateChanges',
                                name: 'Loan And CC Interest Rate Changes',
                                id: 34
                            },
                            {
                                state: 'depositLoanInterestRateEditChange',
                                name: 'Deposit / Loan Interest Rate Edit / Change',
                                id: 35
                            },
                            {
                                state: 'npaOpeningDetailsEntry',
                                name: 'NPA Opening Details Entry',
                                id: 36
                            },
                            {
                                state: 'interestPostingFlagUpdation',
                                name: 'Interest Posting Flag Updation',
                                id: 37
                            },
                            {
                                state: 'accountwiseDocumentAcceptance',
                                name: 'Accountwise Document Acceptance',
                                id: 38
                            },
                            {
                                state: 'notingCharges',
                                name: 'Noting Charges',
                                id: 39
                            }
                        ]
                    },
                    {
                        state: 'Instruction',
                        name: 'Instruction',
                        short_label: 'D',
                        type: 'sub',
                        id: 40,
                        children: [
                            {
                                state: 'overDraft',
                                name: 'Over Draft',
                                id: 41
                            },
                            {
                                state: 'standingInstruction',
                                name: 'Standing Instruction',
                                id: 42
                            },
                            {
                                state: 'interestInstruction',
                                name: 'Interest Instruction',
                                id: 43
                            },
                            {
                                state: 'special',
                                name: 'Special',
                                id: 44
                            },
                            {
                                state: 'freezeAccount',
                                name: 'Freeze Account',
                                id: 45
                            },
                            {
                                state: 'reminderInstruction',
                                name: 'Reminder Instruction',
                                id: 46
                            },
                            {
                                state: 'revokeStandingInstructions',
                                name: 'Revoke Standing Instructions',
                                id: 47
                            }, {
                                state: 'revokeInterestInstruction',
                                name: 'Revoke Interest Instruction',
                                id: 48
                            },
                            {
                                state: 'revokeSpecialInstruction',
                                name: 'Revoke Special Instruction',
                                id: 49
                            },
                            {
                                state: 'lienMarkClear',
                                name: 'Lien Mark Clear',
                                id: 50
                            },
                        ]
                    },
                    // {
                    //   state: 'Investment',
                    //   short_label: 'D',
                    //   name: 'Investment',
                    //   type: 'sub',
                    //   id:51,
                    //   children: [
                    //     {
                    //       state: 'accountOpening',
                    //       name: 'Account Opening',
                    //       id:52
                    //     },
                    //     {
                    //       state: 'transactionEntry',
                    //       name: 'Transaction Entry',
                    //       id:53
                    //     },
                    //     {
                    //       state: 'accountClosing',
                    //       name: 'Account Closing',
                    //       id:54
                    //     },
                    //     {
                    //       state: 'accountOpenPassing',
                    //       name: 'Account Open Passing',
                    //       id:55
                    //     },
                    //     {
                    //       state: 'transactionPassing',
                    //       name: 'Transaction Passing',
                    //       id:56
                    //     },
                    //     {
                    //       state: 'accountClosePassing',
                    //       name: 'Account Close Passing',
                    //       id:57
                    //     },
                    //   ]
                    // },
                    {
                        state: 'Shares',
                        name: 'Shares/Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 58,
                        children: [
                            {
                                state: 'unpaidDividendEntry',
                                name: 'Unpaid Dividend Entry',
                                id: 58
                            },
                            {
                                state: 'yearWiseUnpaidDividendEntry',
                                name: 'Year Wise Unpaid Dividend Entry',
                                id: 59
                            },
                            {
                                state: 'dividendTransferEntry',
                                name: 'Dividend Transfer Entry',
                                id: 60
                            },
                            {
                                state: 'dividendTransferPosting',
                                name: 'Dividend Transfer Posting',
                                id: 61
                            },
                            {
                                state: 'dividendCalculation',
                                name: 'Dividend Calculation',
                                id: 62
                            },
                            {
                                state: 'dividendPosting',
                                name: 'Dividend Posting',
                                id: 63
                            },
                        ]
                    },
                    // {
                    //   state: 'SignatureScanning',
                    //   name: 'SignatureScanning',
                    //   id:64
                    // },
                    {
                        state: 'DDBankCityMaster',
                        name: 'DDBankCityMaster',
                        id: 65
                    },
                ]
            },
            {
                state: 'transaction',
                short_label: 'D',
                name: 'Transaction',
                type: 'sub',
                icon: 'icon-home',
                id: 66,
                children: [
                    {
                        state: 'voucherEntry',
                        name: 'Voucher Entry',
                        id: 67
                    },
                    {
                        state: 'multiVoucher',
                        name: 'Multi Voucher',
                        id: 68
                    },
                    {
                        state: 'batchVoucher',
                        name: 'Batch Transfer Voucher',
                        id: 69
                    },
                    {
                        state: 'memberDAPDT',
                        name: 'Member Dividend And Payable Dividend Transaction ',
                        id: 70
                    },
                    {
                        state: 'memberTransfer',
                        name: 'Member Transfer',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 71,
                        children: [
                            {
                                state: 'MemberTransferTransaction',
                                name: 'Member Transfer Transaction',
                                id: 72
                            },
                            {
                                state: 'BranchAndSalaryDC',
                                name: 'Branch And Salary Division Changes',
                                id: 73
                            },
                            {
                                state: 'TrasferredMemberOB',
                                name: 'Trasferred Member Opening Balances',
                                id: 74
                            },
                        ]
                    },
                    {
                        state: 'recovery',
                        name: 'Recovery',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 75,
                        children: [
                            {
                                state: 'recoveryProcessing',
                                name: 'Recovery Processing',
                                id: 76
                            },
                            {
                                state: 'recoveryModification',
                                name: 'Recovery Modification',
                                id: 77
                            },
                            {
                                state: 'recoveryPosting',
                                name: 'Recovery Posting',
                                id: 78
                            },
                            {
                                state: 'recoveryDataImportExport',
                                name: 'Recovery Data Import Export',
                                id: 79
                            },
                        ]
                    },
                    {
                        state: 'memberLoan',
                        name: 'Member Loan',
                        short_label: 'D',
                        type: 'sub',
                        id: 80,
                        children: [
                            {
                                state: 'loanApplication',
                                name: 'Loan Application',
                                id: 81
                            },
                            {
                                state: 'loanSanction',
                                name: 'Loan Sanction',
                                id: 82
                            }
                        ]
                    },
                    {
                        state: 'dDTransaction',
                        name: 'DD Transaction',
                        id: 83
                    },
                    {
                        state: 'pigmyChartEntry',
                        name: 'Pigmy Chart Entry',
                        id: 84
                    },
                    {
                        state: 'dividendPay',
                        name: 'Dividend Pay',
                        short_label: 'D',
                        type: 'sub',
                        id: 85,
                        children: [
                            {
                                state: 'dividendPaidMarkSD',
                                name: 'Dividend Paid Mark(Salary Division)',
                                id: 86
                            },
                            {
                                state: 'dividendPaidSD',
                                name: 'Dividend Pay(Salary Division)',
                                id: 87
                            },
                        ]
                    },
                    {
                        state: 'cashCreditAcRenewal',
                        name: 'Cash Credit A/c Renewal',
                        id: 88
                    },
                    {
                        state: 'shareTransactions',
                        name: 'Share Transaction',
                        id: 89
                    },
                    {
                        state: 'termDepositAccountClosing',
                        name: 'Term Deposit Account Closing',
                        id: 90
                    },
                    {
                        state: 'TermDepositeAcRenewal',
                        name: 'Term Deposite A/c Renewal',
                        id: 91
                    },
                    {
                        state: 'cashDenomination',
                        name: 'Cash Denomination',
                        short_label: 'D',
                        type: 'sub',
                        id: 92,
                        children: [
                            {
                                state: 'acceptD',
                                name: 'Accept Denomination',
                                id: 93
                            },
                            {
                                state: 'paymentDenomination',
                                name: 'Payment Denomination',
                                id: 94
                            },
                            {
                                state: 'cashInDenomination',
                                name: 'Cash In Denomination',
                                id: 95
                            },
                            {
                                state: 'cashOutDenomination',
                                name: 'Cash Out Denomination',
                                id: 96
                            },
                            {
                                state: 'cashInitialisationEntry',
                                name: 'cash Initialisation Entry',
                                id: 97
                            },
                            {
                                state: 'safeValultToCashier',
                                name: 'Safe Valult To Cashier',
                                id: 98
                            },
                            {
                                state: 'cashierToSafeVault',
                                name: 'Cashier To Safe Vault',
                                id: 100
                            },
                        ]
                    },
                    {
                        state: 'passbookPrinting',
                        name: 'Passbook Printing',
                        short_label: 'D',
                        type: 'sub',
                        id: 101,
                        children: [
                            {
                                state: 'passbookIssue',
                                name: 'Passbook Issue',
                                id: 102
                            },
                            {
                                state: 'passbookEntryPrint',
                                name: 'Passbook Entry Print',
                                id: 103
                            }
                        ]
                    },
                    {
                        state: 'termDepositReceiptPrinting',
                        name: 'Term Deposit Receipt Printing',
                        short_label: 'D',
                        type: 'sub',
                        id: 104,
                        children: [
                            {
                                state: 'depositReceiptPrint',
                                name: 'Deposit Receipt Print',
                                id: 105
                            },
                        ]
                    },
                    {
                        state: 'deadStockPurchase',
                        name: 'Dead Stock Purchase',
                        id: 106
                    },
                    {
                        state: 'deadStockTransaction',
                        name: 'Dead Stock Transaction',
                        id: 107
                    },
                    {
                        state: 'reconciliationEntry',
                        name: 'Reconciliation Entry',
                        id: 108
                    },
                ]
            },
            {
                state: 'passing',
                short_label: 'D',
                name: 'Passing',
                type: 'sub',
                icon: 'icon-home',
                id: 109,
                children: [
                    {
                        state: 'centralisedPassing',
                        name: 'Centralised Passing',
                        id: 110
                    },
                    {
                        state: 'sharesTransactionPassing',
                        name: 'Shares Transaction Passing',
                        id: 111
                    },
                    {
                        state: 'unapproval',
                        name: 'Unapproval',
                        short_label: 'D',
                        type: 'sub',
                        id: 112,
                        children: [
                            {
                                state: 'unapprovalMultivoucher',
                                name: 'Unapproval Multivoucher',
                                id: 113
                            },
                            {
                                state: 'unapprovalVoucher',
                                name: 'Unapproval Voucher',
                                id: 114
                            },
                            {
                                state: 'unapprovalDepositClosing',
                                name: 'Unapproval Deposit Closing',
                                id: 115
                            },
                            {
                                state: 'unapprovalDepositPosting',
                                name: 'Unapproval Deposit Posting',
                                id: 116
                            },
                        ]
                    },
                    //
                    {
                        state: 'masterUnlock',
                        name: 'Master Unlock',
                        id: 117
                    },
                ]
            },
            {
                state: 'view',
                short_label: 'D',
                name: 'View',
                type: 'sub',
                icon: 'icon-home',
                id: 118,
                children: [
                    {
                        state: 'accountEnquiry',
                        name: 'Account Enquiry',
                        id: 119
                    },
                    {
                        state: 'ledgerView',
                        name: 'Ledger View',
                        id: 120
                    },
                    {
                        state: 'sharesLedgerView',
                        name: 'Shares Ledger View',
                        id: 121
                    },
                    {
                        state: 'voucherView',
                        name: 'Voucher View',
                        id: 122
                    },
                    {
                        state: 'customerView',
                        name: 'Customer View',
                        id: 123
                    },
                    {
                        state: 'guarantorView',
                        name: 'Guarantor View',
                        id: 124
                    },
                    {
                        state: 'memberView',
                        name: 'Member View',
                        id: 125
                    },
                    {
                        state: 'masterCard',
                        name: 'Master Card',
                        id: 126
                    },
                    {
                        state: 'memberLiablityView',
                        name: 'Member Liablity View',
                        id: 127
                    },
                    {
                        state: 'otherView',
                        name: 'Other View',
                        id: 128
                    },
                ],
            },
            {
                state: 'reports',
                short_label: 'D',
                name: 'Reports',
                type: 'sub',
                icon: 'icon-home',
                id: 129,
                children: [
                    {
                        state: 'allReportsWithSearching',
                        name: 'All Reports With Searching',
                        id: 129
                    },
                    ////////////////////////////
                    {
                        state: 'dailyReports',
                        name: 'Daily Reports',
                        id: 130
                    },
                    //
                    {
                        state: 'statement',
                        name: 'Statement',
                        id: 131
                    },
                    //
                    {
                        state: 'balanceBook',
                        name: 'Balance Book',
                        id: 132
                    },
                    //
                    {
                        state: 'registers',
                        name: 'Registers',
                        id: 133
                    },
                    //
                    {
                        state: 'denominationReports',
                        name: 'Denomination Reports',
                        id: 134
                    },
                    //
                    {
                        state: 'termDepositReports',
                        name: 'Term Deposit Reports',
                        id: 135
                    },
                    //
                    {
                        state: 'loanReports',
                        name: 'Loan Reports',
                        id: 136
                    },
                    //
                    {
                        state: 'npaReports',
                        name: 'NPA Reports',
                        id: 137
                    },
                    //
                    {
                        state: 'sharesARR',
                        name: 'Shares ARR',
                        id: 138
                    },
                    //
                    {
                        state: 'sharesADR',
                        name: 'Shares ADR',
                        id: 139
                    },
                    //
                    {
                        state: 'nottice',
                        name: 'Nottice',
                        id: 140
                    },
                    //
                    {
                        state: 'otherReports',
                        name: 'Other Reports',
                        id: 141
                    },
                    //
                    {
                        state: 'misReports',
                        name: 'MIS Reports',
                        id: 142
                    },
                    //
                    {
                        state: 'finalReports',
                        name: 'Final Reports',
                        id: 143
                    },
                ]
            },
            {
                state: 'utility',
                short_label: 'D',
                name: 'Utility',
                type: 'sub',
                icon: 'icon-home',
                id: 144,
                children: [
                    {
                        state: 'dayBegin',
                        name: 'Day Begin',
                        id: 145
                    },
                    {
                        state: 'dayEnd',
                        name: 'Day End',
                        short_label: 'D',
                        type: 'sub',
                        id: 146,
                        children: [
                            {
                                state: 'counterWorkDayEnd',
                                name: 'counter Work Day End',
                                id: 147
                            },
                            {
                                state: 'pigmyDayEnd',
                                name: 'pigmy Day End',
                                id: 148
                            },
                        ]
                    },
                    {
                        state: 'backDatedDO',
                        name: 'Back Dated Day Open',
                        id: 149
                    },
                    {
                        state: 'receiptPrintingD',
                        name: 'Receipt Printing Designing',
                        id: 150
                    },
                    {
                        state: 'holiday',
                        name: 'Holiday',
                        id: 151
                    },
                    {
                        state: 'interestPosting',
                        name: 'Interest Posting',
                        short_label: 'D',
                        type: 'sub',
                        id: 152,
                        children: [
                            {
                                state: 'interestCalculation',
                                name: 'Interest Calculation',
                                id: 153
                            },
                            {
                                state: 'interestList',
                                name: 'Interest List',
                                id: 154
                            },
                            {
                                state: 'interestPassing',
                                name: 'Interest Passing',
                                id: 155
                            },
                        ]
                    },
                    {
                        state: 'processACM',
                        name: 'Process And Calculation Menu',
                        id: 156
                    },
                    {
                        state: 'deadStockP',
                        name: 'Dead Stock Process',
                        id: 157
                    },
                    {
                        state: 'dividend',
                        name: 'Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 158,
                        children: [
                            {
                                state: 'dividendList',
                                name: 'Dividend List',
                                id: 159
                            },
                            {
                                state: 'dividendPost',
                                name: 'Dividend Post',
                                id: 160
                            }
                        ]
                    },
                    {
                        state: 'statementHeadInsert',
                        name: 'Statement Head Insert',
                        id: 161
                    },
                    {
                        state: 'changePassword',
                        name: 'Change Password',
                        id: 162
                    },
                    {
                        state: 'roleDefination',
                        name: 'Role Defination',
                        id: 163
                    },
                    {
                        state: 'roleMaster',
                        name: 'Role Master',
                        id: 184
                    },
                    {
                        state: 'userDefination',
                        name: 'User Defination',
                        id: 164
                    },
                    {
                        state: 'cashierUM',
                        name: 'Cashier User Maintainance',
                        id: 165
                    },
                    {
                        state: 'sharesCCTS',
                        name: 'Shares Contribution Credit To Shares',
                        id: 166
                    },
                    {
                        state: 'silverJACTS',
                        name: 'Silver Jubilee Amount Credit To Shares',
                        id: 167
                    },
                    {
                        state: 'masikBDW',
                        name: 'Masik Bachat Deposit Withdrawl',
                        id: 168
                    },
                    {
                        state: 'schemeATE',
                        name: 'Scheme Amount Transfer Entry',
                        id: 169
                    },
                    {
                        state: 'schemeParameters',
                        name: 'Scheme Parameters',
                        id: 170
                    },
                    {
                        state: 'calculator',
                        name: 'Calculator',
                        id: 171
                    },
                    {
                        state: 'remindMe',
                        name: 'Remind Me',
                        id: 172
                    },
                    {
                        state: 'dataBackup',
                        name: 'Data Backup',
                        id: 173
                    },
                    {
                        state: 'pataSevaSupportR',
                        name: 'PataSeva Support Register',
                        id: 174
                    },
                    {
                        state: 'sharesDataEI',
                        name: 'Sheres Data Export / Import',
                        id: 175
                    },
                    {
                        state: 'dayBookIE',
                        name: 'Daybook Import / Export',
                        id: 176
                    },
                    {
                        state: 'demandDraftDEI',
                        name: 'Demand Draft Data Export/ Import',
                        id: 177
                    },
                ]
            },
            {
                state: 'windows',
                short_label: 'D',
                name: 'Windows',
                type: 'sub',
                icon: 'icon-home',
                id: 178,
                children: [
                    {
                        state: 'casecade',
                        name: 'CaseCade',
                        id: 179
                    },
                    {
                        state: 'tileHorizontaily',
                        name: 'Tile Horizontaily',
                        id: 180
                    },
                    {
                        state: 'tileVertically',
                        name: 'Tile Vertically',
                        id: 181
                    },
                ]
            },
            {
                state: 'hotKeys',
                short_label: 'D',
                name: 'Hot Key',
                type: 'link',
                icon: 'icon-home',
                id: 182
            },
            {
                state: 'exit',
                short_label: 'D',
                name: 'Exit',
                type: 'link',
                icon: 'icon-home',
                id: 182
            },
        ],
    },
];
class MenuItems {
    getAll() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function() { return ModalAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalAnimationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function ModalAnimationComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAnimationComponent_ng_template_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(ctx_r3.modalID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ModalAnimationComponent {
    constructor() {
        this.backDrop = false;
    }
    ngOnInit() {
    }
    close(event) {
        document.querySelector('#' + event).classList.remove('md-show');
    }
}
ModalAnimationComponent.ɵfac = function ModalAnimationComponent_Factory(t) { return new (t || ModalAnimationComponent)(); };
ModalAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalAnimationComponent, selectors: [["app-modal-animation"]], inputs: { modalClass: "modalClass", contentClass: "contentClass", modalID: "modalID", backDrop: "backDrop" }, ngContentSelectors: _c0, decls: 6, vars: 5, consts: [[1, "md-modal", 3, "ngClass", "id"], [1, "md-content", 3, "ngClass"], ["class", "md-overlay", 4, "ngIf", "ngIfElse"], ["backDropOver", ""], [1, "md-overlay"], [1, "md-overlay", 3, "click"]], template: function ModalAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalAnimationComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalAnimationComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.modalClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backDrop)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".md-close-btn {\n  border: 0;\n  background: none;\n  color: #ffffff;\n  position: absolute;\n  top: 15px;\n  right: 16px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n\n.md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n  perspective: 600px;\n}\n\n.container {\n  min-height: 100%;\n}\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n  visibility: visible;\n}\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  opacity: 0;\n  background: rgba(55, 58, 60, 0.65);\n  transition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n\n.md-content {\n  color: #666666;\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.md-content h3 {\n  color: #fff;\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  font-size: 1.7em;\n  opacity: 0.8;\n  background: rgba(0, 0, 0, 0.99);\n  border-radius: 3px 3px 0 0;\n}\n\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n  font-weight: 300;\n  font-size: 1.15em;\n}\n\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n}\n\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n\n.md-content > div ul li {\n  padding: 5px 0;\n}\n\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all .3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-12 ~ .md-overlay {\n  background: #0073aa;\n}\n\n.md-effect-12 .md-content {\n  color: #fff;\n  background: transparent;\n}\n\n.md-effect-12 .md-content h3 {\n  color: #fff;\n  background: transparent;\n}\n\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n  border: 1px solid #fff;\n}\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-13 .md-content {\n  animation: slit .7s forwards ease-out;\n}\n\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n\n.md-show.md-effect-16 ~ .md-overlay {\n  background: rgba(180, 46, 32, 0.5);\n}\n\n.md-show.md-effect-16 ~ .container {\n  -moz-filter: blur(3px);\n  filter: blur(3px);\n}\n\n/* Effect 16:  Blur */\n\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n.md-show.md-effect-17 ~ .md-overlay {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n\n.md-show.md-effect-18 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-18 ~ .md-overlay {\n  background: rgba(143, 27, 15, 0.8);\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-18 ~ .container, .md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 0% 50%;\n  -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\n/* Effect 18:  Slide from right with perspective on container */\n\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-19 ~ .container, .md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    animation-timing-function: ease-out;\n  }\n}\n\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBSEE7RUFJSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUdoQixrQkFBa0I7QUFHdEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFFbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFFbkMsMkJBQTJCO0VBSTNCLDRDQUE0QztBQUU5Qzs7QUFDQTtFQUNFLG1CQUFtQjtBQUVyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0NBQWtDO0VBR2xDLG9CQUFvQjtBQUV0Qjs7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFFckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUVoQjs7QUFQQTtFQU9JLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiwwQkFBMEI7QUFJOUI7O0FBbEJBO0VBaUJJLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUtyQjs7QUF6QkE7RUFzQk0sU0FBUztFQUNULGVBQWU7QUFPckI7O0FBOUJBO0VBMEJNLFNBQVM7RUFDVCxzQkFBc0I7QUFRNUI7O0FBbkNBO0VBNkJRLGNBQWM7QUFVdEI7O0FBdkNBO0VBa0NJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0FBU3BCOztBQUxBLG1DQUFBOztBQUVBO0VBSUUscUJBQXFCO0VBQ3JCLFVBQVU7RUFHVixvQkFBb0I7QUFPdEI7O0FBSkE7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtBQU9aOztBQUpBLG1DQUFBOztBQUVBO0VBSUUsMEJBQTBCO0VBQzFCLFVBQVU7RUFHVixzREFBc0Q7QUFNeEQ7O0FBSEE7RUFJRSx3QkFBd0I7RUFDeEIsVUFBVTtBQU1aOztBQUhBLG9DQUFBOztBQUVBO0VBSUUsMEJBQTBCO0VBQzFCLFVBQVU7RUFHVixvQkFBb0I7QUFLdEI7O0FBRkE7RUFJRSx3QkFBd0I7RUFDeEIsVUFBVTtBQUtaOztBQUZBLHdCQUFBOztBQUVBO0VBSUUsa0NBQWtDO0VBQ2xDLFVBQVU7QUFJWjs7QUFEQTtFQUdFLG9CQUFvQjtBQUl0Qjs7QUFEQTtFQUlFLGdDQUFnQztFQUNoQyxVQUFVO0FBSVo7O0FBREEsbUJBQUE7O0FBRUE7RUFJSSxtQkFBbUI7QUFFdkI7O0FBTkE7RUFTSSw0QkFBNEI7RUFJNUIsMkNBQTJDO0VBQzNDLFVBQVU7QUFHZDs7QUFDQTtFQUdFLDRCQUE0QjtFQUk1Qix3Q0FBd0M7RUFDeEMsVUFBVTtBQUVaOztBQUNBLHdCQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBQXZCOztBQUpBO0VBU0ksNEJBQTRCO0VBSTVCLHlEQUF5RDtFQUN6RCxVQUFVO0FBQ2Q7O0FBR0E7RUFHRSw0QkFBNEI7RUFJNUIsbURBQW1EO0VBQ25ELFVBQVU7QUFBWjs7QUFHQSxzQ0FBQTs7QUFFQTtFQUNFLE1BQU07RUFJTiwyQkFBMkI7QUFEN0I7O0FBSkE7RUFVSSw0QkFBNEI7RUFHNUIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDZDs7QUFHQTtFQUlFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUFaOztBQUdBLGlDQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBRnZCOztBQUZBO0VBU0ksNEJBQTRCO0VBSTVCLDBCQUEwQjtFQUcxQixvQkFBb0I7RUFDcEIsVUFBVTtBQURkOztBQUtBO0VBSUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFGWjs7QUFLQSwrQkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQUp2Qjs7QUFBQTtFQVNJLDRCQUE0QjtFQUk1QiwwQkFBMEI7RUFHMUIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFIZDs7QUFPQTtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0FBSlo7O0FBT0EsdUJBQUE7O0FBRUE7RUFJSSxtQkFBbUI7QUFOdkI7O0FBRUE7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLHVCQUF1QjtFQUN2QixVQUFVO0VBR1Ysb0JBQW9CO0FBTHhCOztBQVNBO0VBSUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFOWjs7QUFTQSw0QkFBQTs7QUFFQTtFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0VBR1Ysb0JBQW9CO0FBUHRCOztBQVVBO0VBSUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFQWjs7QUFVQSx3QkFBQTs7QUFFQTtFQUlFLHFCQUFxQjtFQUNyQixVQUFVO0VBR1Ysb0JBQW9CO0FBUnRCOztBQVdBO0VBQ0UsbUJBQW1CO0FBUnJCOztBQVdBO0VBS0UsV0FBVztFQUNYLHVCQUF1QjtBQVp6Qjs7QUFNQTtFQUVJLFdBQVc7RUFDWCx1QkFBdUI7QUFKM0I7O0FBVUE7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNCQUFzQjtBQVB4Qjs7QUFVQSx1QkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQVR2Qjs7QUFLQTtFQVNJLDRCQUE0QjtFQUk1Qiw2Q0FBNkM7RUFDN0MsVUFBVTtBQVJkOztBQVlBO0VBR0UscUNBQXFDO0FBVHZDOztBQXdDQTtFQUNFO0lBQ0UsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixrQ0FBa0M7RUFicEM7RUFnQkE7SUFDRSxzQ0FBc0M7SUFDdEMsVUFBVTtFQWRaO0FBQ0Y7O0FBa0JBLHNDQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBakJ2Qjs7QUFhQTtFQVNJLDRCQUE0QjtFQUk1QiwwQ0FBMEM7RUFHMUMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHViw2QkFBNkI7QUFoQmpDOztBQW9CQTtFQUlFLHVDQUF1QztFQUN2QyxVQUFVO0FBakJaOztBQW9CQSx1Q0FBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQW5CdkI7O0FBZUE7RUFTSSw0QkFBNEI7RUFJNUIsNERBQTREO0VBRzVELHdCQUF3QjtFQUN4QixVQUFVO0VBR1Ysb0JBQW9CO0FBbEJ4Qjs7QUFzQkE7RUFLSSx1REFBdUQ7RUFDdkQsVUFBVTtBQXBCZDs7QUFjQTtFQVVNLGtDQUFrQztBQXBCeEM7O0FBVUE7RUFjTSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBbkJ2Qjs7QUF3QkEscUJBQUE7O0FBRUE7RUFJRSwwQkFBMEI7RUFDMUIsVUFBVTtBQXRCWjs7QUF5QkE7RUFHRSxvQkFBb0I7QUF0QnRCOztBQXlCQTtFQUtJLHdCQUF3QjtFQUN4QixVQUFVO0FBdkJkOztBQWlCQTtFQVVNLFlBQVk7RUFDWixnQkFBZ0I7RUFHaEIsMEJBQTBCO0VBSTFCLHlCQUF5QjtFQUd6Qix3QkFBd0I7RUFHeEIsNEJBQTRCO0FBdkJsQzs7QUFEQTtFQThCTSx5QkFBeUI7RUFHekIsd0JBQXdCO0VBR3hCLDRCQUE0QjtBQXRCbEM7O0FBMkJBLG1FQUFBOztBQUVBO0VBQ0UsVUFBVTtFQUlWLDJCQUEyQjtBQXpCN0I7O0FBNEJBO0VBS0ksd0JBQXdCO0VBQ3hCLFVBQVU7RUFHVix5QkFBeUI7QUExQjdCOztBQWlCQTtFQWFNLFlBQVk7RUFDWixnQkFBZ0I7QUExQnRCOztBQVlBO0VBaUJNLGtDQUFrQztFQUdsQyxvQkFBb0I7QUF6QjFCOztBQUtBO0VBdUJNLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsNkRBQTZEO0VBQzdELGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsMERBQTBEO0VBQzFELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIscURBQXFEO0FBeEIzRDs7QUE2QkEsK0RBQUE7O0FBMEJBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsbUNBQW1DO0VBL0JyQztFQWtDQTtJQUNFLDZCQUE2QjtFQWhDL0I7QUFDRjs7QUFvQ0E7RUFJRSwyQkFBMkI7RUFDM0IsVUFBVTtBQWpDWjs7QUFvQ0E7RUFLSSx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLHlCQUF5QjtBQWxDN0I7O0FBeUJBO0VBYU0sWUFBWTtFQUNaLGdCQUFnQjtBQWxDdEI7O0FBb0JBO0VBbUJNLG9CQUFvQjtBQWpDMUI7O0FBY0E7RUFzQk0sb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0M7QUFoQzlDOztBQXFDQSxtRUFBQTs7QUFrQkE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixtQ0FBbUM7RUFyQ3JDO0FBQ0Y7O0FBeUNBO0VBSUUsNEJBQTRCO0VBQzVCLFVBQVU7QUF0Q1o7O0FBeUNBO0VBSUUsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHVix5QkFBeUI7QUF0QzNCOztBQXlDQTtFQUNFO0lBQ0UsY0FBYztFQXRDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC1hbmltYXRpb24vbW9kYWwtYW5pbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWNsb3NlLWJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1kLXBlcnNwZWN0aXZlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZC1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogNjMwcHg7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMjAwMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubWQtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTEwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTUsIDU4LCA2MCwgMC42NSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50IHtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgfVxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFZmZlY3QgMTogRmFkZSBpbiBhbmQgc2NhbGUgdXAgKi9cclxuXHJcbi5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXHJcblxyXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0yIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0zIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXHJcblxyXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCB+IC5tZC1vdmVybGF5LCAubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDU6IGZhbGwgKi9cclxuXHJcbi5tZC1lZmZlY3QtNSB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZVgoMjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cclxuXHJcbi5tZC1lZmZlY3QtNiB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cclxuXHJcbi5tZC1lZmZlY3QtNyB7XHJcbiAgdG9wOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgODogM0QgZmxpcCBob3Jpem9udGFsICovXHJcblxyXG4ubWQtZWZmZWN0LTgge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC04IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xyXG5cclxuLm1kLWVmZmVjdC05IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtOSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEwOiAzRCBzaWduICovXHJcblxyXG4ubWQtZWZmZWN0LTEwIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTI6ICBKdXN0IG1lICovXHJcblxyXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIH4gLm1kLW92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDczYWE7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMzogM0Qgc2xpdCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xMyB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgLW1vei1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG4gIGFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGl0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogRWZmZWN0IDE0OiAgM0QgUm90YXRlIGZyb20gYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTE0IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE1OiAgM0QgUm90YXRlIGluIGZyb20gbGVmdCAqL1xyXG5cclxuLm1kLWVmZmVjdC0xNSB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdyB7XHJcbiAgJi5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgJi5tZC1lZmZlY3QtMTYgfiB7XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCA0NiwgMzIsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgLW1vei1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgICAgZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXHJcblxyXG4ubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsIC5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gICYubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgJi5tZC1lZmZlY3QtMTcgfiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcztcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgfVxyXG4gICAgLm1kLW92ZXJsYXkge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNzogIFNsaWRlIGluIGZyb20gYm90dG9tIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG59XHJcblxyXG4ubWQtc2hvdyB7XHJcbiAgJi5tZC1lZmZlY3QtMTcgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcclxuICB9XHJcbiAgJi5tZC1lZmZlY3QtMTggfiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm1kLW92ZXJsYXkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywgMjcsIDE1LCAwLjgpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIH1cclxuICAgIC5jb250YWluZXIsIC5tZC1vdmVybGF5IHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICBhbmltYXRpb246IHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSg1ZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSg1ZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWQtZWZmZWN0LTE4IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdyB7XHJcbiAgJi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB9XHJcbiAgJi5tZC1lZmZlY3QtMTkgfiB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm1kLW92ZXJsYXkge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIH1cclxuICAgIC5jb250YWluZXIsIC5tZC1vdmVybGF5IHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIE9wZW5Ub3Age1xyXG4gIDUwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xyXG4gIGJvZHkge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-animation',
                templateUrl: './modal-animation.component.html',
                styleUrls: ['./modal-animation.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { modalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modalID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalBasicComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalBasicComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];
const _c1 = function (a0) { return { "in": a0 }; };
const _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
const _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
class ModalBasicComponent {
    constructor() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() {
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    }
}
ModalBasicComponent.ɵfac = function ModalBasicComponent_Factory(t) { return new (t || ModalBasicComponent)(); };
ModalBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBasicComponent, selectors: [["app-modal-basic"]], inputs: { dialogClass: "dialogClass", hideHeader: "hideHeader", hideFooter: "hideFooter" }, ngContentSelectors: _c3, decls: 7, vars: 10, consts: [["tabindex", "-1", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], [1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]], template: function ModalBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasicComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalBasicComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalBasicComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n\n.basic.fade.in {\n  opacity: 1;\n}\n\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  transform: translate(0, -25%);\n}\n\n.basic .basic-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 16px;\n  color: #292b2c;\n}\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n\n.basic h5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQThCO0VBQzlCLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFVBQVU7QUFBZDs7QUFaQTtFQWVJLFVBQVU7RUFHViwrQkFBK0I7QUFDbkM7O0FBbkJBO0VBb0JNLFVBQVU7QUFHaEI7O0FBdkJBO0VBNEJNLDBCQUEwQjtBQUVoQzs7QUE5QkE7RUFpQ00sNEJBQTRCO0VBSTVCLDZCQUE2QjtBQUduQzs7QUF4Q0E7RUF5Q0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7QUFHbEI7O0FBaERBO0VBZ0RJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUF5QjtFQUN6QixpQkFBaUI7QUFJckI7O0FBekRBO0VBd0RJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUt0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC1iYXNpYy9tb2RhbC1iYXNpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuICAmLmZhZGUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgJi5pbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYubW9kYWwuZmFkZSB7XHJcbiAgICAmLmluIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIH1cclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmFzaWMtY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzI5MmIyYztcclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zMXB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBoNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-basic',
                templateUrl: './modal-basic.component.html',
                styleUrls: ['./modal-basic.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { dialogClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/admin/title/title.component */ "./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-animation/modal-animation.component */ "./src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/data-filter.pipe */ "./src/app/shared/elements/data-filter.pipe.ts");


















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"]
        ], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
        _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_9__["CardToggleDirective"],
        _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_11__["ModalAnimationComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
        _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["DataFilterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"]], exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
        _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_9__["CardToggleDirective"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_11__["ModalAnimationComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"],
        _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["DataFilterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"]
                ],
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
                    _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_9__["CardToggleDirective"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_11__["ModalAnimationComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_13__["ClickOutsideModule"],
                    _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["DataFilterPipe"]
                ],
                declarations: [
                    _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"],
                    _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_9__["CardToggleDirective"],
                    _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_11__["ModalAnimationComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"],
                    _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["DataFilterPipe"]
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinkits.ts ***!
  \********************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinkits */ "./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SpinnerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r1.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.backgroundColor);
} }
function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_0_div_2_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.spinner === ctx_r0.Spinkit.skLine);
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor", spinner: "spinner" }, decls: 1, vars: 1, consts: [["id", "http-loader", 4, "ngIf"], ["id", "http-loader"], [1, "loader-bg"], ["class", "sk-line-material", 3, "colored", 4, "ngIf"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNqQjs7QUFFQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcbiJdfQ== */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBUTtFQUNSLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNmOztBQUVBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBSztFQUNMLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFFdkIsMkRBQTJEO0FBQy9EOztBQWFBO0VBQ0k7SUFFSSxvQkFBb0I7RUFDMUI7RUFDRTtJQUVJLG9CQUFvQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQ0FBK0I7QUFDbkM7O0FBRUE7RUFDSSx5Q0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICB0b3A6IDAgIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: [
                    './spinner.component.scss',
                    './spinkit-css/sk-line-material.scss'
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/auth/auth.interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/auth/auth.interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptorServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorServices", function() { return AuthInterceptorServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class AuthInterceptorServices {
    intercept(request, next) {
        debugger;
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log('event--->>>', event);
            }
            return event;
        }));
    }
}
AuthInterceptorServices.ɵfac = function AuthInterceptorServices_Factory(t) { return new (t || AuthInterceptorServices)(); };
AuthInterceptorServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorServices, factory: AuthInterceptorServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/hot-keys/hot-keys.component.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/hot-keys/hot-keys.component.ts ***!
  \******************************************************/
/*! exports provided: HotKeysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotKeysComponent", function() { return HotKeysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HotKeysComponent {
    constructor() { }
    ngOnInit() {
    }
}
HotKeysComponent.ɵfac = function HotKeysComponent_Factory(t) { return new (t || HotKeysComponent)(); };
HotKeysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotKeysComponent, selectors: [["app-hot-keys"]], decls: 151, vars: 0, consts: [[1, "row"], [1, "col-sm"], [1, "card"], [1, "card-header"], [1, "card-block"]], template: function HotKeysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hot Keys Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "F2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Single Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Multi Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Account Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "^F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "F9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ledger View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "F11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Manager View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "F12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Centralised Passing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "^F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Voucher View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "^B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Batch Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "F1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Code Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "^C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "^X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "^V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Peast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "^U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "^A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2hvdC1rZXlzL2hvdC1rZXlzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotKeysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hot-keys',
                templateUrl: './hot-keys.component.html',
                styleUrls: ['./hot-keys.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'http://134.209.159.164:4000'
    // base_url : 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NewCBS\Frontend-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map