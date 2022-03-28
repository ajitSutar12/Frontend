import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DeadStockTransactionService } from './dead-stock-transaction.service';
import { ACMasterDropdownService } from '../../../shared/dropdownService/ac-master-dropdown.service';
import * as moment from 'moment';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dead-stock-transaction',
  templateUrl: './dead-stock-transaction.component.html',
  styleUrls: ['./dead-stock-transaction.component.scss']
})
export class DeadStockTransactionComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
 

  formSubmitted = false;
  //api
  url = environment.base_url;
  //  Formgroup variable
  angForm: FormGroup;

  // dropdown variables
  itemcode
  ngBranchCode: any = null
  ngtransactiondate: any = null
  branch_code: any[];
  schemeedit: any;

  // Date variables
  ngresolutiondate: any = null
  maxDate: Date;
  minDate: Date;

  isTransfer: boolean = false
  isCash: boolean;
  accountedit: any;

  narration: any;
  narrationList: any;

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  //Transaction type variable
  ngtransactiontype: any = null
  transactiontype = [
    { id: 'S', label: 'Sales' },
    { id: 'B', label: 'Breakage' },
    { id: 'G', label: 'Gain' },
    { id: 'L', label: 'Loss' },
    { id: 'D', label: 'Depriciation' },
    { id: 'T', label: 'Transfer' }
  ]
  schemeACNo: any[];
  scheme: any[];
  ACMasterDropdown: any;
  ngresolutionnum: boolean;
  cash: boolean;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;


  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private deadstocktransaction: DeadStockTransactionService,
    public ACMasterDropdownService: ACMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) {

    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  dtExportButtonOptions: any = {};


  ngOnInit(): void {
    this.getSystemParaDate()
    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })

    // this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {

    //   this.ACMasterDropdown = data;
    // })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'GL' || scheme.name == 'GS');
      });
      this.ACMasterDropdown = filtered;
      console.log(this.ACMasterDropdown, 'schme')
    })

    // /Narration List
    this.deadstocktransaction.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    this.http.get(this.url + '/deadstock-purchase/itemList').subscribe((data) => {
      this.itemcode = data
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      TRAN_DATE: [''],
      TRAN_YEAR: [''],
      TRANSACTION_TYPE: ['', [Validators.required]],
      ITEM_CODE: [''],
      DEAD_STOCK: [''],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      RESOLUTION_DATE: ['', [Validators.required]],
      RESOLUTION_NUM: ['', [Validators.required, Validators.pattern]],
      NARRATION: ['', [Validators.required, Validators.pattern]],
      amount: [''],
      Rate: [''],
      Quantity: [''],
      Total_AMT: [''],

    })
  }


  getBranch() {

    this.getIntroducer()
  }

  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }


  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {
    debugger
    this.accountedit = null
    this.obj = [this.schemeedit, this.ngBranchCode]
    switch (this.getschemename) {
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,

      })
      // var full = []
      var formatfullDate = data.CURRENT_DATE;
      var nyear = formatfullDate.split(/\//);
      let next = Number(nyear[2]) + 1
      console.log(next)
      var transactionDate = nyear[2] + next
      this.angForm.patchValue({
        TRAN_YEAR: transactionDate
      })
      console.log(transactionDate)

    })

    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
      var formatfullDate = data.CURRENT_DATE;
      var nyear = formatfullDate.split(/\//);
      let next = Number(nyear[2]) + 1
      var transactionDate = nyear[2] + next
      this.angForm.patchValue({
        TRAN_YEAR: transactionDate
      })
    })

  }

  //get Narration Details 
  getNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  changetransaction() {
    debugger
    console.log(this.ngtransactiontype)

    if (this.ngtransactiontype.label == 'Sales') {
      this.angForm.patchValue({
        DEAD_STOCK: 'FormT'
      })
      this.angForm.controls['DEAD_STOCK'].enable()
    }
    else {
      this.angForm.patchValue({
        DEAD_STOCK: 'FormT'
      })
      this.GLAccount = true
      this.Resolution = true
      this.Narration = true;
      this.angForm.controls['DEAD_STOCK'].disable()
    }
    this.schemeedit = null
    this.accountedit = null
    this.ngresolutionnum = null
    this.narration = null
    this.angForm.patchValue({
      // RESOLUTION_DATE: this.angForm.controls['RESOLUTION_DATE'].value,
      RESOLUTION_DATE: '',
    })

  }


  Narration: boolean = false
  Resolution: boolean = false
  GLAccount: boolean = false
  isFormA(value) {
    if (this.ngtransactiontype.label == 'Sales') {
      document.getElementById('formC').removeAttribute("disabled");
      if (value == 1) {
        this.GLAccount = true
        this.Resolution = true
        this.Narration = true;
      }
      else if (value == 2) {
        this.GLAccount = false
        this.Resolution = true
        this.Narration = true;
      }
    }
  }

  itemArr = []

  //add items details in array
  addItem() {
    const formVal = this.angForm.value;
    let object = {
      id: formVal.ITEM_CODE.id,
      ITEM_CODE: formVal.ITEM_CODE.ITEM_CODE,
      ITEM_TYPE: formVal.ITEM_CODE.ITEM_TYPE,
      ITEM_NAME: formVal.ITEM_CODE.ITEM_NAME,
      Quantity: formVal.Quantity,
      Rate: formVal.Rate,
      Amount: formVal.amount,
    }
    if (this.itemArr.length != 0) {
      if (this.itemArr.some(item => item.id === object.id)) {
        this.itemArr.forEach((element) => {
          if (element.id == object.id) {
            Swal.fire('', 'This Item is Already Exists!', 'info');
          }
        })
      }
      else {
        this.itemArr.push(object)
        // this.totalAmt = this.totalAmt + parseInt(object.Amount)
        // this.angForm.patchValue({
        //   Total_AMT: this.totalAmt
        // })
      }
    }
    else {
      this.itemArr.push(object)
      // this.totalAmt = this.totalAmt + parseInt(object.Amount)
      // this.angForm.patchValue({
      //   Total_AMT: this.totalAmt
      // })
    }
    this.resetItem()
  }
  ngItem: any = null
  //reset table controls
  resetItem() {
    this.angForm.patchValue({
      amount: '',
      Rate: '',
      Quantity: '',
    })
    this.ngItem = null
  }

  //get table Column wise value in array
  getColumnValue(id, ColumnName, columnValue) {
    if (columnValue != '' || columnValue != 0) {
      if (this.itemArr.length != 0) {
        if (this.itemArr.some(item => item.id === id)) {
          this.itemArr.forEach((element) => {
            if (element.id == id) {
              element[`${ColumnName}`] = columnValue
            }
          })
        }
      }
    }
  }
  OP_BALANCE
  deadstockDetailAmount = {}
  backamount
  getItemDetails(event) {
    let obj = [event.ITEM_CODE, event.ITEM_TYPE, event.id]
    this.OP_BALANCE = event.OP_BALANCE
    this.http.get(this.url + '/deadstock-purchase/amount/' + obj).subscribe((data) => {
      this.angForm.patchValue({
        amount: data['totalAmt'],
        Quantity: event.PURCHASE_QUANTITY,
      })
      this.deadstockDetailAmount['totalAmt'] = data['totalAmt']
    })
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
  }

  editClickHandler(id) {}

}
