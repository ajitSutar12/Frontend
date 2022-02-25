import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Subject } from "rxjs";
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
// Service File For Handling CRUD Operation
import { MoratoriumPeriod } from './moratorium-period-master.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface MoratoriumPeriodMaster {
  AC_ACNOTYPE: string;
  AC_TYPE: string;
  AC_NO: number;
  INSTALLMENT_NO: number;
  PERIOD: number;
  TRAN_DATE: Date;
  // USER_CODE:string;
  AC_RESO_NO: string;
  AC_RESO_DATE: Date
}

@Component({
  selector: 'app-moratoriumperiodmaster',
  templateUrl: './moratoriumperiodmaster.component.html',
  styleUrls: ['./moratoriumperiodmaster.component.scss']
})
export class MoratoriumperiodmasterComponent implements OnInit {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  formSubmitted = false;
  //api 
  url = environment.base_url;

  angForm: FormGroup;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  // Store data from backend
  moratoriumperiodmaster: MoratoriumPeriodMaster[];

  // for date 
  resolutiondate: any = null
  maxDate: Date;
  minDate: Date;

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

  // Filter Variable
  filterData = {};


  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  //dropdown variables
  scheme: any
  schemeedit: any = null
  accountedit: any = null
  schemeACNo: unknown;
  Accountno: any;
  openingDate: any;
  datemax: any;
  AC_ACNOTYPE: any;
  branch_code

  branchCode
  obj: any
  getschemename: any
  ngBranchCode: any = null
  updatecheckdata: any

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private moratoriumPeriod: MoratoriumPeriod,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private systemParameter: SystemMasterParametersService,
    private_router: Router,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.getSystemParaDate()
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
            this.url + '/moratorium-period-master',
            dataTableParameters
          ).subscribe(resp => {
            this.moratoriumperiodmaster = resp.data;
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
          title: 'Scheme',
          data: 'AC_TYPE'
        },

        {
          title: 'Account Number',
          data: 'AC_NO'
        },

        {
          title: 'Installment Number',
          data: 'INSTALLMENT_NO'
        },
        {
          title: 'Moratorium Period',
          data: 'PERIOD'
        },

        {
          title: 'Resolution Date',
          data: 'AC_RESO_DATE'
        },

        {
          title: 'Resolution Number',
          data: 'AC_RESO_NO'
        },

      ],
      dom: 'Blrtip',
    }

    this.http.get(this.url + '/scheme-parameters/moratorium').subscribe((data) => {
      this.scheme = data
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }

  }
  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required, Validators.pattern]],
      AC_NO: ['', [Validators.required, Validators.pattern]],
      INSTALLMENT_NO: ['', [Validators.required, Validators.pattern]],
      PERIOD: ['', [Validators.required, Validators.pattern]],
      AC_RESO_DATE: ['', [Validators.required, Validators.pattern]],
      AC_RESO_NO: ['', [Validators.required, Validators.pattern]],
      TRAN_DATE: [''],
      BRANCH_CODE: ['', [Validators.required]]
    });
  }

  //get scheme value and type
  schemechange(event) {
    this.getschemename = event.S_ACNOTYPE
    this.schemeedit = event.id
    this.getSchemeAccount()
  }

  //get agent account number after branch selection
  getBranch(event) {
    this.branchCode = event.name
    this.schemeedit = null
    this.getSchemeAccount()
  }

  //get account no according scheme for introducer
  getSchemeAccount() {
    this.obj = [this.schemeedit, this.ngBranchCode]
    this.accountedit = null
    switch (this.getschemename) {
      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  Accountnochange(event) {
    this.Accountno = event.value;
    this.accountedit = event.value
  }

  // Method to insert data into database through NestJS
  submit() {
    let resolutiondate
    this.formSubmitted = true;
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.schemeedit,
        AC_NO: this.Accountno,
        'BRANCH_CODE': this.ngBranchCode,
        'INSTALLMENT_NO': formVal.INSTALLMENT_NO,
        'PERIOD': formVal.PERIOD,
        'TRAN_DATE': formVal.TRAN_DATE,
        'AC_RESO_NO': formVal.AC_RESO_NO,
        'AC_RESO_DATE': (formVal.AC_RESO_DATE == '' || formVal.AC_RESO_DATE == 'Invalid date' || formVal.AC_RESO_DATE == undefined || formVal.AC_RESO_DATE == null) ? resolutiondate = '' : resolutiondate = moment(formVal.AC_RESO_DATE).format('DD/MM/YYYY'),
      }
      this.moratoriumPeriod.postData(dataToSend).subscribe(data1 => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
      }, (error) => {
        console.log(error)
      })
      //To clear form
      this.resetForm();
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
    })
  }

  //cancel button function
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
    this.schemeedit = null
    this.accountedit = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
  }

  //Method for append data into fields
  editClickHandler(id) {
    let resolutiondate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.moratoriumPeriod.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.updateID = data.id;
      this.schemeedit = data.AC_TYPE
      this.ngBranchCode = data.BRANCH_CODE
      this.getschemename = data.AC_ACNOTYPE
      this.getSchemeAccount()
      this.angForm.patchValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'INSTALLMENT_NO': data.INSTALLMENT_NO,
        'PERIOD': data.PERIOD,
        'TRAN_DATE': data.TRAN_DATE,
        'AC_RESO_NO': data.AC_RESO_NO,
        'AC_RESO_DATE': (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? resolutiondate = '' : resolutiondate = data.AC_RESO_DATE,
      })
      this.accountedit = data.AC_NO
    })
  }


  //Method for update data 
  updateData() {
    let resolutiondate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if (this.updatecheckdata.AC_RESO_DATE != data.AC_RESO_DATE) {
      (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? (resolutiondate = '', data['AC_RESO_DATE'] = resolutiondate) : (resolutiondate = data.AC_RESO_DATE, data['AC_RESO_DATE'] = moment(resolutiondate).format('DD/MM/YYYY'))
    }
    this.moratoriumPeriod.updateData(data).subscribe(() => {
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
  // Reset Function
  resetForm() {
    this.createForm();
    this.getSystemParaDate()
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();

    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#moratoriumperiodtable tfoot tr').appendTo('#moratoriumperiodtable thead');
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

}
