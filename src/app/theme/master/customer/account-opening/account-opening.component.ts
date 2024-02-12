import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BankMasterService } from '../../../../shared/dropdownService/bank-Master-dropdown.service';
import { ClearingbranchMasterService } from '../../../../shared/dropdownService/clearing-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { InvestmentService } from './account-opening.service';
import { BankService } from '../../policy-settings/information/bank-master/bank-master.service';
import { environment } from '../../../../../environments/environment';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { NgSelectComponent } from '@ng-select/ng-select';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import { TranslateService } from '@ngx-translate/core';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface InvestmentMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  INVEST_BANK: string
  INVEST_BRANCH: string
  AC_NAME: string
  AC_REF_RECEIPTNO: number
  AC_OPDATE: Date
  AC_ASON_DATE: Date
  AC_EXPDT: Date
  AC_MONTHS: number
  AC_DAYS: number
  AC_SCHMAMT: number
  AC_INTRATE: number
  AC_MATUAMT: number
  AC_CLOSEDT: Date
}
@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss']
})

export class AccountOpeningComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();
  //api 
  url = environment.base_url;
  formSubmitted = false;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  // Store data from backend
  investmentMaster: InvestmentMaster[];
  dtExportOptions: DataTables.Settings = {};
  Data: any;
  datemax: any;
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
  //variable to get ID to update
  updateID: number = 0;
  // Filter Variable
  filterData = {};
  
  //Scheme type variable
  schemeType: string = 'IV'

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  id: string = '';
  BankCode: any[];
  branch_code: any[];
  scheme: any[];
  bsValue
  AC_TYPE: boolean = false
  code: any = null
  ngBank: any = null
  ngBranch: any = null
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  logDate
  maxDate: any
  minDate: Date
  expiryDate: string;
  constructor(private fb: FormBuilder,
    private bankMasterService: BankMasterService,
    private ownbranchMasterService: ClearingbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private bankService: BankService,
    private investmentService: InvestmentService,
    private http: HttpClient,    private _termDepositScheme: TermDepositSchemeService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService
    ) {
      this.translate.setDefaultLang(environment.setLang)
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.logDate = data.CURRENT_DATE
    })
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/investment',
            dataTableParameters
          ).subscribe(resp => {
            this.investmentMaster = resp.data;
            console.log('this.investmentMaster', this.investmentMaster)
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
          title: this.translate.instant('master.Action.Action'),
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Scheme'),
          data: 'AC_TYPE'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Ac_No'),
          data: 'BANKACNO'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Member_Name'),
          data: 'AC_NAME'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Bank_Code'),
          data: 'INVEST_BANK'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Branch_Code'),
          data: 'INVEST_BRANCH'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Ac_Open_Date'),
          data: 'AC_OPDATE'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.As_On_Date'),
          data: 'AC_ASON_DATE'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Maturity_Date'),
          data: 'AC_EXPDT'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Receipt_No'),
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Interest'),
          data: 'AC_INTRATE'
        },
        {
          title: this.translate.instant('master.Investment_Ac_Opening.Deposit_Amount'),
          data: 'AC_SCHMAMT'
        },

        {
          title: this.translate.instant('master.Investment_Ac_Opening.Maturity_Amount'),
          data: 'AC_MATUAMT'
        },

      ],
      dom: 'Blrtip',
    };
    this.bankMasterService.getBankList().pipe(first()).subscribe(data => {
      this.BankCode = data;
    })
    this.ownbranchMasterService.getClearingbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.code = this.scheme[0].value
    })

    this._termDepositScheme.getFormData(this.code).subscribe(data => {
      if (data.UNIT_OF_PERIOD == "B") {
        this.angForm.controls['AC_MONTHS'].enable()
        this.angForm.controls['AC_DAYS'].enable()
      }
      else if (data.UNIT_OF_PERIOD == "D") {
        this.angForm.controls['AC_MONTHS'].disable()
        this.angForm.controls['AC_DAYS'].enable()
      }
      else if (data.UNIT_OF_PERIOD == "M") {
        this.angForm.controls['AC_MONTHS'].enable()
        this.angForm.controls['AC_DAYS'].disable()
      }
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_ACNOTYPE: ['IV'],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      INVEST_BANK: ['', [Validators.required]],
      INVEST_BRANCH: ['', [Validators.required]],
      AC_NAME: [''],
      AC_REF_RECEIPTNO: ['', [Validators.pattern, Validators.required]],
      AC_OPDATE: ['', [Validators.required]],
      AC_ASON_DATE: ['', [Validators.required]],
      AC_EXPDT: ['', [Validators.required]],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_DAYS: ['', [Validators.pattern, Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AC_INTRATE: ['', [Validators.pattern, Validators.required]],
      AC_MATUAMT: ['', [Validators.pattern]],
      AC_CLOSEDT: ['']
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['INVEST_BRANCH'].enable()
      this.ngBranch = result.branch.id

    }
    else {
      this.angForm.controls['INVEST_BRANCH'].disable()
      this.angForm.patchValue({
        'INVEST_BRANCH': result.branch.id
      })
      this.ngBranch = result.branch.id

    }
  }

  getBranch(event) {
    this.ngBranch = event.value
  }
  submit() {
    const formVal = this.angForm.value;
    //get bank code and branch code from session
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let bankCode = Number(result.branch.syspara.BANK_CODE)
    let schecode
    this.scheme.forEach(async (element) => {
      if (element.value == this.code) {
        schecode = element.name
      }
    })
    const dataToSend = {
      'branchCode': branchCode,
      'bankCode': bankCode,
      'schemeCode': schecode,
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'INVEST_BANK': formVal.INVEST_BANK,
      'INVEST_BRANCH': this.ngBranch,
      'AC_NAME': formVal.AC_NAME,
      'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
      'AC_OPDATE': (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == null || formVal.AC_OPDATE == 'Invalid date') ? '' : moment(formVal.AC_OPDATE).format('DD/MM/YYYY'),
      'AC_ASON_DATE': (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == null || formVal.AC_ASON_DATE == 'Invalid date') ? '' : moment(formVal.AC_ASON_DATE).format('DD/MM/YYYY'),
      'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == null || formVal.AC_EXPDT == 'Invalid date') ? '' : formVal.AC_EXPDT,
      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_DAYS': formVal.AC_DAYS,
      'AC_SCHMAMT': formVal.AC_SCHMAMT,
      'AC_INTRATE': formVal.AC_INTRATE,
      'AC_MATUAMT': formVal.AC_MATUAMT,
      'AC_CLOSEDT': (formVal.AC_CLOSEDT == '' || formVal.AC_CLOSEDT == null || formVal.AC_CLOSEDT == 'Invalid date') ? '' : moment(formVal.AC_CLOSEDT).format('DD/MM/YYYY'),
      // 'AC_CLOSEDT': formVal.AC_CLOSEDT
    }
    this.investmentService.postData(dataToSend).subscribe(data => {
      // Swal.fire('Success!', 'Data Added Successfully !', 'success');
      Swal.fire({
        icon: 'success',
        title: 'Account Created successfully!',
        html:
          '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
          '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
      })
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });


    }, (error) => {
      console.log(error)
    })
    this.ngBank = null
    this.addNewData()
    //To clear form
    this.resetForm();
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.angForm.controls['AC_CLOSEDT'].disable()
    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.angForm.controls['AC_CLOSEDT'].disable()
    this.code = null
    this.ngBank = null
    // this.ngBranch = null
    this.createForm();

  }
  getBankName(event) {
    this.bankService.getFormData(event.value).subscribe(data => {
      this.angForm.patchValue({
        INVEST_BANK: event.value,
        AC_NAME: data.BANK_NAME
      })
    })
  }
  updatecheckdata
  //Method for append data into fields
  editClickHandler(id, status) {
    this.angForm.controls['AC_CLOSEDT'].enable()
    this.investmentService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN != null && data.status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && status == 0) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'INVEST_BANK': Number(data.INVEST_BANK),
        'INVEST_BRANCH': Number(data.INVEST_BRANCH),
        'AC_NAME': data.AC_NAME,
        'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_ASON_DATE': data.AC_ASON_DATE,
        'AC_EXPDT': data.AC_EXPDT,
        'AC_MONTHS': data.AC_MONTHS,
        'AC_DAYS': data.AC_DAYS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        'AC_INTRATE': data.AC_INTRATE,
        'AC_MATUAMT': data.AC_MATUAMT,
        'AC_CLOSEDT': data.AC_CLOSEDT
      })
      this.ngBank = Number(data.INVEST_BANK)
      this.ngBranch = Number(data.INVEST_BRANCH)
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    let opdate
    let AC_ASON_DATE
    let AC_EXPDT
    let AC_CLOSEDT
    if (this.updatecheckdata.AC_OPDATE != data.AC_OPDATE) {
      (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = data.AC_OPDATE
    }

    if (this.updatecheckdata.AC_ASON_DATE != data.AC_ASON_DATE) {
      (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (AC_ASON_DATE = '', data['AC_ASON_DATE'] = AC_ASON_DATE) : (AC_ASON_DATE = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment(AC_ASON_DATE).format('DD/MM/YYYY'))
    } else {
      data['AC_ASON_DATE'] = data.AC_ASON_DATE
    }

    if (this.updatecheckdata.AC_EXPDT != data.AC_EXPDT) {
      (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (AC_EXPDT = '', data['AC_EXPDT'] = AC_EXPDT) : (AC_EXPDT = data.AC_EXPDT, data['AC_EXPDT'] = moment(AC_EXPDT).format('DD/MM/YYYY'))
    } else {
      data['AC_EXPDT'] = data.AC_EXPDT
    }
    if (this.updatecheckdata.AC_CLOSEDT != data.AC_CLOSEDT) {
      (data.AC_CLOSEDT == 'Invalid date' || data.AC_CLOSEDT == '' || data.AC_CLOSEDT == null) ? (AC_CLOSEDT = '', data['AC_CLOSEDT'] = AC_CLOSEDT) : (AC_CLOSEDT = data.AC_CLOSEDT, data['AC_CLOSEDT'] = moment(AC_CLOSEDT).format('DD/MM/YYYY'))
    } else {
      data['AC_CLOSEDT'] = data.AC_CLOSEDT
    }

    data['id'] = this.updateID;
    this.investmentService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;

      this.resetForm();
    })
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

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.investmentService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Investment Account approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.investmentService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Investment Account rejected successfully',
        'success'
      );

      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
  // for decimal 
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  checkmargin(ele: any) {
    //check  if given value  is below 50
    if (ele.target.value <= 50) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 50", "error");
      ele.target.value = 0

    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.investmentService.unapporve(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  setMaturityDate() {
    var maturityDt = moment(this.angForm.controls['AC_ASON_DATE'].value, 'DD/MM/YYYY')
    let expiryT = moment(maturityDt, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY')
    let expiryDate = moment(expiryT, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY')
    this.angForm.patchValue({
      AC_EXPDT: expiryDate
    })
  }

  CheckmonthDays() {

    this._termDepositScheme.getFormData(this.code).subscribe(data => {
      if (data.UNIT_OF_PERIOD == "B") {
        this.angForm.controls['AC_MONTHS'].enable()
        this.angForm.controls['AC_DAYS'].enable()
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
          this.angForm.controls['AC_MONTHS'].reset()
          this.angForm.controls['AC_DAYS'].reset()
        }
      }
      else if (data.UNIT_OF_PERIOD == "D") {
        this.angForm.patchValue({
          AC_MONTHS: ''
        })
        this.angForm.controls['AC_MONTHS'].disable()
        this.angForm.controls['AC_DAYS'].enable()
        if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
          this.angForm.controls['AC_DAYS'].reset()
        }
      }
      else if (data.UNIT_OF_PERIOD == "M") {
        this.angForm.patchValue({
          AC_DAYS: '',
        })
        this.angForm.controls['AC_MONTHS'].enable()
        this.angForm.controls['AC_DAYS'].disable()
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
          Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
          this.angForm.controls['AC_MONTHS'].reset()
        }
      }


      if (data.UNIT_OF_PERIOD == "B" && data.IS_AUTO_PERIOD_CALCULATE == '1') {
        this.angForm.controls['AC_MONTHS'].enable()
        this.angForm.controls['AC_DAYS'].enable()
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_MONTHS'].reset()
          this.angForm.controls['AC_DAYS'].reset()
        }
      }

      var date1 = this.angForm.controls['AC_ASON_DATE'].value;
      let expiryT = moment(date1, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY')
      let expiryDate = moment(expiryT, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY')
      this.expiryDate = expiryDate
      this.angForm.patchValue({
        AC_EXPDT: expiryDate
      })


      if (data.MULTIPLE_OF_DAYS != null) {
        if ((Number((this.angForm.controls['AC_DAYS'].value)) % Number((data.MULTIPLE_OF_DAYS))) != 0) {
          Swal.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
        }
      }
      if (data.MULTIPLE_OF_MONTH != null) {
        if ((Number((this.angForm.controls['AC_MONTHS'].value)) % Number((data.MULTIPLE_OF_MONTH))) != 0) {
          Swal.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
        }
      }
    })
  }
  monthDays() {
    if (this.code != null) {
      this._termDepositScheme.getFormData(this.code).subscribe(data => {
        if (this.angForm.controls['AC_EXPDT'].value != null && this.angForm.controls['AC_EXPDT'].value != '') {
          var date1 = this.angForm.controls['AC_ASON_DATE'].value;
          var date2 = this.angForm.controls['AC_EXPDT'].value;
          var b = moment(date1, "DD-MM-YYYY");
          var a = moment(date2, "DD-MM-YYYY");
          var bd = moment(date1, "DD-MM-YYYY");
          var ab = moment(date2, "DD-MM-YYYY");
          var months = a.diff(b, 'months');
          var days = a.diff(b, 'days');
          b.add(months, 'months');

          var Diffmonths = ab.diff(bd, 'months');
          bd.add(months, 'months');

          var Diffdays = ab.diff(bd, 'days');

          if (data.IS_AUTO_PERIOD_CALCULATE == '1') {
            this.angForm.patchValue({
              AC_MONTHS: months,
              AC_DAYS: Diffdays,
            })
          }
          else {
            if (data.UNIT_OF_PERIOD == "B") {
              this.angForm.controls['AC_MONTHS'].enable()
              this.angForm.controls['AC_DAYS'].enable()
              this.angForm.patchValue({
                AC_MONTHS: months,
                AC_DAYS: Diffdays,
              })
              if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
                this.angForm.controls['AC_MONTHS'].reset()
                this.angForm.controls['AC_DAYS'].reset()
                this.angForm.controls['AC_EXPDT'].reset()
              }
              else {
                this.angForm.patchValue({
                  AC_MONTHS: months,
                  AC_DAYS: Diffdays
                })
              }
            }
            else if (data.UNIT_OF_PERIOD == "D") {
              this.angForm.patchValue({
                AC_MONTHS: '',
                AC_DAYS: days,
              })
              this.angForm.controls['AC_MONTHS'].disable()
              this.angForm.controls['AC_DAYS'].enable()
              if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
                this.angForm.controls['AC_DAYS'].reset()
                this.angForm.controls['AC_EXPDT'].reset()
              }
            }
            else if (data.UNIT_OF_PERIOD == "M") {
              this.angForm.patchValue({
                AC_DAYS: '',
                AC_MONTHS: months,
              })
              this.angForm.controls['AC_MONTHS'].enable()
              this.angForm.controls['AC_DAYS'].disable()
              if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
                Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
                this.angForm.controls['AC_MONTHS'].reset()
                this.angForm.controls['AC_EXPDT'].reset()
              }
            }
          }
        }
      })
      let obj = {
        scheme: this.code,
        // AC_INTCATA: this.ngIntCategory,
        days: Number(this.angForm.controls['AC_DAYS'].value),
        month: Number(this.angForm.controls['AC_MONTHS'].value)
      }
      this.http.post(this.url + '/term-deposits-master/getInterestRate', obj).subscribe(data => {
        // debugger
        let int: any;
        if (this.angForm.controls['AC_INTRATE'].value != '' && data == 0) {
          int = this.angForm.controls['AC_INTRATE'].value;
        } else {
          int = data
        }
        this.angForm.patchValue({
          AC_INTRATE: int
        })
      })
    }

  }
  
} 
