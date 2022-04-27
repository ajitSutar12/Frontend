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
  totalAmt: number = 0

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

  GL_ACNO
  obj: any
  getschemename: any

  Narration: boolean = false
  Resolution: boolean = false
  GLAccount: boolean = false
  itemArr = []
  ngItem: any = null
  OP_BALANCE
  deadstockDetailAmount = {}
  backamount
  itemQuan: number
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _service: DeadStockTransactionService,
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
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'GL' || scheme.name == 'GS');
      });
      this.ACMasterDropdown = filtered;
    })

    // /Narration List
    this._service.getNarrationMaster().subscribe(data => {
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
    this.getSystemParaDate()
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
  }


  getBranch() {
    this.getIntroducer()
  }

  schemechange(event) {
    this.getschemename = event.name
    this.schemeedit = event.value
    this.GL_ACNO = event.glacno
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() {
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
      var formatfullDate = data.CURRENT_DATE;
      var nyear = formatfullDate.split(/\//);
      let transactionDate
      let prev = Number(nyear[2]) - 1
      if (nyear[1] > 3) {
        let next = Number(nyear[2]) + 1
        transactionDate = nyear[2] + next
      }
      else {
        transactionDate = prev + nyear[2]
      }
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
  tranType
  changetransaction() {
    this.tranType = this.ngtransactiontype.label
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
      this.angForm.controls['DEAD_STOCK'].disable()
    }
    this.GLAccount = true
    this.Resolution = true
    this.Narration = true;
    this.schemeedit = null
    this.accountedit = null
    this.ngresolutionnum = null
    this.narration = null
    this.angForm.patchValue({
      RESOLUTION_DATE: '',
    })

  }


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
  isFormUpdate(value) {
    if (this.ngtransactiontype == 'Sales') {
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

  depTotal: number = 0

  //add items details in array
  addItem() {
    const formVal = this.angForm.value;
    let object = {
      itemId: formVal.ITEM_CODE?.id,
      ITEM_GLACNO: formVal.ITEM_CODE.GL_ACNO,
      ITEM_CODE: formVal.ITEM_CODE?.ITEM_CODE,
      ITEM_TYPE: formVal.ITEM_CODE?.ITEM_TYPE,
      ITEM_NAME: formVal.ITEM_CODE?.ITEM_NAME,
      ITEM_QTY: formVal.Quantity,
      ITEM_RATE: formVal.Rate,
      TRAN_AMOUNT: formVal.amount,
    }
    if (formVal.ITEM_CODE == "" || formVal.ITEM_CODE == null) {
      Swal.fire("Warning!", "Please Insert Mandatory Record for item!", "info");
    } else if (formVal.Quantity == "" || formVal.Quantity == null) {
      Swal.fire("Warning!", "Please Insert Mandatory Record for Quantity!", "info");
    } else if (formVal.Rate == "" || formVal.Rate == null) {
      Swal.fire("Warning!", "Please Insert Mandatory Record for Rate!", "info");
    } else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire("Warning!", "Please Insert Mandatory Record for Amount", "info");
    }
    else if (this.itemArr.length != 0) {
      if (this.itemArr.some(item => item.id === object.itemId)) {
        this.itemArr.forEach((element) => {
          if (element.id == object.itemId) {
            Swal.fire('', 'This Item is Already Exists!', 'info');
          }
        })
      }
      else {
        if (this.deadstockDetailAmount['totalAmt'] > formVal.amount) {
          object['dep'] = this.deadstockDetailAmount['totalAmt'] - formVal.amount
          this.depTotal = this.depTotal + Number(object['dep'])
        }
        this.itemArr.push(object)
        this.resetItem()
        this.totalAmt = this.totalAmt + parseInt(object.TRAN_AMOUNT)
        this.angForm.patchValue({
          Total_AMT: this.totalAmt
        })
      }
    }
    else {
      if (this.deadstockDetailAmount['totalAmt'] > formVal.amount) {
        object['dep'] = this.deadstockDetailAmount['totalAmt'] - formVal.amount
        this.depTotal = this.depTotal + Number(object['dep'])
      }
      this.itemArr.push(object)
      this.resetItem()
      this.totalAmt = this.totalAmt + parseInt(object.TRAN_AMOUNT)
      this.angForm.patchValue({
        Total_AMT: this.totalAmt
      })
    }
  }

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
  getColumnValue(id, quanName, quanValue, rateName, rateValue, amountName, amountValue) {
    if ((quanValue != '' || quanValue != 0) && Number(quanValue) <= this.itemQuan) {
      if (this.itemArr.length != 0) {
        if (this.itemArr.some(item => item.id === id)) {
          this.itemArr.forEach((element) => {
            if (element.id == id) {
              this.totalAmt = this.totalAmt + Number(amountValue) - Number(element[`${amountName}`])
              element[`${quanName}`] = quanValue
              element[`${rateName}`] = rateValue
              element[`${amountName}`] = amountValue
              let rate = (amountValue / quanValue)
              element[`${rateName}`] = rate
              this.angForm.patchValue({
                Total_AMT: this.totalAmt
              })
            }
          })
        }
      }
    }
    else {
      if (this.itemArr.some(item => item.id === id)) {
        this.itemArr.forEach((element) => {
          if (element.id == id) {
            element[`Quantity`] = this.itemQuan
          }
        })
      }
      Swal.fire('', 'This Item Quantity Limit Exceeded !', 'info');
    }
  }

  getItemDetails(event) {
    let obj = [event.ITEM_CODE, event.ITEM_TYPE, event.id]
    this.OP_BALANCE = event.OP_BALANCE
    this.http.get(this.url + '/deadstock-purchase/amount/' + obj).subscribe((data) => {
      this.deadstockDetailAmount['totalAmt'] = data['totalAmt']
      let rate = (this.deadstockDetailAmount['totalAmt'] / event.PURCHASE_QUANTITY)
      this.angForm.patchValue({
        amount: data['totalAmt'],
        Quantity: event.PURCHASE_QUANTITY,
        Rate: rate
      })
      this.itemQuan = event.PURCHASE_QUANTITY
    })

  }

  getRate() {
    let Quantity = this.angForm.controls['Quantity'].value
    let rate = (this.angForm.controls['amount'].value / Quantity)
    this.angForm.patchValue({
      Rate: rate
    })
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  //insert method
  submit() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);

    let billDate
    let chequeDate
    // if (this.itemArr.length != 0) {
    if (this.angForm.controls['Total_AMT'].value > 0) {
      const formVal = this.angForm.value
      const dataToSend = {
        itemArr: this.itemArr,
        BRANCH_CODE: this.ngBranchCode,
        TRAN_DATE: formVal.TRAN_DATE,
        TRAN_YEAR: formVal.TRAN_YEAR,
        RESO_DATE: (formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == null || formVal.RESOLUTION_DATE == undefined) ? billDate = '' : billDate = moment(formVal.RESOLUTION_DATE).format('DD/MM/YYYY'),
        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        RESO_NO: formVal.RESOLUTION_NUM,
        NARRATION: formVal.NARRATION,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO,
        tranType: this.tranType,
        depTotal: this.depTotal
      }
      this._service.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Updated Successfully !", "success");
          this.formSubmitted = false
        },
        (error) => {
          console.log(error);
        }
      );
      this.resetForm()
      this.itemArr = []
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
  updateData() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let billDate
    let chequeDate
    // if (this.itemArr.length != 0) {
    if (this.angForm.controls['Total_AMT'].value > 0) {
      const formVal = this.angForm.value
      const dataToSend = {
        id: this.updateID,
        itemArr: this.itemArr,
        BRANCH_CODE: this.ngBranchCode,
        TRAN_DATE: formVal.TRAN_DATE,
        TRAN_YEAR: formVal.TRAN_YEAR,
        // RESO_DATE: (formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == null || formVal.RESOLUTION_DATE == undefined) ? billDate = '' : billDate = moment(formVal.RESOLUTION_DATE).format('DD/MM/YYYY'),
        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        RESO_NO: formVal.RESOLUTION_NUM,
        NARRATION: formVal.NARRATION,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO,
        tranType: this.tranType,
        depTotal: this.depTotal
      }
      if (this.updatecheckdata.RESO_DATE != formVal.RESOLUTION_DATE) {
        (formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == null) ? (billDate = '', formVal['RESOLUTION_DATE'] = billDate) : (billDate = formVal.RESOLUTION_DATE, dataToSend['RESO_DATE'] = moment(billDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['RESO_DATE'] = formVal.RESOLUTION_DATE
      }
      this._service.updateData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Updated Successfully !", "success");
          this.formSubmitted = false
        },
        (error) => {
          console.log(error);
        }
      );
      this.resetForm()
      this.itemArr = []
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }


  // Reset Function
  resetForm() {
    this.createForm();
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    this.depTotal = 0
    this.totalAmt = 0
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
  }


  addNewData() {
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.depTotal = 0
    this.totalAmt = 0
    this.resetForm();

  }
  updatecheckdata
  editClickHandler(id) {
    this._service.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN == null) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      if (data.TRAN_ENTRY_TYPE == 'SEL') {
        this.ngtransactiontype = 'Sales'
      }
      if (data.TRAN_TYPE == 'CS')
        this.isFormUpdate(2)
      else
        this.isFormUpdate(1)


      this.getschemename = data.TRANSFER_ACNOTYPE
      this.schemeedit = Number(data.TRANSFER_ACTYPE)
      this.GL_ACNO = data.TRAN_GLACNO
      this.tranType = data.TRAN_ENTRY_TYPE
      if (data.TRAN_ENTRY_TYPE == 'SEL') {
        this.tranType = 'Sales'
      }
      else if (data.TRAN_ENTRY_TYPE == 'BRK') {
        this.tranType = 'Breakage'
      }
      else if (data.TRAN_ENTRY_TYPE == 'GIN') {
        this.tranType = 'Gain'
      }
      else if (data.TRAN_ENTRY_TYPE == 'LOS') {
        this.tranType = 'Loss'
      }
      else if (data.TRAN_ENTRY_TYPE == 'DPR') {
        this.tranType = 'Depriciation'
      }
      else if (data.TRAN_ENTRY_TYPE == 'TRF') {
        this.tranType = 'Transfer'
      }
      this.getIntroducer()
      this.angForm.patchValue({
        BRANCH_CODE: data.BRANCH_CODE,
        TRAN_DATE: data.TRAN_DATE,
        TRAN_YEAR: data.TRAN_YEAR,
        TRANSACTION_TYPE: data.TRAN_ENTRY_TYPE,
        DEAD_STOCK: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
        AC_TYPE: Number(data.TRANSFER_ACTYPE),
        AC_NO: data.TRANSFER_ACNO,
        RESOLUTION_DATE: data.RESO_DATE,
        RESOLUTION_NUM: data.RESO_NO,
        NARRATION: data.NARRATION,
        Total_AMT: data.TRAN_AMOUNT
      })
      this.totalAmt = data.TRAN_AMOUNT
      this.itemArr = data.deadstockHead
    })
  }

  //approve account
  Approve() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);

    let billDate
    let chequeDate
    // if (this.itemArr.length != 0) {
    if (this.angForm.controls['Total_AMT'].value > 0) {
      const formVal = this.angForm.value
      const dataToSend = {
        id: this.updateID,
        itemArr: this.itemArr,
        BRANCH_CODE: this.ngBranchCode,
        TRAN_DATE: formVal.TRAN_DATE,
        TRAN_YEAR: formVal.TRAN_YEAR,
        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        RESO_NO: formVal.RESOLUTION_NUM,
        NARRATION: formVal.NARRATION,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO,
        tranType: this.tranType,
        depTotal: this.depTotal,
        userID: result.id
      }
      if (this.updatecheckdata.RESO_DATE != formVal.RESOLUTION_DATE) {
        (formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == null) ? (billDate = '', formVal['RESOLUTION_DATE'] = billDate) : (billDate = formVal.RESOLUTION_DATE, dataToSend['RESO_DATE'] = moment(billDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['RESO_DATE'] = formVal.RESOLUTION_DATE
      }
      this.resetForm()
      this.itemArr = []
      this.depTotal = 0
    }
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Deadstock Transaction rejected successfully',
      );
      var button = document.getElementById('trigger');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID: number = 0;

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}
