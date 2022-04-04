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
            debugger;
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
        ])], decls: 35, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["placeholder", "Select Role", 3, "ngClass", "ngModel", "options", "multiple", "ngModelChange"], [1, "col-sm"], [1, "form-group"], [3, "config", "items", "change", "selectedChange"], [1, "col-sm-1"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-md-12"], [1, "table", "row-border", "hover"], [4, "ngFor", "ngForOf"]], template: function RoleDefinationComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_treeview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/__ivy_ngcc__/fesm2015/ngx-treeview.js");














class RoleDefinationModule {
}
RoleDefinationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleDefinationModule });
RoleDefinationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleDefinationModule_Factory(t) { return new (t || RoleDefinationModule)(); }, providers: [_user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleDefinatioRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_treeview__WEBPACK_IMPORTED_MODULE_11__["TreeviewModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleDefinationModule, { declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_3__["RoleDefinationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleDefinatioRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_treeview__WEBPACK_IMPORTED_MODULE_11__["TreeviewModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
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
                    ngx_treeview__WEBPACK_IMPORTED_MODULE_11__["TreeviewModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
                ],
                declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_3__["RoleDefinationComponent"]],
                providers: [_user_defination_user_defination_service__WEBPACK_IMPORTED_MODULE_6__["UserDefinationService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
                        multi: true
                    },]
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
            text: 'Master', value: 1, checked: false, children: [
                {
                    text: 'General Ledger', value: 2, checked: false, children: [
                        { text: 'GL Statement Code', value: 3, checked: false, },
                        { text: 'GL Account Master', value: 4, checked: false, },
                        { text: 'GL Report Master', value: 5, checked: false, },
                        { text: 'GL Report Linking', value: 6, checked: false, },
                        { text: 'Budget Master', value: 7, checked: false, },
                    ]
                },
                {
                    text: 'Customer', value: 8, checked: false, children: [
                        { text: 'Customer Id', value: 9, checked: false, },
                        { text: 'Shares Master', value: 10, checked: false, },
                        { text: 'Anamat / General Sub Master', value: 11, checked: false, },
                        { text: 'Saving Master', value: 12, checked: false, },
                        { text: 'Current Account Master', value: 13, checked: false, },
                        { text: 'Term Deposits Master', value: 14, checked: false, },
                        { text: 'Cash Credit Master', value: 15, checked: false, },
                        { text: 'Term Loan Master', value: 16, checked: false, },
                        { text: 'Dispute Loan Master', value: 17, checked: false, },
                        { text: 'Pigmy Agent Master', value: 18, checked: false, },
                        { text: 'Pigmy Account Master', value: 19, checked: false, },
                        { text: 'Dead Stock Master', value: 20, checked: false, },
                    ]
                },
                {
                    text: 'Balance Entry', value: 21, checked: false, children: [
                        { text: 'Balance Updation', value: 22, checked: false, },
                        { text: 'Reconciliation Opening Transaction Entry', value: 23, checked: false, },
                        { text: 'Reconciliation Transaction Entry', value: 24, checked: false, },
                        { text: 'Loan Installment Edit and Close Date Updation', value: 25, checked: false, },
                    ]
                },
                {
                    text: 'Policy Settings', value: 26, checked: false, children: [
                        { text: 'Information', value: 27, checked: false, },
                        { text: 'Definations', value: 28, checked: false, },
                        { text: 'Sizewise Balance Modification', value: 29, checked: false, },
                        { text: 'TD Receipt Type Master', value: 30, checked: false, },
                        { text: 'NPA Classification Slab Master ', value: 31, checked: false, },
                    ]
                },
                {
                    text: 'Maintainance', value: 32, checked: false, children: [
                        { text: 'Security Details', value: 33, checked: false, },
                        { text: 'Loan And CC Interest Rate Changes', value: 34, checked: false, },
                        { text: 'Deposit / Loan Interest Rate Edit / Change', value: 35, checked: false, },
                        { text: 'NPA Opening Details Entry', value: 36, checked: false, },
                        { text: 'Interest Posting Flag Updation', value: 37, checked: false, },
                        { text: 'Accountwise Document Acceptance', value: 38, checked: false, },
                        { text: 'Noting Charges', value: 39, checked: false, },
                    ]
                },
                {
                    text: 'Instruction', value: 40, checked: false, children: [
                        { text: 'Over Draft', value: 41, checked: false, },
                        { text: 'Standing Instruction', value: 42, checked: false, },
                        { text: 'Interest Instruction', value: 43, checked: false, },
                        { text: 'Special', value: 44, checked: false, },
                        { text: 'Freeze Account', value: 45, checked: false, },
                        { text: 'Reminder Instruction', value: 46, checked: false, },
                        { text: 'Revoke Standing Instructions', value: 48, checked: false, },
                        { text: 'Revoke Interest Instruction', value: 49, checked: false, },
                        { text: 'Revoke Special Instruction', value: 50, checked: false, },
                        { text: 'Lien Mark Clear', value: 51, checked: false, },
                    ]
                },
                {
                    text: 'Investment', value: 52, checked: false, children: [
                        { text: 'Account Opening', value: 53, checked: false, },
                        { text: 'Transaction Entry', value: 54, checked: false, },
                        { text: 'Account Closing', value: 55, checked: false, },
                        { text: 'Account Open Passing', value: 56, checked: false, },
                        { text: 'Transaction Passing', value: 57, checked: false, },
                        { text: 'Account Close Passing', value: 58, checked: false, },
                    ]
                },
                {
                    text: 'Shares/Dividend', value: 59, checked: false, children: [
                        { text: 'Unpaid Dividend Entry', value: 60, checked: false, },
                        { text: 'Year Wise Unpaid Dividend Entry', value: 61, checked: false, },
                        { text: 'Dividend Transfer Entry', value: 62, checked: false, },
                        { text: 'Dividend Transfer Posting', value: 63, checked: false, },
                        { text: 'Dividend Calculation', value: 64, checked: false, },
                        { text: 'Dividend Posting', value: 65, checked: false, },
                    ]
                },
                {
                    text: 'SignatureScanning', value: 66, checked: false,
                },
                {
                    text: 'DDBankCityMaster', value: 67, checked: false,
                },
            ]
        });
        const transactionMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Transaction', value: 68, checked: false, children: [
                {
                    text: 'Voucher Entry', value: 69, checked: false,
                },
                {
                    text: 'Multi Voucher', value: 70, checked: false,
                },
                {
                    text: 'Batch Transfer Voucher', value: 71, checked: false,
                },
                {
                    text: 'Member Dividend And Payable Dividend Transaction', value: 72, checked: false,
                },
                {
                    text: 'Member Transfer', value: 73, checked: false, children: [
                        { text: 'Member Transfer Transaction', value: 74, checked: false, },
                        { text: 'Branch And Salary Division Changes', value: 75, checked: false, },
                        { text: 'Trasferred Member Opening Balances', value: 76, checked: false, },
                    ]
                },
                {
                    text: 'Recovery', value: 77, checked: false, children: [
                        { text: 'Recovery Processing', value: 78, checked: false, },
                        { text: 'Recovery Modification', value: 79, checked: false, },
                        { text: 'Recovery Posting', value: 80, checked: false, },
                        { text: 'Recovery Data Import Export', value: 81, checked: false, },
                    ]
                },
                {
                    text: 'Member Loan', value: 82, checked: false, children: [
                        { text: 'Loan Application', value: 83, checked: false, },
                        { text: 'Loan Sanction', value: 84, checked: false, },
                    ]
                },
                {
                    text: 'DD Transaction', value: 85, checked: false,
                },
                {
                    text: 'Pigmy Chart Entry', value: 86, checked: false,
                },
                {
                    text: 'Dividend Pay', value: 87, checked: false, children: [
                        { text: 'Dividend Paid Mark(Salary Division)', value: 88, checked: false },
                        { text: 'Dividend Pay(Salary Division)', value: 89, checked: false },
                    ]
                },
                {
                    text: 'Cash Credit A/c Renewal', value: 90, checked: false,
                },
                {
                    text: 'Share Transaction', value: 91, checked: false,
                },
                {
                    text: 'Term Deposit Account Closing', value: 92, checked: false,
                },
                {
                    text: 'Term Deposite A/c Renewal', value: 93, checked: false,
                },
                {
                    text: 'Cash Denomination', value: 94, checked: false, children: [
                        { text: 'Accept Denomination', value: 95, checked: false, },
                        { text: 'Payment Denomination', value: 96, checked: false, },
                        { text: 'Cash In Denomination', value: 97, checked: false, },
                        { text: 'Cash Out Denomination', value: 98, checked: false, },
                        { text: 'cash Initialisation Entry', value: 100, checked: false, },
                        { text: 'Safe Valult To Cashier', value: 101, checked: false, },
                        { text: 'Cashier To Safe Vault', value: 102, checked: false, },
                    ]
                },
                {
                    text: 'Passbook Printing', value: 103, children: [
                        { text: 'Passbook Issue', value: 104, checked: false, },
                        { text: 'Passbook Entry Print', value: 105, checked: false, },
                    ]
                },
                {
                    text: 'Term Deposit Receipt Printing', value: 106, children: [
                        { text: 'Deposit Receipt Print', value: 107, checked: false, },
                    ]
                },
                {
                    text: 'Dead Stock Purchase', value: 108, checked: false,
                },
                {
                    text: 'Dead Stock Transaction', value: 109, checked: false,
                },
                {
                    text: 'Reconciliation Entry', value: 110, checked: false,
                },
            ]
        });
        const passingMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Passing', value: 111, checked: false, children: [
                {
                    text: 'Centralised Passing', value: 112, checked: false, children: []
                },
                {
                    text: 'Shares Transaction Passing', value: 113, checked: false, children: []
                },
                {
                    text: 'Unapproval', value: 114, checked: false, children: [
                        { text: 'Unapproval Multivoucher', value: 115, checked: false, },
                        { text: 'Unapproval Voucher', value: 116, checked: false, },
                        { text: 'Unapproval Deposit Closing', value: 117, checked: false, },
                        { text: 'Unapproval Deposit Posting', value: 118, checked: false, },
                    ]
                },
                {
                    text: 'Master Unlock', value: 119, checked: false, children: []
                },
            ]
        });
        const viewMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'View', value: 120, checked: false, children: [
                {
                    text: 'Account Enquiry', value: 121, checked: false,
                },
                {
                    text: 'Ledger View', value: 122, checked: false,
                },
                {
                    text: 'Shares Ledger View', value: 123, checked: false,
                },
                {
                    text: 'Voucher View', value: 124, checked: false,
                },
                {
                    text: 'Customer View', value: 125, checked: false,
                },
                {
                    text: 'Guarantor View', value: 126, checked: false,
                },
                {
                    text: 'Member View', value: 127, checked: false,
                },
                {
                    text: 'Member Liablity View', value: 128, checked: false,
                },
                {
                    text: 'Other View', value: 129, checked: false,
                },
            ]
        });
        const reportMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Reports', value: 130, checked: false, children: [
                {
                    text: 'All Reports With Searching', value: 131, checked: false,
                },
                {
                    text: 'Daily Reports', value: 132, checked: false,
                },
                {
                    text: 'Statement', value: 133, checked: false,
                },
                {
                    text: 'Balance Book', value: 134, checked: false,
                },
                {
                    text: 'Registers', value: 135, checked: false,
                },
                {
                    text: 'Denomination Reports', value: 136, checked: false,
                },
                {
                    text: 'Term Deposit Reports', value: 137, checked: false,
                },
                {
                    text: 'Loan Reports', value: 138, checked: false,
                },
                {
                    text: 'NPA Reports', value: 139, checked: false,
                },
                {
                    text: 'Shares ARR', value: 140, checked: false,
                },
                {
                    text: 'Shares ADR', value: 142, checked: false,
                },
                {
                    text: 'Notice', value: 143, checked: false,
                },
                {
                    text: 'Other Reports', value: 144, checked: false,
                },
                {
                    text: 'MIS Reports', value: 145, checked: false,
                },
                {
                    text: 'Final Reports', value: 146, checked: false,
                },
            ]
        });
        const utilityMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Utility', value: 148, checked: false, children: [
                {
                    text: 'Day Begin', value: 149, checked: false,
                },
                {
                    text: 'Day End', value: 150, checked: false, children: [
                        { text: 'counter Work Day End', value: 151, checked: false, },
                        { text: 'pigmy Day End', value: 152, checked: false, }
                    ]
                },
                {
                    text: 'Back Dated Day Open', value: 153, checked: false,
                },
                {
                    text: 'Receipt Printing Designing', value: 154, checked: false,
                },
                {
                    text: 'Holiday', value: 155, checked: false,
                },
                {
                    text: 'Interest Posting', value: 156, checked: false, children: [
                        { text: 'Interest Calculation', value: 157, checked: false, },
                        { text: 'Interest List', value: 158, checked: false, },
                        { text: 'Interest Passing', value: 159, checked: false, }
                    ]
                },
                {
                    text: 'Process And Calculation Menu', value: 160, checked: false,
                },
                {
                    text: 'Dead Stock Process', value: 161, checked: false,
                },
                {
                    text: 'Dividend', value: 162, checked: false, children: [
                        { text: 'Dividend List', value: 163, checked: false, },
                        { text: 'Dividend Post', value: 164, checked: false, }
                    ]
                },
                {
                    text: 'Statement Head Insert', value: 165, checked: false,
                },
                {
                    text: 'Change Password', value: 166, checked: false,
                },
                {
                    text: 'Role Defination', value: 167, checked: false,
                },
                {
                    text: 'User Defination', value: 168, checked: false,
                },
                {
                    text: 'Cashier User Maintainance', value: 169, checked: false,
                },
                {
                    text: 'Shares Contribution Credit To Shares', value: 170, checked: false,
                },
                {
                    text: 'Silver Jubilee Amount Credit To Shares', value: 171, checked: false,
                },
                {
                    text: 'Masik Bachat Deposit Withdrawl', value: 172, checked: false,
                },
                {
                    text: 'Scheme Amount Transfer Entry', value: 173, checked: false,
                },
                {
                    text: 'Scheme Parameters', value: 174, checked: false,
                },
                {
                    text: 'Calculator', value: 175, checked: false,
                },
                {
                    text: 'Remind Me', value: 176, checked: false,
                },
                {
                    text: 'Data Backup', value: 177, checked: false,
                },
                {
                    text: 'PataSeva Support Register', value: 178, checked: false,
                },
                {
                    text: 'Sheres Data Export / Import', value: 179, checked: false,
                },
                {
                    text: 'Daybook Import / Export', value: 180, checked: false,
                },
                {
                    text: 'Demand Draft Data Export/ Import', value: 181, checked: false,
                },
            ]
        });
        const windowMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Windows', value: 182, checked: false, children: [
                {
                    text: 'CaseCade', value: 183, checked: false,
                },
                {
                    text: 'Tile Horizontaily', value: 184, checked: false,
                },
                {
                    text: 'Tile Vertically', value: 185, checked: false,
                },
            ]
        });
        const hotkeysMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'Hot Key', value: 186, checked: false,
        });
        const exitMenu = new ngx_treeview__WEBPACK_IMPORTED_MODULE_1__["TreeviewItem"]({
            text: 'exit', value: 187, checked: false,
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