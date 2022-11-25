import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
import * as moment from 'moment';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
import { DeadStockPurchaseService } from './dead-stock-purchase.service'

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-dead-stock-purchase',
  templateUrl: './dead-stock-purchase.component.html',
  styleUrls: ['./dead-stock-purchase.component.scss']
})
export class DeadStockPurchaseComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @Output() reloadTablePassing = new EventEmitter<string>();


  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variables
  itemcode
  ngBranchCode: any = null
  ngtransactiondate: any = null
  branch_code: any[];
  schemeedit: any;

  // Date variables
  maxDate: Date;
  minDate: Date;
  ngbilldate: any = null
  ngchequedate: any = null
  updateID: number = 0;
  isTransfer: boolean = false

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  dtExportButtonOptions: any = {};
  Accountno: any;
  accountedit: any;
  schemeACNo: any[];
  isCash: boolean;
  scheme: any[];
  narration: any;
  narrationList: any;
  itemArr = []
  GL_ACNO
  obj: any
  getschemename: any
  ngItem: any = null
  totalAmt: number = 0
  // systemParameter: any;
  itemCode

  showbtn: boolean;
  updateshowbtn: boolean;
  editbutton: boolean;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _service: DeadStockPurchaseService,
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
      this.scheme = filtered;
    })

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    this.http.get(this.url + '/deadstock-purchase/itemList').subscribe((data) => {
      this.itemcode = data
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

  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      TRAN_DATE: [''],
      TRAN_YEAR: [''],
      ITEM_CODE: [''],
      SUPPLIER_NAME: ['', [Validators.required, Validators.pattern]],
      BILL_NUM: ['', [Validators.required, Validators.pattern]],
      BILL_DATE: ['', [Validators.required]],
      DEAD_STOCK: ['FormT'],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      CHEQUE_DATE: ['', [Validators.required]],
      CHEQUE_NUM: ['', [Validators.required, Validators.pattern]],
      NARRATION: ['', [Validators.required, Validators.pattern]],
      CGST_AMT: ['', [Validators.required]],
      SGST_AMT: ['', [Validators.required]],
      IGST_AMT: ['', [Validators.pattern]],
      GST_NO: ['', [Validators.required]],
      amount: [''],
      Rate: [''],
      Quantity: [''],
      Total_AMT: [''],
    })
    this.isFormA(1)
  }

  //get branch selection wise effect
  getBranch() {
    this.getIntroducer()
  }


  //get scheme selection wise effect
  schemechange(event) {
    this.getschemename = event.name
    this.schemeedit = event.value
    this.GL_ACNO = event.glacno
    this.getIntroducer()
  }
  getAmount() {
    let quantity = this.angForm.controls['Quantity'].value
    let rate = this.angForm.controls['Rate'].value
    let amount = quantity * rate
    this.angForm.patchValue({
      amount: amount
    })
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
        this.itemArr.push(object)
        this.resetItem()
      }
    }
    else {
      this.itemArr.push(object)
      this.resetItem()
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

  addNewData() {
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();

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

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isTransfer = true;
      this.isCash = false;
      this.angForm.controls['NARRATION'].reset()
    }
    if (value == 2) {
      this.isTransfer = false;
      this.isCash = true;
      this.angForm.controls['AC_TYPE'].reset()
      this.angForm.controls['AC_NO'].reset()
      this.angForm.controls['CHEQUE_DATE'].reset()
      this.angForm.controls['CHEQUE_NUM'].reset()
    }
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
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        BILL_NUM: formVal.BILL_NUM,

        BILL_DATE: (formVal.BILL_DATE == '' || formVal.BILL_DATE == 'Invalid date' || formVal.BILL_DATE == null || formVal.BILL_DATE == undefined) ? billDate = '' : billDate = moment(formVal.BILL_DATE).format('DD/MM/YYYY'),

        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        CHEQUE_DATE: (formVal.CHEQUE_DATE == '' || formVal.CHEQUE_DATE == 'Invalid date' || formVal.CHEQUE_DATE == null || formVal.CHEQUE_DATE == undefined) ? chequeDate = '' : chequeDate = moment(formVal.CHEQUE_DATE).format('DD/MM/YYYY'),

        CHEQUE_NUM: formVal.CHEQUE_NUM,
        NARRATION: formVal.NARRATION,
        CGST_AMT: formVal.CGST_AMT,
        SGST_AMT: formVal.SGST_AMT,
        IGST_AMT: formVal.IGST_AMT,
        GST_NO: formVal.GST_NO,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO
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
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        BILL_NUM: formVal.BILL_NUM,
        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        CHEQUE_NUM: formVal.CHEQUE_NUM,
        NARRATION: formVal.NARRATION,
        CGST_AMT: formVal.CGST_AMT,
        SGST_AMT: formVal.SGST_AMT,
        IGST_AMT: formVal.IGST_AMT,
        GST_NO: formVal.GST_NO,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO
      }

      if (this.updatecheckdata.SUPPLIER_BILL_DATE != formVal.BILL_DATE) {
        (formVal.BILL_DATE == 'Invalid date' || formVal.BILL_DATE == '' || formVal.BILL_DATE == null) ? (billDate = '', formVal['BILL_DATE'] = billDate) : (billDate = formVal.BILL_DATE, dataToSend['BILL_DATE'] = moment(billDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['BILL_DATE'] = formVal.BILL_DATE
      }
      if (this.updatecheckdata.CHEQUE_DATE != formVal.CHEQUE_DATE) {
        (formVal.CHEQUE_DATE == 'Invalid date' || formVal.CHEQUE_DATE == '' || formVal.CHEQUE_DATE == null) ? (chequeDate = '', formVal['CHEQUE_DATE'] = chequeDate) : (chequeDate = formVal.CHEQUE_DATE, dataToSend['CHEQUE_DATE'] = moment(chequeDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['CHEQUE_DATE'] = formVal.CHEQUE_DATE
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
      var button = document.getElementById('triggerhide');
      button.click();
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.getSystemParaDate()
    this.itemArr = []
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
    this.schemeedit = null
    this.accountedit = null
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
      if (data.TRAN_TYPE == 'CS') {
        this.isFormA(2)
      }
      else if (data.TRAN_TYPE == 'TR') {
        this.isFormA(1)
      }
      this.schemeedit = Number(data.TRANSFER_ACTYPE)
      this.ngBranchCode = data.BRANCH_CODE
      this.getschemename = data.TRANSFER_ACNOTYPE
      this.getIntroducer()
      this.angForm.patchValue({
        Total_AMT: data.TRAN_AMOUNT,
        ACNOTYPE: data.TRANSFER_ACNOTYPE,
        AC_TYPE: Number(data.TRANSFER_ACTYPE),
        AC_NO: Number(data.TRANSFER_ACNO),
        TRAN_GLACNO: data.ACNOTYPE == 'GL' ? data.AC_NO : data.GL_ACNO,
        CHEQUE_DATE: data.CHEQUE_DATE,
        CHEQUE_NUM: data.CHEQUE_NO,
        SUPPLIER_NAME: data.TRAN_SUPPLIER_NAME,
        GST_NO: data.GST_NO,
        CGST_AMT: data.CGST_AMT,
        SGST_AMT: data.SGST_AMT,
        IGST_AMT: data.IGST_AMT,
        BILL_DATE: data.SUPPLIER_BILL_DATE,
        BILL_NUM: data.SUPPLIER_BILL_NO,
        NARRATION: data.NARRATION,
        DEAD_STOCK: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
        TRAN_YEAR: data.TRAN_YEAR,
        TRAN_DATE: data.TRAN_DATE,
        BRANCH_CODE: data.BRANCH_CODE
      })
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
        SUPPLIER_NAME: formVal.SUPPLIER_NAME,
        BILL_NUM: formVal.BILL_NUM,
        DEAD_STOCK: formVal.DEAD_STOCK,
        AC_TYPE: formVal.AC_TYPE,
        AC_NO: formVal.AC_NO,
        CHEQUE_NUM: formVal.CHEQUE_NUM,
        NARRATION: formVal.NARRATION,
        CGST_AMT: formVal.CGST_AMT,
        SGST_AMT: formVal.SGST_AMT,
        IGST_AMT: formVal.IGST_AMT,
        GST_NO: formVal.GST_NO,
        Total_AMT: formVal.Total_AMT,
        USER: result.USER_NAME,
        ACNOTYPE: this.getschemename,
        GL_ACNO: this.GL_ACNO,
        userID: result.id
      }

      if (this.updatecheckdata.SUPPLIER_BILL_DATE != formVal.BILL_DATE) {
        (formVal.BILL_DATE == 'Invalid date' || formVal.BILL_DATE == '' || formVal.BILL_DATE == null) ? (billDate = '', formVal['BILL_DATE'] = billDate) : (billDate = formVal.BILL_DATE, dataToSend['BILL_DATE'] = moment(billDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['BILL_DATE'] = formVal.BILL_DATE
      }
      if (this.updatecheckdata.CHEQUE_DATE != formVal.CHEQUE_DATE) {
        (formVal.CHEQUE_DATE == 'Invalid date' || formVal.CHEQUE_DATE == '' || formVal.CHEQUE_DATE == null) ? (chequeDate = '', formVal['CHEQUE_DATE'] = chequeDate) : (chequeDate = formVal.CHEQUE_DATE, dataToSend['CHEQUE_DATE'] = moment(chequeDate).format('DD/MM/YYYY'))
      } else {
        dataToSend['CHEQUE_DATE'] = formVal.CHEQUE_DATE
      }
      this._service.approve(dataToSend).subscribe(data => {
        Swal.fire(
          'Approved',
          'Deadstock Purchase approved successfully',
          'success'
        );
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
      }, err => {
        console.log('something is wrong');
      })
      this.resetForm()
      this.itemArr = []
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
        'Deadstock Purchase rejected successfully',
      );
      var button = document.getElementById('triggerhide');
      this.resetForm()
      button.click();
      this.reloadTablePassing.emit();
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

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }

}
