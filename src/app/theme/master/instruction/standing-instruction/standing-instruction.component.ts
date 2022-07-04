import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
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
import { StandingInstructionService } from './standing-instruction.service';
import { environment } from '../../../../../environments/environment'
import { FrequencyService } from '../../../../shared/dropdownService/frequency.service'
import { ExecutionDayService } from '../../../../shared/dropdownService/execution-day.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'

import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";
//date pipe
import { DatePipe } from '@angular/common';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface StandingInstruction {
  INSTRUCTION_NO: number
  INSTRUCTION_DATE: Date
  FROM_DATE: Date
  TO_DATE: Date
  DAYS: number
  EXECUTION_DAY: string
  DR_ACTYPE: string
  DR_AC_NO: number
  DR_PARTICULARS: string
  CR_ACTYPE: string
  CR_AC_NO: number
  CR_PARTICULARS: string
  SI_FREQUENCY: string
  LAST_EXEC_DATE: Date
  TRAN_TYPE: string
  REVOKE_DATE: Date
  ADV_NARRATION: string
  DEFAULT_INTEREST_APPLICABLE: boolean
}

@Component({
  selector: 'app-standing-instruction',
  templateUrl: './standing-instruction.component.html',
  styleUrls: ['./standing-instruction.component.scss']
})

export class StandingInstructionComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  angForm: FormGroup;
  formSubmitted = false;
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
  startDT
  //filter variable
  filterData = {};
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

  // Store data from backend
  standingInstruction: StandingInstruction[];
  frequencyOption = this.frequencyService.getCharacters();
  executionDay = this.executionDayService.getCharacters();
  ngExecutionDay: any = null
  ngFrequency: any = null
  acno: any = null
  ngAccno: any = null
  crno: any = null
  ngCrAccno: any = null

  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  crACno
  drACno
  allscheme
  debitScheme
  isCreditSetting: boolean = false

  constructor(private fb: FormBuilder, public frequencyService: FrequencyService,
    public executionDayService: ExecutionDayService,
    private _service: StandingInstructionService, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public router: Router,
    private datePipe: DatePipe,) { }

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
            this.url + '/standing-instruction',
            dataTableParameters
          ).subscribe(resp => {
            this.standingInstruction = resp.data;
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
          title: 'Instruction No',
          data: 'INSTRUCTION_NO'
        },
        {
          title: 'Date',
          data: 'INSTRUCTION_DATE'
        },
        {
          title: 'Start From',
          data: 'FROM_DATE'
        },
        {
          title: 'Next Execution On',
          data: 'TO_DATE'
        },
        {
          title: 'Last Executed On',
          data: 'LAST_EXEC_DATE'
        },
        {
          title: 'Scheme',
          data: 'DR_ACTYPE'
        },
        {
          title: 'Account No',
          data: 'DR_AC_NO'
        }, {
          title: 'Particulars',
          data: 'DR_PARTICULARS'
        }, {
          title: 'Credit Scheme',
          data: 'CR_ACTYPE'
        },
        {
          title: 'Credit Account No',
          data: 'CR_AC_NO'
        },
        {
          title: 'Particulars',
          data: 'CR_PARTICULARS'
        },
        {
          title: 'Frequency',
          data: 'SI_FREQUENCY'
        },
        {
          title: 'Revoke Date',
          data: 'REVOKE_DATE'
        },
      ],
      dom: 'Blrtip',
    };
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name != 'AG' && scheme.name != 'CA' && scheme.name != 'IV' && scheme.name != 'GS' && scheme.name != 'DS');
      });
      this.allscheme = allscheme;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'PG');
      });
      this.debitScheme = allscheme;
    })
  }

  createForm() {
    this.getSystemParaDate()
    this.angForm = this.fb.group({
      INSTRUCTION_NO: [''],
      INSTRUCTION_DATE: [''],
      EXECUTION_DAY: ['', [Validators.required]],
      DAYS: ['', [Validators.pattern]],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['',],
      DR_ACTYPE: ['', [Validators.required]],
      DR_AC_NO: ['', [Validators.required]],
      DR_PARTICULARS: ['', [Validators.required]],
      CR_ACTYPE: ['', [Validators.required]],
      CR_AC_NO: ['', [Validators.required]],
      CR_PARTICULARS: ['', [Validators.required]],
      SI_FREQUENCY: ['', [Validators.required]],
      LAST_EXEC_DATE: ['',],
      REVOKE_DATE: ['',],
      MIN_BAL: ['',],
      PAYINT_AMOUNT: ['',],
      IS_AUTO_CUT_LNPGCOM: ['',],
      isAutoBalance: ['',],
    });
  }
  instructionDate
  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.instructionDate = data.CURRENT_DATE
      this.angForm.patchValue({
        INSTRUCTION_DATE: data.CURRENT_DATE
      })
    })
  }

  //calculation of start day based on execution day
  setStartDate(exe_day) {
    this.angForm.patchValue({
      FROM_DATE: '',
      TO_DATE: ''
    })
    var date = new Date();
    if (exe_day.value == 'Month Begin') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var firstDate = this.datePipe.transform(firstDay, "yyyy-MM-dd")
      var full = []
      var fullDate = firstDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        FROM_DATE: newDate
      })
    }
    else if (exe_day.value == 'Month End') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      let date = new Date()
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var lastDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      var full = []
      var fullDate = lastDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        FROM_DATE: newDate
      })
    }
    else {
      this.angForm.controls['DAYS'].enable()
    }
    this.ngFrequency = null
    this.startDT = this.angForm.controls['FROM_DATE'].value
  }
  //calculation for start date based on sepcific days
  fromDate() {
    var date = new Date();
    var days = this.angForm.controls['DAYS'].value
    var year = date.getFullYear();
    var month = new Date(date).getMonth();
    var day = new Date(date).getDate();
    var startDay = day + Number(days)
    var startDate = new Date(year, month, startDay);
    var fromDate = this.datePipe.transform(startDate, "yyyy-MM-dd")
    var full = []
    var fullDate = fromDate;
    full = fullDate.split(' ');
    var ndate = full[0].split(/\-/);
    var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
    this.angForm.patchValue({
      FROM_DATE: newDate
    })
    this.startDT = this.angForm.controls['FROM_DATE'].value
  }
  startDateT
  endDate
  //calculation of next execution day based on frequency
  setNextExeDate(next_exe_day) {
    let startDate
    if (this.startDT == this.startDateT) {
      startDate = this.startDT
    }
    else {
      startDate = moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY')
    }
    var startfull = []
    var formatfullDate = startDate;
    startfull = formatfullDate.split(' ');
    var fdate = startfull[0].split(/\//);
    var newformatDate = fdate[2] + '-' + fdate[1] + '-' + fdate[0]
    var date = new Date(newformatDate);
    if (next_exe_day.value == 'Monthly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 1
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        TO_DATE: newDate
      })
    }
    else if (next_exe_day.value == 'Quarterly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 3
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        TO_DATE: newDate
      })
    }
    else if (next_exe_day.value == 'Fixed Quarterly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();

      if (month <= 5 && month >= 3) {
        var exe_day = 5
        var nextDate = new Date(year, exe_day, day);
        var lastDay = new Date(date.getFullYear(), nextDate.getMonth() + 1, 0);
        var nextExeDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      }
      else if (month <= 8 && month >= 6) {
        var exe_day = 8
        var nextDate = new Date(year, exe_day, day);
        var lastDay = new Date(date.getFullYear(), nextDate.getMonth() + 1, 0);
        var nextExeDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      }
      else if (month <= 11 && month >= 9) {
        var exe_day = 11
        var nextDate = new Date(year, exe_day, day);
        var lastDay = new Date(date.getFullYear(), nextDate.getMonth() + 1, 0);
        var nextExeDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      }
      else if (month <= 2 && month >= 0) {
        var exe_day = 2
        var nextDate = new Date(year, exe_day, day);
        var lastDay = new Date(date.getFullYear(), nextDate.getMonth() + 1, 0);
        var nextExeDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      }
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        TO_DATE: newDate
      })
    }
    else if (next_exe_day.value == 'Half Yearly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 6
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        TO_DATE: newDate
      })
    }
    this.endDate = this.angForm.controls['TO_DATE'].value
  }

  //get account no according scheme
  getCreditDetails(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.crno, branchCode]
    this.ngCrAccno = null
    switch (event.name) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = false
        })
        break;
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = false
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = true
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = true
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = false
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(obj).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = false
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getShareSchemeList1(obj).subscribe(data => {
          this.crACno = data;
          this.isCreditSetting = false
        })
        break;
    }

  }
  //get account no according scheme
  getDebitDeatils(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.acno, branchCode]
    this.ngAccno = null
    this.isCreditSetting = false
    this.angForm.controls['isAutoBalance'].disable()
    this.angForm.patchValue({
      isAutoBalance: false
    })
    switch (event.name) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.drACno = data;
        })
        break;
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.drACno = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.drACno = data;
          this.angForm.controls['isAutoBalance'].enable()
        })
        break;
    }
  }

  isAutoBalanceCheck(event) {
    if (event.target.checked) {
      this.angForm.controls['MIN_BAL'].enable()
      this.angForm.controls['PAYINT_AMOUNT'].disable()
    }
    else {
      this.angForm.controls['MIN_BAL'].disable()
      this.angForm.patchValue({
        MIN_BAL: ''
      })
      this.angForm.controls['PAYINT_AMOUNT'].enable()
    }
  }

  submit() {
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      let redate
      const dataToSend = {
        'BRANCH_CODE': branchCode,
        'INSTRUCTION_NO': formVal.INSTRUCTION_NO,
        'INSTRUCTION_DATE': formVal.INSTRUCTION_DATE,
        'DAYS': formVal.DAYS,
        'FROM_DATE': formVal.FROM_DATE,
        'TO_DATE': formVal.TO_DATE,
        'EXECUTION_DAY': formVal.EXECUTION_DAY,
        'DR_ACTYPE': formVal.DR_ACTYPE,
        'DR_AC_NO': formVal.DR_AC_NO,
        'DR_PARTICULARS': formVal.DR_PARTICULARS,
        'CR_ACTYPE': formVal.CR_ACTYPE,
        'CR_AC_NO': formVal.CR_AC_NO,
        'CR_PARTICULARS': formVal.CR_PARTICULARS,
        'SI_FREQUENCY': formVal.SI_FREQUENCY,
        'LAST_EXEC_DATE': formVal.LAST_EXEC_DATE,
        'REVOKE_DATE': formVal.REVOKE_DATE,
        'MIN_BAL': formVal.MIN_BAL,
        'PAYINT_AMOUNT': formVal.PAYINT_AMOUNT,
        'IS_AUTO_CUT_LNPGCOM': formVal.IS_AUTO_CUT_LNPGCOM,
      };
      if (this.startDT == this.startDateT) {
        dataToSend['FROM_DATE'] = this.startDT
      }
      else {
        dataToSend['FROM_DATE'] = moment(formVal.FROM_DATE).format('DD/MM/YYYY')
      }
      this.instructionDate == this.angForm.controls['INSTRUCTION_DATE'].value ? dataToSend['INSTRUCTION_DATE'] = this.instructionDate : dataToSend['INSTRUCTION_DATE'] = moment(this.angForm.controls['INSTRUCTION_DATE'].value).format('DD/MM/YYYY')
      this.endDate == this.angForm.controls['TO_DATE'].value ? dataToSend['TO_DATE'] = this.instructionDate : dataToSend['TO_DATE'] = moment(this.angForm.controls['TO_DATE'].value).format('DD/MM/YYYY')
      this._service.postData(dataToSend).subscribe(
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
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._service.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      let branchCode = result.branch.id;
      this.updateID = data.id;
      if (data.standingInsDr != null) {
        this.acno = data.DR_ACTYPE
        let obj = [this.acno, branchCode]
        this.ngAccno = null
        switch (data.standingInsDr.S_SHNAME) {
          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
              this.drACno = data;
            })
            break;
          case 'SB':
            this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
              this.drACno = data;
            })
            break;

          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
              this.drACno = data;
              this.angForm.controls['isAutoBalance'].enable()
            })
            break;
        }
        this.ngAccno = Number(data.DR_AC_NO)
      }
      else {
        this.crno = data.CR_ACTYPE
        let obj = [this.crno, branchCode]
        this.ngCrAccno = null
        switch (data.standingInsCr.S_SHNAME) {
          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = false
            })
            break;
          case 'SB':
            this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = false
            })
            break;

          case 'LN':
            this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = true
            })
            break;

          case 'CC':
            this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = true
            })
            break;


          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = false
            })
            break;

          case 'SH':
            this.schemeAccountNoService.getShareSchemeList1(obj).subscribe(data => {
              this.crACno = data;
              this.isCreditSetting = false
            })
            break;
        }
        this.ngCrAccno = Number(data.CR_AC_NO)
      }

      if (data.MIN_BAL != '') {
        this.angForm.patchValue({
          isAutoBalance: true
        })
      }
      else {
        this.angForm.patchValue({
          isAutoBalance: false
        })
      }

      this.angForm.patchValue({
        'INSTRUCTION_NO': data.INSTRUCTION_NO,
        'INSTRUCTION_DATE': data.INSTRUCTION_DATE,
        'DAYS': data.DAYS,
        'FROM_DATE': data.FROM_DATE,
        'TO_DATE': data.TO_DATE,
        'EXECUTION_DAY': data.EXECUTION_DAY,
        'DR_ACTYPE': data.DR_ACTYPE,
        'DR_AC_NO': data.DR_AC_NO,
        'DR_PARTICULARS': data.DR_PARTICULARS,
        'CR_ACTYPE': data.CR_ACTYPE,
        'CR_AC_NO': data.CR_AC_NO,
        'CR_PARTICULARS': data.CR_PARTICULARS,
        'SI_FREQUENCY': data.SI_FREQUENCY,
        'LAST_EXEC_DATE': data.LAST_EXEC_DATE,
        'REVOKE_DATE': data.REVOKE_DATE,
        'MIN_BAL': data.MIN_BAL,
        'PAYINT_AMOUNT': data.PAYINT_AMOUNT,
        'IS_AUTO_CUT_LNPGCOM': data.IS_AUTO_CUT_LNPGCOM,
      })
    })
    this.angForm.controls['LAST_EXEC_DATE'].enable()
    this.angForm.controls['REVOKE_DATE'].enable()
  }

  //function toggle update to add button
  updateData() {
    let fromdate
    let todate
    let lastExe
    let revokeDate
    let startDate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if (this.updatecheckdata.INSTRUCTION_DATE != data.INSTRUCTION_DATE) {
      (data.INSTRUCTION_DATE == 'Invalid date' || data.INSTRUCTION_DATE == '' || data.INSTRUCTION_DATE == null) ? (fromdate = '', data['INSTRUCTION_DATE'] = fromdate) : (fromdate = data.INSTRUCTION_DATE, data['INSTRUCTION_DATE'] = moment(fromdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.FROM_DATE != data.FROM_DATE) {
      (data.FROM_DATE == 'Invalid date' || data.FROM_DATE == '' || data.FROM_DATE == null) ? (startDate = '', data['FROM_DATE'] = startDate) : (startDate = data.FROM_DATE, data['FROM_DATE'] = moment(startDate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.TO_DATE != data.TO_DATE) {
      (data.TO_DATE == 'Invalid date' || data.TO_DATE == '' || data.TO_DATE == null) ? (todate = '', data['TO_DATE'] = todate) : (todate = data.TO_DATE, data['TO_DATE'] = moment(todate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.LAST_EXEC_DATE != data.LAST_EXEC_DATE) {
      (data.LAST_EXEC_DATE == 'Invalid date' || data.LAST_EXEC_DATE == '' || data.LAST_EXEC_DATE == null) ? (lastExe = '', data['LAST_EXEC_DATE'] = lastExe) : (lastExe = data.LAST_EXEC_DATE, data['LAST_EXEC_DATE'] = moment(lastExe).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.REVOKE_DATE != data.REVOKE_DATE) {
      (data.REVOKE_DATE == 'Invalid date' || data.REVOKE_DATE == '' || data.REVOKE_DATE == null) ? (revokeDate = '', data['REVOKE_DATE'] = revokeDate) : (revokeDate = data.REVOKE_DATE, data['REVOKE_DATE'] = moment(revokeDate).format('DD/MM/YYYY'))
    }
    this._service.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.angForm.controls['LAST_EXEC_DATE'].disable()
      this.angForm.controls['REVOKE_DATE'].disable()
      this.resetForm();
    })
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Date data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      /* run code if our result  isConfirmed function Swal.fire open a modal window to display message
      else if result is dismiss then it cancel and open a modal window to display cancel message
       */
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
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

  // Reset Function
  resetForm() {
    this.createForm();
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
    this.ngExecutionDay = null
    this.ngFrequency = null
    this.acno = null
    this.ngAccno = null
    this.crno = null
    this.ngCrAccno = null
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
  }

  //reset function while update
  addNewData() {
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
    this.ngExecutionDay = null
    this.ngFrequency = null
    this.acno = null
    this.ngAccno = null
    this.crno = null
    this.ngCrAccno = null
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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
