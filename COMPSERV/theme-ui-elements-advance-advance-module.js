(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-ui-elements-advance-advance-module"],{

/***/ "./src/app/theme/ui-elements/advance/advance-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/advance-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdvanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceRoutingModule", function() { return AdvanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Advance Components',
            status: false
        },
        children: [
            {
                path: 'task-board',
                loadChildren: () => __webpack_require__.e(/*! import() | draggable-task-board-draggable-task-board-module */ "draggable-task-board-draggable-task-board-module").then(__webpack_require__.bind(null, /*! ./draggable-task-board/draggable-task-board.module */ "./src/app/theme/ui-elements/advance/draggable-task-board/draggable-task-board.module.ts")).then(m => m.DraggableTaskBoardModule)
            },
            {
                path: 'grid-stack',
                loadChildren: () => __webpack_require__.e(/*! import() | grid-stack-grid-stack-module */ "grid-stack-grid-stack-module").then(__webpack_require__.bind(null, /*! ./grid-stack/grid-stack.module */ "./src/app/theme/ui-elements/advance/grid-stack/grid-stack.module.ts")).then(m => m.GridStackModule)
            },
            /*{
              path: 'light-box',
              loadChildren: () => import('./adv-light-box/adv-light-box.module').then(m => m.AdvLightBoxModule)
            },*/
            {
                path: 'modal',
                loadChildren: () => __webpack_require__.e(/*! import() | modal-modal-module */ "modal-modal-module").then(__webpack_require__.bind(null, /*! ./modal/modal.module */ "./src/app/theme/ui-elements/advance/modal/modal.module.ts")).then(m => m.ModalModule)
            },
            {
                path: 'notifications',
                loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "./src/app/theme/ui-elements/advance/notification/notification.module.ts")).then(m => m.NotificationModule)
            },
            /*{
              path: 'notify',
              loadChildren: './notify/notify.module#NotifyModule'
            },*/
            {
                path: 'rating',
                loadChildren: () => __webpack_require__.e(/*! import() | rating-rating-module */ "rating-rating-module").then(__webpack_require__.bind(null, /*! ./rating/rating.module */ "./src/app/theme/ui-elements/advance/rating/rating.module.ts")).then(m => m.RatingModule)
            },
            {
                path: 'range-slider',
                loadChildren: () => __webpack_require__.e(/*! import() | range-slider-range-slider-module */ "range-slider-range-slider-module").then(__webpack_require__.bind(null, /*! ./range-slider/range-slider.module */ "./src/app/theme/ui-elements/advance/range-slider/range-slider.module.ts")).then(m => m.RangeSliderModule)
            },
            /*{
              path: 'slider',
              loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)
            },*/
            /*{
              path: 'tour',
              loadChildren: './adv-tour/adv-tour.module#AdvTourModule'
            },*/
            {
                path: 'tree',
                loadChildren: () => __webpack_require__.e(/*! import() | adv-tree-adv-tree-module */ "adv-tree-adv-tree-module").then(__webpack_require__.bind(null, /*! ./adv-tree/adv-tree.module */ "./src/app/theme/ui-elements/advance/adv-tree/adv-tree.module.ts")).then(m => m.AdvTreeModule)
            },
        ]
    }
];
class AdvanceRoutingModule {
}
AdvanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvanceRoutingModule });
AdvanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvanceRoutingModule_Factory(t) { return new (t || AdvanceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/advance/advance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/ui-elements/advance/advance.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceModule", function() { return AdvanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-routing.module */ "./src/app/theme/ui-elements/advance/advance-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class AdvanceModule {
}
AdvanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvanceModule });
AdvanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvanceModule_Factory(t) { return new (t || AdvanceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvanceRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvanceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvanceRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _advance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdvanceRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-ui-elements-advance-advance-module.js.map