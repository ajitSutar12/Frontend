import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { NarrationService } from './narration.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface Narration {
  ID: number,
  NARRATION: string
}
@Component({
  selector: 'app-narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.scss']
})
export class NarrationComponent implements AfterViewInit, OnDestroy, OnInit {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  narrations: Narration[];
  // Created Form Group
  angForm: FormGroup;
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
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  // column search variable
  filterData = {};

  constructor(
    private http: HttpClient,
    private narrationService: NarrationService,
    private fb: FormBuilder) {
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
      //  debugger
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
            this.url + '/narration',
            dataTableParameters
          ).subscribe(resp => {
            this.narrations = resp.data;

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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          title: 'Narration',
          data: 'NARRATION',
        }
      ],
      dom: 'Blrtip',
    }; 
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      NARRATION: ['', [Validators.pattern, Validators.required]],
    });
  }
  
  
  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault(); 
    this.formSubmitted = true;

    if (this.angForm.valid) {
      console.log(this.angForm.value); // Process your form
      const formVal = this.angForm.value;
      const dataToSend = {
        'NARRATION': formVal.NARRATION,
      }
      this.narrationService.postData(dataToSend).subscribe(data1 => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      }, (error) => {
        console.log(error)
      })
      //To clear form
      this.resetForm();
    }
   
  }

  //Method for append data into fields
  editClickHandler(id) {
   // debugger
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.narrationService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'NARRATION': data.NARRATION
      })
    })
  }
  addNewData(){
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.narrationService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.resetForm();
    })
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete narration data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.narrationService.deleteData(id).subscribe(data1 => {
          // this.narrations = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.rerender();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();

    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {

          if (this['value'] != '') {
         //   debugger
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
}
