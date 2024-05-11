import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-statement-head-insert',
  templateUrl: './statement-head-insert.component.html',
  styleUrls: ['./statement-head-insert.component.scss']
})
export class StatementHeadInsertComponent implements OnInit {
  dtExportButtonOptions : any = {};
  setLang:any;
  constructor(private translate:TranslateService,    private systemParameter: SystemMasterParametersService,
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })   }

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
