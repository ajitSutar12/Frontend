import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-locker-close-transaction',
  templateUrl: './locker-close-transaction.component.html',
  styleUrls: ['./locker-close-transaction.component.scss']
})
export class LockerCloseTransactionComponent implements OnInit {
  angForm: FormGroup;
  url = environment.base_url;


  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeType: string = 'SH'
  obj: any;
  Scheme: any;


 
  type: any;
  ngIntroducer: any = null
  introducerACNo
  schemeACNo
  bankacno

  debitcredit
  selectedScheme: any = null

  transferSchemeDetails
  ngacno: any = null
  transferAccountDetails

  selectedTransScheme: any = null

  values = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ];
  

  constructor(private http: HttpClient,private config: NgSelectConfig,private systemParameter: SystemMasterParametersService, private fb: FormBuilder,private _ownbranchmasterservice: OwnbranchMasterService, private schemeCodeDropdownService: SchemeCodeDropdownService,  private schemeAccountNoService: SchemeAccountNoService,) { }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
  //   // this.tranModeList = this.TranModeCash;

  //   // BranchCode Dropdown
    this._ownbranchmasterservice.getOwnbranchList().subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.getIntroducer()
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data
    });


    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    })
  }
  getIntroducer() {
    debugger
    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }

  
  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
  }

  createForm() {
    this.angForm = this.fb.group({
      
      branch_code: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      branchOption: ['', [Validators.required]],
      TschemeAC: ['', [Validators.required]],
      TRAN_DATE: ['', [Validators.required]],
      DEBIT_CREDIT: ['', [Validators.required]],
      Tscheme: ['', [Validators.required]],
      

    })

  }

}
