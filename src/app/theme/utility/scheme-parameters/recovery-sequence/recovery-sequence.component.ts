import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-sequence',
  templateUrl: './recovery-sequence.component.html',
  styleUrls: ['./recovery-sequence.component.scss']
})
export class RecoverySequenceComponent implements OnInit {
  dtExportButtonOptions: any = {};
  constructor() { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/recovery-sequence.json',
      columns: [
       
        {
        title: 'No',
        data: 'No'
      }, {
        title: 'Description',
        data: 'description'
      }, {
        title: 'Applicable',
        data: 'applicable'
      }, {
        title: 'Allow Extra Amount',
        data: 'allowExtraAmount'
      }, {
        title: 'Allow Edit Amount',
        data: 'allowEditAmount'
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
