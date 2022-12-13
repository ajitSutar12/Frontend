import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import * as moment from 'moment'
import { environment } from '../../../../environments/environment';
import { DataTableDirective } from 'angular-datatables';
import { interval, Subject, Subscription } from 'rxjs';
import { VoucherEntryComponent } from 'src/app/theme/transaction/voucher-entry/voucher-entry.component';
import { MultiVoucherComponent } from 'src/app/theme/transaction/multi-voucher/multi-voucher.component';

@Component({
  selector: 'app-voucher-view',
  templateUrl: './voucher-view.component.html',
  styleUrls: ['./voucher-view.component.scss']
})
export class VoucherViewComponent implements OnInit {
  @ViewChild(VoucherEntryComponent) voucherchild: VoucherEntryComponent;
  @ViewChild(MultiVoucherComponent) multichild: MultiVoucherComponent;
  @ViewChild('triggerhide') myDiv: ElementRef<HTMLElement>;
  dtExportButtonOptions: any = {};
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  mySubscription: Subscription
  formSubmitted = false;
  //api
  url = environment.base_url;
  isLoading = false

  // Formgroup variable
  angForm: FormGroup;
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  // dropdown variables 
  ngBranchCode: any = null
  branch_code: any[];

  ngdate: any = null

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate._d
      this.tranDate = data.CURRENT_DATE
      this.ngdate = data.CURRENT_DATE
    })
  }

  ngOnInit(): void {
    this.createForm()
    this.getSystemParaDate()
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      TRAN_DATE: ['']
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
      this.tranDate = data.CURRENT_DATE
    })
  }
  tranDate
  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        'TRAN_DATE': data.CURRENT_DATE,
      })
      this.tranDate = data.CURRENT_DATE
      this.ngdate = data.CURRENT_DATE
    })
  }
  getBranch(eve) {
    this.ngBranchCode = eve.value
    this.tableData = []
    this.isLoading = false
  }
  tableData = []
  viewVoucher() {
    if (this.ngBranchCode != null && this.angForm.controls['TRAN_DATE'].value != '' && this.angForm.controls['TRAN_DATE'].value != null) {
      this.isLoading = true
      this.tableData = []
      let tranDT = this.tranDate == this.angForm.controls['TRAN_DATE'].value ? this.tranDate : moment(this.angForm.controls['TRAN_DATE'].value).format('DD/MM/YYYY')
      let obj = [this.ngBranchCode, tranDT]
      this.http.post(this.url + '/ledger-view/voucherView', obj).subscribe((data) => {
        this.tableData = this.sortData(data)
        if (this.tableData.length != 0) {
          // console.log(data, 'voucher')
        }
        else {
          this.tableData = []
          Swal.fire('Info', 'No Records Found', 'info')
        }
        this.isLoading = false
      })
    }
  }

  sortData(data) {
    return data.sort((a, b) => {
      return <any>(a.TRAN_NO) - <any>(b.TRAN_NO);
    });
  }
  voucherData: any = {};
  multiVoucherData: any = {};
  voucherMenu = null
  //get saving customer data
  getVoucherData(data) {
    if (data.TRAN_SOURCE_TYPE == 'VC') {
      this.voucherMenu = 'voucher'
      this.voucherData = data.id;
      this.voucherchild.editClickHandler(data.id);
      this.voucherchild.DatatableHideShow = false;
      this.voucherchild.rejectShow = false;
      this.voucherchild.approveShow = false
      this.voucherchild.showButton = false;
      this.voucherchild.updateShow = false;
      this.voucherchild.newbtnShow = true;
    }
    else if (data.TRAN_SOURCE_TYPE == 'MV' || data.TRAN_SOURCE_TYPE == 'DC') {
      this.voucherMenu = 'multi'
      this.multiVoucherData = data.TRAN_NO;
      this.multichild.editClickHandler(data.TRAN_NO);
      this.multichild.DatatableHideShow = false;
      this.multichild.rejectShow = false;
      this.multichild.approveShow = false;
      this.multichild.showButton = false;
      this.multichild.updateShow = false;
      this.multichild.newbtnShow = true;
    }
  }
  public getData(value): void {
    let el: HTMLElement = this.myDiv.nativeElement;
    el.click();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }

  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }

}
