import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//default service files for dropdown
import { StatementCodeDropdownService } from '../../../../shared/dropdownService/statement-code-dropdown.service';
// Service File For Handling CRUD Operation
import { GlAccountsMasterService } from './gl-accounts-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface GLAccountMaster {
  AC_NO: number
  AC_NAME: string
  AC_BCD: string
  IS_DIRECT_ENTRY_ALLOW: boolean
  IS_RED_BALANCE_AC: boolean
  AC_IS_CASH_IN_TRANSIT: boolean
  IS_TAXABLEFOR_GST: boolean
  IS_ACTIVE: boolean
}
@Component({
  selector: 'app-gl-accounts-master',
  templateUrl: './gl-accounts-master.component.html',
  styleUrls: ['./gl-accounts-master.component.scss'],
})

export class GlAccountsMasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  glAccountMaster: GLAccountMaster[];
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
  //variable to get ID to update
  updateID: number = 0;
  statementCode: any;

  // Filter Variable
  filterData = {};

  constructor(
    private http: HttpClient,
    private glAccountsMasterService: GlAccountsMasterService,
    private statement: StatementCodeDropdownService,
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
            this.url+'/gl-account-master',
            dataTableParameters
          ).subscribe(resp => {
            this.glAccountMaster = resp.data;
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
          title: 'General Ledger Code',
          data: 'AC_NO'
        },
        {
          title: 'General Ledger Name',
          data: 'AC_NAME'
        },
        {
          title: 'Statement Code',
          data: 'AC_BCD'
        },
        {
          title: 'Is Red Balance Account',
          data: 'IS_RED_BALANCE_AC'
        },
        {
          title: 'Is Allow Direct Entry To Account',
          data: 'IS_DIRECT_ENTRY_ALLOW'
        },
        {
          title: 'Cash In TransitAccount',
          data: 'AC_IS_CASH_IN_TRANSIT'
        },
        {
          title: 'Is Tax able For GST',
          data: 'IS_TAXABLEFOR_GST'
        },
        {
          title: 'Is Active Account',
          data: 'IS_ACTIVE'
        }

      ],
      dom: 'Blrtip',
    };
    this.statement.getStatementCodeList().pipe(first()).subscribe(data => {
      this.statementCode = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_NO: [''],
      AC_NAME: ['', [Validators.required, Validators.pattern]],
      AC_BCD: ['', [Validators.required]],
      IS_DIRECT_ENTRY_ALLOW: [true],
      IS_RED_BALANCE_AC: [false],
      AC_IS_CASH_IN_TRANSIT: [false],
      IS_TAXABLEFOR_GST: [false],
      IS_ACTIVE: [true]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_NO': formVal.AC_NO,
      'AC_NAME': formVal.AC_NAME,
      'AC_BCD': formVal.AC_BCD,
      'IS_DIRECT_ENTRY_ALLOW': formVal.IS_DIRECT_ENTRY_ALLOW,
      'IS_RED_BALANCE_AC': formVal.IS_RED_BALANCE_AC,
      'AC_IS_CASH_IN_TRANSIT': formVal.AC_IS_CASH_IN_TRANSIT,
      'IS_TAXABLEFOR_GST': formVal.IS_TAXABLEFOR_GST,
      'IS_ACTIVE': formVal.IS_ACTIVE
    }
    this.glAccountsMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
    this.newbtnShow = true;
    this.glAccountsMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_NO': data.AC_NO,
        'AC_NAME': data.AC_NAME,
        'AC_BCD': data.AC_BCD,
        'IS_DIRECT_ENTRY_ALLOW': data.IS_DIRECT_ENTRY_ALLOW,
        'IS_RED_BALANCE_AC': data.IS_RED_BALANCE_AC,
        'AC_IS_CASH_IN_TRANSIT': data.AC_IS_CASH_IN_TRANSIT,
        'IS_TAXABLEFOR_GST': data.IS_TAXABLEFOR_GST,
        'IS_ACTIVE': data.IS_ACTIVE
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
    this.glAccountsMasterService.updateData(data).subscribe(() => {
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

  //reset form
  resetForm() {
    this.createForm()
  }

  //Method for delete data
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Pigmy AC Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.pigmyAcSchemeService.deleteData(id).subscribe(data1 => {
  //         this.pigmyACScheme = data1;
  //         Swal.fire(
  //           'Deleted!',
  //           'Your data has been deleted.',
  //           'success'
  //         )
  //       }), (error) => {
  //         console.log(error)
  //       }
  //       // to reload after delete of data
  //       this.rerender();
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your data is safe.',
  //         'error'
  //       )
  //     }
  //   })
  // }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
