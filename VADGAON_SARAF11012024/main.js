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
/* harmony import */ var _datatablekit_datatablekit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatablekit/datatablekit.component */ "./src/app/datatablekit/datatablekit.component.ts");
/* harmony import */ var _theme_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/auth/auth.guard */ "./src/app/theme/auth/auth.guard.ts");








const routes = [
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: '/auth/login/simple',
                pathMatch: 'full', canActivate: [_theme_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
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
                loadChildren: () => __webpack_require__.e(/*! import() | theme-hot-keys-hot-keys-module */ "theme-hot-keys-hot-keys-module").then(__webpack_require__.bind(null, /*! ./theme/hot-keys/hot-keys.module */ "./src/app/theme/hot-keys/hot-keys.module.ts")).then(m => m.HotkeysModule)
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
                loadChildren: () => __webpack_require__.e(/*! import() | theme-table-tbl-datatable-tbl-datatable-module */ "theme-table-tbl-datatable-tbl-datatable-module").then(__webpack_require__.bind(null, /*! ./theme/table/tbl-datatable/tbl-datatable.module */ "./src/app/theme/table/tbl-datatable/tbl-datatable.module.ts")).then(m => m.TblDatatableModule)
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
                loadChildren: () => __webpack_require__.e(/*! import() | theme-crm-contact-crm-contact-module */ "theme-crm-contact-crm-contact-module").then(__webpack_require__.bind(null, /*! ./theme/crm-contact/crm-contact.module */ "./src/app/theme/crm-contact/crm-contact.module.ts")).then(m => m.CrmContactModule)
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
                loadChildren: () => Promise.all(/*! import() | theme-extension-file-upload-ui-file-upload-ui-module */[__webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("theme-extension-file-upload-ui-file-upload-ui-module")]).then(__webpack_require__.bind(null, /*! ./theme/extension/file-upload-ui/file-upload-ui.module */ "./src/app/theme/extension/file-upload-ui/file-upload-ui.module.ts")).then(m => m.FileUploadUiModule)
            },
            {
                path: 'full-event-calendar',
                loadChildren: () => Promise.all(/*! import() | theme-extension-full-event-calendar-full-event-calendar-module */[__webpack_require__.e("default~holiday-holiday-module~theme-extension-full-event-calendar-full-event-calendar-module"), __webpack_require__.e("theme-extension-full-event-calendar-full-event-calendar-module")]).then(__webpack_require__.bind(null, /*! ./theme/extension/full-event-calendar/full-event-calendar.module */ "./src/app/theme/extension/full-event-calendar/full-event-calendar.module.ts")).then(m => m.FullEventCalendarModule)
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
            },
            {
                path: 'shortcut-key',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./theme/shortcut-key/shortcut-key.module */ "./src/app/theme/shortcut-key/shortcut-key.module.ts")).then(m => m.ShortcutKeyModule)
            }
        ]
    },
    {
        path: '',
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-auth-auth-module */ "theme-auth-auth-module").then(__webpack_require__.bind(null, /*! ./theme/auth/auth.module */ "./src/app/theme/auth/auth.module.ts")).then(m => m.AuthModule)
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
    },
    {
        path: 'datatableKit',
        component: _datatablekit_datatablekit_component__WEBPACK_IMPORTED_MODULE_4__["DatatablekitComponent"]
    },
    {
        path: 'ledgers',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-ledgers-ledgers-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~ledger-view-ledger-view-module~shortcutkey-accounts-a~c5aa3a19"), __webpack_require__.e("shortcutkey-ledgers-ledgers-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/ledgers/ledgers.module */ "./src/shortcutkey/ledgers/ledgers.module.ts")).then(m => m.LedgersModule)
    },
    {
        path: 'accountenq',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-accounts-accounts-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~ledger-view-ledger-view-module~shortcutkey-accounts-a~c5aa3a19"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~shares-ledger-view-shares-ledger-view-module~shortcut~ce2605c5"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~other-view-other-view-module~shortcutkey-accounts-acc~6bb7d6ee"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~shortcutkey-accounts-accounts-module"), __webpack_require__.e("shortcutkey-accounts-accounts-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/accounts/accounts.module */ "./src/shortcutkey/accounts/accounts.module.ts")).then(m => m.AccountsModule)
    },
    {
        path: 'custview',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-customers-customers-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~customer-view-customer-view-module~shortcutkey-customers-customers-module"), __webpack_require__.e("shortcutkey-customers-customers-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/customers/customers.module */ "./src/shortcutkey/customers/customers.module.ts")).then(m => m.CustomersModule)
    },
    {
        path: 'managerview',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-managers-managers-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~manager-view-manager-view-module~shortcutkey-managers-managers-module"), __webpack_require__.e("shortcutkey-managers-managers-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/managers/managers.module */ "./src/shortcutkey/managers/managers.module.ts")).then(m => m.ManagersModule)
    },
    {
        path: 'voucherview',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-vouchers-vouchers-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("default~shortcutkey-vouchers-vouchers-module~voucher-view-voucher-view-module"), __webpack_require__.e("shortcutkey-vouchers-vouchers-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/vouchers/vouchers.module */ "./src/shortcutkey/vouchers/vouchers.module.ts")).then(m => m.VouchersModule)
    },
    {
        path: 'Vouchers',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-v-entry-v-entry-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("shortcutkey-v-entry-v-entry-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/v-entry/v-entry.module */ "./src/shortcutkey/v-entry/v-entry.module.ts")).then(m => m.VentryModule)
    },
    {
        path: 'multivouchers',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-m-voucher-m-voucher-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("shortcutkey-m-voucher-m-voucher-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/m-voucher/m-voucher.module */ "./src/shortcutkey/m-voucher/m-voucher.module.ts")).then(m => m.MvoucherModule)
    },
    {
        path: 'batchVouchers',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-b-voucher-b-voucher-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~batch-voucher-batch-voucher-module~centralised-passing-centralisedPassing-module~master-unlo~093be79f"), __webpack_require__.e("shortcutkey-b-voucher-b-voucher-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/b-voucher/b-voucher.module */ "./src/shortcutkey/b-voucher/b-voucher.module.ts")).then(m => m.BvoucherModule)
    },
    {
        path: 'centralpassing',
        loadChildren: () => Promise.all(/*! import() | shortcutkey-centralised-passing-cdPassing-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~8d2c5d11"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~6dad4c2a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b549deb6"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~a3a628d8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~scheme-param~af6ab334"), __webpack_require__.e("default~batch-voucher-batch-voucher-module~centralised-passing-centralisedPassing-module~master-unlo~093be79f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~interest-instruction-interest-instruction-modu~e7ca019d"), __webpack_require__.e("default~button-button-module~centralised-passing-centralisedPassing-module~master-unlock-masterUnloc~175cd2f5"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b193468d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~b9e09a18"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~e2f6e169"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~e6cf2795"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-accoun~38a78257"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~saving-maste~ff538ca8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-~8973751f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~share-transa~9f57c8de"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shares-maste~e8e7122d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-master-locker-master-module~master-unlo~ec09e23a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~465dbe6a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-agent-~088f9406"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-purchase-dead-stock-purchase-module~b0ab237f"), __webpack_require__.e("default~cash-credit-ac-renewal-cash-credit-ac-renewal-module~centralised-passing-centralisedPassing-~5540bd3a"), __webpack_require__.e("default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module~master-~f0beee37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-master-dead-stock-master-module~mas~e5765337"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~centralised-passing-centralisedPassing-module~master-unlock-mas~eabe2aa2"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-rent-transactions-locker-rent-transacti~8c80da37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~gold-silver-return-entry-gold-silver-return-en~b2f2e1b6"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~00882204"), __webpack_require__.e("shortcutkey-centralised-passing-cdPassing-module")]).then(__webpack_require__.bind(null, /*! ../shortcutkey/centralised-passing/cdPassing.module */ "./src/shortcutkey/centralised-passing/cdPassing.module.ts")).then(m => m.CentralPassingModule)
    },
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/auth/auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");









class AppComponent {
    constructor(router, _hotkeysService, _authService) {
        this.router = router;
        this._hotkeysService = _hotkeysService;
        this._authService = _authService;
        this.title = 'Welcome || Your Bank Name';
        this.site = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].sitename;
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
    // site environment
    addHotKeys() {
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"](['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
            'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'shift+f5', 'ctrl+fn+f5', 'ctrl+shift+d', 'ctrl+e'], (event, combo) => {
            if (combo === 'ctrl+fn+f2' || combo === 'f2') {
                this.router.navigate([]).then(result => { window.open(this.site + '/utility/calculator', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
                this.router.navigate([]).then(result => { window.open(this.site + '/Vouchers', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
                this.router.navigate([]).then(result => { window.open(this.site + '/multivouchers', '', "width=1200,height=500"); });
            }
            else if (combo === 'shift+fn+f8' || combo === 'f8') {
                this.router.navigate([]).then(result => { window.open(this.site + '/accountenq', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
                this.router.navigate([]).then(result => { window.open(this.site + '/custview', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
                this.router.navigate([]).then(result => { window.open(this.site + '/ledgers', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
                this.router.navigate([]).then(result => { window.open(this.site + '/managerview', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
                this.router.navigate([]).then(result => { window.open(this.site + '/centralpassing', '', "width=1200,height=500"); });
            }
            else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
                this.router.navigate([]).then(result => { window.open(this.site + '/voucherview', '', "width=1200,height=500"); });
            }
            else if (combo === 'shift+f5') {
                this.router.navigate([]).then(result => { window.open(this.site + '/batchVouchers', '', "width=1200,height=500"); });
            }
            return false;
        }, ['INPUT', 'TEXTAREA', 'SELECT']));
    }
    // local environment
    // addHotKeys() {
    //   this._hotkeysService.add(new Hotkey(['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12',
    //     'ctrl+fn+f2', 'ctrl+fn+f3', 'ctrl+fn+f4', 'ctrl+fn+f5', 'ctrl+fn+f6', 'ctrl+fn+f7', 'shift+fn+f8', 'ctrl+fn+f8', 'ctrl+f3', 'ctrl+fn+f9', 'ctrl+fn+f10', 'ctrl+fn+f11', 'ctrl+fn+f12', 'ctrl+a', 'ctrl+shift+a', 'shift+f5', 'ctrl+fn+f5', 'ctrl+shift+d', 'ctrl+e'],
    //     (event: KeyboardEvent, combo: string): boolean => {
    //       if (combo === 'ctrl+fn+f2' || combo === 'f2') {
    //         this.router.navigate([]).then(result => { window.open(this.site + '/utility/calculator', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+fn+f3' || combo === 'f3') {
    //         this.router.navigate([]).then(result => { window.open('/Vouchers', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+fn+f4' || combo === 'f4') {
    //         this.router.navigate([]).then(result => { window.open('/multivouchers', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'shift+fn+f8' || combo === 'f8') {
    //         this.router.navigate([]).then(result => { window.open('/accountenq', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+f8' || combo === 'ctrl+fn+f8') {
    //         this.router.navigate([]).then(result => { window.open('/custview', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+fn+f9' || combo === 'f9') {
    //         this.router.navigate([]).then(result => { window.open('/ledgers', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+fn+f11' || combo === 'f11') {
    //         this.router.navigate([]).then(result => { window.open('/managerview', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+fn+f12' || combo === 'f12') {
    //         this.router.navigate([]).then(result => { window.open('/centralpassing', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'ctrl+f3' || combo === 'ctrl+f3') {
    //         this.router.navigate([]).then(result => { window.open('/voucherview', '', "width=1200,height=500"); });
    //       }
    //       else if (combo === 'shift+f5') {
    //         this.router.navigate([]).then(result => { window.open('/batchVouchers', '', "width=1200,height=500"); });
    //       }
    //       return false;
    //     }, ['INPUT', 'TEXTAREA', 'SELECT']));
    // }
    // @HostListener('window:beforeunload', ['$event'])
    beforeunloadHandler(event) {
        let val = localStorage.getItem('countoftabs');
        // if (Number(val) != 1){
        let value = Number(val) - 1;
        localStorage.setItem('countoftabs', value.toString());
        if (value == 0)
            this.logout();
        // }
    }
    loadHandler(event) {
        let val = localStorage.getItem('countoftabs');
        let value = Number(val) + 1;
        localStorage.setItem('countoftabs', value.toString());
    }
    logout() {
        window.close();
        let user = JSON.parse(localStorage.getItem('user'));
        this._authService.logout(user.id).subscribe(data => { });
        let userData = localStorage.getItem('user');
        let result = JSON.parse(userData);
        let obj = {
            USERID: result.id,
            BRANCH_CODE: result.branchId,
            REMARK: null
        };
        this._authService.LOGOFFHISTORY(obj).subscribe(data => { });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    unloadHandler(event) {
        console.log("Leaving site, window:unload");
    }
    beforeUnloadHander(event) {
        console.log("Leaving site, beforeunload!");
        return false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("unload", function AppComponent_unload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("load", function AppComponent_load_HostBindingHandler($event) { return ctx.loadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.beforeUnloadHander($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"] }, { type: _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, { beforeunloadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:unload', ['$event']]
        }], loadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:load', ['$event']]
        }], unloadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:unload', ['$event']]
        }], beforeUnloadHander: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/admin/breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/hot-keys/hot-keys.component */ "./src/app/theme/hot-keys/hot-keys.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-connection-service */ "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");
/* harmony import */ var _restrictinput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ././restrictinput */ "./src/app/restrictinput.ts");
/* harmony import */ var ng_password_validator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-password-validator */ "./node_modules/ng-password-validator/__ivy_ngcc__/fesm2015/ng-password-validator.js");
/* harmony import */ var _datatablekit_datatablekit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./datatablekit/datatablekit.component */ "./src/app/datatablekit/datatablekit.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _theme_shortcut_key_shortcut_key_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/shortcut-key/shortcut-key.module */ "./src/app/theme/shortcut-key/shortcut-key.module.ts");
/* harmony import */ var _minus_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./minus.pipe */ "./src/app/minus.pipe.ts");















// import { AuthInterceptorServices } from '../app/theme/auth/auth.interceptor.service';





// import { InfiniteScrollModule } from 'ngx-infinite-scroll';





// import { ShortcutKeyComponent } from './theme/shortcut-key/shortcut-key.component';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_9__["MenuItems"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["UserAuthInterceptor"],
            multi: true
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_service__WEBPACK_IMPORTED_MODULE_20__["GlobalErrorHandler"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"].forRoot(),
            ng_connection_service__WEBPACK_IMPORTED_MODULE_16__["ConnectionServiceModule"],
            ng_password_validator__WEBPACK_IMPORTED_MODULE_18__["NgPasswordValidatorModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            // InfiniteScrollModule,
            _theme_shortcut_key_shortcut_key_module__WEBPACK_IMPORTED_MODULE_21__["ShortcutKeyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"],
        _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_13__["HotKeysComponent"],
        _restrictinput__WEBPACK_IMPORTED_MODULE_17__["StrictNumberOnlyDirective"],
        _datatablekit_datatablekit_component__WEBPACK_IMPORTED_MODULE_19__["DatatablekitComponent"],
        _minus_pipe__WEBPACK_IMPORTED_MODULE_22__["MinusPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"], // adding HotkeysModule
        ng_connection_service__WEBPACK_IMPORTED_MODULE_16__["ConnectionServiceModule"],
        ng_password_validator__WEBPACK_IMPORTED_MODULE_18__["NgPasswordValidatorModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
        // InfiniteScrollModule,
        _theme_shortcut_key_shortcut_key_module__WEBPACK_IMPORTED_MODULE_21__["ShortcutKeyModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                    _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                    _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"],
                    _theme_hot_keys_hot_keys_component__WEBPACK_IMPORTED_MODULE_13__["HotKeysComponent"],
                    _restrictinput__WEBPACK_IMPORTED_MODULE_17__["StrictNumberOnlyDirective"],
                    _datatablekit_datatablekit_component__WEBPACK_IMPORTED_MODULE_19__["DatatablekitComponent"],
                    _minus_pipe__WEBPACK_IMPORTED_MODULE_22__["MinusPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    angular2_hotkeys__WEBPACK_IMPORTED_MODULE_11__["HotkeyModule"].forRoot(),
                    ng_connection_service__WEBPACK_IMPORTED_MODULE_16__["ConnectionServiceModule"],
                    ng_password_validator__WEBPACK_IMPORTED_MODULE_18__["NgPasswordValidatorModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                    // InfiniteScrollModule,
                    _theme_shortcut_key_shortcut_key_module__WEBPACK_IMPORTED_MODULE_21__["ShortcutKeyModule"]
                ],
                providers: [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_9__["MenuItems"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                        useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["UserAuthInterceptor"],
                        multi: true
                    },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_service__WEBPACK_IMPORTED_MODULE_20__["GlobalErrorHandler"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GlobalErrorHandler {
    handleError(error) {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/datatablekit/datatablekit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/datatablekit/datatablekit.component.ts ***!
  \********************************************************/
/*! exports provided: DatatablekitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablekitComponent", function() { return DatatablekitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataTablesResponse {
}
class DatatablekitComponent {
    constructor(http) {
        this.http = http;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        debugger;
        this.http.post('http://localhost:3000', {}).subscribe(data => {
            this.persons = data.data;
        });
    }
    ngOnInit() {
        var table = $('#example').DataTable({
            colReorder: true,
            rowReorder: true,
            pagingType: 'full_numbers',
        });
        // table.on( 'column-reorder', function ( e, settings, details ) {
        //   console.log('Hey!! You are fired, column-reorder');
        // });
        // this.dtOptions = {
        //   pagingType: 'full_numbers',
        //   pageLength: 2,
        //   serverSide: true,
        //   processing: true,
        //   ajax: (dataTablesParameters: any, callback) => {
        //     that.http
        //       .post<DataTablesResponse>(
        //         'http://localhost:3000',
        //         dataTablesParameters, {}
        //       ).subscribe(resp => {
        //         debugger
        //         this.persons = resp.data;
        //         callback({
        //           recordsTotal: resp.recordsTotal,
        //           recordsFiltered: resp?.recordsFiltered,
        //           data: []
        //         });
        //       });
        //   },
        //   columns: [{ data: 'student_name' }, { data: 'student_phone' }, { data: 'home_address' }]
        // };
    }
}
DatatablekitComponent.ɵfac = function DatatablekitComponent_Factory(t) { return new (t || DatatablekitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DatatablekitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatablekitComponent, selectors: [["app-datatablekit"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-md-12"], ["src", "http://134.209.159.164/data.html", "width", "100%", "height", "800px"]], template: function DatatablekitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZWtpdC9kYXRhdGFibGVraXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatablekitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datatablekit',
                templateUrl: './datatablekit.component.html',
                styleUrls: ['./datatablekit.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/auth/auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _theme_utility_day_end_day_end_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/utility/day-end/day-end.service */ "./src/app/theme/utility/day-end/day-end.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");



















function AdminComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.DETAILS);
} }
function AdminComponent_div_97_ul_3_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r11.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r11.value);
} }
const _c0 = function () { return ["active"]; };
function AdminComponent_div_97_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_97_ul_3_li_1_span_8_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", asideItem_r6.external, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r6.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r6.badge);
} }
function AdminComponent_div_97_ul_3_li_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r17.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r17.value);
} }
const _c1 = function (a1, a2) { return ["/", a1, a2]; };
function AdminComponent_div_97_ul_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_97_ul_3_li_2_a_1_span_7_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r6.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, asideItem_r6.main_state, asideItem_r6.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r6.badge);
} }
function AdminComponent_div_97_ul_3_li_2_ng_template_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r20.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r20.value);
} }
const _c2 = function (a1) { return ["/", a1]; };
function AdminComponent_div_97_ul_3_li_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_97_ul_3_li_2_ng_template_2_span_7_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r6.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, asideItem_r6.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r6.badge);
} }
function AdminComponent_div_97_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_97_ul_3_li_2_a_1_Template, 9, 13, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_97_ul_3_li_2_ng_template_2_Template, 9, 12, "ng-template", null, 97, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r6.main_state)("ngIfElse", _r14);
} }
function AdminComponent_div_97_ul_3_li_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r25.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r25.value);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r31.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r31.value);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_1_span_7_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildren_r26.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, asideItem_r6.state, asideChildren_r26.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", asideChildren_r26.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r26.badge);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r36.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r36.value);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSubBadge_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenSubBadge_r40.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSubBadge_r40.value);
} }
const _c3 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_span_8_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const asideChildren_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildrenSub_r37.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c3, asideItem_r6.state, asideChildren_r26.state, asideChildrenSub_r37.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSub_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildrenSub_r37.badge);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_div_0_Template, 10, 12, "div", 104);
} if (rf & 2) {
    const asideChildrenSub_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildrenSub_r37 != null);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r44.fireClickLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_Template_a_mouseover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r46.fireClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_span_7_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_ng_template_10_Template, 1, 1, "ng-template", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r29.dropDownIcon)("subitem-icon", ctx_r29.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildren_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r26.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r26.children);
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_1_Template, 9, 11, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_li_2_Template, 11, 9, "li", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r26.type !== "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r26.type === "sub");
} }
function AdminComponent_div_97_ul_3_li_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_97_ul_3_li_3_ng_template_12_div_0_Template, 3, 2, "div", 104);
} if (rf & 2) {
    const asideChildren_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r26 != null);
} }
function AdminComponent_div_97_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function AdminComponent_div_97_ul_3_li_3_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.fireClickLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AdminComponent_div_97_ul_3_li_3_Template_a_mouseover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r51.fireClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_div_97_ul_3_li_3_span_9_Template, 2, 4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminComponent_div_97_ul_3_li_3_ng_template_12_Template, 1, 1, "ng-template", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r9.dropDownIcon)("subitem-icon", ctx_r9.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r6.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r6.children);
} }
function AdminComponent_div_97_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_97_ul_3_li_1_Template, 10, 13, "li", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_97_ul_3_li_2_Template, 4, 5, "li", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_97_ul_3_li_3_Template, 13, 14, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-item pcoded-left-item ", asideItem_r6.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("item-border", ctx_r5.itemBorder)("item-border-style", ctx_r5.itemBorderStyle)("subitem-border", ctx_r5.subItemBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r6.type === "external");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r6.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r6.type === "sub");
} }
function AdminComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_97_ul_3_Template, 4, 10, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItems_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("menu-title-theme", ctx_r1.menuTitleTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", asideItems_r3.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.menuListData);
} }
const _c4 = function () { return ["/dashboard/default/"]; };
const _c5 = function () { return ["/user/profile/"]; };
const _c6 = function () { return ["/auth/login/simple/"]; };
class AdminComponent {
    constructor(menuItems, _authService, _dayEndService) {
        this.menuItems = menuItems;
        this._authService = _authService;
        this._dayEndService = _dayEndService;
        this.disableFlag = 'disableflag';
        this.disableList = [];
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
        this.verticalNavType = 'offcanvas';
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
        this.navRight = 'nav-off';
        this.toggleOn = false;
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
    roleWiseMenuAssign() {
        let flag = this.disableFlag;
        let diablelist = this.disableList;
        //Menu item filter as per user role
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        this.userData = result;
        this.currentDate = result.branch.syspara.CURRENT_DATE;
        this.branchID = result.branchId;
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
        this.bankName = result.branch.syspara.BANK_NAME;
        this.profilePath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url + '/' + result.PROFILE_PATH;
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
            var _a;
            if (diablelist.includes(element.id)) {
                element['class'] = 'disableflag';
            }
            else {
                element['class'] = 'disableFlagActive';
            }
            // this.menuItemList[index]['class'] = "disableflag"
            if (arrayList.includes(element.id)) {
                if (((_a = element === null || element === void 0 ? void 0 : element.children) === null || _a === void 0 ? void 0 : _a.length) != 0 && element.children != undefined) {
                    element.children.forEach(function (ele, index1) {
                        var _a;
                        if (arrayList.includes(ele.id)) {
                            if (((_a = ele === null || ele === void 0 ? void 0 : ele.children) === null || _a === void 0 ? void 0 : _a.length) != 0 && ele.children != undefined) {
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
    }
    ngOnInit() {
        this.roleWiseMenuAssign();
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let usercode = {
            USERCODE: result.id
        };
        this._authService.showNotificationuserwise(usercode).subscribe(data => {
            this.notifications = data;
        });
        this.setBackgroundPattern('theme1');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(2000).subscribe(x => {
            let data = localStorage.getItem('user');
            if (data) {
                this._dayEndService.checkDayHandOverStatus({ date: this.currentDate, branch_id: this.branchID }).subscribe(data => {
                    if (data.flag == 1) {
                        this.disableList = [75, 132];
                        this.roleWiseMenuAssign();
                    }
                    else {
                        this.disableList = [];
                        this.roleWiseMenuAssign();
                    }
                }, err => {
                    console.log(err);
                });
            }
        });
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
            this.verticalNavType = 'offcanvas';
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
        // debugger
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
        // if ((this.windowWidth <= 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
        this.toggleOn = true;
        this.verticalNavType = 'offcanvas';
        this.toggleIcon = 'icon-toggle-left';
        // }
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
        window.close();
        let user = JSON.parse(localStorage.getItem('user'));
        this._authService.logout(user.id).subscribe(data => { });
        let userData = localStorage.getItem('user');
        let result = JSON.parse(userData);
        let obj = {
            USERID: result.id,
            BRANCH_CODE: result.branchId,
            REMARK: null
        };
        this._authService.LOGOFFHISTORY(obj).subscribe(data => { });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_utility_day_end_day_end_service__WEBPACK_IMPORTED_MODULE_6__["DayEndService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 114, vars: 57, consts: [["id", "pcoded", 1, "pcoded", 3, "resize"], [1, "pcoded-overlay-box"], [1, "pcoded-container", "navbar-wrapper"], [1, "navbar", "header-navbar", "pcoded-header"], [1, "navbar-wrapper"], [1, "navbar-logo"], [1, "ripple", "light", 3, "routerLink"], ["src", "assets/images/comp.png", "alt", "Compserv", 1, "img-fluid"], ["id", "mobile-collapse", "href", "javascript:", 1, "mobile-menu", "ripple", "light", 3, "exclude", "click", "clickOutside"], [1, "icon-menu"], ["href", "javascript:", 1, "mobile-options", "ripple", "light", 3, "click"], [1, "icon-more"], [1, "navbar-container"], [1, "nav-left"], [1, "header-notification", "ripple", "light"], ["href", "javascript:"], [2, "font-size", "14px", "font-weight", "bold"], [1, "ripple", "light]"], [1, "sidebar_toggle"], [1, "nav-right", 3, "ngClass"], [1, "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], [1, "icon-bell"], [1, "badge", "bg-c-red"], [1, "show-notification", 3, "ngClass"], ["class", "ripple", 4, "ngFor", "ngForOf"], [1, "user-profile", "header-notification", "ripple", "light", 3, "ngClass", "clickOutside", "click"], ["alt", "User-Profile-Image", "onError", "this.src='assets/images/user.png'", 1, "img-radius", 3, "src"], [1, "icon-angle-down"], [1, "show-notification", "profile-notification", 3, "ngClass"], [1, "ripple"], [3, "routerLink"], [1, "icon-user"], [3, "routerLink", "click"], [1, "icon-layout-sidebar-left"], [1, "showChat_inner"], [1, "media", "chat-inner-header"], [1, "back_chatBox"], [1, "fa", "fa-chevron-left", 3, "click"], [1, "media", "chat-messages"], ["href", "javascript:", 1, "media-left", "photo-table"], ["src", "assets/images/avatar-3.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "media-body", "chat-menu-content"], [1, ""], [1, "chat-cont"], [1, "chat-time"], [1, "media-body", "chat-menu-reply"], [1, "media-right", "photo-table"], ["src", "assets/images/avatar-4.jpg", "alt", "Generic placeholder image", 1, "media-object", "img-radius", "img-radius", "m-t-5"], [1, "chat-reply-box"], [1, "right-icon-control"], ["action", "javascrpit:", 1, "form-material"], [1, "form-group", "form-primary"], ["type", "text", "name", "footer-email", "required", "", 1, "form-control"], [1, "form-bar"], [1, "float-label"], [1, "fa", "fa-search", "m-r-10"], [1, "form-icon"], [1, "btn", "btn-success", "btn-icon", "ripple", "light"], [1, "fa", "fa-paper-plane"], [1, "pcoded-main-container"], [1, "pcoded-wrapper"], ["id", "main_navbar", "sub-item-theme", "theme2", "active-item-style", "style0", 1, "pcoded-navbar", 3, "exclude", "clickOutside", "mouseleave"], [3, "config", "ngClass"], ["appAccordion", "", 1, "pcoded-inner-navbar", "main-menu"], [1, "main-menu-header"], ["src", "assets/BPK.jpg", "alt", "User-Profile-Image", 1, "img-menu-user"], [1, "user-details"], ["id", "more-details", 2, "font-weight", "bold", 3, "click"], [2, "max-width", "600px", "max-height", "600px"], ["class", "d-color", 4, "ngFor", "ngForOf"], [1, "pcoded-content"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["id", "styleSelector", 3, "ngClass"], [1, "customfooter"], [1, "text-muted"], [1, "row"], [1, "col-md-7"], [1, "col-md-5"], [2, "color", "black", "font-size", "13px", "float", "right"], [1, "media"], [1, "media-body"], [1, "notification-msg"], [1, "d-color"], [1, "pcoded-navigation-label"], ["title", "", "appAccordionLink", "", 3, "class", "group", 4, "ngFor", "ngForOf"], ["title", "", "appAccordionLink", "", 3, "group"], ["appAccordionLink", "", 3, "routerLinkActive", "group", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", 3, "routerLinkActive", "group", "mouseleave", 4, "ngIf"], ["appAccordionLink", "", 3, "routerLinkActive", "group"], ["appAccordionToggle", "", 1, "ripple", 3, "routerLinkActive", "href", "target"], [1, "pcoded-micon"], [1, "pcoded-mtext"], [3, "class", 4, "ngFor", "ngForOf"], [1, "pcoded-mcaret"], ["class", "ripple", "appAccordionToggle", "", 3, "routerLinkActive", "routerLink", "target", 4, "ngIf", "ngIfElse"], ["mainContent", ""], ["appAccordionToggle", "", 1, "ripple", 3, "routerLinkActive", "routerLink", "target"], ["appAccordionLink", "", 1, "pcoded-hasmenu", 3, "routerLinkActive", "group", "mouseleave"], ["href", "javascript:;", "appAccordionToggle", "", 3, "routerLinkActive", "mouseover"], [1, "ripple", "menu-ripple"], [1, "pcoded-submenu"], ["ngFor", "", 3, "ngForOf"], [4, "ngIf"], [3, "routerLinkActive", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", "group", "sub-toggled", 3, "routerLinkActive", "mouseleave", 4, "ngIf"], [3, "routerLinkActive"], [3, "routerLinkActive", "routerLink", "target"], [1, "icon-angle-right"], ["appAccordionLink", "", "group", "sub-toggled", 1, "pcoded-hasmenu", 3, "routerLinkActive", "mouseleave"], [1, "icon-direction-alt"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminComponent_li_33_Template, 5, 1, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_li_clickOutside_34_listener() { return ctx.notificationOutsideClick("profile"); })("click", function AdminComponent_Template_li_click_34_listener() { return ctx.toggleProfileNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_46_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_i_click_52_listener() { return ctx.toggleInnerChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Josephin Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Share Your Thoughts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nav", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_nav_clickOutside_87_listener($event) { return ctx.onClickedOutsideSidebar($event); })("mouseleave", function AdminComponent_Template_nav_mouseleave_87_listener() { return ctx.hoverOutsideSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "perfect-scrollbar", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_94_listener() { return ctx.toggleOpenedSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "perfect-scrollbar", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AdminComponent_div_97_Template, 4, 3, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "footer", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c4));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.profileNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userData.F_NAME, " ", ctx.userData.L_NAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@notificationBottom", ctx.profileNotification)("ngClass", ctx.profileNotificationClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c6));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Branch: ", ctx.barnchName, " Today Date: ", ctx.currentDate, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarComponent"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_14__["AccordionDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_16__["AccordionLinkDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_17__["AccordionAnchorDirective"]], styles: [".customfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  height: 30px;\n  width: 100%;\n  background: white;\n  align-items: center;\n  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.2);\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #1b1717;\n  font-size: 15px;\n  text-decoration: none;\n  align-items: center;\n  padding-top: 3px;\n  padding-bottom: 2px;\n}\n\n.bank[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n\n.disableflag[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.disableFlagActive[_ngcontent-%COMP%] {\n  pointer-events: block !important;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  left: 105%;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBR0EsK0NBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IC00cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogcmdiKDI3LCAyMywgMjMpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5iYW5rIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5kaXNhYmxlZmxhZ3tcbiAgICBwb2ludGVyLWV2ZW50czpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlRmxhZ0FjdGl2ZXtcbiAgICBwb2ludGVyLWV2ZW50czogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcbiAgfVxuICBcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IC01cHg7XG4gICAgbGVmdDogMTA1JTtcbiAgfVxuICBcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIFxuIl19 */"], data: { animation: [
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
    }], function () { return [{ type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"] }, { type: _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _theme_utility_day_end_day_end_service__WEBPACK_IMPORTED_MODULE_6__["DayEndService"] }]; }, null); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".not-active[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n\r\n\r\n\r\n.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]::before {\r\n    display: inline-block;\r\n    padding-right: 0.2rem;\r\n    color: white !important;\r\n    content: \"/\";\r\n    padding-top: 0.0rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTs7Ozs7O0dBTUc7O0FBQ0g7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWFjdGl2ZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyogLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMnJlbTtcclxufSAqL1xyXG4uYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMHJlbTtcclxufSJdfQ== */"] });
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

/***/ "./src/app/minus.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/minus.pipe.ts ***!
  \*******************************/
/*! exports provided: MinusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusPipe", function() { return MinusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MinusPipe {
    transform(num, args) {
        return -Math.abs(num);
    }
}
MinusPipe.ɵfac = function MinusPipe_Factory(t) { return new (t || MinusPipe)(); };
MinusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "minus", type: MinusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'minus'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/restrictinput.ts":
/*!**********************************!*\
  !*** ./src/app/restrictinput.ts ***!
  \**********************************/
/*! exports provided: StrictNumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictNumberOnlyDirective", function() { return StrictNumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StrictNumberOnlyDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        //private regex: RegExp = new RegExp('^[0-9]*$');
        this.regex = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g); //Decimal Number
        this.specialKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
    }
    /**
     * Key board action
     * @param event
     */
    onKeyDown(event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const inputValue = this.elementRef.nativeElement.value.concat(event.key);
        console.log(event.key);
        if (inputValue && !String(inputValue).match(this.regex)) {
            event.preventDefault();
        }
        return;
    }
    /**
     * Copy Paste action
     * @param event
     */
    onPaste(event) {
        const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
        if (clipboardData) {
            const regEx = new RegExp('^[0-9]*$');
            if (!regEx.test(clipboardData)) {
                event.preventDefault();
            }
        }
        return;
    }
}
StrictNumberOnlyDirective.ɵfac = function StrictNumberOnlyDirective_Factory(t) { return new (t || StrictNumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
StrictNumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StrictNumberOnlyDirective, selectors: [["", "NumberOnly", ""]], hostBindings: function StrictNumberOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function StrictNumberOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function StrictNumberOnlyDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrictNumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[NumberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['paste', ['$event']]
        }] }); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["CardToggleDirective"]], styles: [".card .card-header .card-header-right .card-option {\n  width: 140px;\n  transition: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAuY2FyZC1oZWFkZXJ7XG4gICAgLmNhcmQtaGVhZGVyLXJpZ2h0e1xuICAgICAgLmNhcmQtb3B0aW9uIHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB1bnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, data: { animation: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardIconToggle"]] } });
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


const MENUITEMS1 = [
    {
        label: '',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'sub',
                icon: 'icon-home',
                id: 1,
                children: [
                    {
                        state: 'default',
                        short_label: 'D',
                        name: 'Default',
                        type: 'sub',
                        id: 2,
                        children: [
                            {
                                state: 'demo',
                                name: 'Demo',
                                id: 3,
                            },
                            {
                                state: 'demo1',
                                name: 'Demo1',
                                target: false,
                                id: 4,
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
                id: 5,
                children: [
                    {
                        state: 'generalLedger',
                        name: 'General Ledger',
                        short_label: 'D',
                        type: 'sub',
                        id: 6,
                        children: [
                            {
                                state: 'gl-statement-code',
                                name: 'GL Statement Code',
                                id: 7
                            },
                            {
                                state: 'gl-accounts-master',
                                name: 'GL Accounts Master',
                                id: 8
                            },
                            {
                                state: 'gl-report-master',
                                name: 'GL Report Master',
                                id: 9
                            },
                            {
                                state: 'gl-report-linking',
                                name: 'GL Report Linking',
                                id: 10
                            },
                            {
                                state: 'budget-master',
                                name: 'Budget Allocation Master',
                                id: 11
                            },
                        ]
                    },
                    {
                        state: 'customer',
                        name: 'Customer',
                        short_label: 'D',
                        type: 'sub',
                        id: 12,
                        children: [
                            {
                                state: 'customerId',
                                name: 'Customer Id',
                                id: 13
                            },
                            {
                                state: 'sharesMaster',
                                name: 'Shares Account Master',
                                id: 14
                            },
                            {
                                state: 'anamatGSM',
                                name: 'Anamat / General Sub Account Master',
                                id: 15
                            },
                            {
                                state: 'savingMaster',
                                name: 'Saving Account Master',
                                id: 16
                            },
                            {
                                state: 'currentAccountMaster',
                                name: 'Current Account Master',
                                id: 17
                            },
                            {
                                state: 'termDepositsMaster',
                                name: 'Term Deposit Account Master',
                                id: 18
                            },
                            {
                                state: 'cashCreditMaster',
                                name: 'Cash Credit Account Master',
                                id: 19
                            },
                            {
                                state: 'termLoanMaster',
                                name: 'Term Loan Account Master',
                                id: 20
                            },
                            {
                                state: 'disputeLoanMaster',
                                name: 'Dispute Loan Account Master',
                                id: 21
                            },
                            {
                                state: 'pigmyAgentMaster',
                                name: 'Pigmy Agent Account Master',
                                id: 22
                            },
                            {
                                state: 'pigmyAccountMaster',
                                name: 'Pigmy Account Master',
                                id: 23
                            },
                            {
                                state: 'deadStockMaster',
                                name: 'Dead Stock Account Master',
                                id: 24
                            },
                            {
                                state: 'accountOpening',
                                name: 'Investment Master',
                                id: 25
                            },
                            {
                                state: 'lockerMaster',
                                name: 'Locker Master',
                                id: 26
                            },
                        ]
                    },
                    {
                        state: 'balanceEntry',
                        short_label: 'D',
                        name: 'Balance Entry',
                        type: 'sub',
                        id: 27,
                        children: [
                            {
                                state: 'balanceUpdation',
                                name: 'Balance Updation',
                                id: 28
                            },
                        ]
                    },
                    {
                        state: 'PolicySettings',
                        name: 'Policy Settings',
                        short_label: 'D',
                        type: 'sub',
                        id: 32,
                        children: [
                            {
                                state: 'information',
                                name: 'Information',
                                id: 33
                            },
                            {
                                state: 'definations',
                                name: 'Definations',
                                id: 34
                            },
                            {
                                state: 'sizewiseBalanceModification',
                                name: 'Sizewise Balance Modification',
                                id: 35
                            },
                            {
                                state: 'tDReceiptTypeMaster',
                                name: 'TD Receipt Type Master',
                                id: 36
                            },
                            {
                                state: 'nPAClassificationSlabMaster',
                                name: 'NPA Classification Slab Master ',
                                id: 37
                            },
                        ]
                    },
                    {
                        state: 'Maintainance',
                        name: 'Maintainance',
                        short_label: 'D',
                        type: 'sub',
                        id: 38,
                        children: [
                            {
                                state: 'securityDetails',
                                name: 'Security Details',
                                id: 39
                            },
                            // {
                            //   state: 'loanAndCCInterestRateChanges',
                            //   name: 'Loan And CC Interest Rate Changes',
                            //   id: 40
                            // },
                            {
                                state: 'depositLoanInterestRateEditChange',
                                name: 'Deposit / Loan Interest Rate Edit / Change',
                                id: 41
                            },
                            {
                                state: 'npaOpeningDetailsEntry',
                                name: 'NPA Opening Details Entry',
                                id: 42
                            },
                            {
                                state: 'interestPostingFlagUpdation',
                                name: 'Interest Posting Flag Updation',
                                id: 43
                            },
                            // {
                            //   state: 'accountwiseDocumentAcceptance',
                            //   name: 'Accountwise Document Acceptance',
                            //   id: 44
                            // },
                            {
                                state: 'notingCharges',
                                name: 'Noting Charges',
                                id: 45
                            },
                            {
                                state: 'tdsformsubmission',
                                name: 'TDS Form Submission',
                                id: 46
                            },
                            {
                                state: 'moratoriumperiodmaster',
                                name: 'Moratorium Period Master',
                                id: 47
                            }
                        ]
                    },
                    {
                        state: 'Instruction',
                        name: 'Instruction',
                        short_label: 'D',
                        type: 'sub',
                        id: 48,
                        children: [
                            {
                                state: 'overDraft',
                                name: 'Over Draft',
                                id: 49
                            },
                            {
                                state: 'standingInstruction',
                                name: 'Standing Instruction',
                                id: 50
                            },
                            {
                                state: 'interestInstruction',
                                name: 'Interest Instruction',
                                id: 51
                            },
                            {
                                state: 'special',
                                name: 'Special',
                                id: 52
                            },
                            {
                                state: 'freezeAccount',
                                name: 'Freeze Account',
                                id: 53
                            },
                            // {
                            //   state: 'reminderInstruction',
                            //   name: 'Reminder Instruction',
                            //   id: 54
                            // },
                            // {
                            //   state: 'revokeStandingInstructions',
                            //   name: 'Revoke Standing Instructions',
                            //   id: 55
                            // }, {
                            //   state: 'revokeInterestInstruction',
                            //   name: 'Revoke Interest Instruction',
                            //   id: 56
                            // },
                            // {
                            //   state: 'revokeSpecialInstruction',
                            //   name: 'Revoke Special Instruction',
                            //   id: 57
                            // },
                            {
                                state: 'lienMarkClear',
                                name: 'Lien Mark Clear',
                                id: 58
                            },
                        ]
                    },
                    // {
                    //   state: 'Investment',
                    //   short_label: 'D',
                    //   name: 'Investment',
                    //   type: 'sub',
                    //   id:59,
                    //   children: [
                    //     {
                    //       state: 'accountOpening',
                    //       name: 'Account Opening',
                    //       id:60
                    //     },
                    //     {
                    //       state: 'transactionEntry',
                    //       name: 'Transaction Entry',
                    //       id:61
                    //     },
                    //     {
                    //       state: 'accountClosing',
                    //       name: 'Account Closing',
                    //       id:62
                    //     },
                    //     {
                    //       state: 'accountOpenPassing',
                    //       name: 'Account Open Passing',
                    //       id:63
                    //     },
                    //     {
                    //       state: 'transactionPassing',
                    //       name: 'Transaction Passing',
                    //       id:64
                    //     },
                    //     {
                    //       state: 'accountClosePassing',
                    //       name: 'Account Close Passing',
                    //       id:65
                    //     },
                    //   ]
                    // },
                    {
                        state: 'Shares',
                        name: 'Shares/Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 66,
                        children: [
                            // {
                            //   state: 'unpaidDividendEntry',
                            //   name: 'Unpaid Dividend Entry',
                            //   id: 67
                            // },
                            {
                                state: 'yearWiseUnpaidDividendEntry',
                                name: 'Year Wise Unpaid Dividend Entry',
                                id: 68
                            },
                            {
                                state: 'dividendTransferEntry',
                                name: 'Dividend Transfer Instruction',
                                id: 69
                            },
                            {
                                state: 'dividendCalculation',
                                name: 'Dividend Calculation',
                                id: 70
                            },
                            {
                                state: 'dividendPosting',
                                name: 'Dividend Posting',
                                id: 71
                            },
                            {
                                state: 'dividendTransferPosting',
                                name: 'Dividend Transfer Posting',
                                id: 72
                            },
                        ]
                    },
                ]
            },
            {
                state: 'transaction',
                short_label: 'D',
                name: 'Transaction',
                type: 'sub',
                icon: 'icon-home',
                id: 75,
                children: [
                    {
                        state: 'voucherEntry',
                        name: 'Voucher Entry',
                        id: 76
                    },
                    {
                        state: 'multiVoucher',
                        name: 'Multi Voucher',
                        id: 77
                    },
                    {
                        state: 'batchVoucher',
                        name: 'Batch Transfer Voucher',
                        id: 78
                    },
                    {
                        state: 'pigmyChartEntry',
                        name: 'Pigmy Chart Entry',
                        id: 79
                    },
                    {
                        state: 'deadStockPurchase',
                        name: 'Dead Stock Purchase',
                        id: 80
                    },
                    {
                        state: 'deadStockTransaction',
                        name: 'Dead Stock Transaction',
                        id: 81
                    },
                    {
                        state: 'reconciliationEntry',
                        name: 'Reconciliation Entry',
                        id: 82
                    },
                    {
                        state: 'savingspigmyaccountclosing',
                        name: 'Savings-Pigmy Account Closing',
                        id: 83
                    },
                    {
                        state: 'termDepositAccountClosing',
                        name: 'Term Deposit Account Closing',
                        id: 84
                    },
                    {
                        state: 'TermDepositeAcRenewal',
                        name: 'Term Deposit A/c Renewal',
                        id: 85
                    },
                    {
                        state: 'cashCreditAcRenewal',
                        name: 'Cash Credit A/c Renewal',
                        id: 86
                    },
                    {
                        state: 'shareTransactions',
                        name: 'Share Transaction',
                        id: 87
                    },
                    {
                        state: 'locker',
                        name: 'Locker Transaction',
                        short_label: 'L',
                        type: 'sub',
                        id: 88,
                        children: [
                            {
                                state: 'lockerOpenTransaction',
                                name: 'Locker Open Transaction',
                                id: 89
                            },
                            {
                                state: 'lockerCloseTransaction',
                                name: 'Locker Close Transaction',
                                id: 90
                            },
                            {
                                state: 'lockerRentTransaction',
                                name: 'Locker Rent Transaction',
                                id: 91
                            },
                        ]
                    },
                    {
                        state: 'cashDenomination',
                        name: 'Cash Denomination',
                        short_label: 'D',
                        type: 'sub',
                        id: 96,
                        children: [
                            {
                                state: 'acceptD',
                                name: 'Accept Denomination',
                                id: 97
                            },
                            {
                                state: 'paymentDenomination',
                                name: 'Payment Denomination',
                                id: 98
                            },
                            {
                                state: 'cashInDenomination',
                                name: 'Cash In Denomination',
                                id: 99
                            },
                            {
                                state: 'cashOutDenomination',
                                name: 'Cash Out Denomination',
                                id: 100
                            },
                            {
                                state: 'cashInitialisationEntry',
                                name: 'cash Initialisation Entry',
                                id: 101
                            },
                            {
                                state: 'safeValultToCashier',
                                name: 'Safe Valult To Cashier',
                                id: 102
                            },
                            {
                                state: 'cashierToSafeVault',
                                name: 'Cashier To Safe Vault',
                                id: 103
                            },
                        ]
                    },
                    // {
                    //   state: 'cashier',
                    //   name: 'Cashier',
                    //   id: 104
                    // },
                    {
                        state: 'passbookPrinting',
                        name: 'Passbook Printing',
                        short_label: 'D',
                        type: 'sub',
                        id: 105,
                        children: [
                            {
                                state: 'passbookIssue',
                                name: 'Passbook Issue',
                                id: 106
                            },
                            {
                                state: 'passbookEntryPrint',
                                name: 'Passbook Entry Print',
                                id: 107
                            }
                        ]
                    },
                    {
                        state: 'termDepositReceiptPrinting',
                        name: 'Term Deposit Receipt Printing',
                        // short_label: 'D',
                        // type: 'sub',
                        id: 108,
                    },
                    {
                        state: 'voucherPrint',
                        name: 'Voucher Printing',
                        id: 110,
                    },
                    {
                        state: 'goldSilverReceipt',
                        name: 'Gold/Silver Receipt Print',
                        id: 344
                    },
                    {
                        state: 'goldsilverreturnentry',
                        name: 'Gold/Silver Return Entry',
                        id: 111
                    },
                    {
                        state: 'memberDAPDT',
                        name: 'Member Dividend And Payable Dividend Transaction ',
                        id: 112
                    },
                    {
                        state: 'memberTransfer',
                        name: 'Member Transfer',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 113,
                        children: [
                            {
                                state: 'MemberTransferTransaction',
                                name: 'Member Transfer Transaction',
                                id: 114
                            },
                            {
                                state: 'BranchAndSalaryDC',
                                name: 'Branch And Salary Division Changes',
                                id: 115
                            },
                        ]
                    },
                    {
                        state: 'recovery',
                        name: 'Recovery',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 117,
                        children: [
                            {
                                state: 'recoveryProcessing',
                                name: 'Recovery Processing',
                                id: 118
                            },
                            {
                                state: 'recoveryModification',
                                name: 'Recovery Modification',
                                id: 119
                            },
                            {
                                state: 'recoveryPosting',
                                name: 'Recovery Posting',
                                id: 120
                            },
                            {
                                state: 'recoveryDataImportExport',
                                name: 'Recovery Data Import Export',
                                id: 121
                            },
                        ]
                    },
                    {
                        state: 'memberLoan',
                        name: 'Member Loan',
                        short_label: 'D',
                        type: 'sub',
                        id: 122,
                        children: [
                            {
                                state: 'loanApplication',
                                name: 'Loan Application',
                                id: 123
                            },
                            {
                                state: 'loanSanction',
                                name: 'Loan Sanction',
                                id: 124
                            }
                        ]
                    },
                    // {
                    //   state: 'dDTransaction',
                    //   name: 'DD Transaction',
                    //   id: 125
                    // },
                    {
                        state: 'dividendPay',
                        name: 'Dividend Pay',
                        short_label: 'D',
                        type: 'sub',
                        id: 126,
                        children: [
                            {
                                state: 'dividendPaidMarkSD',
                                name: 'Dividend Paid Mark(Salary Division)',
                                id: 127
                            },
                            {
                                state: 'dividendPaidSD',
                                name: 'Dividend Pay(Salary Division)',
                                id: 128
                            },
                        ]
                    },
                    {
                        state: 'cashRecoveryTransaction',
                        name: 'Cash Recovery Transaction',
                        id: 129
                    },
                    {
                        state: 'consolidationTransaction',
                        name: 'Consolidation Transaction',
                        id: 130
                    },
                    {
                        state: 'inwardRegister',
                        name: 'Inward Register',
                        id: 131
                    },
                ]
            },
            {
                state: 'passing',
                short_label: 'D',
                name: 'Passing',
                type: 'sub',
                icon: 'icon-home',
                id: 132,
                children: [
                    {
                        state: 'centralisedPassing',
                        name: 'Centralised Passing',
                        id: 133
                    },
                    // {
                    //   state: 'sharesTransactionPassing',
                    //   name: 'Shares Transaction Passing',
                    //   id: 134
                    // },
                    {
                        state: 'unapprove',
                        name: 'Unapprove',
                        id: 135
                    },
                ]
            },
            {
                state: 'view',
                short_label: 'D',
                name: 'View',
                type: 'sub',
                icon: 'icon-home',
                id: 136,
                children: [
                    {
                        state: 'accountEnquiry',
                        name: 'Account Enquiry',
                        id: 137
                    },
                    {
                        state: 'ledgerView',
                        name: 'Ledger View',
                        id: 138
                    },
                    {
                        state: 'sharesLedgerView',
                        name: 'Shares Ledger View',
                        id: 139
                    },
                    {
                        state: 'voucherView',
                        name: 'Voucher View',
                        id: 140
                    },
                    {
                        state: 'customerView',
                        name: 'Customer View',
                        id: 141
                    },
                    {
                        state: 'guarantorView',
                        name: 'Guarantor View',
                        id: 142
                    },
                    {
                        state: 'memberView',
                        name: 'Member View',
                        id: 143
                    },
                    {
                        state: 'masterCard',
                        name: 'Master Card',
                        id: 144
                    },
                    {
                        state: 'memberLiablityView',
                        name: 'Member Liablity View',
                        id: 145
                    },
                    {
                        state: 'otherView',
                        name: 'Other View',
                        id: 146
                    },
                    {
                        state: 'managerView',
                        name: 'Manager View',
                        id: 147
                    },
                ],
            },
            {
                state: 'reports',
                short_label: 'D',
                name: 'Reports',
                type: 'sub',
                icon: 'icon-home',
                id: 148,
                children: [
                    // {
                    //   state: 'allReportsWithSearching',
                    //   name: 'All Reports With Searching',
                    //   id: 149
                    // },
                    ////////////////////////////
                    {
                        state: 'dailyReports',
                        name: 'Daily Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 150,
                        children: [
                            // {
                            //   state: 'BnkDayBookSummary',
                            //   name: 'Day Book Detail/Summary',
                            //    id: 151
                            // },
                            {
                                state: 'TFormDayBookComponent',
                                name: 'T Form Day Book Details/Summary',
                                id: 152
                            },
                            {
                                state: 'BnkSubsidaryDetail',
                                name: 'Subsidiary  Debit/Credit',
                                id: 153
                            },
                            {
                                state: 'BnkScrollDetailBoth',
                                name: 'Scroll Book Debit/Credit/Both',
                                id: 154
                            },
                            {
                                state: 'IntInstructionExecutionFailure',
                                name: 'Interest Instructions Execution List (Failure/Success)',
                                id: 155
                            },
                            {
                                state: 'StandingInstExecutionFailure',
                                name: 'Standing Instructions Execution List (Failure/Success)',
                                id: 156
                            },
                            {
                                state: 'StandingInstExecutionCredit',
                                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                                id: 157
                            },
                            {
                                state: 'StandingInstExecutionDebit',
                                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                                id: 158
                            },
                            {
                                state: 'IntInstructExecutionCredit',
                                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                                id: 159
                            },
                            {
                                state: 'IntInstructExecutionDebit',
                                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                                id: 160
                            },
                            {
                                state: 'otherSubsidiary',
                                name: 'Other Subsidiary ',
                                id: 341
                            },
                            {
                                state: 'SubsidiarySummery',
                                name: ' Subsidary Summery ',
                                id: 342
                            },
                        ]
                    },
                    //
                    {
                        state: 'statement',
                        name: 'Statement',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 163,
                        children: [
                            {
                                state: 'BnkGlAcStatement',
                                name: 'GL account Statement',
                                id: 164
                            },
                            {
                                state: 'BnkAcStatement',
                                name: 'Account Statement',
                                id: 165
                            },
                            {
                                state: 'BnkLNamtStatement',
                                name: 'Term Loan stament with other amount',
                                id: 166
                            },
                            {
                                state: 'BnkTDStatement',
                                name: 'Term Deposit Statement ',
                                id: 167
                            },
                        ]
                    },
                    //
                    {
                        state: 'balanceBook',
                        name: 'Balance Book',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 170,
                        children: [
                            {
                                state: 'BnkDedskBalList',
                                name: 'Deadstock Balance List',
                                id: 171
                            },
                            // {
                            //   state: 'BnkLedgerABTypeList',
                            //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
                            //   id: 172
                            // },
                            {
                                state: 'BnkACBalBook',
                                name: 'Account Balance Book',
                                id: 173
                            },
                            {
                                state: 'BnkACBalList',
                                name: 'Account Balance List',
                                id: 174
                            },
                            {
                                state: 'BnkCustIDBalList',
                                name: 'Customer ID wise Balance List',
                                id: 175
                            },
                            {
                                state: 'BnkGLConsistRepo',
                                name: 'Scheme - General Ledger consistancy Report',
                                id: 176
                            },
                            {
                                state: 'BnkReceiveIntList',
                                name: 'Receivable Interest List',
                                id: 177
                            },
                            {
                                state: 'BnkPayIntList',
                                name: 'Payable Interest List',
                                id: 178
                            },
                            {
                                state: 'BnkDedskBalListDepre',
                                name: 'Deadstock Balance List with depreciation',
                                id: 179
                            },
                            {
                                state: 'BnkDptAMList',
                                name: 'Deposite Amount Wise Balance List',
                                id: 180
                            },
                            {
                                state: 'CatbalList',
                                name: 'Categorywise Balance List',
                                id: 181
                            },
                            {
                                state: 'DebbalReport',
                                name: 'Debit Balance Report',
                                id: 182
                            },
                            // {
                            //   state:'Bnkbalcon',
                            //   name:'balance confirmation certificate',
                            //   id:183
                            // },
                            // {
                            //    state:'Srtballist',
                            //    name:'Short Balance List',
                            //    id:184
                            // },
                            {
                                state: 'AmountBalList',
                                name: 'AmountWise Balance List',
                                id: 185
                            },
                            {
                                state: 'DeadStockDepCatList',
                                name: 'Deadstock Depriciation Categorywise List',
                                id: 186
                            },
                            {
                                state: 'BalConCertificate',
                                name: 'Balance Confirmation Ceritificate',
                                id: 187
                            },
                            {
                                state: 'shortballist',
                                name: 'Short Balance List',
                                id: 188
                            },
                        ]
                    },
                    //
                    {
                        state: 'registers',
                        name: 'Registers',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 189,
                        children: [
                            {
                                state: 'BnkRegAccount',
                                name: 'Account Opening & Closing Register',
                                id: 190
                            },
                            {
                                state: 'BnkRegStandingInstruction',
                                name: 'Standing Instruction Register (Active/Revoke)',
                                id: 191
                            },
                            {
                                state: 'BnkRegInterestInstruction',
                                name: 'Interest Instruction Register  (Active/Revoke)',
                                id: 192
                            },
                            {
                                state: 'BnkRegSpecialInstruction',
                                name: 'Special Instruction Register  (Active/Revoke)',
                                id: 193
                            },
                            {
                                state: 'BnkRegInsurence',
                                name: 'Insurance Register',
                                id: 194
                            },
                            {
                                state: 'BnkODRegister',
                                name: 'O.D. Register (Temprary / Periodical)',
                                id: 195
                            },
                            {
                                state: 'BnkRegDeadStock',
                                name: 'Deadstock Register',
                                id: 196
                            },
                            {
                                state: 'BnkIVOpenAndCloseReg',
                                name: 'Investment Register (Open/Closed)',
                                id: 197
                            },
                            {
                                state: 'BnkRegGoldSilverSubReturn',
                                name: 'Gold Silver Submission/Return Register',
                                id: 198
                            },
                            {
                                state: 'DepositReceiptRegister',
                                name: 'Deposit Receipt Register',
                                id: 199
                            },
                            {
                                state: 'lockerRentRegister',
                                name: 'Locker Rent Register',
                                id: 200
                            },
                            {
                                state: 'lockerRegister',
                                name: 'Locker Register Report',
                                id: 201
                            },
                            {
                                state: 'excessCashBalance',
                                name: 'Excess Cash Balance Report',
                                id: 202
                            },
                        ]
                    },
                    //
                    {
                        state: 'Termdeposit',
                        name: 'Term Deposit Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 203,
                        children: [
                            {
                                state: 'maturedbutnotpaid',
                                name: 'matured but not paid between two days',
                                id: 204
                            },
                            {
                                state: 'maturedbutnotclosed',
                                name: 'matured but not closed',
                                id: 205
                            },
                            {
                                state: 'depositpaidlist',
                                name: 'Deposit Paid List',
                                id: 206
                            },
                            {
                                state: 'intratewisebalancelist',
                                name: 'Interest Rate Wise List',
                                id: 207
                            },
                            {
                                state: 'custidwiseintpaidlist',
                                name: 'Customer Id Wise Interest Paid List',
                                id: 208
                            },
                            {
                                state: 'custidwiseloaninterestCertificate',
                                name: 'Customer Id Wise Deposit Interest Certificate',
                                id: 209
                            },
                            {
                                state: 'IntRatewiseMaturityList',
                                name: 'Interest Rate wise Maturity List',
                                id: 210
                            },
                            {
                                state: 'custidwisedepositlist',
                                name: 'Customer Id wise Deposit List',
                                id: 211
                            },
                            {
                                state: 'tddetailrecurroverdue',
                                name: 'Term Deposite Detail List and Recurring Overdue',
                                id: 212
                            },
                            {
                                state: 'prematuredAcCloselist',
                                name: 'Prematured A/c Close List',
                                id: 213
                            },
                            {
                                state: 'renewalDepositList',
                                name: 'Renewal Deposit List',
                                id: 214
                            },
                            {
                                state: 'directorwiseDepositlist',
                                name: 'Directorwise Deposit List',
                                id: 215
                            },
                            {
                                state: 'custidwiseInterestList',
                                name: 'Customer Id Wise Interest List',
                                id: 216
                            },
                            {
                                state: 'custidwiseMaturedList',
                                name: 'Customer Id Wise Matured Deposit List',
                                id: 217
                            },
                            {
                                state: 'abtypeDepositList',
                                name: 'A/B Type Deposit List',
                                id: 218
                            },
                        ]
                    },
                    {
                        state: 'SharesReports',
                        name: 'Shares Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 219,
                        children: [
                            {
                                state: 'cityMemberList',
                                name: 'CityWise Member List',
                                id: 220
                            },
                            {
                                state: 'dividendPaidList',
                                name: 'Dividend Paid List Report',
                                id: 221
                            },
                            {
                                state: 'sharesIssueRegister',
                                name: 'Shares Issue Register',
                                id: 222
                            },
                            {
                                state: 'sharesReturnRegister',
                                name: 'Membership Cancellation',
                                id: 223
                            },
                            {
                                state: 'sharesTransferRegister',
                                name: 'Shares Transfer Register',
                                id: 224
                            },
                            {
                                state: 'unpaidDividendList',
                                name: 'Unpaid Dividend List',
                                id: 225
                            },
                            {
                                state: 'monthlyRecoveryPrint',
                                name: 'Monthly Recovery Print',
                                id: 226
                            },
                            {
                                state: 'monthlyRecoverySubsidiary',
                                name: 'Monthly Recovery Subsidiary',
                                id: 227
                            }
                        ]
                    },
                    //
                    // {
                    //   state: 'denominationReports',
                    //   name: 'Denomination Reports',
                    //   id: 228
                    // },
                    //
                    // {
                    //   state: 'loanReports',
                    //   name: 'Loan Reports',
                    //   id: 229
                    // },
                    {
                        state: 'LoanReport',
                        name: 'Term Loan/Cash Credit Reports',
                        short_label: 'D',
                        type: 'sub',
                        id: 230,
                        children: [
                            {
                                state: 'loanoverduelist',
                                name: 'Loan Overdue List',
                                type: 'sub',
                                id: 231,
                            },
                            {
                                state: 'loansecurityreport',
                                name: 'Loan Security Reports',
                                type: 'sub',
                                id: 232,
                            },
                            {
                                state: 'citiwiseLoanBalancereport',
                                name: 'Citiwise Loan Balance Report',
                                type: 'sub',
                                id: 233,
                            },
                            {
                                state: 'lcdLessdraftReport',
                                name: 'Loan Cash Credit Less Draft Report',
                                type: 'sub',
                                id: 234,
                            },
                            {
                                state: 'lcdOverdraftReport',
                                name: 'Loan Cash Credit Over Draft Report',
                                type: 'sub',
                                id: 235,
                            },
                            {
                                state: 'lcd-renewal-list',
                                name: 'Loan Cash Credit Renewal List',
                                type: 'sub',
                                id: 236,
                            },
                            {
                                state: 'lcd-turnover-list',
                                name: 'Loan Cash Credit Turnover List',
                                type: 'sub',
                                id: 237,
                            },
                            {
                                state: 'penalinterestlist',
                                name: 'Received and Penal Interest List',
                                type: 'sub',
                                id: 238,
                            },
                            {
                                state: 'pendingStockStatementlist',
                                name: 'Pending Stock Statement List',
                                type: 'sub',
                                id: 239,
                            },
                            {
                                state: 'receivedStockstatementList',
                                name: 'Received Stock Statement List',
                                type: 'sub',
                                id: 240,
                            },
                            {
                                state: 'recoverycwBalanceList',
                                name: 'Recovery Balance List',
                                type: 'sub',
                                id: 241,
                            },
                            {
                                state: 'receivableInstallInterest',
                                name: 'Receivable Installment and Intrest List',
                                type: 'sub',
                                id: 242,
                            },
                            {
                                state: 'loanExpiredList',
                                name: 'Loan / CC Expired List',
                                type: 'sub',
                                id: 343,
                            },
                        ],
                    },
                    {
                        state: 'npaReports',
                        name: 'NPA Reports',
                        short_label: 'D',
                        type: 'sub',
                        id: 243,
                        children: [
                            {
                                state: 'npaRegister',
                                name: 'NPA Register',
                                id: 244
                            },
                            {
                                state: 'npaRegPercentage',
                                name: 'NPA Register Percentage',
                                id: 245
                            },
                            {
                                state: 'nonNpaRecovery',
                                name: 'To be Recovery Non NPA Report',
                                id: 246
                            },
                            {
                                state: 'directorwise',
                                name: 'Directorwise Recommanded by',
                                id: 247
                            },
                            {
                                state: 'citiwisenpa',
                                name: 'Citywise NPA Register',
                                type: 'sub',
                                id: 248,
                            },
                            {
                                state: 'analysisnpa',
                                name: 'NPA Analysis Report',
                                type: 'sub',
                                id: 249,
                            },
                            {
                                state: 'classificationsecnpa',
                                name: 'NPA Classification -Secured Or Unsecured.PNG',
                                type: 'sub',
                                id: 250,
                            },
                            {
                                state: 'classificationstandardnpa',
                                name: 'NPA Classification -Standard Or Non Standard.PNG',
                                type: 'sub',
                                id: 251,
                            },
                        ],
                    },
                    //
                    //
                    // {
                    //   state: 'nottice',
                    //   name: 'Nottice',
                    //   id: 252
                    // },
                    // //
                    // {
                    //   state: 'Report_Frame',
                    //   name: 'Report Frame',
                    //   id: 253
                    // },
                    //
                    {
                        state: 'PigmyReport',
                        name: 'Pigmy Report',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 254,
                        children: [
                            {
                                state: 'BnkPigmyCollectionChart',
                                name: 'Pigmy Agentwise Collection Chart',
                                id: 255
                            },
                            {
                                state: 'BnkPigmyBalanceList',
                                name: 'Pigmy Agent Wise Balance List',
                                id: 256
                            },
                            {
                                state: 'BnkPigmyBalanceBook',
                                name: 'Pigmy Agent Wise Balance Book',
                                id: 257
                            },
                            {
                                state: 'BnkPigmyBlankChart',
                                name: 'Pigmy Agent Collection Blank Chart',
                                id: 258
                            },
                            {
                                state: 'BnkPigmyCommissionRepo',
                                name: 'Pigmy Agent Commission Report',
                                id: 259
                            },
                            {
                                state: 'pigmyhandbook',
                                name: 'Pigmy  HandBook',
                                id: 260
                            },
                            {
                                state: 'pigmymaturedAclist',
                                name: 'Pigmy  Matured A/C List',
                                id: 261
                            },
                        ]
                    },
                    //
                    {
                        state: 'otherReports',
                        short_label: 'D',
                        name: 'Other Reports',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 262,
                        children: [
                            {
                                state: 'BnkMinorsList',
                                name: 'Minor List',
                                id: 263
                            },
                            {
                                state: 'BnkNomineeList',
                                name: 'Nominee List',
                                id: 264
                            },
                            {
                                state: 'BnkGuaranterList',
                                name: 'Guaranter List',
                                id: 265
                            },
                            {
                                state: 'BnkLienMarkedAcList',
                                name: 'Lein mark Account List ',
                                id: 266
                            },
                            // {
                            //   state: 'BnkDormantAcList',
                            //   name: 'Dormant Account List',
                            //   id: 267
                            // },
                            {
                                state: 'BnkAmountMovement',
                                name: 'Transaction Amount Movement',
                                id: 268
                            },
                            {
                                state: 'BnkDepAmountMovementDetail',
                                name: 'Deposit Amount Movement',
                                id: 269
                            },
                            {
                                state: 'BnkLNAmountMovementDetail',
                                name: 'Loan Amount Movement',
                                id: 270
                            },
                            {
                                state: 'BnkGurDetailsList',
                                name: 'Guaranter Details',
                                id: 271
                            },
                            {
                                state: 'BnkNonGuaranteerView',
                                name: 'Non Guarantor (A-Type Members Only) List',
                                id: 272
                            },
                            {
                                state: 'custidIntroducerList',
                                name: 'CustomerIdwise Introducer List',
                                id: 273
                            },
                            {
                                state: 'serviceChargeList',
                                name: 'Service Charges List',
                                id: 274
                            },
                            {
                                state: 'minorToMajorlist',
                                name: 'Minor To Major List',
                                id: 275
                            },
                            {
                                state: 'tranLessAclist',
                                name: 'Transactionless Account List',
                                id: 276
                            },
                            {
                                state: 'dormantAccountList',
                                name: 'Dormant Account List',
                                id: 277
                            },
                        ]
                    },
                    //
                    {
                        state: 'misReports',
                        name: 'MIS Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 278,
                        children: [
                            // {
                            //   state: 'schemeWisedepoaccount',
                            //   name: 'SchemeWise Deposit Account Details',
                            //   id: 279
                            // },
                            {
                                state: 'excessCashBalance',
                                name: 'Excess Cash Balance Report',
                                id: 280
                            },
                        ]
                    },
                    //
                    {
                        state: 'managerViewReports',
                        name: 'Manager View Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 281
                    },
                    //
                    {
                        state: 'finalReports',
                        name: 'Final Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 282,
                        children: [
                            {
                                state: 'BnkTrialBal',
                                name: 'Trial Balance ',
                                id: 283
                            },
                            {
                                state: 'BnkTrialBaldetail',
                                name: 'Trial Balance Detail',
                                id: 284
                            },
                            {
                                state: 'BalanceSheet',
                                name: 'Balance Sheet',
                                id: 285
                            },
                            {
                                state: 'NBalanceSheet',
                                name: 'N Form Balance Sheet',
                                id: 286
                            },
                            {
                                state: 'ProfitLossAccount',
                                name: 'Profit & Loss Account',
                                id: 287
                            },
                            {
                                state: 'NProfitLoss',
                                name: 'N Form Profit & Loss Account',
                                id: 288
                            },
                            {
                                state: 'RecePayRep',
                                name: 'Receipt & Payment Report',
                                id: 289
                            },
                            {
                                state: 'RecePayRepDetails',
                                name: 'Receipt & Payment Report Detail',
                                id: 290
                            },
                        ]
                    },
                    {
                        state: 'RecoveryReport',
                        name: 'Recovery Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 291,
                        children: [
                            {
                                state: 'memberAckReport',
                                name: 'Member Acknowledgement Report',
                                id: 292
                            },
                        ]
                    },
                ]
            },
            {
                state: 'utility',
                short_label: 'D',
                name: 'Utility',
                type: 'sub',
                icon: 'icon-home',
                id: 293,
                children: [
                    {
                        state: 'dayBegin',
                        name: 'Day Begin',
                        id: 294
                    },
                    {
                        state: 'dayEnd',
                        name: 'Day End',
                        short_label: 'D',
                        type: 'sub',
                        id: 295,
                        children: [
                            {
                                state: 'counterWorkDayEnd',
                                name: 'Day End Handover',
                                id: 296
                            },
                            {
                                state: 'FinalDayEnd',
                                name: 'Day End',
                                id: 297
                            },
                            {
                                state: 'pigmyDayEnd',
                                name: 'pigmy Day End',
                                id: 298
                            },
                        ]
                    },
                    // {
                    //   state: 'backDatedDO',
                    //   name: 'Back Dated Day Open',
                    //   id: 299
                    // },
                    // {
                    //   state: 'receiptPrintingD',
                    //   name: 'Receipt Printing Designing',
                    //   id: 300
                    // },
                    {
                        state: 'holiday',
                        name: 'Holiday',
                        id: 301
                    },
                    {
                        state: 'interestPosting',
                        name: 'Interest Posting',
                        short_label: 'D',
                        type: 'sub',
                        id: 302,
                        children: [
                            {
                                state: 'interestCalculation',
                                name: 'Interest Calculation',
                                id: 303
                            },
                            {
                                state: 'interestPassing',
                                name: 'Interest Passing',
                                id: 304
                            },
                            {
                                state: 'interestList',
                                name: 'Interest List',
                                id: 305
                            },
                        ]
                    },
                    {
                        state: 'processACM',
                        name: 'Process And Calculation Menu',
                        id: 306
                    },
                    {
                        state: 'pigmyMachineProcess',
                        name: 'Pigmy Machine Process',
                        id: 307
                    },
                    {
                        state: 'pigmyAppProcess',
                        name: 'Pigmy App Process',
                        id: 308
                    },
                    {
                        state: 'whatsappmessages',
                        name: 'Whatsapp Messages',
                        id: 345
                    },
                    {
                        state: 'deadStockP',
                        name: 'Dead Stock Process',
                        id: 309
                    },
                    {
                        state: 'dividend',
                        name: 'Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 310,
                        children: [
                            {
                                state: 'dividendList',
                                name: 'Dividend List',
                                id: 311
                            },
                            {
                                state: 'dividendPost',
                                name: 'Dividend Post',
                                id: 312
                            }
                        ]
                    },
                    {
                        state: 'statementHeadInsert',
                        name: 'Statement Head Insert',
                        id: 313
                    },
                    {
                        state: 'roleDefination',
                        name: 'Role Defination',
                        id: 315
                    },
                    {
                        state: 'roleMaster',
                        name: 'Role Master',
                        id: 316
                    },
                    {
                        state: 'userDefination',
                        name: 'User Defination',
                        id: 317
                    },
                    {
                        state: 'cashierMaintance',
                        name: 'Cashier Maintenace',
                        id: 318
                    },
                    {
                        state: 'cashierUM',
                        name: 'Cashier User Maintainance',
                        id: 319
                    },
                    {
                        state: 'sharesCCTS',
                        name: 'Shares Contribution Credit To Shares',
                        id: 320
                    },
                    // {
                    //   state: 'silverJACTS',
                    //   name: 'Silver Jubilee Amount Credit To Shares',
                    //   id: 321
                    // },
                    // {
                    //   state: 'masikBDW',
                    //   name: 'Masik Bachat Deposit Withdrawl',
                    //   id: 322
                    // },
                    {
                        state: 'schemeATE',
                        name: 'Scheme Amount Transfer Entry',
                        id: 323
                    },
                    {
                        state: 'schemeParameters',
                        name: 'Scheme Parameters',
                        id: 324
                    },
                    {
                        state: 'calculator',
                        name: 'Calculator',
                        id: 325
                    },
                    // {
                    //   state: 'remindMe',
                    //   name: 'Remind Me',
                    //   id: 326
                    // },
                    {
                        state: 'dataBackup',
                        name: 'Data Backup',
                        id: 327
                    },
                    {
                        state: 'pataSevaSupportR',
                        name: 'PataSeva Support Register',
                        id: 328
                    },
                    {
                        state: 'sharesDataEI',
                        name: 'Sheres Data Export / Import',
                        id: 329
                    },
                    // {
                    //   state: 'dayBookIE',
                    //   name: 'Daybook Import / Export',
                    //   id: 330
                    // },
                    {
                        state: 'demandDraftDEI',
                        name: 'Demand Draft Data Export/ Import',
                        id: 331
                    },
                    {
                        state: 'gmaMemberUpdation',
                        name: 'General Meeting Appear Meeting Updation',
                        id: 332
                    },
                    {
                        state: 'amtTransferTransaction',
                        name: 'Amount Transfer Transaction',
                        id: 333
                    },
                    {
                        state: 'recAmtTrToGL',
                        name: 'Recurring Amount Transfer to GL',
                        id: 334
                    },
                ]
            },
            {
                state: 'windows',
                short_label: 'D',
                name: 'Windows',
                type: 'sub',
                icon: 'icon-home',
                id: 335,
                children: [
                    {
                        state: 'casecade',
                        name: 'CaseCade',
                        id: 336
                    },
                    {
                        state: 'tileHorizontaily',
                        name: 'Tile Horizontaily',
                        id: 337
                    },
                    {
                        state: 'tileVertically',
                        name: 'Tile Vertically',
                        id: 338
                    },
                ]
            },
            {
                state: 'hotKeys',
                short_label: 'D',
                name: 'Hot Key',
                type: 'link',
                icon: 'icon-home',
                id: 339
            },
            {
                state: 'exit',
                short_label: 'D',
                name: 'Sign Out',
                type: 'link',
                icon: 'icon-home',
                id: 340
            },
        ],
    },
];
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
                id: 1,
                children: [
                    {
                        state: 'default',
                        short_label: 'D',
                        name: 'Default',
                        type: 'sub',
                        id: 2,
                        children: [
                            {
                                state: 'demo',
                                name: 'Demo',
                                id: 3,
                            },
                            {
                                state: 'demo1',
                                name: 'Demo1',
                                target: false,
                                id: 4,
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
                id: 5,
                children: [
                    {
                        state: 'generalLedger',
                        name: 'General Ledger',
                        short_label: 'D',
                        type: 'sub',
                        id: 6,
                        children: [
                            {
                                state: 'gl-statement-code',
                                name: 'GL Statement Code',
                                id: 7
                            },
                            {
                                state: 'gl-accounts-master',
                                name: 'GL Accounts Master',
                                id: 8
                            },
                            {
                                state: 'gl-report-master',
                                name: 'GL Report Master',
                                id: 9
                            },
                            {
                                state: 'gl-report-linking',
                                name: 'GL Report Linking',
                                id: 10
                            },
                            {
                                state: 'budget-master',
                                name: 'Budget Allocation Master',
                                id: 11
                            },
                        ]
                    },
                    {
                        state: 'customer',
                        name: 'Customer',
                        short_label: 'D',
                        type: 'sub',
                        id: 12,
                        children: [
                            {
                                state: 'customerId',
                                name: 'Customer Id',
                                id: 13
                            },
                            {
                                state: 'sharesMaster',
                                name: 'Shares Account Master',
                                id: 14
                            },
                            {
                                state: 'anamatGSM',
                                name: 'Anamat / General Sub Account Master',
                                id: 15
                            },
                            {
                                state: 'savingMaster',
                                name: 'Saving Account Master',
                                id: 16
                            },
                            {
                                state: 'currentAccountMaster',
                                name: 'Current Account Master',
                                id: 17
                            },
                            {
                                state: 'termDepositsMaster',
                                name: 'Term Deposit Account Master',
                                id: 18
                            },
                            {
                                state: 'cashCreditMaster',
                                name: 'Cash Credit Account Master',
                                id: 19
                            },
                            {
                                state: 'termLoanMaster',
                                name: 'Term Loan Account Master',
                                id: 20
                            },
                            {
                                state: 'disputeLoanMaster',
                                name: 'Dispute Loan Account Master',
                                id: 21
                            },
                            {
                                state: 'pigmyAgentMaster',
                                name: 'Pigmy Agent Account Master',
                                id: 22
                            },
                            {
                                state: 'pigmyAccountMaster',
                                name: 'Pigmy Account Master',
                                id: 23
                            },
                            {
                                state: 'deadStockMaster',
                                name: 'Dead Stock Account Master',
                                id: 24
                            },
                            {
                                state: 'accountOpening',
                                name: 'Investment Master',
                                id: 25
                            },
                            {
                                state: 'lockerMaster',
                                name: 'Locker Master',
                                id: 26
                            },
                        ]
                    },
                    {
                        state: 'balanceEntry',
                        short_label: 'D',
                        name: 'Balance Entry',
                        type: 'sub',
                        id: 27,
                        children: [
                            {
                                state: 'balanceUpdation',
                                name: 'Balance Updation',
                                id: 28
                            },
                        ]
                    },
                    {
                        state: 'PolicySettings',
                        name: 'Policy Settings',
                        short_label: 'D',
                        type: 'sub',
                        id: 32,
                        children: [
                            {
                                state: 'information',
                                name: 'Information',
                                id: 33
                            },
                            {
                                state: 'definations',
                                name: 'Definations',
                                id: 34
                            },
                            {
                                state: 'sizewiseBalanceModification',
                                name: 'Sizewise Balance Modification',
                                id: 35
                            },
                            {
                                state: 'tDReceiptTypeMaster',
                                name: 'TD Receipt Type Master',
                                id: 36
                            },
                            {
                                state: 'nPAClassificationSlabMaster',
                                name: 'NPA Classification Slab Master ',
                                id: 37
                            },
                        ]
                    },
                    {
                        state: 'Maintainance',
                        name: 'Maintainance',
                        short_label: 'D',
                        type: 'sub',
                        id: 38,
                        children: [
                            {
                                state: 'securityDetails',
                                name: 'Security Details',
                                id: 39
                            },
                            // {
                            //   state: 'loanAndCCInterestRateChanges',
                            //   name: 'Loan And CC Interest Rate Changes',
                            //   id: 40
                            // },
                            {
                                state: 'depositLoanInterestRateEditChange',
                                name: 'Deposit / Loan Interest Rate Edit / Change',
                                id: 41
                            },
                            {
                                state: 'npaOpeningDetailsEntry',
                                name: 'NPA Opening Details Entry',
                                id: 42
                            },
                            {
                                state: 'interestPostingFlagUpdation',
                                name: 'Interest Posting Flag Updation',
                                id: 43
                            },
                            // {
                            //   state: 'accountwiseDocumentAcceptance',
                            //   name: 'Accountwise Document Acceptance',
                            //   id: 44
                            // },
                            {
                                state: 'notingCharges',
                                name: 'Noting Charges',
                                id: 45
                            },
                            {
                                state: 'tdsformsubmission',
                                name: 'TDS Form Submission',
                                id: 46
                            },
                            {
                                state: 'moratoriumperiodmaster',
                                name: 'Moratorium Period Master',
                                id: 47
                            }
                        ]
                    },
                    {
                        state: 'Instruction',
                        name: 'Instruction',
                        short_label: 'D',
                        type: 'sub',
                        id: 48,
                        children: [
                            {
                                state: 'overDraft',
                                name: 'Over Draft',
                                id: 49
                            },
                            {
                                state: 'standingInstruction',
                                name: 'Standing Instruction',
                                id: 50
                            },
                            {
                                state: 'interestInstruction',
                                name: 'Interest Instruction',
                                id: 51
                            },
                            {
                                state: 'special',
                                name: 'Special',
                                id: 52
                            },
                            {
                                state: 'freezeAccount',
                                name: 'Freeze Account',
                                id: 53
                            },
                            // {
                            //   state: 'reminderInstruction',
                            //   name: 'Reminder Instruction',
                            //   id: 54
                            // },
                            // {
                            //   state: 'revokeStandingInstructions',
                            //   name: 'Revoke Standing Instructions',
                            //   id: 55
                            // }, {
                            //   state: 'revokeInterestInstruction',
                            //   name: 'Revoke Interest Instruction',
                            //   id: 56
                            // },
                            // {
                            //   state: 'revokeSpecialInstruction',
                            //   name: 'Revoke Special Instruction',
                            //   id: 57
                            // },
                            {
                                state: 'lienMarkClear',
                                name: 'Lien Mark Clear',
                                id: 58
                            },
                        ]
                    },
                    // {
                    //   state: 'Investment',
                    //   short_label: 'D',
                    //   name: 'Investment',
                    //   type: 'sub',
                    //   id:59,
                    //   children: [
                    //     {
                    //       state: 'accountOpening',
                    //       name: 'Account Opening',
                    //       id:60
                    //     },
                    //     {
                    //       state: 'transactionEntry',
                    //       name: 'Transaction Entry',
                    //       id:61
                    //     },
                    //     {
                    //       state: 'accountClosing',
                    //       name: 'Account Closing',
                    //       id:62
                    //     },
                    //     {
                    //       state: 'accountOpenPassing',
                    //       name: 'Account Open Passing',
                    //       id:63
                    //     },
                    //     {
                    //       state: 'transactionPassing',
                    //       name: 'Transaction Passing',
                    //       id:64
                    //     },
                    //     {
                    //       state: 'accountClosePassing',
                    //       name: 'Account Close Passing',
                    //       id:65
                    //     },
                    //   ]
                    // },
                    {
                        state: 'Shares',
                        name: 'Shares/Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 66,
                        children: [
                            // {
                            //   state: 'unpaidDividendEntry',
                            //   name: 'Unpaid Dividend Entry',
                            //   id: 67
                            // },
                            {
                                state: 'yearWiseUnpaidDividendEntry',
                                name: 'Year Wise Unpaid Dividend Entry',
                                id: 68
                            },
                            {
                                state: 'dividendTransferEntry',
                                name: 'Dividend Transfer Instruction',
                                id: 69
                            },
                            {
                                state: 'dividendCalculation',
                                name: 'Dividend Calculation',
                                id: 70
                            },
                            {
                                state: 'dividendPosting',
                                name: 'Dividend Posting',
                                id: 71
                            },
                            {
                                state: 'dividendTransferPosting',
                                name: 'Dividend Transfer Posting',
                                id: 72
                            },
                        ]
                    },
                ]
            },
            {
                state: 'transaction',
                short_label: 'D',
                name: 'Transaction',
                type: 'sub',
                icon: 'icon-home',
                id: 75,
                children: [
                    {
                        state: 'voucherEntry',
                        name: 'Voucher Entry',
                        id: 76
                    },
                    {
                        state: 'multiVoucher',
                        name: 'Multi Voucher',
                        id: 77
                    },
                    {
                        state: 'batchVoucher',
                        name: 'Batch Transfer Voucher',
                        id: 78
                    },
                    {
                        state: 'pigmyChartEntry',
                        name: 'Pigmy Chart Entry',
                        id: 79
                    },
                    {
                        state: 'deadStockPurchase',
                        name: 'Dead Stock Purchase',
                        id: 80
                    },
                    {
                        state: 'deadStockTransaction',
                        name: 'Dead Stock Transaction',
                        id: 81
                    },
                    {
                        state: 'reconciliationEntry',
                        name: 'Reconciliation Entry',
                        id: 82
                    },
                    {
                        state: 'savingspigmyaccountclosing',
                        name: 'Savings-Pigmy Account Closing',
                        id: 83
                    },
                    {
                        state: 'termDepositAccountClosing',
                        name: 'Term Deposit Account Closing',
                        id: 84
                    },
                    {
                        state: 'TermDepositeAcRenewal',
                        name: 'Term Deposit A/c Renewal',
                        id: 85
                    },
                    {
                        state: 'cashCreditAcRenewal',
                        name: 'Cash Credit A/c Renewal',
                        id: 86
                    },
                    {
                        state: 'shareTransactions',
                        name: 'Share Transaction',
                        id: 87
                    },
                    {
                        state: 'locker',
                        name: 'Locker Transaction',
                        short_label: 'L',
                        type: 'sub',
                        id: 88,
                        children: [
                            {
                                state: 'lockerOpenTransaction',
                                name: 'Locker Open Transaction',
                                id: 89
                            },
                            {
                                state: 'lockerCloseTransaction',
                                name: 'Locker Close Transaction',
                                id: 90
                            },
                            {
                                state: 'lockerRentTransaction',
                                name: 'Locker Rent Transaction',
                                id: 91
                            },
                        ]
                    },
                    {
                        state: 'cashDenomination',
                        name: 'Cash Denomination',
                        short_label: 'D',
                        type: 'sub',
                        id: 96,
                        children: [
                            {
                                state: 'acceptD',
                                name: 'Accept Denomination',
                                id: 97
                            },
                            {
                                state: 'paymentDenomination',
                                name: 'Payment Denomination',
                                id: 98
                            },
                            {
                                state: 'cashInDenomination',
                                name: 'Cash In Denomination',
                                id: 99
                            },
                            {
                                state: 'cashOutDenomination',
                                name: 'Cash Out Denomination',
                                id: 100
                            },
                            {
                                state: 'cashInitialisationEntry',
                                name: 'cash Initialisation Entry',
                                id: 101
                            },
                            {
                                state: 'safeValultToCashier',
                                name: 'Safe Valult To Cashier',
                                id: 102
                            },
                            {
                                state: 'cashierToSafeVault',
                                name: 'Cashier To Safe Vault',
                                id: 103
                            },
                        ]
                    },
                    // {
                    //   state: 'cashier',
                    //   name: 'Cashier',
                    //   id: 104
                    // },
                    {
                        state: 'passbookPrinting',
                        name: 'Passbook Printing',
                        short_label: 'D',
                        type: 'sub',
                        id: 105,
                        children: [
                            {
                                state: 'passbookIssue',
                                name: 'Passbook Issue',
                                id: 106
                            },
                            {
                                state: 'passbookEntryPrint',
                                name: 'Passbook Entry Print',
                                id: 107
                            }
                        ]
                    },
                    {
                        state: 'termDepositReceiptPrinting',
                        name: 'Term Deposit Receipt Printing',
                        // short_label: 'D',
                        // type: 'sub',
                        id: 108,
                    },
                    {
                        state: 'voucherPrint',
                        name: 'Voucher Printing',
                        id: 110,
                    },
                    {
                        state: 'goldSilverReceipt',
                        name: 'Gold/Silver Receipt Print',
                        id: 344
                    },
                    {
                        state: 'goldsilverreturnentry',
                        name: 'Gold/Silver Return Entry',
                        id: 111
                    },
                    {
                        state: 'memberDAPDT',
                        name: 'Member Dividend And Payable Dividend Transaction ',
                        id: 112
                    },
                    {
                        state: 'memberTransfer',
                        name: 'Member Transfer',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 113,
                        children: [
                            {
                                state: 'MemberTransferTransaction',
                                name: 'Member Transfer Transaction',
                                id: 114
                            },
                            {
                                state: 'BranchAndSalaryDC',
                                name: 'Branch And Salary Division Changes',
                                id: 115
                            },
                        ]
                    },
                    {
                        state: 'recovery',
                        name: 'Recovery',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 117,
                        children: [
                            {
                                state: 'recoveryProcessing',
                                name: 'Recovery Processing',
                                id: 118
                            },
                            {
                                state: 'recoveryModification',
                                name: 'Recovery Modification',
                                id: 119
                            },
                            {
                                state: 'recoveryPosting',
                                name: 'Recovery Posting',
                                id: 120
                            },
                            {
                                state: 'recoveryDataImportExport',
                                name: 'Recovery Data Import Export',
                                id: 121
                            },
                        ]
                    },
                    {
                        state: 'memberLoan',
                        name: 'Member Loan',
                        short_label: 'D',
                        type: 'sub',
                        id: 122,
                        children: [
                            {
                                state: 'loanApplication',
                                name: 'Loan Application',
                                id: 123
                            },
                            {
                                state: 'loanSanction',
                                name: 'Loan Sanction',
                                id: 124
                            }
                        ]
                    },
                    // {
                    //   state: 'dDTransaction',
                    //   name: 'DD Transaction',
                    //   id: 125
                    // },
                    {
                        state: 'dividendPay',
                        name: 'Dividend Pay',
                        short_label: 'D',
                        type: 'sub',
                        id: 126,
                        children: [
                            {
                                state: 'dividendPaidMarkSD',
                                name: 'Dividend Paid Mark(Salary Division)',
                                id: 127
                            },
                            {
                                state: 'dividendPaidSD',
                                name: 'Dividend Pay(Salary Division)',
                                id: 128
                            },
                        ]
                    },
                    {
                        state: 'cashRecoveryTransaction',
                        name: 'Cash Recovery Transaction',
                        id: 129
                    },
                    {
                        state: 'consolidationTransaction',
                        name: 'Consolidation Transaction',
                        id: 130
                    },
                    {
                        state: 'inwardRegister',
                        name: 'Inward Register',
                        id: 131
                    },
                ]
            },
            {
                state: 'passing',
                short_label: 'D',
                name: 'Passing',
                type: 'sub',
                icon: 'icon-home',
                id: 132,
                children: [
                    {
                        state: 'centralisedPassing',
                        name: 'Centralised Passing',
                        id: 133
                    },
                    // {
                    //   state: 'sharesTransactionPassing',
                    //   name: 'Shares Transaction Passing',
                    //   id: 134
                    // },
                    {
                        state: 'unapprove',
                        name: 'Unapprove',
                        id: 135
                    },
                ]
            },
            {
                state: 'view',
                short_label: 'D',
                name: 'View',
                type: 'sub',
                icon: 'icon-home',
                id: 136,
                children: [
                    {
                        state: 'accountEnquiry',
                        name: 'Account Enquiry',
                        id: 137
                    },
                    {
                        state: 'ledgerView',
                        name: 'Ledger View',
                        id: 138
                    },
                    {
                        state: 'sharesLedgerView',
                        name: 'Shares Ledger View',
                        id: 139
                    },
                    {
                        state: 'voucherView',
                        name: 'Voucher View',
                        id: 140
                    },
                    {
                        state: 'customerView',
                        name: 'Customer View',
                        id: 141
                    },
                    {
                        state: 'guarantorView',
                        name: 'Guarantor View',
                        id: 142
                    },
                    {
                        state: 'memberView',
                        name: 'Member View',
                        id: 143
                    },
                    {
                        state: 'masterCard',
                        name: 'Master Card',
                        id: 144
                    },
                    {
                        state: 'memberLiablityView',
                        name: 'Member Liablity View',
                        id: 145
                    },
                    {
                        state: 'otherView',
                        name: 'Other View',
                        id: 146
                    },
                    {
                        state: 'managerView',
                        name: 'Manager View',
                        id: 147
                    },
                ],
            },
            {
                state: 'reports',
                short_label: 'D',
                name: 'Reports',
                type: 'sub',
                icon: 'icon-home',
                id: 148,
                children: [
                    // {
                    //   state: 'allReportsWithSearching',
                    //   name: 'All Reports With Searching',
                    //   id: 149
                    // },
                    ////////////////////////////
                    {
                        state: 'dailyReports',
                        name: 'Daily Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 150,
                        children: [
                            // {
                            //   state: 'BnkDayBookSummary',
                            //   name: 'Day Book Detail/Summary',
                            //    id: 151
                            // },
                            {
                                state: 'TFormDayBookComponent',
                                name: 'T Form Day Book Details/Summary',
                                id: 152
                            },
                            {
                                state: 'BnkSubsidaryDetail',
                                name: 'Subsidiary  Debit/Credit',
                                id: 153
                            },
                            {
                                state: 'BnkScrollDetailBoth',
                                name: 'Scroll Book Debit/Credit/Both',
                                id: 154
                            },
                            {
                                state: 'IntInstructionExecutionFailure',
                                name: 'Interest Instructions Execution List (Failure/Success)',
                                id: 155
                            },
                            {
                                state: 'StandingInstExecutionFailure',
                                name: 'Standing Instructions Execution List (Failure/Success)',
                                id: 156
                            },
                            {
                                state: 'StandingInstExecutionCredit',
                                name: 'Standing Instructions Execution List (Expected Credit Scheme)',
                                id: 157
                            },
                            {
                                state: 'StandingInstExecutionDebit',
                                name: 'Standing Instructions Execution List (Expected Debit Scheme )',
                                id: 158
                            },
                            {
                                state: 'IntInstructExecutionCredit',
                                name: 'Interest Instructions Execution List (Expected Credit Scheme)',
                                id: 159
                            },
                            {
                                state: 'IntInstructExecutionDebit',
                                name: 'Interest Instructions Execution List (Expected Debit Scheme)',
                                id: 160
                            },
                            {
                                state: 'otherSubsidiary',
                                name: 'Other Subsidiary ',
                                id: 341
                            },
                            {
                                state: 'SubsidiarySummery',
                                name: ' Subsidary Summery ',
                                id: 342
                            },
                        ]
                    },
                    //
                    {
                        state: 'statement',
                        name: 'Statement',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 163,
                        children: [
                            {
                                state: 'BnkGlAcStatement',
                                name: 'GL account Statement',
                                id: 164
                            },
                            {
                                state: 'BnkAcStatement',
                                name: 'Account Statement',
                                id: 165
                            },
                            {
                                state: 'BnkLNamtStatement',
                                name: 'Term Loan stament with other amount',
                                id: 166
                            },
                            {
                                state: 'BnkTDStatement',
                                name: 'Term Deposit Statement ',
                                id: 167
                            },
                        ]
                    },
                    //
                    {
                        state: 'balanceBook',
                        name: 'Balance Book',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 170,
                        children: [
                            {
                                state: 'BnkDedskBalList',
                                name: 'Deadstock Balance List',
                                id: 171
                            },
                            // {
                            //   state: 'BnkLedgerABTypeList',
                            //   name: 'Leadger Balance List A,B type Member Loan and Deposit',
                            //   id: 172
                            // },
                            {
                                state: 'BnkACBalBook',
                                name: 'Account Balance Book',
                                id: 173
                            },
                            {
                                state: 'BnkACBalList',
                                name: 'Account Balance List',
                                id: 174
                            },
                            {
                                state: 'BnkCustIDBalList',
                                name: 'Customer ID wise Balance List',
                                id: 175
                            },
                            {
                                state: 'BnkGLConsistRepo',
                                name: 'Scheme - General Ledger consistancy Report',
                                id: 176
                            },
                            {
                                state: 'BnkReceiveIntList',
                                name: 'Receivable Interest List',
                                id: 177
                            },
                            {
                                state: 'BnkPayIntList',
                                name: 'Payable Interest List',
                                id: 178
                            },
                            {
                                state: 'BnkDedskBalListDepre',
                                name: 'Deadstock Balance List with depreciation',
                                id: 179
                            },
                            {
                                state: 'BnkDptAMList',
                                name: 'Deposite Amount Wise Balance List',
                                id: 180
                            },
                            {
                                state: 'CatbalList',
                                name: 'Categorywise Balance List',
                                id: 181
                            },
                            {
                                state: 'DebbalReport',
                                name: 'Debit Balance Report',
                                id: 182
                            },
                            // {
                            //   state:'Bnkbalcon',
                            //   name:'balance confirmation certificate',
                            //   id:183
                            // },
                            // {
                            //    state:'Srtballist',
                            //    name:'Short Balance List',
                            //    id:184
                            // },
                            {
                                state: 'AmountBalList',
                                name: 'AmountWise Balance List',
                                id: 185
                            },
                            {
                                state: 'DeadStockDepCatList',
                                name: 'Deadstock Depriciation Categorywise List',
                                id: 186
                            },
                            {
                                state: 'BalConCertificate',
                                name: 'Balance Confirmation Ceritificate',
                                id: 187
                            },
                            {
                                state: 'shortballist',
                                name: 'Short Balance List',
                                id: 188
                            },
                        ]
                    },
                    //
                    {
                        state: 'registers',
                        name: 'Registers',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 189,
                        children: [
                            {
                                state: 'BnkRegAccount',
                                name: 'Account Opening & Closing Register',
                                id: 190
                            },
                            {
                                state: 'BnkRegStandingInstruction',
                                name: 'Standing Instruction Register (Active/Revoke)',
                                id: 191
                            },
                            {
                                state: 'BnkRegInterestInstruction',
                                name: 'Interest Instruction Register  (Active/Revoke)',
                                id: 192
                            },
                            {
                                state: 'BnkRegSpecialInstruction',
                                name: 'Special Instruction Register  (Active/Revoke)',
                                id: 193
                            },
                            {
                                state: 'BnkRegInsurence',
                                name: 'Insurance Register',
                                id: 194
                            },
                            {
                                state: 'BnkODRegister',
                                name: 'O.D. Register (Temprary / Periodical)',
                                id: 195
                            },
                            {
                                state: 'BnkRegDeadStock',
                                name: 'Deadstock Register',
                                id: 196
                            },
                            {
                                state: 'BnkIVOpenAndCloseReg',
                                name: 'Investment Register (Open/Closed)',
                                id: 197
                            },
                            {
                                state: 'BnkRegGoldSilverSubReturn',
                                name: 'Gold Silver Submission/Return Register',
                                id: 198
                            },
                            {
                                state: 'DepositReceiptRegister',
                                name: 'Deposit Receipt Register',
                                id: 199
                            },
                            {
                                state: 'lockerRentRegister',
                                name: 'Locker Rent Register',
                                id: 200
                            },
                            {
                                state: 'lockerRegister',
                                name: 'Locker Register Report',
                                id: 201
                            },
                            {
                                state: 'excessCashBalance',
                                name: 'Excess Cash Balance Report',
                                id: 202
                            },
                        ]
                    },
                    //
                    {
                        state: 'Termdeposit',
                        name: 'Term Deposit Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 203,
                        children: [
                            {
                                state: 'maturedbutnotpaid',
                                name: 'matured but not paid between two days',
                                id: 204
                            },
                            {
                                state: 'maturedbutnotclosed',
                                name: 'matured but not closed',
                                id: 205
                            },
                            {
                                state: 'depositpaidlist',
                                name: 'Deposit Paid List',
                                id: 206
                            },
                            {
                                state: 'intratewisebalancelist',
                                name: 'Interest Rate Wise List',
                                id: 207
                            },
                            {
                                state: 'custidwiseintpaidlist',
                                name: 'Customer Id Wise Interest Paid List',
                                id: 208
                            },
                            {
                                state: 'custidwiseloaninterestCertificate',
                                name: 'Customer Id Wise Deposit Interest Certificate',
                                id: 209
                            },
                            {
                                state: 'IntRatewiseMaturityList',
                                name: 'Interest Rate wise Maturity List',
                                id: 210
                            },
                            {
                                state: 'custidwisedepositlist',
                                name: 'Customer Id wise Deposit List',
                                id: 211
                            },
                            {
                                state: 'tddetailrecurroverdue',
                                name: 'Term Deposite Detail List and Recurring Overdue',
                                id: 212
                            },
                            {
                                state: 'prematuredAcCloselist',
                                name: 'Prematured A/c Close List',
                                id: 213
                            },
                            {
                                state: 'renewalDepositList',
                                name: 'Renewal Deposit List',
                                id: 214
                            },
                            {
                                state: 'directorwiseDepositlist',
                                name: 'Directorwise Deposit List',
                                id: 215
                            },
                            {
                                state: 'custidwiseInterestList',
                                name: 'Customer Id Wise Interest List',
                                id: 216
                            },
                            {
                                state: 'custidwiseMaturedList',
                                name: 'Customer Id Wise Matured Deposit List',
                                id: 217
                            },
                            {
                                state: 'abtypeDepositList',
                                name: 'A/B Type Deposit List',
                                id: 218
                            },
                        ]
                    },
                    {
                        state: 'SharesReports',
                        name: 'Shares Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 219,
                        children: [
                            {
                                state: 'cityMemberList',
                                name: 'CityWise Member List',
                                id: 220
                            },
                            {
                                state: 'dividendPaidList',
                                name: 'Dividend Paid List Report',
                                id: 221
                            },
                            {
                                state: 'sharesIssueRegister',
                                name: 'Shares Issue Register',
                                id: 222
                            },
                            {
                                state: 'sharesReturnRegister',
                                name: 'Membership Cancellation',
                                id: 223
                            },
                            {
                                state: 'sharesTransferRegister',
                                name: 'Shares Transfer Register',
                                id: 224
                            },
                            {
                                state: 'unpaidDividendList',
                                name: 'Unpaid Dividend List',
                                id: 225
                            },
                            {
                                state: 'monthlyRecoveryPrint',
                                name: 'Monthly Recovery Print',
                                id: 226
                            },
                            {
                                state: 'monthlyRecoverySubsidiary',
                                name: 'Monthly Recovery Subsidiary',
                                id: 227
                            }
                        ]
                    },
                    //
                    // {
                    //   state: 'denominationReports',
                    //   name: 'Denomination Reports',
                    //   id: 228
                    // },
                    //
                    // {
                    //   state: 'loanReports',
                    //   name: 'Loan Reports',
                    //   id: 229
                    // },
                    {
                        state: 'LoanReport',
                        name: 'Term Loan/Cash Credit Reports',
                        short_label: 'D',
                        type: 'sub',
                        id: 230,
                        children: [
                            {
                                state: 'loanoverduelist',
                                name: 'Loan Overdue List',
                                type: 'sub',
                                id: 231,
                            },
                            {
                                state: 'loansecurityreport',
                                name: 'Loan Security Reports',
                                type: 'sub',
                                id: 232,
                            },
                            {
                                state: 'citiwiseLoanBalancereport',
                                name: 'Citiwise Loan Balance Report',
                                type: 'sub',
                                id: 233,
                            },
                            {
                                state: 'lcdLessdraftReport',
                                name: 'Loan Cash Credit Less Draft Report',
                                type: 'sub',
                                id: 234,
                            },
                            {
                                state: 'lcdOverdraftReport',
                                name: 'Loan Cash Credit Over Draft Report',
                                type: 'sub',
                                id: 235,
                            },
                            {
                                state: 'lcd-renewal-list',
                                name: 'Loan Cash Credit Renewal List',
                                type: 'sub',
                                id: 236,
                            },
                            {
                                state: 'lcd-turnover-list',
                                name: 'Loan Cash Credit Turnover List',
                                type: 'sub',
                                id: 237,
                            },
                            {
                                state: 'penalinterestlist',
                                name: 'Received and Penal Interest List',
                                type: 'sub',
                                id: 238,
                            },
                            {
                                state: 'pendingStockStatementlist',
                                name: 'Pending Stock Statement List',
                                type: 'sub',
                                id: 239,
                            },
                            {
                                state: 'receivedStockstatementList',
                                name: 'Received Stock Statement List',
                                type: 'sub',
                                id: 240,
                            },
                            {
                                state: 'recoverycwBalanceList',
                                name: 'Recovery Balance List',
                                type: 'sub',
                                id: 241,
                            },
                            {
                                state: 'receivableInstallInterest',
                                name: 'Receivable Installment and Intrest List',
                                type: 'sub',
                                id: 242,
                            },
                            {
                                state: 'loanExpiredList',
                                name: 'Loan / CC Expired List',
                                type: 'sub',
                                id: 343,
                            },
                        ],
                    },
                    {
                        state: 'npaReports',
                        name: 'NPA Reports',
                        short_label: 'D',
                        type: 'sub',
                        id: 243,
                        children: [
                            {
                                state: 'npaRegister',
                                name: 'NPA Register',
                                id: 244
                            },
                            {
                                state: 'npaRegPercentage',
                                name: 'NPA Register Percentage',
                                id: 245
                            },
                            {
                                state: 'nonNpaRecovery',
                                name: 'To be Recovery Non NPA Report',
                                id: 246
                            },
                            {
                                state: 'directorwise',
                                name: 'Directorwise Recommanded by',
                                id: 247
                            },
                            {
                                state: 'citiwisenpa',
                                name: 'Citywise NPA Register',
                                type: 'sub',
                                id: 248,
                            },
                            {
                                state: 'analysisnpa',
                                name: 'NPA Analysis Report',
                                type: 'sub',
                                id: 249,
                            },
                            {
                                state: 'classificationsecnpa',
                                name: 'NPA Classification -Secured Or Unsecured.PNG',
                                type: 'sub',
                                id: 250,
                            },
                            {
                                state: 'classificationstandardnpa',
                                name: 'NPA Classification -Standard Or Non Standard.PNG',
                                type: 'sub',
                                id: 251,
                            },
                        ],
                    },
                    //
                    //
                    // {
                    //   state: 'nottice',
                    //   name: 'Nottice',
                    //   id: 252
                    // },
                    // //
                    // {
                    //   state: 'Report_Frame',
                    //   name: 'Report Frame',
                    //   id: 253
                    // },
                    //
                    {
                        state: 'PigmyReport',
                        name: 'Pigmy Report',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 254,
                        children: [
                            {
                                state: 'BnkPigmyCollectionChart',
                                name: 'Pigmy Agentwise Collection Chart',
                                id: 255
                            },
                            {
                                state: 'BnkPigmyBalanceList',
                                name: 'Pigmy Agent Wise Balance List',
                                id: 256
                            },
                            {
                                state: 'BnkPigmyBalanceBook',
                                name: 'Pigmy Agent Wise Balance Book',
                                id: 257
                            },
                            {
                                state: 'BnkPigmyBlankChart',
                                name: 'Pigmy Agent Collection Blank Chart',
                                id: 258
                            },
                            {
                                state: 'BnkPigmyCommissionRepo',
                                name: 'Pigmy Agent Commission Report',
                                id: 259
                            },
                            {
                                state: 'pigmyhandbook',
                                name: 'Pigmy  HandBook',
                                id: 260
                            },
                            {
                                state: 'pigmymaturedAclist',
                                name: 'Pigmy  Matured A/C List',
                                id: 261
                            },
                        ]
                    },
                    //
                    {
                        state: 'otherReports',
                        short_label: 'D',
                        name: 'Other Reports',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 262,
                        children: [
                            {
                                state: 'BnkMinorsList',
                                name: 'Minor List',
                                id: 263
                            },
                            {
                                state: 'BnkNomineeList',
                                name: 'Nominee List',
                                id: 264
                            },
                            {
                                state: 'BnkGuaranterList',
                                name: 'Guaranter List',
                                id: 265
                            },
                            {
                                state: 'BnkLienMarkedAcList',
                                name: 'Lein mark Account List ',
                                id: 266
                            },
                            // {
                            //   state: 'BnkDormantAcList',
                            //   name: 'Dormant Account List',
                            //   id: 267
                            // },
                            {
                                state: 'BnkAmountMovement',
                                name: 'Transaction Amount Movement',
                                id: 268
                            },
                            {
                                state: 'BnkDepAmountMovementDetail',
                                name: 'Deposit Amount Movement',
                                id: 269
                            },
                            {
                                state: 'BnkLNAmountMovementDetail',
                                name: 'Loan Amount Movement',
                                id: 270
                            },
                            {
                                state: 'BnkGurDetailsList',
                                name: 'Guaranter Details',
                                id: 271
                            },
                            {
                                state: 'BnkNonGuaranteerView',
                                name: 'Non Guarantor (A-Type Members Only) List',
                                id: 272
                            },
                            {
                                state: 'custidIntroducerList',
                                name: 'CustomerIdwise Introducer List',
                                id: 273
                            },
                            {
                                state: 'serviceChargeList',
                                name: 'Service Charges List',
                                id: 274
                            },
                            {
                                state: 'minorToMajorlist',
                                name: 'Minor To Major List',
                                id: 275
                            },
                            {
                                state: 'tranLessAclist',
                                name: 'Transactionless Account List',
                                id: 276
                            },
                            {
                                state: 'dormantAccountList',
                                name: 'Dormant Account List',
                                id: 277
                            },
                        ]
                    },
                    //
                    {
                        state: 'misReports',
                        name: 'MIS Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 278,
                        children: [
                            // {
                            //   state: 'schemeWisedepoaccount',
                            //   name: 'SchemeWise Deposit Account Details',
                            //   id: 279
                            // },
                            {
                                state: 'excessCashBalance',
                                name: 'Excess Cash Balance Report',
                                id: 280
                            },
                        ]
                    },
                    //
                    {
                        state: 'managerViewReports',
                        name: 'Manager View Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 281
                    },
                    //
                    {
                        state: 'finalReports',
                        name: 'Final Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 282,
                        children: [
                            {
                                state: 'BnkTrialBal',
                                name: 'Trial Balance ',
                                id: 283
                            },
                            {
                                state: 'BnkTrialBaldetail',
                                name: 'Trial Balance Detail',
                                id: 284
                            },
                            {
                                state: 'BalanceSheet',
                                name: 'Balance Sheet',
                                id: 285
                            },
                            {
                                state: 'NBalanceSheet',
                                name: 'N Form Balance Sheet',
                                id: 286
                            },
                            {
                                state: 'ProfitLossAccount',
                                name: 'Profit & Loss Account',
                                id: 287
                            },
                            {
                                state: 'NProfitLoss',
                                name: 'N Form Profit & Loss Account',
                                id: 288
                            },
                            {
                                state: 'RecePayRep',
                                name: 'Receipt & Payment Report',
                                id: 289
                            },
                            {
                                state: 'RecePayRepDetails',
                                name: 'Receipt & Payment Report Detail',
                                id: 290
                            },
                        ]
                    },
                    {
                        state: 'RecoveryReport',
                        name: 'Recovery Reports',
                        short_label: 'D',
                        type: 'sub',
                        icon: 'icon-home',
                        id: 291,
                        children: [
                            {
                                state: 'memberAckReport',
                                name: 'Member Acknowledgement Report',
                                id: 292
                            },
                        ]
                    },
                ]
            },
            {
                state: 'utility',
                short_label: 'D',
                name: 'Utility',
                type: 'sub',
                icon: 'icon-home',
                id: 293,
                children: [
                    {
                        state: 'dayBegin',
                        name: 'Day Begin',
                        id: 294
                    },
                    {
                        state: 'dayEnd',
                        name: 'Day End',
                        short_label: 'D',
                        type: 'sub',
                        id: 295,
                        children: [
                            {
                                state: 'counterWorkDayEnd',
                                name: 'Day End Handover',
                                id: 296
                            },
                            {
                                state: 'FinalDayEnd',
                                name: 'Day End',
                                id: 297
                            },
                            {
                                state: 'pigmyDayEnd',
                                name: 'pigmy Day End',
                                id: 298
                            },
                        ]
                    },
                    // {
                    //   state: 'backDatedDO',
                    //   name: 'Back Dated Day Open',
                    //   id: 299
                    // },
                    // {
                    //   state: 'receiptPrintingD',
                    //   name: 'Receipt Printing Designing',
                    //   id: 300
                    // },
                    {
                        state: 'holiday',
                        name: 'Holiday',
                        id: 301
                    },
                    {
                        state: 'interestPosting',
                        name: 'Interest Posting',
                        short_label: 'D',
                        type: 'sub',
                        id: 302,
                        children: [
                            {
                                state: 'interestCalculation',
                                name: 'Interest Calculation',
                                id: 303
                            },
                            {
                                state: 'interestPassing',
                                name: 'Interest Passing',
                                id: 304
                            },
                            {
                                state: 'interestList',
                                name: 'Interest List',
                                id: 305
                            },
                        ]
                    },
                    {
                        state: 'processACM',
                        name: 'Process And Calculation Menu',
                        id: 306
                    },
                    {
                        state: 'pigmyMachineProcess',
                        name: 'Pigmy Machine Process',
                        id: 307
                    },
                    {
                        state: 'pigmyAppProcess',
                        name: 'Pigmy App Process',
                        id: 308
                    },
                    {
                        state: 'whatsappmessages',
                        name: 'Whatsapp Messages',
                        id: 345
                    },
                    {
                        state: 'deadStockP',
                        name: 'Dead Stock Process',
                        id: 309
                    },
                    {
                        state: 'dividend',
                        name: 'Dividend',
                        short_label: 'D',
                        type: 'sub',
                        id: 310,
                        children: [
                            {
                                state: 'dividendList',
                                name: 'Dividend List',
                                id: 311
                            },
                            {
                                state: 'dividendPost',
                                name: 'Dividend Post',
                                id: 312
                            }
                        ]
                    },
                    {
                        state: 'statementHeadInsert',
                        name: 'Statement Head Insert',
                        id: 313
                    },
                    // {
                    //   state: 'changePassword',
                    //   name: 'Change Password',
                    //   id: 314
                    // },
                    {
                        state: 'roleDefination',
                        name: 'Role Defination',
                        id: 315
                    },
                    {
                        state: 'roleMaster',
                        name: 'Role Master',
                        id: 316
                    },
                    {
                        state: 'userDefination',
                        name: 'User Defination',
                        id: 317
                    },
                    {
                        state: 'cashierMaintance',
                        name: 'Cashier Maintenace',
                        id: 318
                    },
                    {
                        state: 'cashierUM',
                        name: 'Cashier User Maintainance',
                        id: 319
                    },
                    {
                        state: 'sharesCCTS',
                        name: 'Shares Contribution Credit To Shares',
                        id: 320
                    },
                    // {
                    //   state: 'silverJACTS',
                    //   name: 'Silver Jubilee Amount Credit To Shares',
                    //   id: 321
                    // },
                    // {
                    //   state: 'masikBDW',
                    //   name: 'Masik Bachat Deposit Withdrawl',
                    //   id: 322
                    // },
                    {
                        state: 'schemeATE',
                        name: 'Scheme Amount Transfer Entry',
                        id: 323
                    },
                    {
                        state: 'schemeParameters',
                        name: 'Scheme Parameters',
                        id: 324
                    },
                    {
                        state: 'calculator',
                        name: 'Calculator',
                        id: 325
                    },
                    // {
                    //   state: 'remindMe',
                    //   name: 'Remind Me',
                    //   id: 326
                    // },
                    {
                        state: 'dataBackup',
                        name: 'Data Backup',
                        id: 327
                    },
                    {
                        state: 'pataSevaSupportR',
                        name: 'PataSeva Support Register',
                        id: 328
                    },
                    {
                        state: 'sharesDataEI',
                        name: 'Sheres Data Export / Import',
                        id: 329
                    },
                    // {
                    //   state: 'dayBookIE',
                    //   name: 'Daybook Import / Export',
                    //   id: 330
                    // },
                    {
                        state: 'demandDraftDEI',
                        name: 'Demand Draft Data Export/ Import',
                        id: 331
                    },
                    {
                        state: 'gmaMemberUpdation',
                        name: 'General Meeting Appear Meeting Updation',
                        id: 332
                    },
                    {
                        state: 'amtTransferTransaction',
                        name: 'Amount Transfer Transaction',
                        id: 333
                    },
                    {
                        state: 'recAmtTrToGL',
                        name: 'Recurring Amount Transfer to GL',
                        id: 334
                    },
                ]
            },
            {
                state: 'windows',
                short_label: 'D',
                name: 'Windows',
                type: 'sub',
                icon: 'icon-home',
                id: 335,
                children: [
                    {
                        state: 'casecade',
                        name: 'CaseCade',
                        id: 336
                    },
                    {
                        state: 'tileHorizontaily',
                        name: 'Tile Horizontaily',
                        id: 337
                    },
                    {
                        state: 'tileVertically',
                        name: 'Tile Vertically',
                        id: 338
                    },
                ]
            },
            {
                state: 'hotKeys',
                short_label: 'D',
                name: 'Hot Key',
                type: 'link',
                icon: 'icon-home',
                id: 339
            },
            {
                state: 'exit',
                short_label: 'D',
                name: 'Sign Out',
                type: 'link',
                icon: 'icon-home',
                id: 340
            },
        ],
    },
];
class MenuItems {
    getAll() {
        return MENUITEMS;
    }
    getMenu() {
        return MENUITEMS1[0].main;
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".md-close-btn {\n  border: 0;\n  background: none;\n  color: #ffffff;\n  position: absolute;\n  top: 15px;\n  right: 16px;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n\n.md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n  perspective: 600px;\n}\n\n.container {\n  min-height: 100%;\n}\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n  visibility: visible;\n}\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  opacity: 0;\n  background: rgba(55, 58, 60, 0.65);\n  transition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n\n.md-content {\n  color: #666666;\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.md-content h3 {\n  color: #fff;\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  font-size: 1.7em;\n  opacity: 0.8;\n  background: rgba(0, 0, 0, 0.99);\n  border-radius: 3px 3px 0 0;\n}\n\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n  font-weight: 300;\n  font-size: 1.15em;\n}\n\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n}\n\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n\n.md-content > div ul li {\n  padding: 5px 0;\n}\n\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-12 ~ .md-overlay {\n  background: #0073aa;\n}\n\n.md-effect-12 .md-content {\n  color: #fff;\n  background: transparent;\n}\n\n.md-effect-12 .md-content h3 {\n  color: #fff;\n  background: transparent;\n}\n\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n  border: 1px solid #fff;\n}\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-13 .md-content {\n  animation: slit 0.7s forwards ease-out;\n}\n\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n\n.md-show.md-effect-16 ~ .md-overlay {\n  background: rgba(180, 46, 32, 0.5);\n}\n\n.md-show.md-effect-16 ~ .container {\n  -moz-filter: blur(3px);\n  filter: blur(3px);\n}\n\n/* Effect 16:  Blur */\n\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n.md-show.md-effect-17 ~ .md-overlay {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n\n.md-show.md-effect-18 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-18 ~ .md-overlay {\n  background: rgba(143, 27, 15, 0.8);\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-18 ~ .container, .md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 0% 50%;\n  -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\n/* Effect 18:  Slide from right with perspective on container */\n\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-19 ~ .container, .md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    animation-timing-function: ease-out;\n  }\n}\n\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUlBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFHQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUU7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBREk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUdOOztBQURJO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0FBR047O0FBRk07RUFDRSxjQUFBO0FBSVI7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUEsbUNBQUE7O0FBRUE7RUFJRSxxQkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQUFGOztBQUdBO0VBSUUsbUJBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0EsbUNBQUE7O0FBRUE7RUFJRSwwQkFBQTtFQUNBLFVBQUE7RUFHQSxzREFBQTtBQURGOztBQUlBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUEsb0NBQUE7O0FBRUE7RUFJRSwwQkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQUZGOztBQUtBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0Esd0JBQUE7O0FBRUE7RUFJRSxrQ0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUdFLG9CQUFBO0FBSEY7O0FBTUE7RUFJRSxnQ0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQSxtQkFBQTs7QUFHRTtFQUdFLG1CQUFBO0FBTEo7O0FBT0U7RUFHRSw0QkFBQTtFQUlBLDJDQUFBO0VBQ0EsVUFBQTtBQUxKOztBQVNBO0VBR0UsNEJBQUE7RUFJQSx3Q0FBQTtFQUNBLFVBQUE7QUFORjs7QUFTQSx3QkFBQTs7QUFHRTtFQUdFLG1CQUFBO0FBUko7O0FBVUU7RUFHRSw0QkFBQTtFQUlBLHlEQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVlBO0VBR0UsNEJBQUE7RUFJQSxtREFBQTtFQUNBLFVBQUE7QUFURjs7QUFZQSxzQ0FBQTs7QUFFQTtFQUNFLE1BQUE7RUFJQSwyQkFBQTtBQVZGOztBQVdFO0VBSUUsNEJBQUE7RUFHQSxvQkFBQTtFQUNBLFVBQUE7QUFUSjs7QUFhQTtFQUlFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBVkY7O0FBYUEsaUNBQUE7O0FBR0U7RUFHRSxtQkFBQTtBQVpKOztBQWNFO0VBR0UsNEJBQUE7RUFJQSwwQkFBQTtFQUdBLG9CQUFBO0VBQ0EsVUFBQTtBQVpKOztBQWdCQTtFQUlFLHdCQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWdCQSwrQkFBQTs7QUFHRTtFQUdFLG1CQUFBO0FBZko7O0FBaUJFO0VBR0UsNEJBQUE7RUFJQSwwQkFBQTtFQUdBLG9CQUFBO0VBQ0EsVUFBQTtBQWZKOztBQW1CQTtFQUlFLHdCQUFBO0VBQ0EsVUFBQTtBQWhCRjs7QUFtQkEsdUJBQUE7O0FBR0U7RUFHRSxtQkFBQTtBQWxCSjs7QUFvQkU7RUFHRSw0QkFBQTtFQUlBLDBCQUFBO0VBR0EsdUJBQUE7RUFDQSxVQUFBO0VBR0Esb0JBQUE7QUFsQko7O0FBc0JBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FBbkJGOztBQXNCQSw0QkFBQTs7QUFFQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtFQUdBLG9CQUFBO0FBcEJGOztBQXVCQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtBQXBCRjs7QUF1QkEsd0JBQUE7O0FBRUE7RUFJRSxxQkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFLRSxXQUFBO0VBQ0EsdUJBQUE7QUF6QkY7O0FBb0JFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBbEJKOztBQXdCQTtFQUlFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBckJGOztBQXdCQSx1QkFBQTs7QUFHRTtFQUdFLG1CQUFBO0FBdkJKOztBQXlCRTtFQUdFLDRCQUFBO0VBSUEsNkNBQUE7RUFDQSxVQUFBO0FBdkJKOztBQTJCQTtFQUdFLHNDQUFBO0FBeEJGOztBQXVEQTtFQUNFO0lBQ0UsNENBQUE7SUFDQSxVQUFBO0lBQ0Esa0NBQUE7RUE5QkY7RUFpQ0E7SUFDRSxzQ0FBQTtJQUNBLFVBQUE7RUEvQkY7QUFDRjs7QUFtQ0Esc0NBQUE7O0FBR0U7RUFHRSxtQkFBQTtBQW5DSjs7QUFxQ0U7RUFHRSw0QkFBQTtFQUlBLDBDQUFBO0VBR0Esd0JBQUE7RUFDQSxVQUFBO0VBR0EsNkJBQUE7QUFuQ0o7O0FBdUNBO0VBSUUsdUNBQUE7RUFDQSxVQUFBO0FBcENGOztBQXVDQSx1Q0FBQTs7QUFHRTtFQUdFLG1CQUFBO0FBdENKOztBQXdDRTtFQUdFLDRCQUFBO0VBSUEsNERBQUE7RUFHQSx3QkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQXRDSjs7QUEyQ0U7RUFJRSx1REFBQTtFQUNBLFVBQUE7QUF4Q0o7O0FBMkNJO0VBQ0Usa0NBQUE7QUF6Q047O0FBMkNJO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtBQXpDTjs7QUE4Q0EscUJBQUE7O0FBRUE7RUFJRSwwQkFBQTtFQUNBLFVBQUE7QUE1Q0Y7O0FBK0NBO0VBR0Usb0JBQUE7QUE1Q0Y7O0FBZ0RFO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FBN0NKOztBQWdESTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUdBLDBCQUFBO0VBSUEseUJBQUE7RUFHQSx3QkFBQTtFQUdBLDRCQUFBO0FBOUNOOztBQWdESTtFQUlFLHlCQUFBO0VBR0Esd0JBQUE7RUFHQSw0QkFBQTtBQTlDTjs7QUFtREEsbUVBQUE7O0FBRUE7RUFDRSxVQUFBO0VBSUEsMkJBQUE7QUFqREY7O0FBcURFO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7QUFsREo7O0FBcURJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBbkROOztBQXFESTtFQUNFLGtDQUFBO0VBR0Esb0JBQUE7QUFuRE47O0FBcURJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLDBEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FBbkROOztBQXdEQSwrREFBQTs7QUEwQkE7RUFDRTtJQUNFLDBDQUFBO0lBQ0EsbUNBQUE7RUE1REY7RUErREE7SUFDRSw2QkFBQTtFQTdERjtBQUNGOztBQWlFQTtFQUlFLDJCQUFBO0VBQ0EsVUFBQTtBQS9ERjs7QUFtRUU7RUFJRSx3QkFBQTtFQUNBLFVBQUE7RUFHQSx5QkFBQTtBQWhFSjs7QUFtRUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFqRU47O0FBbUVJO0VBR0Usb0JBQUE7QUFqRU47O0FBbUVJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FBakVOOztBQXNFQSxtRUFBQTs7QUFrQkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsbUNBQUE7RUF4RUY7QUFDRjs7QUE0RUE7RUFJRSw0QkFBQTtFQUNBLFVBQUE7QUExRUY7O0FBNkVBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7QUExRUY7O0FBNkVBO0VBQ0U7SUFDRSxjQUFBO0VBMUVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kYWwtYW5pbWF0aW9uL21vZGFsLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC1jbG9zZS1idG4ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1kLXBlcnNwZWN0aXZlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDYwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1kLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDYzMHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDIwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5tZC1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm1kLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMTAwO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU1LCA1OCwgNjAsIDAuNjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5tZC1jb250ZW50IHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjk5KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgfVxuICA+IGRpdiB7XG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cblxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXG5cbi5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAyOiBTbGlkZSBmcm9tIHRoZSByaWdodCAqL1xuXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDM6IFNsaWRlIGZyb20gdGhlIGJvdHRvbSAqL1xuXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDQ6IE5ld3NwYXBlciAqL1xuXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA1OiBmYWxsICovXG5cbi5tZC1lZmZlY3QtNSB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xuXG4ubWQtZWZmZWN0LTYge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cblxuLm1kLWVmZmVjdC03IHtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cblxuLm1kLWVmZmVjdC04IHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xuXG4ubWQtZWZmZWN0LTkge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMDogM0Qgc2lnbiAqL1xuXG4ubWQtZWZmZWN0LTEwIHtcbiAgJi5tZC1tb2RhbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xuICB9XG4gIC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXG5cbi5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cblxuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEyIH4gLm1kLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjMDA3M2FhO1xufVxuXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcbiAgaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4vKiBFZmZlY3QgMTM6IDNEIHNsaXQgKi9cblxuLm1kLWVmZmVjdC0xMyB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLyogRWZmZWN0IDE0OiAgM0QgUm90YXRlIGZyb20gYm90dG9tICovXG5cbi5tZC1lZmZlY3QtMTQge1xuICAmLm1kLW1vZGFsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIH1cbiAgLm1kLWNvbnRlbnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSByb3RhdGVYKDkwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIH1cbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNTogIDNEIFJvdGF0ZSBpbiBmcm9tIGxlZnQgKi9cblxuLm1kLWVmZmVjdC0xNSB7XG4gICYubWQtbW9kYWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgfVxuICAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxufVxuXG4ubWQtc2hvdyB7XG4gICYubWQtZWZmZWN0LTE1IC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAmLm1kLWVmZmVjdC0xNiB+IHtcbiAgICAubWQtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgNDYsIDMyLCAwLjUpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgICAtbW96LWZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgZmlsdGVyOiBibHVyKDNweCk7XG4gICAgfVxuICB9XG59XG5cbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cblxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsIC5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cge1xuICAmLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAmLm1kLWVmZmVjdC0xNyB+IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XG4gICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIH1cbiAgICAubWQtb3ZlcmxheSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG4gIH1cbn1cblxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cblxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xufVxuXG4ubWQtc2hvdyB7XG4gICYubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgfVxuICAmLm1kLWVmZmVjdC0xOCB+IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5tZC1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTQzLCAyNywgMTUsIDAuOCk7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLCAubWQtb3ZlcmxheSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgICAgIC1tb3otYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgfVxuICB9XG59XG5cbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSg1ZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgfVxufVxuXG5cbkAtbW96LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcbiAgfVxufVxuXG5cbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cge1xuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIH1cbiAgJi5tZC1lZmZlY3QtMTkgfiB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAubWQtb3ZlcmxheSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLCAubWQtb3ZlcmxheSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICAgICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgIGFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gICAgfVxuICB9XG59XG5cbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cbkAtbW96LWtleWZyYW1lcyBPcGVuVG9wIHtcbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuXG5cbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n  overflow: auto;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 16px;\n  color: #292b2c;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n.basic h5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBQ047QUFHSTtFQUlFLDBCQUFBO0FBRE47QUFHSTtFQUdFLDZCQUFBO0VBSUEsNkJBQUE7QUFETjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRko7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljIHtcbiAgJi5tb2RhbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA1MDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJi5mYWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgJi5pbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG4gICYubW9kYWwuZmFkZSB7XG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgfVxuICB9XG4gIC5iYXNpYy1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMyOTJiMmM7XG4gIH1cbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMxcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWxvYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbiJdfQ== */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUVBLDJEQUFBO0FBQ0o7O0FBYUE7RUFDSTtJQUVJLG9CQUFBO0VBQU47RUFFRTtJQUVJLG9CQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBREo7O0FBSUE7RUFDSSx5Q0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIHRvcDogMCAgO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIH1cbn1cblxuI2h0dHAtbG9hZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcbn1cbiJdfQ== */"], encapsulation: 2 });
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

/***/ "./src/app/theme/auth/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/theme/auth/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import { JwtHelperService } from '@auth0/angular-jwt';
class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    tokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    canActivate(next, state) {
        debugger;
        const token = localStorage.getItem('token');
        if (this.tokenExpired(token)) {
            this.router.navigate(['/auth/login/simple']);
            alert("you are not logged in");
            return false;
        }
        // else
        //  if(this.auth.isLoggedIn()){
        //   alert("Logged in")
        //   return true
        // }
        else {
            // token valid
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/theme/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






// import { JwtHelperService } from '@auth0/angular-jwt';
class AuthService {
    constructor(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        // isLoggedIn(){
        //   return !!localStorage.getItem('token')
        // }
        this.accessTokenKey = 'token';
        this.refreshTokenKey = 'refresh_token';
    }
    login(article) {
        console.log(this.base_url);
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post(this.base_url + '/auth/login', article, options);
    }
    resetPassword(data) {
        return this.http.post(this.base_url + '/user-defination/resetpassword', data);
    }
    logout(id) {
        return this.http.post(this.base_url + '/user-defination/logout', { id: id });
    }
    loginuserupdate(id) {
        return this.http.post(this.base_url + '/user-defination/login', { id: id });
    }
    LOGINHISTORY(data) {
        return this.http.post(this.base_url + '/user-defination/loginhistory', data);
    }
    LOGOFFHISTORY(data) {
        return this.http.post(this.base_url + '/user-defination/logoffhistory', data);
    }
    findOutLogin(data) {
        return this.http.post(this.base_url + '/user-defination/findLogin', data);
    }
    showNotificationuserwise(data) {
        return this.http.post(this.base_url + '/user-defination/showNotificationuserwise', data);
    }
    updateinactiveUser(data) {
        return this.http.post(this.base_url + '/user-defination/updateinactiveUser', data);
    }
    getAccessToken() {
        return localStorage.getItem(this.accessTokenKey);
    }
    setAccessToken(token) {
        localStorage.setItem(this.accessTokenKey, token);
    }
    getRefreshToken() {
        return localStorage.getItem(this.refreshTokenKey);
    }
    setRefreshToken(token) {
        localStorage.setItem(this.refreshTokenKey, token);
    }
    refreshAccessToken(refreshToken) {
        const refreshTokenPayload = { refreshToken };
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        const payload = { username: result.USER_NAME, sub: result.id, refreshToken };
        return this.http.post(this.base_url + `/refresh-token`, payload);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "^F2");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "^F3");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "^F4");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Shift F8");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "^F9");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "^F11");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "^F12");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "shift F5");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Paste");
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

/***/ "./src/app/theme/shortcut-key/shortcut-key-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/shortcut-key/shortcut-key-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShortcutKeyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutKeyRoutingModule", function() { return ShortcutKeyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class ShortcutKeyRoutingModule {
}
ShortcutKeyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShortcutKeyRoutingModule });
ShortcutKeyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShortcutKeyRoutingModule_Factory(t) { return new (t || ShortcutKeyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShortcutKeyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortcutKeyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/shortcut-key/shortcut-key.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/shortcut-key/shortcut-key.module.ts ***!
  \***********************************************************/
/*! exports provided: ShortcutKeyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortcutKeyModule", function() { return ShortcutKeyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shortcut_key_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shortcut-key-routing.module */ "./src/app/theme/shortcut-key/shortcut-key-routing.module.ts");




class ShortcutKeyModule {
}
ShortcutKeyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShortcutKeyModule });
ShortcutKeyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShortcutKeyModule_Factory(t) { return new (t || ShortcutKeyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shortcut_key_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShortcutKeyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShortcutKeyModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shortcut_key_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShortcutKeyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortcutKeyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shortcut_key_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShortcutKeyRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/day-end/day-end.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/utility/day-end/day-end.service.ts ***!
  \**********************************************************/
/*! exports provided: DayEndService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayEndService", function() { return DayEndService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class DayEndService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
    }
    dayEndHandoverProcess(data) {
        return this.http.post(this.url + '/voucher/dayendhandoverbranchwise', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    getSysparaDetails() {
        return this.http.get(this.url + '/system-master-parameters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    dayHandOver(data) {
        return this.http.post(this.url + '/voucher/dayHandOver', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    checkDayHandOverStatus(obj) {
        return this.http.post(this.url + '/voucher/dayHandOverCheck', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    CheckBranchHandOverReport(data) {
        return this.http.post(this.url + '/voucher/branchWiseHandOverList', data);
    }
    revertHandOver(data) {
        return this.http.post(this.url + '/voucher/revertHandOver', data);
    }
    sendBranchData(data) {
        return this.http.post(this.url + '/voucher/DayEnd', { date: data.date, branch_id: data.branch_id });
    }
    dayEndRemarkChangeBranchWise(data) {
        return this.http.post(this.url + '/voucher/DayEndRemarkChange', data);
    }
    dayEndProccessingRemarkChangeBranchWise(data) {
        return this.http.post(this.url + '/voucher/DayEndProccessingRemarkChange', data);
    }
    pigmyDayEnd(data) {
        return this.http.post(this.url + '/voucher/pigmyDayEnd', data);
    }
}
DayEndService.ɵfac = function DayEndService_Factory(t) { return new (t || DayEndService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DayEndService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DayEndService, factory: DayEndService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayEndService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/user-auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: UserAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthInterceptor", function() { return UserAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/theme/auth/auth.service */ "./src/app/theme/auth/auth.service.ts");







class UserAuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        this.createOnline$().subscribe(function (isOnline) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let data = yield isOnline;
                if (data == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Warning!", "Please check your internet connection !", "warning");
                    return false;
                }
            });
        });
        let token = localStorage.getItem('token');
        let checkrequest;
        // if (request.url.includes('dayHandOverCheck') || request['url'].toString().includes('dayHandOverCheck')) {
        //   checkrequest = true
        //   return next.handle(request);
        // }
        // else {
        //   checkrequest = false
        //   let isExpired = this.isTokenExpired(token)
        //   if (isExpired && checkrequest == false) {
        //     this.authService.refreshAccessToken(token).subscribe(data => {
        //       this.authService.setAccessToken(data.accessToken);
        //     })
        //     return next.handle(request);
        //     // return next.handle(request).pipe(
        //     //   tap(event => {
        //     //     if (event instanceof HttpResponse) {
        //     //       // Handle successful response
        //     //       const responseData = event.body;
        //     //       // Perform actions with the response data
        //     //     }
        //     //   }),
        //     //   catchError(error => {
        //     //     // Handle error response
        //     //     if (error instanceof HttpErrorResponse) {
        //     //       // Perform actions based on the error
        //     //     }
        //     //     return throwError(error);
        //     //   })
        //     // );
        //   }
        // return next.handle(request);
        // }
        // if (isExpired) {
        //   console.log(request)
        // }
        request = request.clone({
            setHeaders: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(request);
    }
    ngOnInit() {
        this.createOnline$().subscribe(isOnline => console.log(isOnline));
    }
    createOnline$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => false)), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
}
UserAuthInterceptor.ɵfac = function UserAuthInterceptor_Factory(t) { return new (t || UserAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
UserAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserAuthInterceptor, factory: UserAuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserAuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _app_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


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
    //Localhost
    // base_url: 'http://localhost:7276',
    //  report_url: 'http://localhost/phpjasper/', //report folder local path
    // sitename: 'http://103.174.87.104/TESTSIDHANERLI/CBS' 
    //Jijamata Arjunwada
    // base_url: 'http://103.174.87.104:7274',
    // report_url: 'http://103.174.87.104/JIJAMATA_ARJUNWADA/REPORTS/', 
    // sitename: 'http://103.174.87.104/JIJAMATA_ARJUNWADA/CBS'
    // //SHIVPRASAD NATEPUTE
    // base_url: 'http://103.174.87.104:7275',  //CBS  natepute server
    // report_url: 'http://103.174.87.104/SHIVPRASADNATEPUTE/REPORTS/', 
    // sitename: 'http://103.174.87.104/SHIVPRASADNATEPUTE/CBS' 
    //VADGAON_SARAF 
    base_url: 'http://103.174.87.104:7796',
    report_url: 'http://103.174.87.104/VADGAON_SARAF/REPORTS/',
    sitename: 'http://103.174.87.104/VADGAON_SARAF/CBS'
    // //VENKATESH 
    // base_url: 'http://103.174.87.104:7276',  
    // report_url: 'http://103.174.87.104/VENKATESH/REPORTS/', 
    // sitename: 'http://103.174.87.104/VENKATESH/CBS'
    // //SIDHANERLI 
    // base_url: 'http://103.174.87.104:4713', 
    // report_url: 'http://103.174.87.104/SIDHANERLI/REPORTS/', 
    // sitename: 'http://103.174.87.104/SIDHANERLI/CBS' 
    // //TESTSIDHANERLI 
    // base_url: 'http://103.174.87.104:4771',  
    // report_url: 'http://103.174.87.104/TESTSIDHANERLI/REPORTS/', 
    // sitename: 'http://103.174.87.104/TESTSIDHANERLI/CBS' 
    // //VITTHALDHARASHIV 
    // base_url: 'http://103.174.87.104:7277',  
    // report_url: 'http://103.174.87.104/VITTHALDHARASHIV/REPORTS/', 
    // sitename: 'http://103.174.87.104/VITTHALDHARASHIV/CBS' 
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

module.exports = __webpack_require__(/*! E:\CBS\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map