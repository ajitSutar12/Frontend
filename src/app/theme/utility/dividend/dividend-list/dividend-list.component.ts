import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dividend-list',
  templateUrl: './dividend-list.component.html',
  styleUrls: ['./dividend-list.component.scss']
})
export class DividendListComponent implements OnInit {
  dtExportButtonOptions : any = {};

  constructor(private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: this.translate.instant('Utility.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: this.translate.instant('Utility.Dividend_List_print_posting.Name'),
        data: 'name'
      }, {
        title: this.translate.instant('Utility.Dividend_List_print_posting.position'),
        data: 'position'
      }, {
        title: this.translate.instant('Utility.Dividend_List_print_posting.Office'),
        data: 'office'
      }, {
        title: this.translate.instant('Utility.Dividend_List_print_posting.Age'),
        data: 'age'
      }, {
        title: this.translate.instant('Utility.Dividend_List_print_posting.Start_Date'),
        data: 'date'
      }, {
        title: this.translate.instant('Utility.Dividend_List_print_posting.Salary'),
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
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }

}
