import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-settings',
  templateUrl: './payroll-settings.component.html',
  styleUrls: ['./payroll-settings.component.scss']
})
export class PayrollSettingsComponent implements OnInit {
  
  dtExportButtonOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/payroll-setting.json',
      columns: [
        
        {
        title: 'Scheme',
        data: 'scheme'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Type',
        data: 'type'
      }, ]
    }
    
  }

}
