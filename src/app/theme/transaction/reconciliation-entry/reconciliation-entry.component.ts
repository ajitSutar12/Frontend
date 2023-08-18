import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig, NgSelectComponent } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { reset } from 'mousetrap';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ACMasterDropdownService } from '../../../shared/dropdownService/ac-master-dropdown.service';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { ReconciliationEntryService } from './reconciliation-entry.service'
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface ReconciliationEntry {
  id: number;
  GL_AC: string;
  FROM_DATE: Date;
  TO_DATE: Date;
}
@Component({
  selector: 'app-reconciliation-entry',
  templateUrl: './reconciliation-entry.component.html',
  styleUrls: ['./reconciliation-entry.component.scss']
})
export class ReconciliationEntryComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;
  //  Formgroup variable
  angForm: FormGroup;
  //  dropdown variables
  glaccount: any = null;
  ACMasterDropdown: any[];
  schemeACNo
  todate: any = null;
  dtExportButtonOptions: any = {};

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject<any>();

  // Store data from backend
  reconciliationentry: ReconciliationEntry[];

  // date variables
  fromdate: any = null

  minDate: Date;
  maxDate: any;
  bsValue = new Date();
  bsRangeValue: Date[];
  showButton: boolean = true;
  updateShow: boolean;
  newbtnShow: boolean;
  filterData: any;
  page: number;

  arrTable
  totalDebitRec: number = 0
  totalCreditRec: number = 0
  totalDebitAmt: number = 0
  totalCreditAmt: number = 0
  remainAmt: number = 0
  entryArr = []

  branch_code
  ngBranchCode: any = null
  showTable: boolean = false
  modalClass: string = 'modalHide';

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private reconciliation: ReconciliationEntryService,
    public ACMasterDropdownService: ACMasterDropdownService,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this.createForm()
    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.schemeACNo = data;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    this.dtTrigger.next();
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      GL_AC: ['', [Validators.required]],
      ENTRIES: ['FormT'],
      FROM_DATE: ['', [Validators.required]],
      TO_DATE: ['', [Validators.required]],
      WITH_DRAW: ['', [Validators.required, Validators.pattern]],
      Withdrawls: [''],
      WithdrawlsAmt: [''],
      Deposits: [''],
      DepositsAmt: [''],
      UnclearedAmt: ['']
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.angForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.ngBranchCode = result.branch.id
    }
  }

  getTable() {
    this.entryArr = []
    this.arrTable = []
    this.totalDebitAmt = 0
    this.totalCreditAmt = 0
    this.totalDebitRec = 0
    this.totalCreditRec = 0
    this.remainAmt = 0
    this.angForm.patchValue({
      Withdrawls: this.totalDebitRec,
      WithdrawlsAmt: this.totalDebitAmt,
      Deposits: this.totalCreditRec,
      DepositsAmt: this.totalCreditAmt,
      UnclearedAmt: this.remainAmt
    })

    let obj = [this.glaccount, this.ngBranchCode, this.angForm.controls['ENTRIES'].value, this.angForm.controls['FROM_DATE'].value, this.angForm.controls['TO_DATE'].value]
    if (this.angForm.controls['FROM_DATE'].value != null && this.angForm.controls['TO_DATE'].value != null && this.angForm.controls['FROM_DATE'].value != '' && this.angForm.controls['TO_DATE'].value != '') {
      this.modalClass = 'modalShow';
      this.http.get(this.url + '/reconciliation-entry/allAccount/' + obj).subscribe((data) => {
        this.arrTable = data;
        this.modalClass = 'modalHide';
        this.arrTable?.forEach(element => {
          let obj = {
            id: element.id,
            TRAN_NO: element.TRAN_NO,
            TRAN_DATE: element.TRAN_DATE,
            TRAN_TYPE: element.TRAN_TYPE,
            TRAN_DRCR: element.TRAN_DRCR,
            TRAN_AMOUNT: Number(element.TRAN_AMOUNT).toFixed(2),
            TRAN_ACNO: element.TRAN_ACNO,
            CHEQUE_NO: element.CHEQUE_NO,
            NARRATION: element.NARRATION,
            STATEMENT_DATE: element.STATEMENT_DATE
          }
          if (element.TRAN_DRCR == 'D' && element.STATEMENT_DATE == null) {
            this.totalDebitRec = this.totalDebitRec + 1
            this.totalDebitAmt = this.totalDebitAmt + Number(element.TRAN_AMOUNT)
          }
          else if (element.TRAN_DRCR == 'C' && element.STATEMENT_DATE == null) {
            this.totalCreditRec = this.totalCreditRec + 1
            this.totalCreditAmt = this.totalCreditAmt + Number(element.TRAN_AMOUNT)
          }
          if (this.totalCreditAmt > this.totalDebitAmt) {
            this.remainAmt = this.totalCreditAmt - this.totalDebitAmt
          }
          else {
            this.remainAmt = this.totalDebitAmt - this.totalCreditAmt
          }
          this.angForm.patchValue({
            Withdrawls: this.totalDebitRec,
            WithdrawlsAmt: Number(this.totalDebitAmt).toFixed(2),
            Deposits: this.totalCreditRec,
            DepositsAmt: Number(this.totalCreditAmt).toFixed(2),
            UnclearedAmt: Number(this.remainAmt).toFixed(2)
          })

          this.entryArr.push(obj)
          this.showTable = true

        });
      })
    }
  }

  getStatementDate(id, acno, tranDRCR, tranAmt, date) {
    if (date != '' || date != 'Invalid Date') {
      if (this.entryArr.length != 0) {
        if (this.entryArr.some(item => item.id === id)) {
          this.entryArr.forEach((element) => {
            if (element.id == id) {
              element['STATEMENT_DATE'] = date
              if (tranDRCR == 'D' && date != "" && date != null) {
                this.totalDebitAmt = this.totalDebitAmt - Number(tranAmt)
              }
              else if (tranDRCR == 'C' && date != "" && date != null) {
                this.totalCreditAmt = this.totalCreditAmt - Number(tranAmt)
              }
              if (tranDRCR == 'D' && (date == "" || date == null)) {
                this.totalDebitAmt = this.totalDebitAmt + Number(tranAmt)
              }
              else if (tranDRCR == 'C' && (date == "" || date == null)) {
                this.totalCreditAmt = this.totalCreditAmt + Number(tranAmt)
              }
              if (this.totalCreditAmt > this.totalDebitAmt) {
                this.remainAmt = this.totalCreditAmt - this.totalDebitAmt
              }
              else {
                this.remainAmt = this.totalDebitAmt - this.totalCreditAmt
              }
              this.angForm.patchValue({
                WithdrawlsAmt: this.totalDebitAmt,
                DepositsAmt: this.totalCreditAmt,
                UnclearedAmt: this.remainAmt
              })
            }

          })
        }
        else {
          let object = {
            id: id,
            TRAN_ACNO: acno,
            STATEMENT_DATE: date
          }
          this.entryArr.push(object)
        }
      }
      else {
        let object = {
          id: id,
          TRAN_ACNO: acno,
          STATEMENT_DATE: date
        }
        this.entryArr.push(object)
      }
    }

  }
  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    if (this.entryArr.length != 0) {
      const formVal = this.angForm.value;
      const dataToSend = {
        entryArr: this.entryArr
      }
      this.reconciliation.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Updated Successfully !", "success");
          this.formSubmitted = false
        },
        (error) => {
          console.log(error);
        }
      );

      //To clear form
      this.resetForm();
    } else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }
  resetForm() {
    this.ngBranchCode = null
    this.glaccount = null
    this.angForm.controls['FROM_DATE'].reset()
    this.angForm.controls['TO_DATE'].reset()
    this.createForm()

  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
}
