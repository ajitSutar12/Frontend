(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo1-demo1-module~role-defination-role-defination-module"],{

/***/ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js ***!
  \*************************************************************************/
/*! exports provided: DefaultTreeviewEventParser, DefaultTreeviewI18n, DownlineTreeviewEventParser, DropdownDirective, DropdownToggleDirective, DropdownTreeviewComponent, OrderDownlineTreeviewEventParser, TreeviewComponent, TreeviewConfig, TreeviewEventParser, TreeviewHelper, TreeviewI18n, TreeviewItem, TreeviewModule, TreeviewPipe, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTreeviewEventParser", function() { return DefaultTreeviewEventParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTreeviewI18n", function() { return DefaultTreeviewI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownlineTreeviewEventParser", function() { return DownlineTreeviewEventParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownToggleDirective", function() { return DropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownTreeviewComponent", function() { return DropdownTreeviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDownlineTreeviewEventParser", function() { return OrderDownlineTreeviewEventParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewConfig", function() { return TreeviewConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewEventParser", function() { return TreeviewEventParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewHelper", function() { return TreeviewHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewI18n", function() { return TreeviewI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewItem", function() { return TreeviewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewModule", function() { return TreeviewModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewPipe", function() { return TreeviewPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TreeviewItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DropdownMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);









function TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_0_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const onCollapseExpand_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().onCollapseExpand; return onCollapseExpand_r8(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template, 2, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template, 2, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewComponent_ng_template_0_i_1_Template, 3, 3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r7 = ctx.item; return item_r7.checked = $event; })("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener() { const onCheckedChange_r9 = ctx.onCheckedChange; return onCheckedChange_r9(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_0_Template_label_click_4_listener() { const item_r7 = ctx.item; const onCheckedChange_r9 = ctx.onCheckedChange; item_r7.checked = !item_r7.checked; return onCheckedChange_r9(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r7.checked)("disabled", item_r7.disabled)("indeterminate", item_r7.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
function TreeviewComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.filterText = $event; })("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const onFilterTextChange_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().onFilterTextChange; return onFilterTextChange_r25($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r26.i18n.getFilterPlaceholder())("ngModel", ctx_r26.filterText);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).item; return item_r22.checked = $event; })("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const onCheckedChange_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).onCheckedChange; return onCheckedChange_r24(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const item_r22 = ctx_r42.item; const onCheckedChange_r24 = ctx_r42.onCheckedChange; item_r22.checked = !item_r22.checked; return onCheckedChange_r24(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).item;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r22.checked)("indeterminate", item_r22.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r34.i18n.getAllCheckboxText(), " ");
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const onCollapseExpand_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).onCollapseExpand; return onCollapseExpand_r23(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template, 4, 0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template, 4, 0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).item;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r35.i18n.getTooltipCollapseExpandText(item_r22.collapsed))("ngSwitch", item_r22.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template, 4, 4, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).config;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r21.hasAllCheckBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r21.hasCollapseExpand);
} }
function TreeviewComponent_ng_template_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 43);
} }
function TreeviewComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewComponent_ng_template_2_div_1_div_1_Template, 4, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_2_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().config;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r21.hasAllCheckBox || config_r21.hasCollapseExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r21.hasDivider);
} }
function TreeviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeviewComponent_ng_template_2_div_0_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewComponent_ng_template_2_div_1_Template, 3, 2, "div", 20);
} if (rf & 2) {
    const config_r21 = ctx.config;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", config_r21.hasFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hasFilterItems);
} }
function TreeviewComponent_ng_template_5_Template(rf, ctx) { }
function TreeviewComponent_div_7_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-treeview-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function TreeviewComponent_div_7_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r53 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.onItemCheckedChange(item_r53, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r52.config)("item", item_r53)("template", ctx_r52.itemTemplate || _r0);
} }
function TreeviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewComponent_div_7_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r5.maxHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.filterItems);
} }
function TreeviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.i18n.getFilterNoItemsFoundText(), " ");
} }
function TreeviewItemComponent_div_0_ng_template_1_Template(rf, ctx) { }
function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-treeview-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const child_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.onChildCheckedChange(child_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r3.config)("item", child_r4)("template", ctx_r3.template);
} }
function TreeviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
} }
const _c0 = function (a0, a1, a2) { return { item: a0, onCollapseExpand: a1, onCheckedChange: a2 }; };
function TreeviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeviewItemComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, ctx_r0.item, ctx_r0.onCollapseExpand, ctx_r0.onCheckedChange));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.item.collapsed);
} }
class DropdownDirective {
    constructor() {
        this.internalOpen = false;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.toggleElement) && this.toggleElement.contains(event.target);
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "ngxDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.esc", function DropdownDirective_keyup_esc_HostBindingHandler() { return ctx.onKeyupEsc(); })("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isOpen);
    } }, inputs: { internalOpen: ["open", "internalOpen"] }, outputs: { openChange: "openChange" }, exportAs: ["ngxDropdown"] });
DropdownDirective.propDecorators = {
    internalOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['open',] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }],
    onKeyupEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] }],
    onDocumentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngxDropdown]',
                exportAs: 'ngxDropdown'
            }]
    }], function () { return []; }, { internalOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['open']
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.show']
        }], onKeyupEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup.esc']
        }], onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();

class DropdownMenuDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
}
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DropdownDirective)); };
DropdownMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.dropdown.isOpen);
    } } });
DropdownMenuDirective.ctorParameters = () => [
    { type: DropdownDirective }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngxDropdownMenu]',
                host: {
                    '[class.dropdown-menu]': 'true',
                    '[class.show]': 'dropdown.isOpen'
                }
            }]
    }], function () { return [{ type: DropdownDirective }]; }, null); })();

class DropdownToggleDirective {
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
}
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownToggleDirective, selectors: [["", "ngxDropdownToggle", ""]], hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"], hostVars: 1, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownToggleDirective_click_HostBindingHandler() { return ctx.dropdown.toggle(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen);
    } } });
DropdownToggleDirective.ctorParameters = () => [
    { type: DropdownDirective },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngxDropdownToggle]',
                host: {
                    class: 'dropdown-toggle',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'dropdown.isOpen',
                    '(click)': 'dropdown.toggle()'
                }
            }]
    }], function () { return [{ type: DropdownDirective }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();

class TreeviewI18n {
}
TreeviewI18n.ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
TreeviewI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewI18n, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
DefaultTreeviewI18n.ɵfac = function DefaultTreeviewI18n_Factory(t) { return ɵDefaultTreeviewI18n_BaseFactory(t || DefaultTreeviewI18n); };
DefaultTreeviewI18n.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultTreeviewI18n, factory: DefaultTreeviewI18n.ɵfac });
const ɵDefaultTreeviewI18n_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultTreeviewI18n);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultTreeviewI18n, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.ɵfac = function TreeviewConfig_Factory(t) { return new (t || TreeviewConfig)(); };
TreeviewConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeviewConfig, factory: TreeviewConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

const TreeviewHelper = {
    findItem,
    findItemInList,
    findParent,
    removeItem,
    concatSelection
};
function findItem(root, value) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(root)) {
        return undefined;
    }
    if (root.value === value) {
        return root;
    }
    if (root.children) {
        for (const child of root.children) {
            const foundItem = findItem(child, value);
            if (foundItem) {
                return foundItem;
            }
        }
    }
    return undefined;
}
function findItemInList(list, value) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(list)) {
        return undefined;
    }
    for (const item of list) {
        const foundItem = findItem(item, value);
        if (foundItem) {
            return foundItem;
        }
    }
    return undefined;
}
function findParent(root, item) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(root) || Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(root.children)) {
        return undefined;
    }
    for (const child of root.children) {
        if (child === item) {
            return root;
        }
        else {
            const parent = findParent(child, item);
            if (parent) {
                return parent;
            }
        }
    }
    return undefined;
}
function removeItem(root, item) {
    const parent = findParent(root, item);
    if (parent) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pull"])(parent.children, item);
        if (parent.children.length === 0) {
            parent.children = undefined;
        }
        else {
            parent.correctChecked();
        }
        return true;
    }
    return false;
}
function concatSelection(items, checked, unchecked) {
    let checkedItems = [...checked];
    let uncheckedItems = [...unchecked];
    for (const item of items) {
        const selection = item.getSelection();
        checkedItems = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["concat"])(checkedItems, selection.checkedItems);
        uncheckedItems = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["concat"])(uncheckedItems, selection.uncheckedItems);
    }
    return {
        checked: checkedItems,
        unchecked: uncheckedItems
    };
}

class TreeviewItem {
    constructor(item, autoCorrectChecked = false) {
        this.internalDisabled = false;
        this.internalChecked = true;
        this.internalCollapsed = false;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(item)) {
            throw new Error('Item must be defined');
        }
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }
        this.value = item.value;
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(item.checked)) {
            this.checked = item.checked;
        }
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(item.children) && item.children.length > 0) {
            this.children = item.children.map(child => {
                if (this.disabled === true) {
                    child.disabled = true;
                }
                return new TreeviewItem(child);
            });
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
    }
    get checked() {
        return this.internalChecked;
    }
    set checked(value) {
        if (!this.internalDisabled) {
            if (this.internalChecked !== value) {
                this.internalChecked = value;
            }
        }
    }
    get indeterminate() {
        return this.checked === undefined;
    }
    setCheckedRecursive(value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
                this.internalChildren.forEach(child => child.setCheckedRecursive(value));
            }
        }
    }
    get disabled() {
        return this.internalDisabled;
    }
    set disabled(value) {
        if (this.internalDisabled !== value) {
            this.internalDisabled = value;
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
                this.internalChildren.forEach(child => child.disabled = value);
            }
        }
    }
    get collapsed() {
        return this.internalCollapsed;
    }
    set collapsed(value) {
        if (this.internalCollapsed !== value) {
            this.internalCollapsed = value;
        }
    }
    setCollapsedRecursive(value) {
        this.internalCollapsed = value;
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
            this.internalChildren.forEach(child => child.setCollapsedRecursive(value));
        }
    }
    get children() {
        return this.internalChildren;
    }
    set children(value) {
        if (this.internalChildren !== value) {
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(value) && value.length === 0) {
                throw new Error('Children must be not an empty array');
            }
            this.internalChildren = value;
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
                let checked = null;
                this.internalChildren.forEach(child => {
                    if (checked === null) {
                        checked = child.checked;
                    }
                    else {
                        if (child.checked !== checked) {
                            checked = undefined;
                            return;
                        }
                    }
                });
                this.internalChecked = checked;
            }
        }
    }
    getSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }
        else {
            const selection = TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        return {
            checkedItems,
            uncheckedItems
        };
    }
    correctChecked() {
        this.internalChecked = this.getCorrectChecked();
    }
    getCorrectChecked() {
        let checked = null;
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.internalChildren)) {
            for (const child of this.internalChildren) {
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    }
}

class TreeviewEventParser {
}
TreeviewEventParser.ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
TreeviewEventParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewEventParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
}
DefaultTreeviewEventParser.ɵfac = function DefaultTreeviewEventParser_Factory(t) { return ɵDefaultTreeviewEventParser_BaseFactory(t || DefaultTreeviewEventParser); };
DefaultTreeviewEventParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultTreeviewEventParser, factory: DefaultTreeviewEventParser.ɵfac });
const ɵDefaultTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultTreeviewEventParser);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultTreeviewEventParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
}
DownlineTreeviewEventParser.ɵfac = function DownlineTreeviewEventParser_Factory(t) { return ɵDownlineTreeviewEventParser_BaseFactory(t || DownlineTreeviewEventParser); };
DownlineTreeviewEventParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DownlineTreeviewEventParser, factory: DownlineTreeviewEventParser.ɵfac });
const ɵDownlineTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DownlineTreeviewEventParser);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownlineTreeviewEventParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    constructor() {
        super(...arguments);
        this.currentDownlines = [];
        this.parser = new DownlineTreeviewEventParser();
    }
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
}
OrderDownlineTreeviewEventParser.ɵfac = function OrderDownlineTreeviewEventParser_Factory(t) { return ɵOrderDownlineTreeviewEventParser_BaseFactory(t || OrderDownlineTreeviewEventParser); };
OrderDownlineTreeviewEventParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDownlineTreeviewEventParser, factory: OrderDownlineTreeviewEventParser.ɵfac });
const ɵOrderDownlineTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](OrderDownlineTreeviewEventParser);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDownlineTreeviewEventParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class FilterTreeviewItem extends TreeviewItem {
    constructor(item) {
        super({
            text: item.text,
            value: item.value,
            disabled: item.disabled,
            checked: item.checked,
            collapsed: item.collapsed,
            children: item.children
        });
        this.refItem = item;
    }
    updateRefChecked() {
        this.children.forEach(child => {
            if (child instanceof FilterTreeviewItem) {
                child.updateRefChecked();
            }
        });
        let refChecked = this.checked;
        if (refChecked) {
            for (const refChild of this.refItem.children) {
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    }
}
class TreeviewComponent {
    constructor(i18n, defaultConfig, eventParser) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.eventParser = eventParser;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterText = '';
        this.config = this.defaultConfig;
        this.allItem = new TreeviewItem({ text: 'All', value: undefined });
    }
    get hasFilterItems() {
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.filterItems) && this.filterItems.length > 0;
    }
    get maxHeight() {
        return `${this.config.maxHeight}`;
    }
    ngOnInit() {
        this.createHeaderTemplateContext();
        this.generateSelection();
    }
    ngOnChanges(changes) {
        const itemsSimpleChange = changes.items;
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(itemsSimpleChange) && !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.items)) {
            this.updateFilterItems();
            this.updateCollapsedOfAll();
            this.raiseSelectedChange();
        }
    }
    onAllCollapseExpand() {
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(item => item.setCollapsedRecursive(this.allItem.collapsed));
    }
    onFilterTextChange(text) {
        this.filterText = text;
        this.filterChange.emit(text);
        this.updateFilterItems();
    }
    onAllCheckedChange() {
        const checked = this.allItem.checked;
        this.filterItems.forEach(item => {
            item.setCheckedRecursive(checked);
            if (item instanceof FilterTreeviewItem) {
                item.updateRefChecked();
            }
        });
        this.raiseSelectedChange();
    }
    onItemCheckedChange(item, checked) {
        if (item instanceof FilterTreeviewItem) {
            item.updateRefChecked();
        }
        this.updateCheckedOfAll();
        this.raiseSelectedChange();
    }
    raiseSelectedChange() {
        this.generateSelection();
        const values = this.eventParser.getSelectedChange(this);
        setTimeout(() => {
            this.selectedChange.emit(values);
        });
    }
    createHeaderTemplateContext() {
        this.headerTemplateContext = {
            config: this.config,
            item: this.allItem,
            onCheckedChange: () => this.onAllCheckedChange(),
            onCollapseExpand: () => this.onAllCollapseExpand(),
            onFilterTextChange: (text) => this.onFilterTextChange(text)
        };
    }
    generateSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.items)) {
            const selection = TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        this.selection = {
            checkedItems,
            uncheckedItems
        };
    }
    updateFilterItems() {
        if (this.filterText !== '') {
            const filterItems = [];
            const filterText = this.filterText.toLowerCase();
            this.items.forEach(item => {
                const newItem = this.filterItem(item, filterText);
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(newItem)) {
                    filterItems.push(newItem);
                }
            });
            this.filterItems = filterItems;
        }
        else {
            this.filterItems = this.items;
        }
        this.updateCheckedOfAll();
    }
    filterItem(item, filterText) {
        const isMatch = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["includes"])(item.text.toLowerCase(), filterText);
        if (isMatch) {
            return item;
        }
        else {
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(item.children)) {
                const children = [];
                item.children.forEach(child => {
                    const newChild = this.filterItem(child, filterText);
                    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(newChild)) {
                        children.push(newChild);
                    }
                });
                if (children.length > 0) {
                    const newItem = new FilterTreeviewItem(item);
                    newItem.collapsed = false;
                    newItem.children = children;
                    return newItem;
                }
            }
        }
        return undefined;
    }
    updateCheckedOfAll() {
        let itemChecked = null;
        for (const filterItem of this.filterItems) {
            if (itemChecked === null) {
                itemChecked = filterItem.checked;
            }
            else if (itemChecked !== filterItem.checked) {
                itemChecked = undefined;
                break;
            }
        }
        if (itemChecked === null) {
            itemChecked = false;
        }
        this.allItem.checked = itemChecked;
    }
    updateCollapsedOfAll() {
        let hasItemExpanded = false;
        for (const filterItem of this.filterItems) {
            if (!filterItem.collapsed) {
                hasItemExpanded = true;
                break;
            }
        }
        this.allItem.collapsed = !hasItemExpanded;
    }
}
TreeviewComponent.ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewEventParser)); };
TreeviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeviewComponent, selectors: [["ngx-treeview"]], inputs: { config: "config", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 5, consts: [["defaultItemTemplate", ""], ["defaultHeaderTemplate", ""], [1, "treeview-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "treeview-container", 3, "max-height", 4, "ngSwitchCase"], ["class", "treeview-text", 4, "ngSwitchCase"], [1, "form-inline", "row-item"], ["aria-hidden", "true", 3, "ngSwitch", "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "disabled", "indeterminate", "ngModelChange"], [1, "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "ngSwitch", "click"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-right-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["class", "row row-filter", 4, "ngIf"], [4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "row row-all", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "row", "row-all"], ["class", "form-check form-check-inline", 4, "ngIf"], ["class", "float-right form-check-label", 3, "click", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "indeterminate", "ngModelChange"], [1, "float-right", "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "title", "ngSwitch"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-expand", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-contract", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-expand"], ["fill-rule", "evenodd", "d", "M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-contract"], ["fill-rule", "evenodd", "d", "M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z"], [1, "dropdown-divider"], [1, "treeview-container"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"], [1, "treeview-text"]], template: function TreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeviewComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeviewComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeviewComponent_div_7_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeviewComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate || _r2)("ngTemplateOutletContext", ctx.headerTemplateContext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.hasFilterItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], TreeviewItemComponent]; }, styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%]{margin-bottom:.5rem}[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{flex-wrap:nowrap;margin-bottom:.3rem}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer;margin-right:.3rem}.treeview-container[_ngcontent-%COMP%]{overflow-y:auto;padding-right:.3rem}.treeview-text[_ngcontent-%COMP%]{padding:.3rem 0;white-space:nowrap}"] });
TreeviewComponent.ctorParameters = () => [
    { type: TreeviewI18n },
    { type: TreeviewConfig },
    { type: TreeviewEventParser }
];
TreeviewComponent.propDecorators = {
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-treeview',
                template: "<ng-template #defaultItemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\r\n  let-onCheckedChange=\"onCheckedChange\">\r\n  <div class=\"form-inline row-item\">\r\n    <i *ngIf=\"item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\r\n      <svg *ngSwitchCase=\"true\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-right-fill\"\r\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\" />\r\n      </svg>\r\n      <svg *ngSwitchCase=\"false\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-down-fill\"\r\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\" />\r\n      </svg>\r\n    </i>\r\n    <div class=\"form-check\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\r\n        [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" />\r\n      <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\r\n        {{item.text}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #defaultHeaderTemplate let-config=\"config\" let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\r\n  let-onCheckedChange=\"onCheckedChange\" let-onFilterTextChange=\"onFilterTextChange\">\r\n  <div *ngIf=\"config.hasFilter\" class=\"row row-filter\">\r\n    <div class=\"col-12\">\r\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"i18n.getFilterPlaceholder()\" [(ngModel)]=\"filterText\"\r\n        (ngModelChange)=\"onFilterTextChange($event)\" />\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"hasFilterItems\">\r\n    <div *ngIf=\"config.hasAllCheckBox || config.hasCollapseExpand\" class=\"row row-all\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-check form-check-inline\" *ngIf=\"config.hasAllCheckBox\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\r\n            [indeterminate]=\"item.indeterminate\" />\r\n          <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\r\n            {{i18n.getAllCheckboxText()}}\r\n          </label>\r\n        </div>\r\n        <label *ngIf=\"config.hasCollapseExpand\" class=\"float-right form-check-label\" (click)=\"onCollapseExpand()\">\r\n          <i [title]=\"i18n.getTooltipCollapseExpandText(item.collapsed)\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\r\n            <svg *ngSwitchCase=\"true\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-expand\"\r\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z\" />\r\n            </svg>\r\n            <svg *ngSwitchCase=\"false\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-contract\"\r\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z\" />\r\n            </svg>\r\n          </i>\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"config.hasDivider\" class=\"dropdown-divider\"></div>\r\n  </div>\r\n</ng-template>\r\n<div class=\"treeview-header\">\r\n  <ng-template [ngTemplateOutlet]=\"headerTemplate || defaultHeaderTemplate\"\r\n    [ngTemplateOutletContext]=\"headerTemplateContext\">\r\n  </ng-template>\r\n</div>\r\n<div [ngSwitch]=\"hasFilterItems\">\r\n  <div *ngSwitchCase=\"true\" class=\"treeview-container\" [style.max-height.px]=\"maxHeight\">\r\n    <ngx-treeview-item *ngFor=\"let item of filterItems\" [config]=\"config\" [item]=\"item\"\r\n      [template]=\"itemTemplate || defaultItemTemplate\" (checkedChange)=\"onItemCheckedChange(item, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n  <div *ngSwitchCase=\"false\" class=\"treeview-text\">\r\n    {{i18n.getFilterNoItemsFoundText()}}\r\n  </div>\r\n</div>\r\n",
                styles: [":host .treeview-header .row-filter{margin-bottom:.5rem}:host .treeview-header .row-all .bi{cursor:pointer}:host .treeview-container .row-item{flex-wrap:nowrap;margin-bottom:.3rem}:host .treeview-container .row-item .bi{cursor:pointer;margin-right:.3rem}.treeview-container{overflow-y:auto;padding-right:.3rem}.treeview-text{padding:.3rem 0;white-space:nowrap}"]
            }]
    }], function () { return [{ type: TreeviewI18n }, { type: TreeviewConfig }, { type: TreeviewEventParser }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DropdownTreeviewComponent {
    constructor(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.buttonClass = 'btn-outline-secondary';
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = this.defaultConfig;
    }
    onSelectedChange(values) {
        this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
        this.selectedChange.emit(values);
    }
    onFilterChange(text) {
        this.filterChange.emit(text);
    }
}
DropdownTreeviewComponent.ɵfac = function DropdownTreeviewComponent_Factory(t) { return new (t || DropdownTreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewI18n), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewConfig)); };
DropdownTreeviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownTreeviewComponent, selectors: [["ngx-dropdown-treeview"]], viewQuery: function DropdownTreeviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](TreeviewComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeviewComponent = _t.first);
    } }, inputs: { buttonClass: "buttonClass", config: "config", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, decls: 6, vars: 6, consts: [["ngxDropdown", "", 1, "dropdown"], ["type", "button", "role", "button", "ngxDropdownToggle", "", 1, "btn", 3, "ngClass"], ["ngxDropdownMenu", "", "aria-labelledby", "dropdownMenu", 3, "click"], [1, "dropdown-container"], [3, "config", "headerTemplate", "items", "itemTemplate", "selectedChange", "filterChange"]], template: function DropdownTreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownTreeviewComponent_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-treeview", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function DropdownTreeviewComponent_Template_ngx_treeview_selectedChange_5_listener($event) { return ctx.onSelectedChange($event); })("filterChange", function DropdownTreeviewComponent_Template_ngx_treeview_filterChange_5_listener($event) { return ctx.onFilterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("headerTemplate", ctx.headerTemplate)("items", ctx.items)("itemTemplate", ctx.itemTemplate);
    } }, directives: [DropdownDirective, DropdownToggleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], DropdownMenuDirective, TreeviewComponent], styles: [".dropdown[_ngcontent-%COMP%]{display:inline-block;width:100%}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.9rem;overflow:hidden;padding-right:30px;text-align:left;text-overflow:ellipsis;width:100%}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{margin-top:.6rem;position:absolute;right:.6rem}.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{padding:0 .6rem}"] });
DropdownTreeviewComponent.ctorParameters = () => [
    { type: TreeviewI18n },
    { type: TreeviewConfig }
];
DropdownTreeviewComponent.propDecorators = {
    buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    filterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeviewComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [TreeviewComponent, { static: false },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownTreeviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-dropdown-treeview',
                template: "<div class=\"dropdown\" ngxDropdown>\r\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\r\n    {{buttonLabel}}\r\n  </button>\r\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"dropdown-container\">\r\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\r\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\r\n      </ngx-treeview>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".dropdown{display:inline-block;width:100%}.dropdown button{margin-right:.9rem;overflow:hidden;padding-right:30px;text-align:left;text-overflow:ellipsis;width:100%}.dropdown button:after{margin-top:.6rem;position:absolute;right:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}"]
            }]
    }], function () { return [{ type: TreeviewI18n }, { type: TreeviewConfig }]; }, { buttonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeviewComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [TreeviewComponent, { static: false }]
        }] }); })();

class TreeviewItemComponent {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCollapseExpand = () => {
            this.item.collapsed = !this.item.collapsed;
        };
        this.onCheckedChange = () => {
            const checked = this.item.checked;
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.item.children) && !this.config.decoupleChildFromParent) {
                this.item.children.forEach(child => child.setCheckedRecursive(checked));
            }
            this.checkedChange.emit(checked);
        };
        this.config = this.defaultConfig;
    }
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
}
TreeviewItemComponent.ɵfac = function TreeviewItemComponent_Factory(t) { return new (t || TreeviewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeviewConfig)); };
TreeviewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeviewItemComponent, selectors: [["ngx-treeview-item"]], inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, decls: 1, vars: 1, consts: [["class", "treeview-item", 4, "ngIf"], [1, "treeview-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"]], template: function TreeviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeviewItemComponent_div_0_Template, 3, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], TreeviewItemComponent], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]{white-space:nowrap}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]   .treeview-item[_ngcontent-%COMP%]{margin-left:2rem}"] });
TreeviewItemComponent.ctorParameters = () => [
    { type: TreeviewConfig }
];
TreeviewItemComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-treeview-item',
                template: "<div *ngIf=\"item\" class=\"treeview-item\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"\r\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\r\n  </ng-template>\r\n  <div *ngIf=\"!item.collapsed\">\r\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\r\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}"]
            }]
    }], function () { return [{ type: TreeviewConfig }]; }, { checkedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class TreeviewPipe {
    transform(objects, textField) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(objects)) {
            return undefined;
        }
        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
}
TreeviewPipe.ɵfac = function TreeviewPipe_Factory(t) { return new (t || TreeviewPipe)(); };
TreeviewPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxTreeview", type: TreeviewPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ngxTreeview'
            }]
    }], null, null); })();

class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
TreeviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeviewModule });
TreeviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TreeviewModule_Factory(t) { return new (t || TreeviewModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeviewModule, { declarations: function () { return [TreeviewComponent, TreeviewItemComponent, TreeviewPipe, DropdownDirective, DropdownMenuDirective, DropdownToggleDirective, DropdownTreeviewComponent]; }, imports: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [TreeviewComponent, TreeviewPipe, DropdownTreeviewComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    TreeviewComponent,
                    TreeviewItemComponent,
                    TreeviewPipe,
                    DropdownDirective,
                    DropdownMenuDirective,
                    DropdownToggleDirective,
                    DropdownTreeviewComponent
                ], exports: [
                    TreeviewComponent,
                    TreeviewPipe,
                    DropdownTreeviewComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-treeview
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-treeview.js.map

/***/ })

}]);
//# sourceMappingURL=default~demo1-demo1-module~role-defination-role-defination-module.js.map