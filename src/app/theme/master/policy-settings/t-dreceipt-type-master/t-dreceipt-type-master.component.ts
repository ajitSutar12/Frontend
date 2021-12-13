import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Service File For Handling CRUD Operation
import { TDReceiptService } from './t-dreceipt-type-master.component.service';
import { environment } from '../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface TDReceiptinterface {
  LAST_RECEIPT_NO: number,
  RECEIPT_TYPE: string,
}

@Component({
  selector: 'app-t-dreceipt-type-master',
  templateUrl: './t-dreceipt-type-master.component.html',
  styleUrls: ['./t-dreceipt-type-master.component.scss'],
})
export class TDReceiptTypeMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  angForm: FormGroup;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtExportButtonOptions: any = {};
  // Variables for hide/show add and update and new button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};
  //variables for pagination
  page: number = 1;

  // Store data from backend
  tdReceipt: TDReceiptinterface[];


  constructor(private fb: FormBuilder, private _receipt: TDReceiptService, private http: HttpClient,) { }

  ngOnInit(): void {
    this.createForm();
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
            this.url + '/td-receipt-type',
            dataTableParameters
          ).subscribe(resp => {
            this.tdReceipt = resp.data;
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
          title: 'Receipt Type',
          data: 'RECEIPT_TYPE'
        },
        {
          title: 'Last Receipt No',
          data: 'LAST_RECEIPT_NO'
        }
      ],
      dom: 'Blrtip',
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      LAST_RECEIPT_NO: ['', [Validators.required, Validators.pattern]],
      RECEIPT_TYPE: ['', [Validators.required, Validators.pattern]]
    });
  }
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'LAST_RECEIPT_NO': formVal.LAST_RECEIPT_NO,
      'RECEIPT_TYPE': formVal.RECEIPT_TYPE,
    };
    // console.log(this.angForm.value);
    this._receipt.postData(dataToSend).subscribe(
      (data) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
  }
  //function toggle update to add button
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._receipt.updateData(data).subscribe(() => {
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
  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._receipt.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.patchValue({
        RECEIPT_TYPE: data.RECEIPT_TYPE,
        LAST_RECEIPT_NO: data.LAST_RECEIPT_NO
      })
    })
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }
  
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  // Reset Function
  resetForm() {
    this.createForm();
  }

  //reset function while update
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
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

}
