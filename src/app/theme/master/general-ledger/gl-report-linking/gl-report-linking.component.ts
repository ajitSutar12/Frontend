import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-gl-report-linking',
  templateUrl: './gl-report-linking.component.html',
  styleUrls: ['./gl-report-linking.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class GlReportLinkingComponent implements OnInit {

  dtExportButtonOptions: any = {};//Datatable variable

  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/report-linking.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Sr No',
          data: 'SrNo'
        },
        {
          title: 'General Ledger Account No',
          data: 'GeneralLedgerAccountNo'
        },
        {
          title: 'General Ledger  Account Name',
          data: 'GeneralLedgerAccountName'
        },
        {
          title: 'Effect From Date',
          data: 'EffectFromDate'
        },
        {
          title: 'Effect To Date',
          data: 'EffectToDate'
        },
        {
          title: 'Head Code',
          data: 'HeadCode'
        },
        {
          title: 'Head Name',
          data: 'HeadName'
        },
        {
          title: 'Default Balance Type',
          data: 'DefaultBalanceType'
        },
        {
          title: 'Reverse Code',
          data: 'ReverseCode'
        },
        {
          title: 'Sub Column',
          data: 'SubColumn'
        },
      ],
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
