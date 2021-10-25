import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-settings',
  templateUrl: './sms-settings.component.html',
  styleUrls: ['./sms-settings.component.scss']
})
export class SmsSettingsComponent implements OnInit {
  dtExportButtonOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/sms-datatable-data.json',
      columns: [

        {
          title: 'Type',
          data: 'type'
        }, {
          title: 'Code',
          data: 'code'
        }, {
          title: 'Name',
          data: 'name'
        }, {
          title: 'Short Name',
          data: 'shortName'
        }, {
          title: 'Voucher SMS',
          data: 'voucherSMS'
        }, {
          title: 'Show Short Name',
          data: 'showShortName'
        },
        {
          title: 'Reminders',
          data: 'reminders'
        }
      ],
      dom: 'Bfrtip',

    };

  }
  

}
