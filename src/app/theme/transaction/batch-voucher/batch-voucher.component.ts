import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { first } from 'rxjs/operators';
import { BatchVoucherService } from './batch-voucher.service';
import { CompanyGroupMasterDropdownService } from 'src/app/shared/dropdownService/company-group-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import * as moment from 'moment';
import readXlsxFile from 'read-excel-file'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { userInfo } from 'os';
import { NgSelectComponent } from '@ng-select/ng-select'
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-batch-voucher',
  templateUrl: './batch-voucher.component.html',
  styleUrls: ['./batch-voucher.component.scss']
})
export class BatchVoucherComponent implements OnInit {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('trigger') trigger: ElementRef<HTMLElement>;
  @ViewChild("fileInput") fileInput;

  date: any;
  angForm: FormGroup;
  isture: boolean = true;

  branch_code: any//from ownbranchmaster
  companycode: any = null;//From companygroupmaster
  company_data: any;
  gridData: any;
  company_main_data: any;

  selectedBranch: any;
  selectCompanyCode: any;
  totalAmt: number = 0;
  totalAmount 
  filterArray: any;
  narrationList: any;
  particulars: any;
  dtTrigger: any;
  dtElement: any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  schemeData: any;
  sysparaData: any;
  ledgerBal: any = 0;
  maxDate: Date;
  minDate: Date;
  showImportDiv: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ownbranchMasterService: OwnbranchMasterService,
    private _service: BatchVoucherService,
    private CompanyGroupMasterDropdownService: CompanyGroupMasterDropdownService,
    private _multiService: MultiVoucherService,
    private translate:TranslateService

  ) {
    this.translate.setDefaultLang(environment.setLang) ;

    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
  }
  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      //debugger
      this.branch_code = data;
      console.log('Branch Data', this.branch_code);
      this.selectedBranch = user.branchId;
    })

    //Company code
    this.CompanyGroupMasterDropdownService.getCompanyGroupMasterList().pipe(first()).subscribe(data => {
      this.companycode = data;
    })


    //sys para details
    this._multiService.getSysParaData().subscribe(data => {
      this.date = data[0].CURRENT_DATE;
      this.sysparaData = data[0];

      this.date = data[0].CURRENT_DATE;
      let nextDate = moment(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
      let lastDate = moment(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');

      this.maxDate = new Date(nextDate);
      this.maxDate.setDate(this.maxDate.getDate());

      this.minDate = new Date(lastDate);
      this.minDate.setDate(this.minDate.getDate());
    })

    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    //get Scheme Data
    this._service.schemastData().subscribe(data => {
      this.schemeData = data;
      console.log(this.schemeData);
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      company_code: ['', [Validators.required]],
      ledger_balance: [''],
      chequeNo: [''],
      ChequeDate: [''],
      voucherAmount: [''],
      particulars: [''],
      TotalAmt: [''],
      date: [''],
      Scheme: [''],
      SchemeACNO: [''],
      import: [''],
      file: ['']
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id

    }
    else {
      this.angForm.controls['branch_code'].disable()
      this.angForm.patchValue({
        'branch_code': result.branch.id
      })
      this.selectedBranch = result.branch.id

    }
  }

  //cheque no captial function
  chequeNoData(event) {
    // debugger
    this.angForm.patchValue({
      chequeNo: event.target.value.toUpperCase()
    })
  }
  //Get Company Code Details
  companyNameData: any;
  async getCompanyData(ele) {
    await this.CompanyGroupMasterDropdownService.getCompanyData(this.selectCompanyCode).subscribe(data => {
      // debugger
      console.log(data);
      this.company_data = data;
      this.companyNameData = data.AC_NO + '/' + data.NAME;
      //get Account No
      let barnchCode = this.branch_code.filter(ele => ele.value == this.company_data?.BRANCH_CODE)

      let bankCode = this.sysparaData.BANK_CODE;
      let schData = this.schemeData.filter(ele => ele.id == this.company_data?.AC_TYPE);
      let obj = {
        acno: bankCode + barnchCode[0].name + schData[0].S_APPL + this.company_data.AC_NO,
        scheme: schData[0].S_APPL,
        date: this.date
      }
      this._service.getLedgerBalance(obj).subscribe(data => {
        this.ledgerBal = Math.abs(data);
      }, err => {
        Swal.fire('Oops..!', 'Something went wrong in Opening Bal not fetched', 'error');
      })
    }, err => {
      console.log(err);
    })


    this.CompanyGroupMasterDropdownService.getCompanyGridData(this.selectCompanyCode).subscribe(data => {
      if (!this.editFlag) {
        this.company_main_data = data[0];
        this.gridData = data[0].comapnylink;
        this.filterArray = data[0].comapnylink;
        console.log(this.filterArray);
        this.filterArray.forEach(element => {
          this.totalAmt = this.totalAmt + parseFloat(element.DEFAULT_AMOUNT);
          this.totalAmount = this.totalAmt.toFixed(2)
        });
      }
    }, err => {
      console.log(err);
    })

  }

  editFlag: boolean = false;
  async setFilterData(data) {
    // debugger
    this.filterArray = [];
    for (let item of data) {
      let ac_type = this.schemeData.filter(ele => ele.id == item.TRAN_ACTYPE)
      let obj = {
        id: item.id,
        AC_NO: item.TRAN_ACNO,
        AC_TYPE: ac_type[0].S_APPL,
        DEFAULT_AMOUNT: item.TRAN_AMOUNT
      }
      this.filterArray.push(obj);
      this.editFlag = true;
    }
  }

  //filter object
  filterObject(ele, type) {
    console.log(this.gridData);
    let matchArray = new Array()
    this.filterArray = [];
    this.gridData.forEach(element => {
      if (type == 'AC_TYPE') {
        if (JSON.stringify(element.AC_TYPE).includes(ele.target.value)) {
          this.filterArray.push(element);
        }
      } else {
        if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
          this.filterArray.push(element);
        }
      }

    });
  }


  changeAmount(ele, i) {
    // debugger
    this.filterArray[i].DEFAULT_AMOUNT = Number(ele.target.value);
    this.totalAmt = 0;
    this.filterArray.forEach(element => {
      //debugger
      this.totalAmt = this.totalAmt + parseFloat(element.DEFAULT_AMOUNT);
      this.totalAmount = this.totalAmt.toFixed(2)

    });
  }
  //get Narration Details 
  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.trigger.nativeElement;
    el.click();
  }

  Submit() {
    // debugger
    var obj = this.angForm.value;
    if (Number(obj.voucherAmount) != Number(this.totalAmount)) {
      Swal.fire( `${this.translate.instant('Swal_Msg.Oops')}`,  `${this.translate.instant('Swal_Msg.M6')}`, 'error');
    } else {
      let cheqDate
      const formVal = this.angForm.value
      //create a object
      let dataObj = this.angForm.value;
      dataObj['ChequeDate'] = (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date' || formVal.ChequeDate == null || formVal.ChequeDate == undefined) ? cheqDate = '' : cheqDate = moment(formVal.ChequeDate).format('DD/MM/YYYY'),
        dataObj['gridData'] = this.filterArray;
      dataObj['schemeData'] = this.company_data;
      dataObj['companyData'] = this.company_main_data;
      dataObj['narration'] = this.particulars;
      dataObj['user'] = JSON.parse(localStorage.getItem('user'));

      this._service.submitData(dataObj).subscribe(data => {
        console.log(data);
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.P3')}`, 'success');
        this.angForm.controls['company_code'].reset();
        this.angForm.controls['ledger_balance'].reset();
        this.angForm.controls['chequeNo'].reset();
        this.angForm.controls['ChequeDate'].reset();
        this.angForm.controls['voucherAmount'].reset();
        this.angForm.controls['particulars'].reset();
        this.angForm.controls['TotalAmt'].reset();
        this.angForm.controls['Scheme'].reset();
        this.angForm.controls['SchemeACNO'].reset();
        this.filterArray = [];
        this.selectCompanyCode = null
      }, err => {
        console.log(err);
      })
    }
  }
  updatecheckdata
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateID

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  async editClickHandler(id) {
    // debugger
    this._service.getFormData(id).subscribe(async (data) => {
      // console.log(data);
      // console.log(this.companycode);
      this.angForm.disable()
      this.selectCompanyCode = data.batchvoucherData.COMP_CODE;
      await this.getCompanyData(this.selectCompanyCode);
      this.updateID = data.result.TRAN_NO;
      this.updatecheckdata = data
      if (data.result.TRAN_STATUS == '0') {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true
        this.unapproveShow = false
      } else if (data.result.TRAN_STATUS != '0') {
        this.approveShow = false;
        this.rejectShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.unapproveShow = true
      } else {
        this.approveShow = false;
        this.rejectShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.unapproveShow = false
      }
      this.selectedBranch = data.result.BRANCH_CODE
      await this.setFilterData(data.masterData);
      this.angForm.patchValue({
        date: data.result.TRAN_DATE,
        Scheme: data.result.TRAN_ACNOTYPE,
        SchemeACNO: data.result.TRAN_ACNO,
        chequeNo: data.batchvoucherData.CHEQUE_NO,
        ChequeDate: data.batchvoucherData.CHEQUE_DATE,
        voucherAmount: data.result.TRAN_AMOUNT,
        particulars: data.result.NARRATION
      })
      this.totalAmt = data.result.TRAN_AMOUNT
      this.totalAmount = this.totalAmt.toFixed(2)


    })
  }

  updateData() {

  }

  //approve account
  Approve() {
    // debugger
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      BRANCH_CODE: this.selectedBranch,
      user: user
    }
    this._service.approve(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Apporove')}`,
        `${this.translate.instant('Swal_Msg.P4')}`,
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
      BRANCH_CODE: this.selectedBranch,
      user: user
    }
    this._service.reject(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Reject')}`,
        `${this.translate.instant('Swal_Msg.P5')}`,
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.date,
      BRANCH_CODE: this.selectedBranch
    }
    this._service.unapporveBatchVoucher(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Unapprove')}`,
        `${this.translate.instant('Swal_Msg.S8')}`,
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  addNewData() {
    this.createForm()
  }


  ngAfterViewInit(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
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

  importFlag(ele) {
    // debugger
    if (ele.target.checked) {
      this.showImportDiv = true;
    } else {
      this.showImportDiv = false;
    }
  }

  ImportData() {
    // debugger
    const input = document.getElementById('input')
    let fi = this.fileInput.nativeElement;
    let notAssigned = new Array();
    let flag: boolean = false;
    readXlsxFile(fi.files[0]).then((rows) => {
      if (this.filterArray == undefined) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.P6')}`, "error");
      } else {
        for (let item of this.filterArray) {
          flag = false;
          for (let ele of rows) {
            if (item.AC_TYPE == ele[0] && item.AC_NO == ele[1]) {
              item.DEFAULT_AMOUNT = ele[2];
              flag = true;
            }
          }
          if (flag == false) {
            notAssigned.push(item);
            flag = true;
          }
        }

        if (notAssigned.length != 0) {
          let string = '';
          for (let item of notAssigned) {
            string += `Ac No : ${item.AC_NO}<br>`
          }
          string += `above Account not find in system please check once again`;

          Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, string, 'error');
        }

        this.totalAmt = 0;
        this.filterArray.forEach(element => {
          //debugger
          this.totalAmt = this.totalAmt + parseFloat(element.DEFAULT_AMOUNT);
          this.totalAmount = this.totalAmt.toFixed(2)

        });
      }
    })
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  selectAllContent($event) {
    $event.target.select();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
}