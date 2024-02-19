import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pata-seva-support-r',
  templateUrl: './pata-seva-support-r.component.html',
  styleUrls: ['./pata-seva-support-r.component.scss']
})
export class PataSevaSupportRComponent implements OnInit {
  dtExportButtonOptions : any = {};

  constructor(private translate:TranslateService,) { 
    this.translate.setDefaultLang(environment.setLang);
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: this.translate.instant('utility.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: this.translate.instant('utility.Action.Name'),
        data: 'name'
      }, {
        title: this.translate.instant('utility.Action.Position'),
        data: 'position'
      }, {
        title: this.translate.instant('utility.Action.Office'),
        data: 'office'
      }, {
        title: this.translate.instant('utility.Action.Age'),
        data: 'age'
      }, {
        title: this.translate.instant('utility.Action.Start_date'),
        data: 'date'
      }, {
        title: this.translate.instant('utility.Action.Salary'),
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
