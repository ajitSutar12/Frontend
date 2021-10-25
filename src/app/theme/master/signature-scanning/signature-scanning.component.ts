import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-signature-scanning',
  templateUrl: './signature-scanning.component.html',
  styleUrls: ['./signature-scanning.component.scss']
})
export class SignatureScanningComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private _router: Router,private http: HttpClient){

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        dataTablesParameters.minNumber = dataTablesParameters.start + 1;
        dataTablesParameters.maxNumber =
          dataTablesParameters.start + dataTablesParameters.length;
        console.log(
          dataTablesParameters.minNumber,
          dataTablesParameters.maxNumber
        );
        console.log('All Params', dataTablesParameters);
        this.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters,
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;
            console.log(resp.data);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }
}
