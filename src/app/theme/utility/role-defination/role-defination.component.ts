import { Component, OnInit, ViewChild } from '@angular/core';
import {
  TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
  TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem
} from 'ngx-treeview'; import { RoleDefinationService } from './role-defination.service';
import { isNil, remove, reverse } from 'lodash';
import { UserDefinationService } from '../user-defination/user-defination.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MenuItems } from '../../../shared/menu-items/menu-items'
@Component({
  selector: 'app-role-defination',
  templateUrl: './role-defination.component.html',
  styleUrls: ['./role-defination.component.scss'],
  providers: [
    { provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser },
  ]
})
export class RoleDefinationComponent implements OnInit {
  @ViewChild(TreeviewComponent, { static: false }) treeviewComponent: TreeviewComponent;
  // Created Form Group
  angForm: FormGroup;

  rows: string[];
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  RoleData: any;
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  selectedRole: any;
  selectedValues = new Array();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];
  roleID: string;
  ROLE: any;
  RoleResult: any;
  constructor(private menuItems: MenuItems, private _service: RoleDefinationService, private _roleServices: UserDefinationService, private fb: FormBuilder,) {


    this._service.getRoleMenuList().subscribe(data => {
      this.RoleResult = data;
      console.log(this.RoleResult)
      this.dtTrigger.next()
    }, err => {
      console.log('Something is wrong');
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this._roleServices.getRoleList().subscribe(data => {
      debugger
      this.ROLE = data;
    });
    this.items = this._service.getBooks();
    this._service.getRoleList().subscribe(data => {
      this.RoleData = data;
    })
    let list = this.menuSelection()
    console.log(list, 'menu check')
  }
  onFilterChange(value: string): void {

    // console.log(value);
  }

  onSelectedChange(downlineItems: DownlineTreeviewItem[]): void {
    this.rows = [];
    let parent1 = new Array();
    let child = [];

    downlineItems.forEach(downlineItem => {
      const item = downlineItem.item;
      const value = item.value;
      parent1.push(item.value);
      const texts = [item.text];
      let parent = downlineItem.parent;
      while (!isNil(parent)) {
        texts.push(parent.item.text);
        parent1.push(parent.item.value);
        parent = parent.parent;
      }
      const reverseTexts = reverse(texts);
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
      }
      console.log(roleObject);
      this._service.addNewRoleHasPermission(roleObject).subscribe(data => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
      }, err => {
        Swal.fire('Oops!', 'This Role Already Exists !', 'error');
      })
    } else {
      alert('please select All requied data')
    }
  }
  updateid
  editClickHandler(id) {
    this.addButton = false
    this.updateButton = true
    this.cancelButton = true
    let newtree = this._service.getBooks();
    this._service.getFormData(id).subscribe(data => {
      //
      this.updateid = data.id

      this.selectedRole = data.roleID
      let menu = data.Menus.toString().split(",");
      let x: any
      let y: any
      let z: any

      for (x = 0; x < newtree.length; x++) {
        if (newtree[x].children != undefined) {
          if (menu.find(data1 => data1 == newtree[x].value)) {
            newtree[x].checked = true
            for (y = 0; y < newtree[x]['internalChildren'].length; y++) {
              if (menu.find(data1 => data1 == newtree[x]['internalChildren'][y].value)) {
                newtree[x]['internalChildren'][y].checked = true
                for (z = 0; z < newtree[y]['internalChildren'].length; z++) {
                  if (menu.find(data1 => data1 == newtree[x]['internalChildren'][y]['internalChildren'][z]?.value)) {
                    console.log(newtree[x]['internalChildren'][y]['internalChildren'][z]?.value, 'value z')
                    newtree[x]['internalChildren'][y]['internalChildren'][z].checked = true
                  }
                }
              }
            }
          }
        } else {
          if (menu.find(data1 => data1 == newtree[x].value)) {
            newtree[x].checked = true
          }
        }
      }
      this.items = newtree
    })

  }
  addButton: boolean = true
  updateButton: boolean = false
  cancelButton: boolean = false
  cancel() {
    this.angForm.reset();
    this.addButton = true
    this.updateButton = false
    this.cancelButton = false
  }

  update() {
    this.addButton = true
    this.updateButton = false
    this.cancelButton = false
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let uniqueChars = [];
    this.selectedValues.forEach((c) => {
      if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
      }
    });
    if (this.roleID != '' && this.selectedValues.length != 0) {
      let roleObject = {
        "id": this.updateid,
        "roleID": this.selectedRole,
        "Menus": uniqueChars.toString(),

      }
      this._service.updateNewRoleHasPermission(roleObject).subscribe(data => {
        Swal.fire('Success!', 'Data Update Successfully !', 'success');
        this.angForm.reset();
      }, err => {
        Swal.fire('Error!', 'This Role Already Exists !', 'error');
        this.angForm.reset();
      })
    } else {
      alert('please select All requied data')
    }
  }

  createForm() {

    this.angForm = this.fb.group({

      ROLE: ['', [Validators.required]]

    });
  }

  meunItemList
  menuItem
  menuSelection() {
    //Menu item filter as per user role
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let menuData: string = '';
    result.RoleDefine.forEach(ele => {
      if (menuData == '') {
        menuData = ele.Role.Rolehaspermission.Menus
      } else {
        menuData = menuData + ',' + ele.Role.Rolehaspermission.Menus
      }
    })
    let arrayList1 = menuData.split(',');
    var arrayList = arrayList1.map(function (x) {
      return parseInt(x, 10);
    });
    arrayList.sort(function (a, b) { return b - a });
    let menuItemList = this.menuItems.getAll();
    this.meunItemList = menuItemList[0].main;
    // var meunItemList = menuItemList[0].main;
    this.meunItemList.forEach(function (element, index) {
      // this.menuItemList[index]['class'] = "disableflag"
      if (arrayList.includes(element.id)) {
        element.checked = true
        element.value = element.id
        if (element.children.length != 0 && element.children != undefined) {
          element.children.forEach(function (ele, index1) {
            if (arrayList.includes(ele.id)) {
              element.checked = true
              element.value = element.id
              if (ele.children.length != 0 && ele.children != undefined) {
                ele.children.forEach(function (ele1, index2) {
                  if (arrayList.includes(ele1.id)) {
                    element.checked = true
                    element.value = element.id
                  } else {
                    element.checked = false
                    element.value = element.id
                  }
                });
              }
            } else {
              element.checked = false
              element.value = element.id
            }
          });
        }
      } else {
        element.checked = false
        element.value = element.id
      }
    });
    this.menuItem = menuItemList;
    console.log(this.menuItem, 'menuitem')
    return this.menuItem
  }
}
