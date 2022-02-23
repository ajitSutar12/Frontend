import { Component, OnInit,ElementRef, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from "rxjs";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface MoratoriumPeriodMaster{
  AC_ACNOTYPE:string;
  AC_TYPE:string;
  AC_NO:number;
  INSTALLMENT_NO:number;
  PERIOD:number;
  TRAN_DATE:Date;
  // USER_CODE:string;
  AC_RESO_NO:string;
  AC_RESO_DATE:Date

}




@Component({
  selector: 'app-moratoriumperiodmaster',
  templateUrl: './moratoriumperiodmaster.component.html',
  styleUrls: ['./moratoriumperiodmaster.component.scss']
})
export class MoratoriumperiodmasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  formSubmitted = false;
  //api 
  url = environment.base_url;

  angForm: FormGroup;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Store data from backend
  moratoriumperiodmaster: MoratoriumPeriodMaster[];

  // for date 
  ngresolutiondate:any=null
  maxDate: Date;
  minDate: Date;

  //Datatable variable
  dtExportButtonOptions: any = {};
  Data: any;

  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;

  // Filter Variable
  filterData = {};



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private_router: Router,
    private config: NgSelectConfig,) {
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
   }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;

        dataTableParameters.columns.forEach(element => {
   
          if (element.search.value != '') {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
           
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/bank-other-details',
            dataTableParameters
          ).subscribe(resp => {
            this.moratoriumperiodmaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        
        {
          title: 'Account Number',
          data: 'AC_NO'
        },
        
        {
          title: 'Installment Number',
          data: 'INSTALLMENT_NO'
        },
        {
          title: 'Moratorium Period',
          data: 'PERIOD'
        },
       
        {
          title: 'Resolution Date',
          data: 'AC_RESO_DATE'
        },
        
        {
          title: 'Resolution Number',
          data: 'AC_RESO_NO'
        },
       
      ],
      dom: 'Blrtip',
    }

  }
  createForm() {
    this.angForm = this.fb.group({
      INSTALLMENT_NO:['',[Validators.pattern]],
      PERIOD:['',[Validators.pattern]],
      AC_RESO_DATE:[''],
      AC_RESO_NO:['',[Validators.pattern]]


      
    });
  }

}
