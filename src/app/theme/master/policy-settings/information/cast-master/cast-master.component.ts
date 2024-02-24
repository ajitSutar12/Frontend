import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// Service File For Handling CRUD Operation
import { CastMasterService } from './cast-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment'
import { TranslateService } from '@ngx-translate/core';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;

}
// For fetching values from backend
interface CastMaster {
  CODE: number;
  NAME: string;

}
@Component({
  selector: 'app-cast-master',
  templateUrl: './cast-master.component.html',
  styleUrls: ['./cast-master.component.scss']
})
export class CastMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  // Store data from backend
  castmaster: CastMaster[];
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
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
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number = 0;
  newbtnShow: boolean = false;

  constructor(private fb: FormBuilder,
    private castMasterService: CastMasterService,
    private http: HttpClient,private translate:TranslateService) { this.createForm(); }


  ngOnInit(): void {
    const that = this;
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
        that.http
          .post<DataTableResponse>(
            this.url+'/cast-master',
            dataTableParameters
          ).subscribe(resp => {
            this.castmaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: this.translate.instant('master.Cast_master.Action'),

        },
        {
          title: this.translate.instant('master.Cast_master.Cast_Code'),
          data:'CODE'
        },
        {
          title: this.translate.instant('master.Cast_master.Descaption'),
          data:'NAME'
        }
      ],
      dom: 'Blrtip',
    }; 
  }


  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      CODE: [''],
      NAME: ['', [Validators.required]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      "CODE": formVal.CODE,
      "NAME": formVal.NAME,
    }
    this.castMasterService.postData(dataToSend).subscribe(data => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
    })

    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.castMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id
      this.angForm.setValue({
        'CODE': data.CODE,
        'NAME': data.NAME,
      })
    })
  }
  
 
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.castMasterService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text: `${this.translate.instant('Swal_Msg.Cast_Master')}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Delete')}`, `${this.translate.instant('Swal_Msg.D_Msg')}`,
          'success'
        )
        this.castMasterService.deleteData(id).subscribe(data1 => {
          this.castmaster = data1;

        })
        this.rerender();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
      }
    })

  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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
  // Reset Function
  resetForm() {
    this.createForm();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}





