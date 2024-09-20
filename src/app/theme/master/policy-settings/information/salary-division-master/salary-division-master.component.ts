import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
// Service File For Handling CRUD Operation
import { SalaryDivisionService } from './salary-division-master.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment'
import { OwnbranchMasterService } from '../../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { first } from 'rxjs/operators';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface SalaryMaster {
  CODE: number;
  NAME: string;
  AC_NO: number;
  SHORT_NAME: string;
  AT_POST: string;
  TALUKA_NAME: string;
  DISTRICT_NAME: string;
  BRANCH_CODE: number;
  PHNO: number;
  MOBNO: number;
}

@Component({
  selector: 'app-salary-division-master',
  templateUrl: './salary-division-master.component.html',
  styleUrls: ['./salary-division-master.component.scss']
})
export class SalaryDivisionMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  salarymasters: SalaryMaster[];
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
  ngbranchcode: any = null
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  // branchCode = [];
  // column filter
  filterData = {}
  ngBranchCode
  branch_code
  branchCode
  constructor(
    private http: HttpClient,
    private salaryDivisionService: SalaryDivisionService,
    private ownbranchMaster: OwnbranchMasterService,
    private fb: FormBuilder,
    private config: NgSelectConfig, private translate:TranslateService) {
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
            this.url + '/salary-division-master',
            dataTableParameters
          ).subscribe(resp => {
            this.salarymasters = resp.data;
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
          // title: 'Action',
          title: this.translate.instant('master.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          }
        },
        {
          // title: 'Code',
          title: this.translate.instant('master.Salary_Div_Master.Code'),
          data: 'CODE'
        },
        {
          // title: 'Full Name',
          title: this.translate.instant('master.Salary_Div_Master.Full_Name'),
          data: 'NAME'
        },
        {
          // title: 'District Name',
          title: this.translate.instant('master.Salary_Div_Master.District_name'),
          data: 'DISTRICT_NAME'
        },
        {
          // title: 'Branch Code',
          title: this.translate.instant('master.Salary_Div_Master.Branch_Code'),
          data: 'BRANCH_CODE'
        },
      ], dom: 'Blrtip',
    };
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

    this.ownbranchMaster.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      CODE: [''],
      NAME: ['', [Validators.pattern, Validators.required]],
      SHORT_NAME: ['', [Validators.pattern, Validators.required]],
      AT_POST: ['', [Validators.pattern]],
      TALUKA_NAME: ['', [Validators.pattern]],
      DISTRICT_NAME: ['', [Validators.pattern]],
      BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
      PHNO: ['', [Validators.pattern]],
      MOBNO: ['', [Validators.pattern]],
    });
  }
  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'CODE': formVal.CODE,
      'NAME': formVal.NAME,
      'SHORT_NAME': formVal.SHORT_NAME,
      'AT_POST': formVal.AT_POST,
      'TALUKA_NAME': formVal.TALUKA_NAME,
      'DISTRICT_NAME': formVal.DISTRICT_NAME,
      'BRANCH_CODE': this.ngBranchCode,
      'PHNO': formVal.PHNO,
      'MOBNO': formVal.MOBNO,

    }
    this.salaryDivisionService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
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
    this.salaryDivisionService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngBranchCode = Number(data.BRANCH_CODE),
      this.angForm.patchValue({
        'CODE': data.CODE,
        'NAME': data.NAME,
        'SHORT_NAME': data.SHORT_NAME,
        'AT_POST': data.AT_POST,
        'TALUKA_NAME': data.TALUKA_NAME,
        'DISTRICT_NAME': data.DISTRICT_NAME,
        // 'BRANCH_CODE': data.BRANCH_CODE,
        'PHNO': data.PHNO,
        'MOBNO': data.MOBNO,
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.salaryDivisionService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete salary division Master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.salaryDivisionService.deleteData(id).subscribe(data1 => {
          this.salarymasters = data1;
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
    // this.ngbranchcode= null
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
  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
