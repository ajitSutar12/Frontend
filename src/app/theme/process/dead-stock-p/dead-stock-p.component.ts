import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
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

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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

}
