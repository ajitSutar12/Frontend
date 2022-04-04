import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { environment } from '../../../../../../environments/environment'
import { first } from 'rxjs/operators';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';

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
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  //api 
  url = environment.base_url;
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
  newbtnShow: boolean = false;
  city: any[]
  ngCity: any
  //variable to get ID to update
  updateID: number = 0;
  //filter variable
  filterData = {};
  ngBranchCode: any
  branch_code: any[]
  userID
  branchCode
  constructor(
    private http: HttpClient,
    private directorMasterService: DirectorMasterService,
    private _cityMaster: cityMasterService,
    private ownbranchMasterService: OwnbranchMasterService,
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        this.http
          .post<DataTableResponse>(
            this.url + '/director-master',
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
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],

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
          title: 'Address',
          data: 'AC_ADDR1'
        },
        {
          title: 'Mobile No',
          data: 'AC_MOBILENO'
        }, {
          title: 'IS CURRENT BODY MEMBER',
          data: 'IS_CURRENT_BODY_MEMBER'
        },
      ], dom: 'Blrtip',
    }

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      
    })
    this._cityMaster.getcityList1().pipe(first()).subscribe(data => {
      this.city = data;
    })
  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      CODE: [''],
      NAME: ['', [Validators.required, Validators.pattern]],
      DESIGNATION: ['', [Validators.required, Validators.pattern]],
      AC_CTCODE: [''],
      AC_ADDR1: ['', [Validators.required, Validators.pattern]],
      AC_ADDR2: ['', [Validators.pattern]],
      AC_ADDR3: ['', [Validators.pattern]],
      AC_PIN: ['', [Validators.pattern]],
      AC_MOBILENO: ['', [Validators.pattern]],
      SMS_REQUIRED: [false],
      IS_CURRENT_BODY_MEMBER: [false],
      BRANCH_CODE: []
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'CODE': formVal.CODE,
      'NAME': formVal.NAME,
      'DESIGNATION': formVal.DESIGNATION,
      'AC_CTCODE': this.ngCity,
      'AC_ADDR1': formVal.AC_ADDR1,
      'AC_ADDR2': formVal.AC_ADDR2,
      'AC_ADDR3': formVal.AC_ADDR3,
      'AC_PIN': formVal.AC_PIN,
      'AC_MOBILENO': formVal.AC_MOBILENO,
      'SMS_REQUIRED': formVal.SMS_REQUIRED,
      'IS_CURRENT_BODY_MEMBER': formVal.IS_CURRENT_BODY_MEMBER,
      'BRANCH_CODE': this.ngBranchCode
    }
    this.directorMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })

    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.angForm.patchValue({
      BRANCH_CODE: result.branch.id
    })
    //To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.directorMasterService.getFormData(id).subscribe(data => {
      
      this.updateID = data.id;
      this.ngCity = Number(data.AC_CTCODE)
      this.ngBranchCode = Number(data.BRANCH_CODE)
      this.angForm.patchValue({
        'CODE': data.CODE,
        'NAME': data.NAME,
        'DESIGNATION': data.DESIGNATION,
        'AC_ADDR1': data.AC_ADDR1,
        'AC_ADDR2': data.AC_ADDR2,
        'AC_ADDR3': data.AC_ADDR3,
        'AC_PIN': data.AC_PIN,
        'AC_MOBILENO': data.AC_MOBILENO,
        'SMS_REQUIRED': data.SMS_REQUIRED,
        'IS_CURRENT_BODY_MEMBER': data.IS_CURRENT_BODY_MEMBER,
        'AC_CTCODE': data.AC_CTCODE,

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
    this.ngCity = null

    this.ngBranchCode = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
    }

    this.angForm.patchValue({
      BRANCH_CODE: result.branch.id
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
}




