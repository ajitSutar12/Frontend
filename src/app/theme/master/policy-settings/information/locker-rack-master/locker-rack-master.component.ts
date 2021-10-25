import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { LockerRackMasterService } from './locker-rack-master.service';
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
interface LockerRackMaster {
  RACK_NO: number,
  RACK_DESC: string,
  LOCKER_FROMNO: number,
  LOCKER_TONO: number
}

@Component({
  selector: 'app-locker-rack-master',
  templateUrl: './locker-rack-master.component.html',
  styleUrls: ['./locker-rack-master.component.scss']
})

export class LockerRackMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  lockerRackMaster: LockerRackMaster[];
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
  //for search functionality
  filterData = {};
  constructor(
    private http: HttpClient,
    private lockerRackMasterService: LockerRackMasterService,
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
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;
        dataTableParameters.columns.forEach(element => {
          if(element.search.value !=''){
  
            let string = element.search.value;
            this.filterData[element.data] = string;
          }else{
  
            let getColumnName = element.data;
            let columnValue = element.value;
            if(this.filterData.hasOwnProperty(element.data)){
                let value = this.filterData[getColumnName];
                if(columnValue != undefined || value != undefined){
                  delete this.filterData[element.data];
                } 
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            'http://localhost:4000/locker-rack-master',
            dataTableParameters
          ).subscribe(resp => {
            this.lockerRackMaster = resp.data;
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
          title: 'Rack Number'
        }, {
          title: 'Rack Description'
        },
        {
          title: 'Lockers From'
        },
        {
          title: 'Lockers to'
        }
      ],
      dom: 'Blrtip',
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      LOCKER_TONO: ['', [Validators.required, Validators.pattern]],
      LOCKER_FROMNO: ['', [Validators.required, Validators.pattern]],
      RACK_DESC: ['', [Validators.required, Validators.pattern]],
      RACK_NO: [''],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'RACK_NO': formVal.RACK_NO,
      'RACK_DESC': formVal.RACK_DESC,
      'LOCKER_FROMNO': formVal.LOCKER_FROMNO,
      'LOCKER_TONO': formVal.LOCKER_TONO
    }
    this.lockerRackMasterService.postData(dataToSend).subscribe(data1 => {
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
    this.lockerRackMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'RACK_NO': data.RACK_NO,
        'RACK_DESC': data.RACK_DESC,
        'LOCKER_FROMNO': data.LOCKER_FROMNO,
        'LOCKER_TONO': data.LOCKER_TONO
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.lockerRackMasterService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Locker Rack master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lockerRackMasterService.deleteData(id).subscribe(data1 => {
          this.lockerRackMaster = data1;
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
          }else{
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