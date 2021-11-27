import { Component, OnInit, ViewChild } from '@angular/core';
import {
  TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
  TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem
} from 'ngx-treeview'; import { RoleDefinationService } from './role-defination.service';
import { isNil, remove, reverse } from 'lodash';
import { UserDefinationService } from '../user-defination/user-defination.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


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

  selectedRole :any;
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
  ROLE:any;
  RoleResult :any;
  constructor(private _service: RoleDefinationService,private _roleServices: UserDefinationService) { 
    this._roleServices.getRoleList().subscribe(data => {
      this.ROLE = data;
    });

    this._service.getRoleMenuList().subscribe(data=>{
      this.RoleResult = data;
      console.log(this.RoleResult)
      this.dtTrigger.next()
    },err=>{
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
    this.items = this._service.getBooks();
    this._service.getRoleList().subscribe(data => {
      this.RoleData = data;
    })
  }
  onFilterChange(value: string): void {
    debugger
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
    this.selectedValues =  parent1;
  }


  //Submit Role menu Details
  submit(){
    let uniqueChars = [];
    this.selectedValues.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    console.log(uniqueChars);
    if(this.roleID !='' && this.selectedValues.length !=0){
      let roleObject = {
        "roleID" : this.selectedRole,
        "Menus" : uniqueChars.toString()
      }
      console.log(roleObject);
      this._service.addNewRoleHasPermission(roleObject).subscribe(data=>{
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
      },err=>{
        Swal.fire('Error!', 'This Role Already Exists !', 'error');
      })
    }else{
      alert('please select All requied data')
    }
  }




}
