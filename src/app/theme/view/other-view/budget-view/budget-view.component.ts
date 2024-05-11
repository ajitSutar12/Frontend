import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.scss']
})
export class BudgetViewComponent implements OnInit {

  dtExportButtonOptions: any = {};
  setLang:any;
  constructor( private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,) { 
      this.systemParameter.getFormData(1).subscribe(data => {
    
        this.setLang = data.SET_LANGUAGE
        this.translate.setDefaultLang(this.setLang);
      })
    }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' +'<button class="btn btn-outline-primary btn-sm">Delete</button>';
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
      dom: "Blrtip",
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
    
  }


}
