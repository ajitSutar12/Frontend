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
      DEAD_STOCK: [''],
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
      id: formVal.ITEM_CODE?.id,
      ITEM_CODE: formVal.ITEM_CODE?.ITEM_CODE,
      ITEM_TYPE: formVal.ITEM_CODE?.ITEM_TYPE,
      ITEM_NAME: formVal.ITEM_CODE?.ITEM_NAME,
      Quantity: formVal.Quantity,
      Rate: formVal.Rate,
      Amount: formVal.amount,
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
      if (this.itemArr.some(item => item.id === object.id)) {
        this.itemArr.forEach((element) => {
          if (element.id == object.id) {
            Swal.fire('', 'This Item is Already Exists!', 'info');
          }
        })
      }
      else {
        this.itemArr.push(object)
        this.resetItem()
        // this.totalAmt = this.totalAmt + parseInt(object.Amount)
        // this.angForm.patchValue({
        //   Total_AMT: this.totalAmt
        // })
      }
    }
    else {
      this.itemArr.push(object)
      this.resetItem()
      // this.totalAmt = this.totalAmt + parseInt(object.Amount)
      // this.angForm.patchValue({
      //   Total_AMT: this.totalAmt
      // })
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
        transactionDate = prev + nyear[2]
      }
      else {
        let next = Number(nyear[2]) + 1
        transactionDate = nyear[2] + next
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

  editClickHandler(id) {}


}
