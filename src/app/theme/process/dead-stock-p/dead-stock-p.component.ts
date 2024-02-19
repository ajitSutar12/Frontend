import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-dead-stock-p',
  templateUrl: './dead-stock-p.component.html',
  styleUrls: ['./dead-stock-p.component.scss']
})
export class DeadStockPComponent implements OnInit {
  dtExportButtonOptions: any = {};
  //api 
  url = environment.base_url;
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang); }

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
          title:this.translate.instant('Utility.Utility1.name'),
          data: 'name'
        }, {
          title: this.translate.instant('Utility.Utility1.Office'),
          data: 'position'
        }, {
          title: this.translate.instant('Utility.Utility1.Position'),
          data: 'office'
        }, {
          title: this.translate.instant('Utility.Utility1.Age'),
          data: 'age'
        }, {
          title: this.translate.instant('Utility.Utility1.Start_Date'),
          data: 'date'
        }, {
          title: this.translate.instant('Utility.Utility1.Salary'),
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

  createForm() {
    this.angForm = this.fb.group({

    });
  }

  // Method to insert data into database through NestJS
  submit() {
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
