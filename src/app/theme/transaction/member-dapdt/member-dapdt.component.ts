import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-dapdt',
  templateUrl: './member-dapdt.component.html',
  styleUrls: ['./member-dapdt.component.scss']
})
export class MemberDAPDTComponent implements OnInit {

  dtExportButtonOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Office',
        data: 'office'
      }, {
        title: 'Age',
        data: 'age'
      }, {
        title: 'Start Date',
        data: 'date'
      }, {
        title: 'Salary',
        data: 'salary'
      }],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
    
  }


}
