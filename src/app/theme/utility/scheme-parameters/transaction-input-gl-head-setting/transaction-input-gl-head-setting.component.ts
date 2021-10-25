import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-input-gl-head-setting',
  templateUrl: './transaction-input-gl-head-setting.component.html',
  styleUrls: ['./transaction-input-gl-head-setting.component.scss']
})
export class TransactionInputGlHeadSettingComponent implements OnInit {
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
