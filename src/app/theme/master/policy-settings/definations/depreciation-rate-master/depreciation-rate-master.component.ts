import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
// import { PrematurePigmyService } from './premature-pigmy-less-ir.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { DepriciationCatDropdownMasterService } from '../../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { IOption } from 'ng-select';
import { DereciationService } from './depreciation-rate-master.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DepriciationRate {
  DEPR_RATE: number;
  CATEGORY: string;
  EFFECT_DATE: Date;
}

@Component({
  selector: 'app-depreciation-rate-master',
  templateUrl: './depreciation-rate-master.component.html',
  styleUrls: ['./depreciation-rate-master.component.scss'],
})
export class DepreciationRateMasterComponent implements OnInit {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  depriciationRate: DepriciationRate[];
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
  updateID: number = 0;
  schemeCode: any;
  //for search functionality
  filterData = {};
  category: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    // for dropdown
    public categoryMaster: DepriciationCatDropdownMasterService,
    private dereciationService: DereciationService) {
  }

  ngOnInit(): void {
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
            this.url + '/depriciation-rate-master',
            dataTableParameters
          ).subscribe(resp => {
            this.depriciationRate = resp.data;

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
          title: 'Last Int. Date',
          data: 'EFFECT_DATE'
        },
        {
          title: 'Category Code',
          data: 'CATEGORY'
        },
        {
          title: 'Depreciation Rate',
          data: 'DEPR_RATE'
        }
      ],
      dom: 'Blrtip',
    };
    this.createForm();

    this.categoryMaster.getDepriciationMasterList().pipe(first()).subscribe(data => {
      this.category = data;
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      EFFECT_DATE: ['', [Validators.required]],
      CATEGORY: ['', [Validators.required]],
      DEPR_RATE: [''],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'CATEGORY': formVal.CATEGORY,
      'DEPR_RATE': formVal.DEPR_RATE,
    }
    this.dereciationService.postData(dataToSend).subscribe(data1 => {
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
    this.dereciationService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'EFFECT_DATE': data.EFFECT_DATE,
        'CATEGORY': data.CATEGORY,
        'DEPR_RATE': data.DEPR_RATE,
      })
    })
  }

  //Method for update data 
  updateData(id) {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.dereciationService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    })
  }

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Company Group Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dereciationService.deleteData(id).subscribe(data1 => {
          this.depriciationRate = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {

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