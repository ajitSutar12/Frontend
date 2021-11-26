import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { CompanyGroupLinkMasterService } from './company-group-link-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Used to dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeCodeDropdownService } from '../../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CompanyGroupMasterDropdownService } from '../../../../../shared/dropdownService/company-group-master-dropdown.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface CompanyGroupLinkMaster {
  COMP_CODE: string,
  CODE: string,
  FROM_AC: number,
  TO_AC: number,
}
@Component({
  selector: 'app-company-group-link-master',
  templateUrl: './company-group-link-master.component.html',
  styleUrls: ['./company-group-link-master.component.scss']
})

export class CompanyGroupLinkMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  companyGroupLinkMaster: CompanyGroupLinkMaster[];
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

  updateID: number = 0;

  companyCode: any;
  schemeCode: any;

  //for search functionality
  filterData = {};

  constructor(
    private http: HttpClient,
    private companyGroupLinkMasterService: CompanyGroupLinkMasterService,
    private fb: FormBuilder,
    public schemeCodeService: SchemeCodeDropdownService,
    public companyGroupService: CompanyGroupMasterDropdownService,
  ) { }

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
            this.url + '/company-group-link-master',
            dataTableParameters
          ).subscribe(resp => {
            this.companyGroupLinkMaster = resp.data;

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
          title: 'Company Code',
          data: 'COMP_CODE'
        },
        {
          title: 'Scheme Code',
          data: 'CODE'
        },
        {
          title: 'From Account',
          data: 'FROM_AC'
        },
        {
          title: 'To Account',
          data: 'TO_AC'
        },

      ],
      dom: 'Blrtip',
    };
    this.createForm();

    this.companyGroupService.getCompanyGroupMasterList().pipe(first()).subscribe(data => {
      this.companyCode = data;
    })
    this.schemeCodeService.getSchemeCodeList().pipe(first()).subscribe(data => {
      this.schemeCode = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      COMP_CODE: ['', [Validators.required]],
      CODE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.pattern]],
      TO_AC: ['', [Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'COMP_CODE': formVal.COMP_CODE,
      'CODE': formVal.CODE,
      'FROM_AC': formVal.FROM_AC,
      'TO_AC': formVal.TO_AC,
    }
    this.companyGroupLinkMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });    }, (error) => {

    })
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;

    this.companyGroupLinkMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'COMP_CODE': data.COMP_CODE,
        'CODE': data.CODE,
        'FROM_AC': data.FROM_AC,
        'TO_AC': data.TO_AC
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
    this.companyGroupLinkMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;

      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });      this.resetForm();
    })
  }

  // Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Company Group Link Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companyGroupLinkMasterService.deleteData(id).subscribe(data1 => {
          this.companyGroupLinkMaster = data1;
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
