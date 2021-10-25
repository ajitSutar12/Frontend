import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number = 0;
  constructor(private fb: FormBuilder,
    private castMasterService: CastMasterService,
    private http: HttpClient) { this.createForm(); }


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
        if (dataTableParameters.search.value != '') {
          this.filter = dataTableParameters.search.value;
          this.filterObject = [


          ]

          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length,
            filter: dataTableParameters.search.value,
            filter_in: this.filterObject
          }
        }
        else {
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length
          }
        }
        that.http
          .post<DataTableResponse>(
            'http://localhost:4000/cast-master',

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
          title: 'Action',

        },
        {
          title: 'Category Code',

        },
        {
          title: 'Description',
        }
      ],
      dom: 'Blrtip',

    };
    this.angForm = new FormGroup({
      'CODE': new FormControl(''),
      'NAME': new FormControl(''),


    })

  }


  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({

      CODE: [''],
      NAME: ['', [Validators.pattern, Validators.required]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {

    const formVal = this.angForm.value;
    const dataToSend = {
      "CODE": formVal.CODE,
      "NAME": formVal.NAME,
    }
    this.castMasterService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.rerender();
    }, (error) => {


    })
    this.resetForm();
  }


  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.castMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id
      this.angForm.setValue({
        'CODE': data.CODE,
        'NAME': data.NAME,


      })

    })
  }
  //Method for update data 
  updateData(id) {

    let data = this.angForm.value;
    data['id'] = this.updateID;

    this.castMasterService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Cast Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
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
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })

  }



  ngAfterViewInit(): void {
    this.dtTrigger.next();
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





