import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
import { InterestInstructionService } from './interest-instruction.service';
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
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface InterestInstruction {
  INSTRUCTION_NO: number
  INSTRUCTION_DATE: Date
  FROM_DATE: Date
  NEXT_EXE_DATE: Date
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
  selector: 'app-interest-instruction',
  templateUrl: './interest-instruction.component.html',
  styleUrls: ['./interest-instruction.component.scss']
})

export class InterestInstructionComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  @Output() newTDCustomerEvent = new EventEmitter<object>();
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
  interestInstruction: InterestInstruction[];
  frequencyOption = this.frequencyService.getCharacters();
  executionDay = this.executionDayService.getCharacters();
  ngExecutionDay: any = null
  ngFrequency: any = null
  acno: any = null
  ngAccno: any = null
  crno: any = null
  ngCrAccno: any = null

  //Scheme type variable
  schemeType: string = 'TD'
  termSchemeAC
  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)

  crACno

  allscheme
  maxDate
  cashTrue: boolean = true;
  transferTrue: boolean = false;
  formSubmitted = false;
  setLang: string;

  constructor(private fb: FormBuilder, public frequencyService: FrequencyService,
    public executionDayService: ExecutionDayService,
    private _interestInstruction: InterestInstructionService, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public router: Router,
    private datePipe: DatePipe,
    private translate:TranslateService) 
     {this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    }) 
      }

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
            this.url + '/interest-instruction',
            dataTableParameters
          ).subscribe(resp => {
            this.interestInstruction = resp.data;
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
          title: this.translate.instant('master.Action.Action')
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Instruction_Number'),
          data: 'INSTRUCTION_NO'
        },
        {
          title:this.translate.instant('master.Interest_Instructions.Date'),
          data: 'INSTRUCTION_DATE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Start_From'),
          data: 'FROM_DATE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Next_Execution_On'),
          data: 'NEXT_EXE_DATE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Transfer'),
          data: 'TRAN_TYPE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Last_Execution_On'),
          data: 'LAST_EXEC_DATE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Scheme'),
          data: 'DR_ACTYPE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Account_Number'),
          data: 'DR_AC_NO'
        }, {
          title: this.translate.instant('master.Interest_Instructions.Particulars'),
          data: 'DR_PARTICULARS'
        }, {
          title: this.translate.instant('master.Interest_Instructions.Credit_Scheme'),
          data: 'CR_ACTYPE'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Credit_Account_No'),
          data: 'CR_AC_NO'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Particulars'),
          data: 'CR_PARTICULARS'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Frequency'),
          data: 'SI_FREQUENCY'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Revoke_Date'),
          data: 'REVOKE_DATE'
        },
        {
          title:this.translate.instant('master.Interest_Instructions.Advice_Narration'),
          data: 'ADV_NARRATION'
        },
        {
          title: this.translate.instant('master.Interest_Instructions.Interest_Applicable'),
          data: 'DEFAULT_INTEREST_APPLICABLE'
        },],
      dom: 'Blrtip'
    };
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');
      });
      this.scheme = filtered;
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'SH' || scheme.name == 'GL')

      });
      this.allscheme = allscheme;
    })
    this.schemeCodeDropdownService.getTermDepositSchemeRD().pipe(first()).subscribe(TDdata => {
      this.allscheme.push(TDdata)
    })
  }
  cashoption: boolean = false
  transferoption: boolean = false
  OpenLink(val) {
    if (val == 1) {
      this.cashTrue = true;
      this.transferTrue = false;
      if (this.cashTrue == true) {
        this.cashoption = true
      }
      else if (this.cashTrue === false) {
        this.cashoption = false
      }

      this.crno = null
      this.angForm.patchValue({
        CR_PARTICULARS: '',
        CR_AC_NO: '',
        ADV_NARRATION: '',
        CR_ACTYPE: null
      })
      this.ngCrAccno = null
      // document.getElementById('cashScheme').setAttribute("required", "true")
    }
    else if (val == 2) {
      this.cashTrue = false;
      this.transferTrue = true;
      this.acno = null

      this.angForm.patchValue({
        DR_PARTICULARS: '',
        DR_AC_NO: '',
        DR_ACTYPE: null
      })
      this.ngAccno = null
      if (this.transferTrue == true) {
        this.transferoption = true
      }
      else if (this.transferTrue === false) {
        this.transferoption = false
      }
    }
    else {
      this.cashTrue = false;
      this.transferTrue = false;
    }
  }
  instructionDate
  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.instructionDate = data.CURRENT_DATE
      this.angForm.patchValue({
        INSTRUCTION_DATE: data.CURRENT_DATE
      })
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  //get account no according scheme
  getTermAc(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.acno, branchCode]
    this.ngAccno = null
    switch (event.name) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).subscribe(data1 => {
          this.termSchemeAC = data1;
        })
        break;
    }
  }
  startDT
  //calculation of start day based on execution day
  setStartDate(exe_day) {
    this.angForm.patchValue({
      FROM_DATE: '',
      NEXT_EXE_DATE: ''
    })
    let currentDate = this.angForm.controls['INSTRUCTION_DATE'].value
    // var date = new Date();
    var check = moment(currentDate, 'DD/MM/YYYY');
    let month = Number(check.format('MM')) - 1;
    // var month = check.format('MM') - 1;
    var day = Number(check.format('DD'));
    var year = Number(check.format('YYYY'));
    let date = new Date(Number(year), Number(month), Number(day))
    if (exe_day.value == 'MB') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      var firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
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
    else if (exe_day.value == 'ME') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      var lastDay = new Date(date.getFullYear(), date.getMonth()-1 + 2, 0);


      if (day > lastDay.getDate()) {
        day = lastDay.getDate();
      }
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
    var startDate = new Date(year, month, days);
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
  TODate
  //calculation of next execution day based on frequency
  setNextExeDate(next_exe_day) {
    // let startDate = this.angForm.controls['FROM_DATE'].value
    let startDate
    if (this.startDT == this.angForm.controls['FROM_DATE'].value) {
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
    if (next_exe_day.value == 'M') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();

      if (day == 30) {
        let nextMonthDate = new Date(year, month + 1, 1);
        nextMonthDate.setDate(0);

        if (day > nextMonthDate.getDate()) {
          day = nextMonthDate.getDate();
        }
      }
      var exe_day = month + 1
      if ((exe_day == 7)||(exe_day == 12)) {
        var nextDate = new Date(year, exe_day, day);
      }
      else {
        if (day == 31) {
          var nextDate = new Date(year, exe_day, day - 1);
        }
        else if (day == 30) {
          var nextDate = new Date(year, exe_day, day + 1);
        }
        else {
          var nextDate = new Date(year, exe_day, day);
        }
      }
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        NEXT_EXE_DATE: newDate
      })
    }
    else if (next_exe_day.value == 'Q') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();


      if (day == 30) {
        let nextMonthDate = new Date(year, month + 1, 1);
        nextMonthDate.setDate(0);

        if (day > nextMonthDate.getDate()) {
          day = nextMonthDate.getDate();
        }
      }
      var exe_day = month + 1
      if ((exe_day == 7)||(exe_day == 12)) {
        var nextDate = new Date(year, exe_day, day);

      }
      else {
        if (day == 31) {
          var nextDate = new Date(year, exe_day, day - 1);
        }
        else if (day == 30) {
          var nextDate = new Date(year, exe_day, day + 1);
        }
        else {
          var nextDate = new Date(year, exe_day, day);
        }
      }

      var exe_day = month + 3
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        NEXT_EXE_DATE: newDate
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
        NEXT_EXE_DATE: newDate
      })
    }
    else if (next_exe_day.value == 'H') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();


      if (day == 30) {
        let nextMonthDate = new Date(year, month + 1, 1);
        nextMonthDate.setDate(0);

        if (day > nextMonthDate.getDate()) {
          day = nextMonthDate.getDate();
        }
      }
      var exe_day = month + 1
      if ((exe_day == 7)||(exe_day == 12)) {
        var nextDate = new Date(year, exe_day, day);

      }
      else {
        if (day == 31) {
          var nextDate = new Date(year, exe_day, day - 1);
        }
        else if (day == 30) {
          var nextDate = new Date(year, exe_day, day + 1);
        }
        else {
          var nextDate = new Date(year, exe_day, day);
        }
      }

      var exe_day = month + 6
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      var full = []
      var fullDate = nextExeDate;
      full = fullDate.split(' ');
      var ndate = full[0].split(/\-/);
      var newDate = ndate[2] + '/' + ndate[1] + '/' + ndate[0]
      this.angForm.patchValue({
        NEXT_EXE_DATE: newDate
      })
    }
    this.TODate = this.angForm.controls['NEXT_EXE_DATE'].value
  }

  //get account no according scheme
  getTermCreditAc(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.crno, branchCode]
    this.ngCrAccno = null
    switch (event.name) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(data => {
          this.crACno = data;
        })
        break;
    }

  }

  createForm() {
    this.getSystemParaDate()
    this.angForm = this.fb.group({
      INSTRUCTION_NO: [],
      INSTRUCTION_DATE: [],
      EXECUTION_DAY: ['', [Validators.required]],
      DAYS: ['', [Validators.pattern]],
      FROM_DATE: ['', [Validators.required]],
      NEXT_EXE_DATE: [],
      DR_ACTYPE: [],
      DR_AC_NO: [],
      DR_PARTICULARS: [],
      CR_ACTYPE: [],
      CR_AC_NO: [],
      CR_PARTICULARS: [],
      SI_FREQUENCY: ['', [Validators.required]],
      LAST_EXEC_DATE: [],
      TRAN_TYPE: ['Transfer', [Validators.required]],
      REVOKE_DATE: [],
      ADV_NARRATION: [],
      DEFAULT_INTEREST_APPLICABLE: [false],
    });
    this.OpenLink(2)
  }

  submit() {
    // if (this.angForm.valid) {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let redate
    const dataToSend = {
      'BRANCH_CODE': branchCode,
      'INSTRUCTION_NO': formVal.INSTRUCTION_NO,
      // 'INSTRUCTION_DATE': formVal.INSTRUCTION_DATE,
      'DAYS': formVal.DAYS,
      // 'FROM_DATE': formVal.FROM_DATE,
      'NEXT_EXE_DATE': formVal.NEXT_EXE_DATE,
      'EXECUTION_DAY': formVal.EXECUTION_DAY,
      'DR_ACTYPE': formVal.DR_ACTYPE,
      'DR_AC_NO': formVal.DR_AC_NO,
      'DR_PARTICULARS': formVal.DR_PARTICULARS,
      'CR_ACTYPE': formVal.CR_ACTYPE,
      'CR_AC_NO': formVal.CR_AC_NO,
      'CR_PARTICULARS': formVal.CR_PARTICULARS,
      'SI_FREQUENCY': formVal.SI_FREQUENCY,
      'LAST_EXEC_DATE': formVal.LAST_EXEC_DATE,
      'TRAN_TYPE': formVal.TRAN_TYPE,
      'REVOKE_DATE': formVal.REVOKE_DATE,
      'ADV_NARRATION': formVal.ADV_NARRATION,
      'DEFAULT_INTEREST_APPLICABLE': (formVal.DEFAULT_INTEREST_APPLICABLE == true ? '1' : '0'),
    };
    // this.instructionDate == this.angForm.controls['INSTRUCTION_DATE'].value ? dataToSend['INSTRUCTION_DATE'] = this.instructionDate : dataToSend['INSTRUCTION_DATE'] = moment(this.angForm.controls['INSTRUCTION_DATE'].value).format('DD/MM/YYYY')
    // this.startDT == this.angForm.controls['FROM_DATE'].value ? dataToSend['FROM_DATE'] = this.startDT : dataToSend['FROM_DATE'] = moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY')
    // this.TODate == this.angForm.controls['NEXT_EXE_DATE'].value ? dataToSend['NEXT_EXE_DATE'] = this.TODate : dataToSend['NEXT_EXE_DATE'] = moment(this.angForm.controls['NEXT_EXE_DATE'].value).format('DD/MM/YYYY')

    let INSTRUCTION_DATE = moment(this.angForm.controls['INSTRUCTION_DATE'].value, 'DD/MM/YYYY')
    dataToSend['INSTRUCTION_DATE'] = moment(INSTRUCTION_DATE).format('DD/MM/YYYY')
    let FROM_DATE = moment(this.angForm.controls['FROM_DATE'].value, 'DD/MM/YYYY')
    dataToSend['FROM_DATE'] = moment(FROM_DATE).format('DD/MM/YYYY')
    let NEXT_EXE_DATE = moment(this.angForm.controls['NEXT_EXE_DATE'].value, 'DD/MM/YYYY')
    dataToSend['NEXT_EXE_DATE'] = moment(NEXT_EXE_DATE).format('DD/MM/YYYY')
    this._interestInstruction.postData(dataToSend).subscribe(
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
    // }
    // else {
    //   Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    // }

  }
  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['LAST_EXEC_DATE'].enable()
    this.angForm.controls['REVOKE_DATE'].enable()
    this._interestInstruction.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      let branchCode = result.branch.id;
      if (data.interestDr != null) {
        this.acno = data.DR_ACTYPE
        let obj = [this.acno, branchCode]
        this.ngAccno = null
        switch (data.interestDr.S_ACNOTYPE) {
          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(obj).subscribe(datatd => {
              this.termSchemeAC = datatd;
              this.ngAccno = (data.DR_AC_NO)
            })
            break;
        }
      }
      if (data.interestCr != null) {
        this.crno = data.CR_ACTYPE
        let obj = [this.crno, branchCode]
        this.ngCrAccno = null
        switch (data.interestCr.S_ACNOTYPE) {
          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;
          case 'SB':
            this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'CA':
            this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'LN':
            this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'DS':
            this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'CC':
            this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'GS':
            this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;

          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).subscribe(datacr => {
              this.crACno = datacr;
              this.ngCrAccno = (data.CR_AC_NO)
            })
            break;
        }

      }
      else {
        this.angForm.patchValue({
          'CR_ACTYPE': null,
          'CR_AC_NO': null,
          'CR_PARTICULARS': null,
        })
      }
      if (data.TRAN_TYPE == "Transfer") {
        this.transferTrue = true
        this.cashTrue = false
      }
      else {
        this.cashTrue = true
        this.transferTrue = false
      }
      this.updateID = data.id;
      this.angForm.patchValue({
        'INSTRUCTION_NO': data.INSTRUCTION_NO,
        'INSTRUCTION_DATE': data.INSTRUCTION_DATE,
        'DAYS': data.DAYS,
        'FROM_DATE': data.FROM_DATE,
        'NEXT_EXE_DATE': data.NEXT_EXE_DATE,
        'EXECUTION_DAY': data.EXECUTION_DAY,
        'DR_ACTYPE': data.DR_ACTYPE,
        // 'DR_AC_NO': data.DR_AC_NO,
        'DR_PARTICULARS': data.DR_PARTICULARS,
        'CR_ACTYPE': data.CR_ACTYPE,
        // 'CR_AC_NO': data.CR_AC_NO,
        'CR_PARTICULARS': data.CR_PARTICULARS,
        'SI_FREQUENCY': data.SI_FREQUENCY,
        'LAST_EXEC_DATE': data.LAST_EXEC_DATE,
        'TRAN_TYPE': data.TRAN_TYPE,
        'REVOKE_DATE': data.REVOKE_DATE,
        'ADV_NARRATION': data.ADV_NARRATION,
        'DEFAULT_INTEREST_APPLICABLE': (data.DEFAULT_INTEREST_APPLICABLE == '1' ? true : false),
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
    data['DEFAULT_INTEREST_APPLICABLE'] = (data.DEFAULT_INTEREST_APPLICABLE == true ? '1' : '0')
    if (this.updatecheckdata.INSTRUCTION_DATE != data.INSTRUCTION_DATE) {
      (data.INSTRUCTION_DATE == 'Invalid date' || data.INSTRUCTION_DATE == '' || data.INSTRUCTION_DATE == null) ? (fromdate = '', data['INSTRUCTION_DATE'] = fromdate) : (fromdate = data.INSTRUCTION_DATE, data['INSTRUCTION_DATE'] = moment(fromdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.FROM_DATE != data.FROM_DATE) {
      (data.FROM_DATE == 'Invalid date' || data.FROM_DATE == '' || data.FROM_DATE == null) ? (startDate = '', data['FROM_DATE'] = startDate) : (startDate = data.FROM_DATE, data['FROM_DATE'] = startDate)
    }
    if (this.updatecheckdata.NEXT_EXE_DATE != data.NEXT_EXE_DATE) {
      (data.NEXT_EXE_DATE == 'Invalid date' || data.NEXT_EXE_DATE == '' || data.NEXT_EXE_DATE == null) ? (todate = '', data['NEXT_EXE_DATE'] = todate) : (todate = data.NEXT_EXE_DATE, data['NEXT_EXE_DATE'] = todate)
    }
    if (this.updatecheckdata.LAST_EXEC_DATE != data.LAST_EXEC_DATE) {
      (data.LAST_EXEC_DATE == 'Invalid date' || data.LAST_EXEC_DATE == '' || data.LAST_EXEC_DATE == null) ? (lastExe = '', data['LAST_EXEC_DATE'] = lastExe) : (lastExe = data.LAST_EXEC_DATE, data['LAST_EXEC_DATE'] = moment(lastExe).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.REVOKE_DATE != data.REVOKE_DATE) {
      (data.REVOKE_DATE == 'Invalid date' || data.REVOKE_DATE == '' || data.REVOKE_DATE == null) ? (revokeDate = '', data['REVOKE_DATE'] = revokeDate) : (revokeDate = data.REVOKE_DATE, data['REVOKE_DATE'] = moment(revokeDate).format('DD/MM/YYYY'))
    }
    this._interestInstruction.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.angForm.controls['LAST_EXEC_DATE'].disable()
      this.angForm.controls['REVOKE_DATE'].disable()
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
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
    this.ngExecutionDay = null
    this.ngFrequency = null
    this.acno = null
    this.ngAccno = null
    this.crno = null
    this.ngCrAccno = null
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

  delClickHandler(info: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Date.",
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

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
      // dtInstance.columns().every(function () {
      //   const that = this;
      //   $('input', this.footer()).on('keyup change', function () {
      //     if (this['value'] != '') {
      //       that
      //         .search(this['value'])
      //         .draw();
      //     } else {
      //       that
      //         .search(this['value'])
      //         .draw();
      //     }
      //   });
      // });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  addNewTDAccount(value) {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let redate
    let dataToSend = {
      'BRANCH_CODE': branchCode,
      'INSTRUCTION_NO': formVal.INSTRUCTION_NO,
      'INSTRUCTION_DATE': formVal.INSTRUCTION_DATE,
      'DAYS': formVal.DAYS,
      'FROM_DATE': formVal.FROM_DATE,
      'NEXT_EXE_DATE': formVal.NEXT_EXE_DATE,
      'EXECUTION_DAY': formVal.EXECUTION_DAY,
      'DR_ACTYPE': formVal.DR_ACTYPE,
      'DR_AC_NO': formVal.DR_AC_NO,
      'DR_PARTICULARS': formVal.DR_PARTICULARS,
      'CR_ACTYPE': formVal.CR_ACTYPE,
      'CR_AC_NO': formVal.CR_AC_NO,
      'CR_PARTICULARS': formVal.CR_PARTICULARS,
      'SI_FREQUENCY': formVal.SI_FREQUENCY,
      'LAST_EXEC_DATE': formVal.LAST_EXEC_DATE,
      'TRAN_TYPE': formVal.TRAN_TYPE,
      'REVOKE_DATE': formVal.REVOKE_DATE,
      'ADV_NARRATION': formVal.ADV_NARRATION,
      'DEFAULT_INTEREST_APPLICABLE': (formVal.DEFAULT_INTEREST_APPLICABLE == true ? '1' : '0'),
    };
    this.instructionDate == this.angForm.controls['INSTRUCTION_DATE'].value ? dataToSend['INSTRUCTION_DATE'] = this.instructionDate : dataToSend['INSTRUCTION_DATE'] = moment(this.angForm.controls['INSTRUCTION_DATE'].value).format('DD/MM/YYYY')
    this.startDT == this.angForm.controls['FROM_DATE'].value ? dataToSend['FROM_DATE'] = this.startDT : dataToSend['FROM_DATE'] = moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY')
    this.TODate == this.angForm.controls['NEXT_EXE_DATE'].value ? dataToSend['NEXT_EXE_DATE'] = this.TODate : dataToSend['NEXT_EXE_DATE'] = moment(this.angForm.controls['NEXT_EXE_DATE'].value).format('DD/MM/YYYY')

    this.newTDCustomerEvent.emit(dataToSend);
  }

  onCloseModal() {
    var closemodal = document.getElementById('triggerTD')
    closemodal.click();

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

  checkdracno(eve) {
    debugger
    this.ngAccno = eve
    console.log(eve)
  }
}
