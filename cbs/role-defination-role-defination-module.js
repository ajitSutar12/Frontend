(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-defination-role-defination-module"],{

/***/ "./src/app/theme/utility/role-defination/role-defination-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RoleDefinatioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinatioRoutingModule", function() { return RoleDefinatioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _role_defination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-defination.component */ "./src/app/theme/utility/role-defination/role-defination.component.ts");





const routes = [
    {
        path: '',
        component: _role_defination_component__WEBPACK_IMPORTED_MODULE_2__["RoleDefinationComponent"],
        data: {
            title: 'Role Defination',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class RoleDefinatioRoutingModule {
}
RoleDefinatioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleDefinatioRoutingModule });
RoleDefinatioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleDefinatioRoutingModule_Factory(t) { return new (t || RoleDefinatioRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleDefinatioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinatioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/role-defination/role-defination.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination.component.ts ***!
  \****************************************************************************/
/*! exports provided: RoleDefinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinationComponent", function() { return RoleDefinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _role_defination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-defination.service */ "./src/app/theme/utility/role-defination/role-defination.service.ts");
/* harmony import */ var _user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-defination/user-defination.service */ "./src/app/theme/utility/user-defination/user-defination.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function RoleDefinationComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Role.NAME);
} }
class RoleDefinationComponent {
    constructor(_service, _roleServices) {
        this._service = _service;
        this._roleServices = _roleServices;
        this.dropdownEnabled = true;
        this.config = ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewConfig"].create({
            hasAllCheckBox: true,
            hasFilter: true,
            hasCollapseExpand: true,
            decoupleChildFromParent: false,
            maxHeight: 400
        });
        this.selectedValues = new Array();
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buttonClasses = [
            'btn-outline-primary',
            'btn-outline-secondary',
            'btn-outline-success',
            'btn-outline-danger',
            'btn-outline-warning',
            'btn-outline-info',
            'btn-outline-light',
            'btn-outline-dark'
        ];
        this.buttonClass = this.buttonClasses[0];
        this._roleServices.getRoleList().subscribe(data => {
            this.ROLE = data;
        });
        this._service.getRoleMenuList().subscribe(data => {
            this.RoleResult = data;
            console.log(this.RoleResult);
            this.dtTrigger.next();
        }, err => {
            console.log('Something is wrong');
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2
        };
        this.items = this._service.getBooks();
        this._service.getRoleList().subscribe(data => {
            this.RoleData = data;
        });
    }
    onFilterChange(value) {
        debugger;
        // console.log(value);
    }
    onSelectedChange(downlineItems) {
        this.rows = [];
        let parent1 = new Array();
        let child = [];
        downlineItems.forEach(downlineItem => {
            const item = downlineItem.item;
            const value = item.value;
            parent1.push(item.value);
            const texts = [item.text];
            let parent = downlineItem.parent;
            while (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"])(parent)) {
                texts.push(parent.item.text);
                parent1.push(parent.item.value);
                parent = parent.parent;
            }
            const reverseTexts = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["reverse"])(texts);
            const row = `${reverseTexts.join(' -> ')} : ${value}`;
            this.rows.push(row);
            // console.log(this.rows);
        });
        this.selectedValues = parent1;
    }
    //Submit Role menu Details
    submit() {
        let uniqueChars = [];
        this.selectedValues.forEach((c) => {
            if (!uniqueChars.includes(c)) {
                uniqueChars.push(c);
            }
        });
        console.log(uniqueChars);
        if (this.roleID != '' && this.selectedValues.length != 0) {
            let roleObject = {
                "roleID": this.selectedRole,
                "Menus": uniqueChars.toString()
            };
            console.log(roleObject);
            this._service.addNewRoleHasPermission(roleObject).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success!', 'Data Added Successfully !', 'success');
            }, err => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error!', 'This Role Already Exists !', 'error');
            });
        }
        else {
            alert('please select All requied data');
        }
    }
}
RoleDefinationComponent.ɵfac = function RoleDefinationComponent_Factory(t) { return new (t || RoleDefinationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_role_defination_service__WEBPACK_IMPORTED_MODULE_5__["RoleDefinationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"])); };
RoleDefinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleDefinationComponent, selectors: [["app-role-defination"]], viewQuery: function RoleDefinationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeviewComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewEventParser"], useClass: ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["OrderDownlineTreeviewEventParser"] },
        ])], decls: 35, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["placeholder", "Select Role", 3, "ngClass", "ngModel", "options", "multiple", "ngModelChange"], [1, "col-sm"], [1, "form-group"], [3, "config", "items", "change", "selectedChange"], [1, "col-sm-1"], [1, "btn", "btn-info", 3, "click"], [1, "col-md-12"], [1, "table", "row-border", "hover"], [4, "ngFor", "ngForOf"]], template: function RoleDefinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Role Wise Menu Assign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ng-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoleDefinationComponent_Template_ng_select_ngModelChange_10_listener($event) { return ctx.selectedRole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngx-treeview", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("items", function RoleDefinationComponent_Template_ngx_treeview_items_14_listener($event) { return ctx.values = $event; })("change", function RoleDefinationComponent_Template_ngx_treeview_change_14_listener($event) { return ctx.onFilterChange($event); })("selectedChange", function RoleDefinationComponent_Template_ngx_treeview_selectedChange_14_listener($event) { return ctx.onSelectedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleDefinationComponent_Template_button_click_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Role List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RoleDefinationComponent_tr_34_Template, 5, 2, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("ngModel", ctx.selectedRole)("options", ctx.ROLE)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("items", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.RoleResult);
    } }, directives: [ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yb2xlLWRlZmluYXRpb24vcm9sZS1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yb2xlLWRlZmluYXRpb24vcm9sZS1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-defination',
                templateUrl: './role-defination.component.html',
                styleUrls: ['./role-defination.component.scss'],
                providers: [
                    { provide: ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewEventParser"], useClass: ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["OrderDownlineTreeviewEventParser"] },
                ]
            }]
    }], function () { return [{ type: _role_defination_service__WEBPACK_IMPORTED_MODULE_5__["RoleDefinationService"] }, { type: _user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"] }]; }, { treeviewComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/utility/role-defination/role-defination.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination.module.ts ***!
  \*************************************************************************/
/*! exports provided: RoleDefinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinationModule", function() { return RoleDefinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _role_defination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-defination.component */ "./src/app/theme/utility/role-defination/role-defination.component.ts");
/* harmony import */ var _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-defination-routing.module */ "./src/app/theme/utility/role-defination/role-defination-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-defination/user-defination.service */ "./src/app/theme/utility/user-defination/user-defination.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");












class RoleDefinationModule {
}
RoleDefinationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleDefinationModule });
RoleDefinationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleDefinationModule_Factory(t) { return new (t || RoleDefinationModule)(); }, providers: [_user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleDefinatioRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_treeview__WEBPACK_IMPORTED_MODULE_9__["TreeviewModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleDefinationModule, { declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_3__["RoleDefinationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleDefinatioRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_treeview__WEBPACK_IMPORTED_MODULE_9__["TreeviewModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleDefinatioRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ngx_treeview__WEBPACK_IMPORTED_MODULE_9__["TreeviewModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
                ],
                declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_3__["RoleDefinationComponent"]],
                providers: [_user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/role-defination/role-defination.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination.service.ts ***!
  \**************************************************************************/
/*! exports provided: RoleDefinationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinationService", function() { return RoleDefinationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class RoleDefinationService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    getRoleList() {
        return this.http.post(this.url + '/user-defination/roles', {}).pipe();
    }
    addNewRoleHasPermission(data) {
        return this.http.post(this.url + '/user-defination/insert_role_permission', data).pipe();
    }
    getRoleMenuList() {
        return this.http.post(this.url + '/user-defination/RoleMenuList', {}).pipe();
    }
    getBooks() {
        const masterMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Master', value: 1, children: [
                {
                    text: 'General Ledger', value: 2, children: [
                        { text: 'GL Statement Code', value: 3 },
                        { text: 'GL Account Master', value: 4 },
                        { text: 'GL Report Master', value: 5 },
                        { text: 'GL Report Linking', value: 6 },
                        { text: 'Budget Master', value: 7 },
                    ]
                },
                {
                    text: 'Customer', value: 8, children: [
                        { text: 'Customer Id', value: 9 },
                        { text: 'Shares Master', value: 10 },
                        { text: 'Anamat / General Sub Master', value: 11 },
                        { text: 'Saving Master', value: 12 },
                        { text: 'Current Account Master', value: 13 },
                        { text: 'Term Deposits Master', value: 14 },
                        { text: 'Cash Credit Master', value: 15 },
                        { text: 'Term Loan Master', value: 16 },
                        { text: 'Dispute Loan Master', value: 17 },
                        { text: 'Pigmy Agent Master', value: 18 },
                        { text: 'Pigmy Account Master', value: 19 },
                        { text: 'Dead Stock Master', value: 20 },
                    ]
                },
                {
                    text: 'Balance Entry', value: 21, children: [
                        { text: 'Balance Updation', value: 22 },
                        { text: 'Reconciliation Opening Transaction Entry', value: 23 },
                        { text: 'Reconciliation Transaction Entry', value: 24 },
                        { text: 'Loan Installment Edit and Close Date Updation', value: 25 },
                    ]
                },
                {
                    text: 'Policy Settings', value: 26, children: [
                        { text: 'Information', value: 27 },
                        { text: 'Definations', value: 28 },
                        { text: 'Sizewise Balance Modification', value: 29 },
                        { text: 'TD Receipt Type Master', value: 30 },
                        { text: 'NPA Classification Slab Master ', value: 31 },
                    ]
                },
                {
                    text: 'Maintainance', value: 32, children: [
                        { text: 'Security Details', value: 33 },
                        { text: 'Loan And CC Interest Rate Changes', value: 34 },
                        { text: 'Deposit / Loan Interest Rate Edit / Change', value: 35 },
                        { text: 'NPA Opening Details Entry', value: 36 },
                        { text: 'Interest Posting Flag Updation', value: 37 },
                        { text: 'Accountwise Document Acceptance', value: 38 },
                        { text: 'Noting Charges', value: 39 },
                    ]
                },
                {
                    text: 'Instruction', value: 40, children: [
                        { text: 'Over Draft', value: 41 },
                        { text: 'Standing Instruction', value: 42 },
                        { text: 'Interest Instruction', value: 43 },
                        { text: 'Special', value: 44 },
                        { text: 'Freeze Account', value: 45 },
                        { text: 'Reminder Instruction', value: 46 },
                        { text: 'Revoke Standing Instructions', value: 48 },
                        { text: 'Revoke Interest Instruction', value: 49 },
                        { text: 'Revoke Special Instruction', value: 50 },
                        { text: 'Lien Mark Clear', value: 51 },
                    ]
                },
                {
                    text: 'Investment', value: 52, children: [
                        { text: 'Account Opening', value: 53 },
                        { text: 'Transaction Entry', value: 54 },
                        { text: 'Account Closing', value: 55 },
                        { text: 'Account Open Passing', value: 56 },
                        { text: 'Transaction Passing', value: 57 },
                        { text: 'Account Close Passing', value: 58 },
                    ]
                },
                {
                    text: 'Shares/Dividend', value: 59, children: [
                        { text: 'Unpaid Dividend Entry', value: 60 },
                        { text: 'Year Wise Unpaid Dividend Entry', value: 61 },
                        { text: 'Dividend Transfer Entry', value: 62 },
                        { text: 'Dividend Transfer Posting', value: 63 },
                        { text: 'Dividend Calculation', value: 64 },
                        { text: 'Dividend Posting', value: 65 },
                    ]
                },
                {
                    text: 'SignatureScanning', value: 66
                },
                {
                    text: 'DDBankCityMaster', value: 67
                },
            ]
        });
        const transactionMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Transaction', value: 68, children: [
                {
                    text: 'Voucher Entry', value: 69
                },
                {
                    text: 'Multi Voucher', value: 70
                },
                {
                    text: 'Batch Transfer Voucher', value: 71
                },
                {
                    text: 'Member Dividend And Payable Dividend Transaction', value: 72
                },
                {
                    text: 'Member Transfer', value: 73, children: [
                        { text: 'Member Transfer Transaction', value: 74 },
                        { text: 'Branch And Salary Division Changes', value: 75 },
                        { text: 'Trasferred Member Opening Balances', value: 76 },
                    ]
                },
                {
                    text: 'Recovery', value: 77, children: [
                        { text: 'Recovery Processing', value: 78 },
                        { text: 'Recovery Modification', value: 79 },
                        { text: 'Recovery Posting', value: 80 },
                        { text: 'Recovery Data Import Export', value: 81 },
                    ]
                },
                {
                    text: 'Member Loan', value: 82, children: [
                        { text: 'Loan Application', value: 83 },
                        { text: 'Loan Sanction', value: 84 },
                    ]
                },
                {
                    text: 'DD Transaction', value: 85
                },
                {
                    text: 'Pigmy Chart Entry', value: 86
                },
                {
                    text: 'Dividend Pay', value: 87, children: [
                        { text: 'Dividend Paid Mark(Salary Division)', value: 88 },
                        { text: 'Dividend Pay(Salary Division)', value: 89 },
                    ]
                },
                {
                    text: 'Cash Credit A/c Renewal', value: 90
                },
                {
                    text: 'Share Transaction', value: 91
                },
                {
                    text: 'Term Deposit Account Closing', value: 92
                },
                {
                    text: 'Term Deposite A/c Renewal', value: 93
                },
                {
                    text: 'Cash Denomination', value: 94, children: [
                        { text: 'Accept Denomination', value: 95 },
                        { text: 'Payment Denomination', value: 96 },
                        { text: 'Cash In Denomination', value: 97 },
                        { text: 'Cash Out Denomination', value: 98 },
                        { text: 'cash Initialisation Entry', value: 100 },
                        { text: 'Safe Valult To Cashier', value: 101 },
                        { text: 'Cashier To Safe Vault', value: 102 },
                    ]
                },
                {
                    text: 'Passbook Printing', value: 103, children: [
                        { text: 'Passbook Issue', value: 104 },
                        { text: 'Passbook Entry Print', value: 105 },
                    ]
                },
                {
                    text: 'Term Deposit Receipt Printing', value: 106, children: [
                        { text: 'Deposit Receipt Print', value: 107 },
                    ]
                },
                {
                    text: 'Dead Stock Purchase', value: 108
                },
                {
                    text: 'Dead Stock Transaction', value: 109
                },
                {
                    text: 'Reconciliation Entry', value: 110
                },
            ]
        });
        const passingMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Passing', value: 111, children: [
                {
                    text: 'Centralised Passing', value: 112, children: []
                },
                {
                    text: 'Shares Transaction Passing', value: 113, children: []
                },
                {
                    text: 'Unapproval', value: 114, children: [
                        { text: 'Unapproval Multivoucher', value: 115 },
                        { text: 'Unapproval Voucher', value: 116 },
                        { text: 'Unapproval Deposit Closing', value: 117 },
                        { text: 'Unapproval Deposit Posting', value: 118 },
                    ]
                },
                {
                    text: 'Master Unlock', value: 119, children: []
                },
            ]
        });
        const viewMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'View', value: 120, children: [
                {
                    text: 'Account Enquiry', value: 121
                },
                {
                    text: 'Ledger View', value: 122
                },
                {
                    text: 'Shares Ledger View', value: 123
                },
                {
                    text: 'Voucher View', value: 124
                },
                {
                    text: 'Customer View', value: 125
                },
                {
                    text: 'Guarantor View', value: 126
                },
                {
                    text: 'Member View', value: 127
                },
                {
                    text: 'Member Liablity View', value: 128
                },
                {
                    text: 'Other View', value: 129
                },
            ]
        });
        const reportMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Reports', value: 130, children: [
                {
                    text: 'All Reports With Searching', value: 131
                },
                {
                    text: 'Daily Reports', value: 132
                },
                {
                    text: 'Statement', value: 133
                },
                {
                    text: 'Balance Book', value: 134
                },
                {
                    text: 'Registers', value: 135
                },
                {
                    text: 'Denomination Reports', value: 136
                },
                {
                    text: 'Term Deposit Reports', value: 137
                },
                {
                    text: 'Loan Reports', value: 138
                },
                {
                    text: 'NPA Reports', value: 139
                },
                {
                    text: 'Shares ARR', value: 140
                },
                {
                    text: 'Shares ADR', value: 142
                },
                {
                    text: 'Notice', value: 143
                },
                {
                    text: 'Other Reports', value: 144
                },
                {
                    text: 'MIS Reports', value: 145
                },
                {
                    text: 'Final Reports', value: 146
                },
            ]
        });
        const utilityMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Utility', value: 148, children: [
                {
                    text: 'Day Begin', value: 149
                },
                {
                    text: 'Day End', value: 150, children: [
                        { text: 'counter Work Day End', value: 151 },
                        { text: 'pigmy Day End', value: 152 }
                    ]
                },
                {
                    text: 'Back Dated Day Open', value: 153
                },
                {
                    text: 'Receipt Printing Designing', value: 154
                },
                {
                    text: 'Holiday', value: 155
                },
                {
                    text: 'Interest Posting', value: 156, children: [
                        { text: 'Interest Calculation', value: 157 },
                        { text: 'Interest List', value: 158 },
                        { text: 'Interest Passing', value: 159 }
                    ]
                },
                {
                    text: 'Process And Calculation Menu', value: 160
                },
                {
                    text: 'Dead Stock Process', value: 161
                },
                {
                    text: 'Dividend', value: 162, children: [
                        { text: 'Dividend List', value: 163 },
                        { text: 'Dividend Post', value: 164 }
                    ]
                },
                {
                    text: 'Statement Head Insert', value: 165
                },
                {
                    text: 'Change Password', value: 166
                },
                {
                    text: 'Role Defination', value: 167
                },
                {
                    text: 'User Defination', value: 168
                },
                {
                    text: 'Cashier User Maintainance', value: 169
                },
                {
                    text: 'Shares Contribution Credit To Shares', value: 170
                },
                {
                    text: 'Silver Jubilee Amount Credit To Shares', value: 171
                },
                {
                    text: 'Masik Bachat Deposit Withdrawl', value: 172
                },
                {
                    text: 'Scheme Amount Transfer Entry', value: 173
                },
                {
                    text: 'Scheme Parameters', value: 174
                },
                {
                    text: 'Calculator', value: 175
                },
                {
                    text: 'Remind Me', value: 176
                },
                {
                    text: 'Data Backup', value: 177
                },
                {
                    text: 'PataSeva Support Register', value: 178
                },
                {
                    text: 'Sheres Data Export / Import', value: 179
                },
                {
                    text: 'Daybook Import / Export', value: 180
                },
                {
                    text: 'Demand Draft Data Export/ Import', value: 181
                },
            ]
        });
        const windowMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Windows', value: 182, children: [
                {
                    text: 'CaseCade', value: 183
                },
                {
                    text: 'Tile Horizontaily', value: 184
                },
                {
                    text: 'Tile Vertically', value: 185
                },
            ]
        });
        const hotkeysMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Hot Key', value: 186
        });
        const exitMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'exit', value: 187
        });
        return [
            masterMenu,
            transactionMenu,
            passingMenu,
            viewMenu,
            reportMenu,
            utilityMenu,
            windowMenu,
            hotkeysMenu,
            exitMenu
        ];
    }
}
RoleDefinationService.ɵfac = function RoleDefinationService_Factory(t) { return new (t || RoleDefinationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RoleDefinationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleDefinationService, factory: RoleDefinationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=role-defination-role-defination-module.js.map