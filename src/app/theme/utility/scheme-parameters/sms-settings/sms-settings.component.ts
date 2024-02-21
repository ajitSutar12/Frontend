import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { Subject, Subscription } from 'rxjs-compat';
import { SharesSchemeService } from '../shares-scheme/shares-scheme.service'
import Swal from 'sweetalert2';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-sms-settings',
  templateUrl: './sms-settings.component.html',
  styleUrls: ['./sms-settings.component.scss']
})
export class SmsSettingsComponent implements OnInit, AfterViewInit, OnDestroy {
  dtExportButtonOptions: any = {};
  constructor(private http: HttpClient, private SharesSchemeService: SharesSchemeService, private fb: FormBuilder,) { }
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number = 1;
  Scheme
  filterData = {};
  //api 
  url = environment.base_url;
  angForm: FormGroup;
  ngOnInit(): void {
    this.createForm()
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
        this.http
          .post<DataTableResponse>(
            this.url + '/scheme-parameters',
            dataTableParameters
          ).subscribe(resp => {
            this.Scheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action'
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE'
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL'
        },
        {
          title: 'Description',
          data: 'S_NAME'
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME'
        },
        {
          title: 'Allow SMS',
          data: 'ALLOW_SMS'
        },
        {
          title: 'Use short name',
          data: 'SMS_USE_SHNAME'
        },
        {
          title: 'Allow remainder SMS',
          data: 'ALLOW_REM_SMS'
        }


      ],
      dom: "Blrtip",
    };

  }
  createForm() {
    this.angForm = this.fb.group({
      id: [],
      S_ACNOTYPE: [''],
      S_APPL: [''],
      S_NAME: [''],
      S_SHNAME: ['', [Validators.required]],
      ALLOW_SMS: [false, [Validators.required]],
      SMS_USE_SHNAME: [false, [Validators.required]],
      ALLOW_REM_SMS: [false, [Validators.required]]
    })
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  editClickHandler(id) {
    this.SharesSchemeService.getFormData(id).subscribe(data => {
      this.angForm.patchValue({
        id: data.id,
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_APPL: data.S_APPL,
        S_NAME: data.S_NAME,
        S_SHNAME: data.S_SHNAME,
        ALLOW_SMS: data.ALLOW_SMS == 0 ? false : true,
        SMS_USE_SHNAME: data.SMS_USE_SHNAME == 0 ? false : true,
        ALLOW_REM_SMS: data.ALLOW_REM_SMS == 0 ? false : true
      })
    })
  }
  updateData() {
    let data = this.angForm.value
    data['ALLOW_SMS'] = data.ALLOW_SMS == true ? 1 : 0,
      data['SMS_USE_SHNAME'] = data.SMS_USE_SHNAME == true ? 1 : 0,
      data['ALLOW_REM_SMS'] = data.ALLOW_REM_SMS == true ? 1 : 0
    this.http.post(this.url + '/scheme-parameters/SMSupdate', data).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
        this.createForm()
      });
    })

  }
  addNewData() {
    this.createForm()
  }
}
