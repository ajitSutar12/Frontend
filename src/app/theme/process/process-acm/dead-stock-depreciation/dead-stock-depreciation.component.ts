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
import { NgSelectComponent } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-dead-stock-depreciation',
  templateUrl: './dead-stock-depreciation.component.html',
  styleUrls: ['./dead-stock-depreciation.component.scss']
})
export class DeadStockDepreciationComponent implements OnInit {
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
    private _ownbranchmasterservice: OwnbranchMasterService,private translate:TranslateService
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.ngtransactiondate = this.maxDate._d
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
    this.translate.setDefaultLang(environment.setLang);
  }
  createForm() {
    this.angForm = this.fb.group({
      branchOption: ['', [Validators.required]],
      TRAN_DATE: [null, [Validators.required]],
    })
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  processDeprication() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let obj = {
      date: moment(this.ngtransactiondate).format('DD/MM/YYYY'),
      branch: this.selectedBranch,
      USER: result.id,
    }
    this.http.post(this.url + '/depreciation-process/checkDrepricationProcessed', obj).subscribe(data => {
      if (data == 1) {
        Swal.fire({
          title: 'Warning',
          html: `<span style="text-justify: inter-word;">Records are already present.If you want to overwrite please click Yes button but this transaction make on your own risk</span>`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed == true) {
            this.http.post(this.url + '/depreciation-process/insert', obj).subscribe(data => {
              this.ngOnInit()
              Swal.fire(
                `${this.translate.instant('Swal_Msg.Success')}`,`${this.translate.instant('Swal_Msg.successfully')}`, 'success'
              );
            })
          } else {
            Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Process_Cancelled')}`, "success");
          }
        })
      }
      else {
        this.http.post(this.url + '/depreciation-process/insert', obj).subscribe(data => {
          this.ngOnInit()
          Swal.fire(
            `${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.successfully')}`, 'success'
          );
        })
      }
    })
  }

  Cancel() {
    this.ngOnInit()
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}


