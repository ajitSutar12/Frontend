import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { DirectorMasterService } from './director-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DirectorMaster {
  CODE: number,
  NAME: string,
  DESIGNATION: string,
  AC_CTCODE: number,
  AC_ADDR1: string,
  AC_ADDR2: string,
  AC_ADDR3: string,
  AC_PIN: number,
  AC_MOBILENO: number,
  SMS_REQUIRED: boolean,
  IS_CURRENT_BODY_MEMBER: boolean
}

@Component({
  selector: 'app-director-master',
  templateUrl: './director-master.component.html',
  styleUrls: ['./director-master.component.scss']
})
export class DirectorMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  directorMaster: DirectorMaster[];
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

  //variable to get ID to update
  updateID: number = 0;
  //filter variable
  filterData = {};

  constructor(
    private http: HttpClient,
    private directorMasterService: DirectorMasterService,
    private fb: FormBuilder) { }

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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            'http://localhost:4000/director-master',
            dataTableParameters
          ).subscribe(resp => {
            this.directorMaster = resp.data;
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
          title: 'Director Code',
          data: 'CODE'
        }, {
          title: 'Director Name',
          data: 'NAME'
        }, {
          title: 'Designation',
          data: 'DESIGNATION'
        }, {
          title: 'Address 1',
          data: 'AC_ADDR1'
        }, {
          title: 'Address 2',
          data: 'AC_ADDR2'
        }, {
          title: 'Address 3',
          data: 'AC_ADDR3'
        },
        {
          title: 'City Code',
          data: 'AC_CTCODE'
        }, {
          title: 'Pin Code',
          data: 'AC_PIN'
        },
        {
          title: 'Mobile No',
          data: 'AC_MOBILENO'
        }, {
          title: 'IS CURRENT BODY MEMBER',
          data: 'IS_CURRENT_BODY_MEMBER'
        },
        {
          title: 'Required SMS Facilities',
          data: 'SMS_REQUIRED'
        },
      ], dom: 'Blrtip',
    }
  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      CODE: [''],
      NAME: ['', [Validators.required, Validators.pattern]],
      DESIGNATION: ['', [Validators.required, Validators.pattern]],
      AC_CTCODE: ['', [Validators.required, Validators.pattern]],
      AC_ADDR1: ['', [Validators.required, Validators.pattern]],
      AC_ADDR2: ['', [Validators.pattern]],
      AC_ADDR3: ['', [Validators.pattern]],
      AC_PIN: ['', [Validators.pattern]],
      AC_MOBILENO: ['', [Validators.pattern]],
      SMS_REQUIRED: [false],
      IS_CURRENT_BODY_MEMBER: [false]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'CODE': formVal.CODE,
      'NAME': formVal.NAME,
      'DESIGNATION': formVal.DESIGNATION,
      'AC_CTCODE': formVal.AC_CTCODE,
      'AC_ADDR1': formVal.AC_ADDR1,
      'AC_ADDR2': formVal.AC_ADDR2,
      'AC_ADDR3': formVal.AC_ADDR3,
      'AC_PIN': formVal.AC_PIN,
      'AC_MOBILENO': formVal.AC_MOBILENO,
      'SMS_REQUIRED': formVal.SMS_REQUIRED,
      'IS_CURRENT_BODY_MEMBER': formVal.IS_CURRENT_BODY_MEMBER,
    }
    this.directorMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.directorMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'CODE': data.CODE,
        'NAME': data.NAME,
        'DESIGNATION': data.DESIGNATION,
        'AC_CTCODE': data.AC_CTCODE,
        'AC_ADDR1': data.AC_ADDR1,
        'AC_ADDR2': data.AC_ADDR2,
        'AC_ADDR3': data.AC_ADDR3,
        'AC_PIN': data.AC_PIN,
        'AC_MOBILENO': data.AC_MOBILENO,
        'SMS_REQUIRED': data.SMS_REQUIRED,
        'IS_CURRENT_BODY_MEMBER': data.IS_CURRENT_BODY_MEMBER,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.directorMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete director master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.directorMasterService.deleteData(id).subscribe(data1 => {
          this.directorMaster = data1;
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
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          debugger
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
}




