import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { BankService } from './bank-master.service';
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
interface BankMaster {
  BANK_CODE: number;
  BANK_NAME: string;
  BANK_SHORTNAME: string;
  LEDGER_CODE: number;
  BANKCODE: number;
  DD_APPLICABLE: boolean;
  GL_ACNO: number;
  HO_SUB_GLACNO: number;
  BANKERS_COMM_APPLICABLE: boolean;
  RIGHT_TO_PREPARE_DD: boolean;
  PARTICIPATE_IN_CLEARING: boolean;
}

@Component({
  selector: 'app-bank-master',
  templateUrl: './bank-master.component.html',
  styleUrls: ['./bank-master.component.scss']
})
export class BankMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  bankmasters: BankMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: any = {};
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

  // Filter Variable
  filterData = {};

  constructor(
    private http: HttpClient,
    private bankService: BankService,
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
            this.url + '/bank-master',
            dataTableParameters
          ).subscribe(resp => {
            this.bankmasters = resp.data;
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
          title: 'Bank Code',
          data: 'BANK_CODE'
        },
        {
          title: 'Bank Name',
          data: 'BANK_NAME'
        },
        {
          title: 'Bank Short Name',
          data: 'BANK_SHORTNAME'
        },
        {
          title: 'Ledger Code',
          data: 'LEDGER_CODE'
        },
        {
          title: 'Bank Code',
          data: 'BANKCODE'
        },
        {
          title: 'DD Applicable',
          data: 'DD_APPLICABLE'
        },
        {
          title: 'GL Code',
          data: 'GL_ACNO'
        },
        {
          title: 'Sub GL Code',
          data: 'HO_SUB_GLACNO'
        },
        {
          title: 'Bankers Commission Applicable',
          data: 'BANKERS_COMM_APPLICABLE'
        },
        {
          title: 'Allow To Prepare D.D. By our Bank',
          data: 'RIGHT_TO_PREPARE_DD'
        },
        {
          title: 'Participation in Clearing',
          data: 'PARTICIPATE_IN_CLEARING'
        }
      ],
      dom: 'Blrtip',
    }
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BANK_CODE: [''],
      LEDGER_CODE: ['', [Validators.pattern]],
      BANK_NAME: ['', [Validators.pattern]],
      BANK_SHORTNAME: ['', [Validators.pattern, Validators.required]],
      DD_APPLICABLE: [false],
      BANKERS_COMM_APPLICABLE: [false],
      RIGHT_TO_PREPARE_DD: [false],
      PARTICIPATE_IN_CLEARING: [false],
      GL_ACNO: ['', [Validators.pattern]],
      HO_SUB_GLACNO: ['', [Validators.pattern]],
      BANKCODE: ['', [Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'BANK_CODE': formVal.BANK_CODE,
      'LEDGER_CODE': formVal.LEDGER_CODE,
      'BANK_NAME': formVal.BANK_NAME,
      'BANK_SHORTNAME': formVal.BANK_SHORTNAME,
      'DD_APPLICABLE': formVal.DD_APPLICABLE,
      'BANKERS_COMM_APPLICABLE': formVal.BANKERS_COMM_APPLICABLE,
      'RIGHT_TO_PREPARE_DD': formVal.RIGHT_TO_PREPARE_DD,
      'PARTICIPATE_IN_CLEARING': formVal.PARTICIPATE_IN_CLEARING,
      'GL_ACNO': formVal.GL_ACNO,
      'HO_SUB_GLACNO': formVal.HO_SUB_GLACNO,
      'BANKCODE': formVal.BANKCODE,
    }
    this.bankService.postData(dataToSend).subscribe(data1 => {
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

  addNewData(){
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.bankService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'BANK_CODE': data.BANK_CODE,
        'LEDGER_CODE': data.LEDGER_CODE,
        'BANK_NAME': data.BANK_NAME,
        'BANK_SHORTNAME': data.BANK_SHORTNAME,
        'DD_APPLICABLE': data.DD_APPLICABLE,
        'BANKERS_COMM_APPLICABLE': data.BANKERS_COMM_APPLICABLE,
        'RIGHT_TO_PREPARE_DD': data.RIGHT_TO_PREPARE_DD,
        'PARTICIPATE_IN_CLEARING': data.PARTICIPATE_IN_CLEARING,
        'GL_ACNO': data.GL_ACNO,
        'HO_SUB_GLACNO': data.HO_SUB_GLACNO,
        'BANKCODE': data.BANKCODE,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.bankService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete bank master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bankService.deleteData(id).subscribe(data1 => {
          this.bankmasters = data1;
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
  // Reset Function
  resetForm() {
    this.createForm();
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