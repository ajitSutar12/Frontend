import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
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
  frequencyOption: Array<IOption> = this.frequencyService.getCharacters();
  executionDay: Array<IOption> = this.executionDayService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  //Scheme type variable
  schemeType: string = 'TD'
  termSchemeAC
  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  acno
  crACno
  crno
  allscheme

  cashTrue: boolean = true;
  transferTrue: boolean = false;

  constructor(private fb: FormBuilder, public frequencyService: FrequencyService,
    public executionDayService: ExecutionDayService,
    private _interestInstruction: InterestInstructionService, private http: HttpClient,
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
          data: 'NEXT_EXE_DATE'
        },
        {
          title: 'TRAN Type',
          data: 'TRAN_TYPE'
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
        {
          title: 'Advice Narration',
          data: 'ADV_NARRATION'
        },
        {
          title: 'Is Discounted Interest Applicable',
          data: 'DEFAULT_INTEREST_APPLICABLE'
        },],
      dom: 'Blrtip'
    };
    this.runTimer();
    this.dataSub = this.frequencyService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.executionDayService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.value == 'TD');
      });
      this.scheme = filtered;
      var allscheme = data.filter(function (scheme) {
        return (scheme.value != 'AG' && scheme.value != 'SH' && scheme.value != 'IV'); //scheme.value == TD  scheme having only RD option 
      });
      this.allscheme = allscheme;
    })
  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
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

      document.getElementById('cashScheme').setAttribute("required", "true")
      console.log('cashoption value', this.cashoption)
    }
    else if (val == 2) {
      this.cashTrue = false;
      this.transferTrue = true;
      if (this.transferTrue == true) {
        this.transferoption = true
      }
      else if (this.transferTrue === false) {
        this.transferoption = false
      }
      console.log('cashoption value', this.cashoption)
      console.log('transferoption value', this.transferoption)
    }
    else {
      this.cashTrue = false;
      this.transferTrue = false;
      console.log('3cash value', this.cashTrue)
    }
  }

  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        INSTRUCTION_DATE: data.CURRENT_DATE
      })
    })
  }

  //get account no according scheme
  getTermAc(acno) {
    switch (acno) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.termSchemeAC = data;
        })
        break;
    }
  }
  //calculation of start day based on execution day
  setStartDate(exe_day) {
    var date = new Date();
    if (exe_day.value == 'Month Begin') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var firstDate = this.datePipe.transform(firstDay, "yyyy-MM-dd")
      this.angForm.patchValue({
        FROM_DATE: firstDate
      })
    }
    else if (exe_day.value == 'Month End') {
      this.angForm.controls['DAYS'].disable()
      this.angForm.controls['DAYS'].reset()
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var lastDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
      this.angForm.patchValue({
        FROM_DATE: lastDate
      })
    }
    else {
      this.angForm.controls['DAYS'].enable()
    }
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
    this.angForm.patchValue({
      FROM_DATE: fromDate
    })
  }
  //calculation of next execution day based on frequency
  setNextExeDate(next_exe_day) {
    var date = new Date(this.angForm.controls['FROM_DATE'].value);
    if (next_exe_day.value == 'Monthly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 1
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      this.angForm.patchValue({
        NEXT_EXE_DATE: nextExeDate
      })
    }
    else if (next_exe_day.value == 'Quarterly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 3
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      this.angForm.patchValue({
        NEXT_EXE_DATE: nextExeDate
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
      this.angForm.patchValue({
        NEXT_EXE_DATE: nextExeDate
      })
    }
    else if (next_exe_day.value == 'Half Yearly') {
      var year = date.getFullYear();
      var month = new Date(date).getMonth();
      var day = new Date(date).getDate();
      var exe_day = month + 6
      var nextDate = new Date(year, exe_day, day);
      var nextExeDate = this.datePipe.transform(nextDate, "yyyy-MM-dd")
      this.angForm.patchValue({
        NEXT_EXE_DATE: nextExeDate
      })
    }
  }

  //get account no according scheme
  getTermCreditAc(crno) {
    switch (crno) {
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList().pipe(first()).subscribe(data => {
          this.crACno = data;
        })
        break;

    }

  }

  createForm() {
    this.getSystemParaDate()
    this.angForm = this.fb.group({
      INSTRUCTION_NO: [''],
      INSTRUCTION_DATE: [''],
      EXECUTION_DAY: ['', [Validators.required]],
      DAYS: ['', [Validators.pattern]],
      FROM_DATE: ['', [Validators.required]],
      NEXT_EXE_DATE: ['',],
      DR_ACTYPE: ['',],
      DR_AC_NO: ['',],
      DR_PARTICULARS: [''],
      CR_ACTYPE: ['',],
      CR_AC_NO: ['',],
      CR_PARTICULARS: ['',],
      SI_FREQUENCY: ['', [Validators.required]],
      LAST_EXEC_DATE: ['',],
      TRAN_TYPE: ['', [Validators.required]],
      REVOKE_DATE: ['',],
      ADV_NARRATION: ['',],
      DEFAULT_INTEREST_APPLICABLE: ['',],
    });
  }

  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
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
      'DEFAULT_INTEREST_APPLICABLE': formVal.DEFAULT_INTEREST_APPLICABLE,
    };
    // console.log(this.angForm.value);
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
  }

  //function for edit button clicked
  editClickHandler(id): void {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['LAST_EXEC_DATE'].enable()
    this.angForm.controls['REVOKE_DATE'].enable()
    this._interestInstruction.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.patchValue({
        'INSTRUCTION_NO': data.INSTRUCTION_NO,
        'INSTRUCTION_DATE': data.INSTRUCTION_DATE,
        'DAYS': data.DAYS,
        'FROM_DATE': data.FROM_DATE,
        'NEXT_EXE_DATE': data.NEXT_EXE_DATE,
        'EXECUTION_DAY': data.EXECUTION_DAY,
        'DR_ACTYPE': data.DR_ACTYPE,
        'DR_AC_NO': data.DR_AC_NO.toString(),
        'DR_PARTICULARS': data.DR_PARTICULARS,
        'CR_ACTYPE': data.CR_ACTYPE,
        'CR_AC_NO': data.CR_AC_NO.toString(),
        'CR_PARTICULARS': data.CR_PARTICULARS,
        'SI_FREQUENCY': data.SI_FREQUENCY,
        'LAST_EXEC_DATE': data.LAST_EXEC_DATE,
        'TRAN_TYPE': data.TRAN_TYPE,
        'REVOKE_DATE': data.REVOKE_DATE,
        'ADV_NARRATION': data.ADV_NARRATION,
        'DEFAULT_INTEREST_APPLICABLE': data.DEFAULT_INTEREST_APPLICABLE,
      })
    })
  }

  //function toggle update to add button
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._interestInstruction.updateData(data).subscribe(() => {
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
    this.angForm.controls['LAST_EXEC_DATE'].disable()
    this.angForm.controls['REVOKE_DATE'].disable()
  }

  //reset function while update
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
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
}
