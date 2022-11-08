import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
// import { DeadStockTransactionService } from '../dead-stock-transaction/dead-stock-transaction.service';

@Component({
  selector: 'app-depreciation-passing',
  templateUrl: './depreciation-passing.component.html',
  styleUrls: ['./depreciation-passing.component.scss']
})
export class DepreciationPassingComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  url = environment.base_url;
  //  Formgroup variable
  angForm: FormGroup;
  selectedBranch
  branchOption: any;
  ngtransactiondate: any = null
  maxDate: any;
  minDate: Date;
  narrationList: any;
  particulars: any;
  // particularss: any;
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  ngresolutiondate: any = null
  gtransactiontype: any;
  formSubmitted = false;
  transactiontype = [
    { id: 'S', label: 'Sales' },
    { id: 'B', label: 'Breakage' },
    { id: 'G', label: 'Gain' },
    { id: 'L', label: 'Loss' },
    { id: 'D', label: 'Depriciation' },
    { id: 'T', label: 'Transfer' }
  ]

  tranType: any;
  type: string;
  itemArr = []
  drepreciationData
  totalAmt: number = 0

  constructor(private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.createForm()
    this.itemArr = []
    this.drepreciationData = null
    let user = JSON.parse(localStorage.getItem('user'));
    //BranchCode Dropdown
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
    });
    this.http.get(this.url + '/narration').subscribe(data => {
      this.narrationList = data
    });

    this.http.get(this.url + '/depreciation-process/' + user.branchId).subscribe(data => {
      this.drepreciationData = data
      this.itemArr = data['deadstockHead']
      this.totalAmt = data['TRAN_AMOUNT']
      this.angForm.patchValue({
        TRAN_DATE: data['TRAN_DATE'],
        TRAN_YEAR: data['TRAN_YEAR'],
        Total_AMT: this.totalAmt
      })
    })
  }


  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  createForm() {
    this.angForm = this.fb.group({
      branchOption: ['', [Validators.required]],
      TRAN_DATE: [''],
      TRAN_YEAR: [''],
      TRANSACTION_TYPE: ['Depreciation'],
      DEAD_STOCK: ['FormT'],
      NARRATION: ['',],
      particulars: [],
      RESOLUTION_DATE: [''],
      RESOLUTIONNO: [],
      Total_AMT: [0]
    })
  }

  selectAllContent($event) {
    $event.target.select();
  }

  getDeprData() {
    this.itemArr = []
    this.drepreciationData = null
    this.ngresolutiondate = null
    this.angForm.patchValue({
      TRAN_DATE: [],
      TRAN_YEAR: [],
      NARRATION: [],
      particulars: [],
      RESOLUTIONNO: [],
    })
    this.totalAmt = 0
    this.http.get(this.url + '/depreciation-process/' + this.selectedBranch).subscribe(data => {
      this.drepreciationData = data
      this.itemArr = data['deadstockHead']
      this.totalAmt = data['TRAN_AMOUNT']
      this.angForm.patchValue({
        TRAN_DATE: data['TRAN_DATE'],
        TRAN_YEAR: data['TRAN_YEAR'],
        Total_AMT: this.totalAmt
      })
    })
  }

  //get table Column wise value in array
  getColumnValue(id, amountName, amountValue) {
    if (this.itemArr.length != 0) {
      if (this.itemArr.some(item => item.ITEM_CODE === id)) {
        this.itemArr.forEach((element) => {
          if (element.ITEM_CODE == id) {
            this.totalAmt = this.totalAmt + Number(amountValue) - Number(element[`${amountName}`])
            element[`${amountName}`] = amountValue
            this.angForm.patchValue({
              Total_AMT: this.totalAmt
            })
          }
        })
      }
    }
  }
  updateData() {
    if (this.itemArr.length != 0) {
      let obj = {
        id: this.drepreciationData.id,
        TRAN_AMOUNT: this.totalAmt,
        RESO_DATE: this.ngresolutiondate,
        RESO_NO: this.angForm.controls['RESOLUTIONNO'].value,
        NARRATION: this.angForm.controls['particulars'].value,
        detail: this.itemArr
      }
      this.http.post(this.url + '/depreciation-process/updateDepreciation', obj).subscribe(data => {
        this.itemArr = []
        this.drepreciationData = null
        this.ngOnInit()
        Swal.fire("Success!", "Data Updated Successfully !", "success");
      })
    }
    else {
      Swal.fire("Oops!", "No Data To Update!", "error");
    }
  }

  reject() {
    if (this.itemArr.length != 0) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let obj = {
        USER: result.id,
        id: this.drepreciationData.id
      }
      this.http.post(this.url + '/depreciation-process/reject', obj).subscribe(data => {
        this.itemArr = []
        this.drepreciationData = null
        this.ngOnInit()
        Swal.fire(
          'Success', 'Deadstock depreciation rejected successfully', 'success'
        );
      })
    }
    else {
      Swal.fire("Oops!", "No Data To Reject!", "error");
    }
  }

  Approve() {
    if (this.itemArr.length != 0) {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let obj = {
        deadstockHead: this.itemArr,
        BRANCH_CODE: this.selectedBranch,
        TRAN_DATE: this.drepreciationData.TRAN_DATE,
        NARRATION: this.angForm.controls['particulars'].value,
        USER: result.id,
        id: this.drepreciationData.id,
        TRAN_NO: this.drepreciationData.TRAN_NO
      }
      this.http.post(this.url + '/depreciation-process/approv', obj).subscribe(data => {
        this.itemArr = []
        this.drepreciationData = null
        this.ngOnInit()
        Swal.fire(
          'Success', 'Deadstock depreciation approved successfully', 'success'
        );
      })
    }
    else {
      Swal.fire("Oops!", "No Data To Approve!", "error");
    }
  }
}
