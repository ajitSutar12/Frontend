(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-extension-editor-editor-module"],{

/***/ "./src/app/theme/extension/editor/editor-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/extension/editor/editor-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Editor',
            status: false
        },
        children: [
            {
                path: 'wysiwyg',
                loadChildren: () => __webpack_require__.e(/*! import() | pell-wysiwyg-pell-wysiwyg-module */ "pell-wysiwyg-pell-wysiwyg-module").then(__webpack_require__.bind(null, /*! ./pell-wysiwyg/pell-wysiwyg.module */ "./src/app/theme/extension/editor/pell-wysiwyg/pell-wysiwyg.module.ts")).then(module => module.PellWysiwygModule)
            },
            {
                path: 'tinymce',
                loadChildren: () => Promise.all(/*! import() | ext-tinymce-ext-tinymce-module */[__webpack_require__.e("default~email-compose-email-compose-module~ext-tinymce-ext-tinymce-module~user-profile-user-profile-module"), __webpack_require__.e("ext-tinymce-ext-tinymce-module")]).then(__webpack_require__.bind(null, /*! ./ext-tinymce/ext-tinymce.module */ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.module.ts")).then(module => module.ExtTinymceModule)
            }
        ]
    }
];
class EditorRoutingModule {
}
EditorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/extension/editor/editor.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/extension/editor/editor.module.ts ***!
  \*********************************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/theme/extension/editor/editor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class EditorModule {
}
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-extension-editor-editor-module.js.map