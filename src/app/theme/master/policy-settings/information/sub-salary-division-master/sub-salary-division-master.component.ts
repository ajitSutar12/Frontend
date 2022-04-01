import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { SubSalaryService } from './sub-salary-division-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { SalaryDMasterdropdownService } from '../../../../../shared/dropdownService/salary-division-master-dropdown.service'
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface SubSalaryMaster {
  CODE: number;
  NAME: string;
  AT_POST: string;
  TALUKA_NAME: string;
  DISTRICT_NAME: string;
  PHNO: number;
  MOBNO: number;
  SAL_CODE: number;
  AC_EMAILID: string;
}

@Component({
  selector: 'app-sub-salary-division-master',
  templateUrl: './sub-salary-division-master.component.html',
  styleUrls: ['./sub-salary-division-master.component.scss']
})
export class SubSalaryDivisionMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  subsalarymasters: SubSalaryMaster[];
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
  ngdivcode: any = null
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  ngBranchCode
  branchCode
  branch_code

  //variable to get Id to update
  updateID: number = 0;
  id: string = '';
  // column filter 
  filterData = {};
  division = []
  constructor(
    private http: HttpClient,
    private subSalaryDivisionService: SubSalaryService,
    private subSalaryDivision: SalaryDMasterdropdownService,
    private ownbranchMasterService: OwnbranchMasterService,

    private fb: FormBuilder,
    private config: NgSelectConfig,) {
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

        // column filter
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/sub-salary-division-master',
            dataTableParameters
          ).subscribe(resp => {
            console.log(resp.data)
            this.subsalarymasters = resp.data;
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
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          title: 'Sub Code',
          data: 'CODE'
        },
        {
          title: 'Division Code',
          data: 'SAL_CODE'
        },
        {
          title: 'Name',
          data: 'NAME'
        }
      ],
      dom: 'Blrtip',
    };
    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // this.angForm.controls['BRANCH_CODE'].disable()
    // this.ngBranchCode = result.branch.id
    // this.branchCode = result.branch.CODE


    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.subSalaryDivision.getSalaryMasterList().pipe(first()).subscribe(data => {
        this.division = data;
      })
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchCode = result.branch.CODE
      this.subSalaryDivision.getSalaryDMasterList(this.ngBranchCode).pipe(first()).subscribe(data => {
        this.division = data;
      })
    }
    // this.subSalaryDivision.getSalaryMasterList().pipe(first()).subscribe(data => {
    //   this.division = data;
    // })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      SAL_CODE: ['', [Validators.required]],
      CODE: [''],
      NAME: ['', [Validators.pattern, Validators.required]],
      AT_POST: ['', [Validators.pattern]],
      TALUKA_NAME: ['', [Validators.pattern]],
      DISTRICT_NAME: ['', [Validators.pattern]],
      AC_EMAILID: ['', [Validators.pattern]],
      PHNO: ['', [Validators.pattern]],
      MOBNO: ['', [Validators.pattern]],
      BRANCH_CODE: ['']

    });
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'SAL_CODE': formVal.SAL_CODE,
      'CODE': formVal.CODE,
      'NAME': formVal.NAME,
      'AT_POST': formVal.AT_POST,
      'TALUKA_NAME': formVal.TALUKA_NAME,
      'DISTRICT_NAME': formVal.DISTRICT_NAME,
      'AC_EMAILID': formVal.AC_EMAILID,
      'PHNO': formVal.PHNO,
      'MOBNO': formVal.MOBNO,
      'BRANCH_CODE': this.ngBranchCode


    }
    this.subSalaryDivisionService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // to reload after insertion of data
      // this.rerender();
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
    this.subSalaryDivisionService.getFormData(id).subscribe(data => {
      this.ngBranchCode = Number(data.BRANCH_CODE),
        console.log(data)
      this.updateID = data.id;
      this.ngdivcode = data.SAL_CODE
      this.angForm.patchValue({

        'CODE': data.CODE,
        'NAME': data.NAME,
        'AT_POST': data.AT_POST,
        'TALUKA_NAME': data.TALUKA_NAME,
        'DISTRICT_NAME': data.DISTRICT_NAME,
        'AC_EMAILID': data.AC_EMAILID,
        'PHNO': data.PHNO,
        'MOBNO': data.MOBNO,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.subSalaryDivisionService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
      this.resetForm();
    })
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete sub salary division Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subSalaryDivisionService.deleteData(id).subscribe(data1 => {
          this.subsalarymasters = data1;
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
    this.ngdivcode = null
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
  value = 0;
  checkId(id) {

    this.subSalaryDivisionService.getFormData(id).subscribe(data => {
      if (data.CODE == null) {
        this.angForm.setValue({
          'CODE': this.value + 1
        })
      }
    })

  }

  getData() {
    this.subSalaryDivision.getSalaryDMasterList(this.ngBranchCode).pipe(first()).subscribe(data => {
      this.division = data;
    })
  }
}
