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
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';

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
  // items: TreeviewItem[];
  items
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
  public checkedItems: any[] = [];
  constructor(private menuItems: MenuItems, private _service: RoleDefinationService, private _roleServices: UserDefinationService,private systemParameter: SystemMasterParametersService,
    private translate:TranslateService,
     private fb: FormBuilder,) {
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this._roleServices.getRoleList().subscribe(data => {
      this.RoleData = data;
    });
    this._service.getRoleMenuList().subscribe(data => {
      this.RoleResult = data;
      this.dtTrigger.next()
    }, err => {
      console.log('Something is wrong');
    })
    // this.items = this._service.getBooks();
    let menuItemList = this.menuItems.getMenu();
    let list = menuItemList
    list.forEach(function (element) {
      element['checked'] = false
      element['text'] = element.name
      element['value'] = element['id']
      if (element?.children?.length != 0 && element?.children != undefined) {
        element?.children?.forEach(function (ele, index1) {
          ele['checked'] = false
          ele['text'] = ele.name
          ele['value'] = ele['id']
          if (ele?.children?.length != 0 && ele?.children != undefined) {
            ele?.children?.forEach(function (ele1, index2) {
              ele1['checked'] = false
              ele1['text'] = ele1.name
              ele1['value'] = ele1['id']
            });
          }
        });
      }
    });
    let items = this.getItems(list);
    this.items = items
  }

  getItems(parentChildObj) {
    let itemsArray = [];
    parentChildObj.forEach(set => {
      itemsArray.push(new TreeviewItem(set))
    });
    return itemsArray;
  }

  onFilterChange(value: string): void {
    // console.log(value);
  }

  onSelectedChange(downlineItems: DownlineTreeviewItem[]): void {
    this.rows = [];
    let parent1 = new Array();
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
    if (this.roleID != '' && this.selectedValues.length != 0) {
      let roleObject = {
        "roleID": this.selectedRole,
        "Menus": uniqueChars.toString()
      }
      this._service.addNewRoleHasPermission(roleObject).subscribe(data => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
        this.ngOnInit()
      }, err => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops...')}`, `${this.translate.instant('Swal_Msg.Something_went_wrong')}`, "error");
        this.ngOnInit()
      })
    } else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.please_select')}`, "warning");

    }
  }
  updateid
  editClickHandler(id) {
    let menuItemList = this.menuItems.getMenu();
    let list = menuItemList
    list.forEach(function (element) {
      element['checked'] = false
      element['text'] = element.name
      element['value'] = element['id']
      if (element?.children?.length != 0 && element?.children != undefined) {
        element?.children?.forEach(function (ele, index1) {
          ele['checked'] = false
          ele['text'] = ele.name
          ele['value'] = ele['id']
          if (ele?.children?.length != 0 && ele?.children != undefined) {
            ele?.children?.forEach(function (ele1, index2) {
              ele1['checked'] = false
              ele1['text'] = ele1.name
              ele1['value'] = ele1['id']
            });
          }
        });
      }
    });
    let items = this.getItems(list);
    this.items = items
    this.addButton = false
    this.updateButton = true
    this.cancelButton = true
    this._service.getFormData(id).subscribe(data => {
      this.selectedRole = data.roleID
      this.updateid = data.id
      let menuData: string = '';
      menuData = menuData + ',' + data.Menus
      let arrayList1 = menuData.split(',');
      var arrayList = arrayList1.map(function (x) {
        return parseInt(x, 10);
      });
      arrayList.sort(function (a, b) { return b - a });
      let menuItemList = this.menuItems.getMenu();
      let list = menuItemList;
      list.forEach(function (element) {
        if (arrayList.includes(element['id'])) {
          element['checked'] = true
          element['text'] = element.name
          element['value'] = element['id']
          if (element?.children?.length != 0 && element?.children != undefined) {
            element?.children?.forEach(function (ele, index1) {
              if (arrayList.includes(ele['id'])) {
                ele['checked'] = true
                ele['text'] = ele.name
                ele['value'] = ele['id']
                if (ele?.children?.length != 0 && ele?.children != undefined) {
                  ele?.children?.forEach(function (ele1, index2) {
                    if (arrayList.includes(ele1['id'])) {
                      ele1['checked'] = true
                      ele1['text'] = ele1.name
                      ele1['value'] = ele1['id']
                    } else {
                      ele1['checked'] = false
                      ele1['text'] = ele1.name
                      ele1['value'] = ele1['id']
                    }
                  });
                }
              } else {
                ele['checked'] = false
                ele['text'] = ele.name
                ele['value'] = ele['id']
              }
            });
          }
        } else {
          element['checked'] = false
          element['text'] = element.name
          element['value'] = element['id']
        }
      });
      // return list
      let item = this.getItems(list)
      this.items = item
      this.selectedValues = arrayList1.filter(element => element !== '');
    })

  }
  addButton: boolean = true
  updateButton: boolean = false
  cancelButton: boolean = false
  cancel() {
    this.angForm.reset();
    this.ngOnInit()
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
    if (this.selectedRole != '' && this.selectedValues.length != 0) {
      let roleObject = {
        "id": this.updateid,
        "roleID": this.selectedRole,
        "Menus": uniqueChars.toString(),
      }
      this._service.updateNewRoleHasPermission(roleObject).subscribe(data => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
        this.angForm.reset();
        this.ngOnInit()
      }, err => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Error')}`, `${this.translate.instant('Swal_Msg.Error')}`, 'error');
        this.angForm.reset();
        this.ngOnInit()
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
}
