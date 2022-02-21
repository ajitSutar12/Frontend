import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { freezeAccountService } from '../../../../shared/dropdownService/freeze-account.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { FreezeAccountService } from './freeze-account.service'
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment'
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;

}
// For fetching values from backend
interface FreezAccount {
  AC_TYPE: string
  AC_NO: number
  // AC_CUSTID: string
  AC_FREEZE_STATUS: string
  AC_FREEZE_AMOUNT: number
  AC_FREEZE_DATE: Date
  AC_FREEZE_REASON: string
}

@Component({
  selector: 'app-freeze-account',
  templateUrl: './freeze-account.component.html',
  styleUrls: ['./freeze-account.component.scss']
})
export class FreezeAccountComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api
  url = environment.base_url;
  scheme
  Cust_ID
  acno: any = null

  allScheme // all scheme
  schemeACNo //account no 
  ngacno: any = null
  freezoption: Array<IOption> = this.freezeAccountService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  // Store data from backend
  freezAccount: FreezAccount[];
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

  datemin: any;//setting max date
  freezStatus: any = null
  //todays date
  date = new Date();
  effectdate: any = null
  maxDate: Date;
  minDate: Date;
  // column search
  filterData = {};


  bankAcno
  actype

  constructor(private fb: FormBuilder,
    private freezeAccountService: freezeAccountService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private FreezeAccountService: FreezeAccountService,
    private schemeAccountNoService: SchemeAccountNoService,
    private http: HttpClient,
    private config: NgSelectConfig,) {
    this.setdate()
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    // this.dtExportButtonOptions = {
    //   pagingType: 'full_numbers',
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     let datatableRequestParam: any;
    //     this.page = dataTableParameters.start / dataTableParameters.length;
    //     dataTableParameters['filterData'] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + '/freez-account',
    //         dataTableParameters
    //       ).subscribe(resp => {
    //         this.freezAccount = resp.data;
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: resp.data
    //         });
    //       });
    //   },
    //   columnDefs: [{
    //     targets: '_all',
    //     defaultContent: ""
    //   }],
    //   columns: [
    //     {
    //       title: 'Action',
    //     },
    //     {
    //       title: 'Scheme',
    //       data: 'AC_TYPE'
    //     },
    //     {
    //       title: 'Account No',
    //       data: 'AC_NO'
    //     },
    //     // {
    //     //   title: 'Customer ID',
    //     //   data: 'AC_CUSTID'
    //     // },
    //     {
    //       title: 'Freeze Status',
    //       data: 'AC_FREEZE_STATUS'
    //     },
    //     {
    //       title: 'Freeze Amount',
    //       data: 'AC_FREEZE_AMOUNT'
    //     },
    //     {
    //       title: 'Freeze Date',
    //       data: 'AC_FREEZE_DATE'
    //     },
    //     {
    //       title: 'Remark',
    //       data: 'AC_FREEZE_REASON'
    //     }

    //   ],
    //   dom: 'Blrtip',
    // };

    this.dataSub = this.freezeAccountService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      // AC_CUSTID: ['',],
      AC_FREEZE_STATUS: ['', [Validators.required]],
      AC_FREEZE_AMOUNT: [0, [Validators.pattern]],
      AC_FREEZE_DATE: ['',],
      AC_FREEZE_REASON: ['', [Validators.pattern]]
    });
  }

  submit() {
    if (this.angForm.valid) {
      let effectdate
      this.formSubmitted = true;
      const formVal = this.angForm.value;
      if (formVal.AC_FREEZE_STATUS == 'No Freeze' || formVal.AC_FREEZE_STATUS == 'Total Amount' || formVal.AC_FREEZE_STATUS == 'Only Withdrawal') {
        formVal.AC_FREEZE_AMOUNT = 0
      }
      const dataToSend = {
        AC_TYPE: this.actype,
        AC_NO: formVal.AC_NO,
        BANKACNO: this.bankAcno,
        'AC_FREEZE_STATUS': formVal.AC_FREEZE_STATUS,
        'AC_FREEZE_AMOUNT': formVal.AC_FREEZE_AMOUNT,
        'AC_FREEZE_DATE': (formVal.AC_FREEZE_DATE == '' || formVal.AC_FREEZE_DATE == 'Invalid date' || formVal.AC_FREEZE_DATE == null || formVal.AC_FREEZE_DATE == undefined) ? effectdate = '' : effectdate = moment(formVal.AC_FREEZE_DATE).format('DD/MM/YYYY'),
        'AC_FREEZE_REASON': formVal.AC_FREEZE_REASON
      }
      this.FreezeAccountService.postData(dataToSend).subscribe(data => {
        Swal.fire('Success!', 'Data Added Successfully !', 'success');
        this.formSubmitted = false;
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
  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id): void {
    let effectdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.FreezeAccountService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.angForm.setValue({
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,
        // 'AC_CUSTID': data.AC_CUSTID,
        'AC_FREEZE_STATUS': data.AC_FREEZE_STATUS,
        'AC_FREEZE_AMOUNT': data.AC_FREEZE_AMOUNT,
        'EFFECT_DATE': (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? effectdate = '' : effectdate = data.EFFECT_DATE,
        // 'AC_FREEZE_DATE': data.AC_FREEZE_DATE,
        'AC_FREEZE_REASON': data.AC_FREEZE_REASON
      })
    })
  }
  mem
  getBankAcno(event) {
    this.bankAcno = event.bankacno
    this.mem = [this.actype, this.bankAcno]
    this.http.get(this.url + '/freez-account/check/' + this.mem).subscribe((data) => {
      if (data != null) {
        this.freezStatus = data[0]?.AC_FREEZE_STATUS
        this.angForm.patchValue({
          AC_FREEZE_AMOUNT: data[0]?.AC_FREEZE_AMOUNT,
          AC_FREEZE_DATE: data[0]?.AC_FREEZE_DATE,
          AC_FREEZE_REASON: data[0]?.AC_FREEZE_REASON
        })
      }
      else {
        this.freezStatus = null
        this.angForm.patchValue({
          AC_FREEZE_AMOUNT: '',
          AC_FREEZE_DATE: '',
          AC_FREEZE_REASON: '',
        })
      }
    })
  }

  //get account no according scheme 
  getSchemeAcNO(event) {
    this.freezStatus = null
    this.actype = event.name
    this.angForm.patchValue({
      AC_FREEZE_AMOUNT: '',
      AC_FREEZE_DATE: '',
      AC_FREEZE_REASON: '',
    })
    this.ngacno = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let obj = [this.acno, branchCode]
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  //set date 18 years before current date
  setdate() {
    const d = new Date();
    let day = d.getDate();
    const m = new Date().getMonth()
    const year = new Date().getFullYear()
    this.datemin = year + "-" + m + "-" + day;
  }

  //set date on keyup event
  keyupdate(date: any) {
    const d = new Date();
    let day = d.getDate();
    const m = new Date().getMonth()
    const year = new Date().getFullYear();
    this.datemin = year + "-" + m + "-" + day;
    if (date != "") {
      if (date < this.datemin) {
        Swal.fire("Cancelled", "please input date below" + this.datemin, "error");
        this.angForm.controls['AC_FREEZE_DATE'].reset()
      }
    }
  }

  //function for delete button clicked
  delClickHandler(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete freez account data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
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

  //function toggle update to add button
  updateData() {
    let effectdate
    let data = this.angForm.value;
    data['id'] = this.updateID;
    if (this.updatecheckdata.EFFECT_DATE != data.EFFECT_DATE) {
      (data.EFFECT_DATE == 'Invalid date' || data.EFFECT_DATE == '' || data.EFFECT_DATE == null) ? (effectdate = '', data['EFFECT_DATE'] = effectdate) : (effectdate = data.EFFECT_DATE, data['EFFECT_DATE'] = moment(effectdate).format('DD/MM/YYYY'))
    }
    this.FreezeAccountService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after delete of data
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
    this.acno = null
    this.ngacno = null
    this.freezStatus = null
  }

  freezDeatils(freezStatus) {
    if (freezStatus == 'No Freeze') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
      this.angForm.controls['AC_FREEZE_AMOUNT'].reset()
      this.angForm.controls['AC_FREEZE_DATE'].disable()
      this.angForm.controls['AC_FREEZE_DATE'].reset()
      this.angForm.controls['AC_FREEZE_REASON'].disable()
      this.angForm.controls['AC_FREEZE_REASON'].reset()
    }
    else if (freezStatus == 'Total Amount') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
      this.angForm.controls['AC_FREEZE_AMOUNT'].reset()
      this.angForm.controls['AC_FREEZE_DATE'].enable()
      this.angForm.controls['AC_FREEZE_REASON'].enable()
    }
    else if (freezStatus == 'Only Withdrawal') {
      this.angForm.controls['AC_FREEZE_AMOUNT'].disable()
      this.angForm.controls['AC_FREEZE_AMOUNT'].reset()
      this.angForm.controls['AC_FREEZE_DATE'].enable()
      this.angForm.controls['AC_FREEZE_REASON'].enable()
    }
    else {
      this.angForm.controls['AC_FREEZE_AMOUNT'].enable()
      this.angForm.controls['AC_FREEZE_DATE'].enable()
      this.angForm.controls['AC_FREEZE_REASON'].enable()
    }
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
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
    // });
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.acno = null
    this.ngacno = null
    this.freezStatus = null
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
