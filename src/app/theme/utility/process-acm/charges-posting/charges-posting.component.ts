import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { environment } from 'src/environments/environment';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { error } from 'console';

@Component({
  selector: 'app-charges-posting',
  templateUrl: './charges-posting.component.html',
  styleUrls: ['./charges-posting.component.scss']
})
export class ChargesPostingComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variables
  allScheme: any[]
  ngscheme: any = null
  isServiceCharges: boolean = true
  isMinimumBalanceCharges = false
  isDormantCharges = false
  isChargesEntry = false
  GLACNooption: any[];
  ngGlAC: any = null
  showminBalance: boolean = true
  // for date 
  maxDate: any;
  minDate: Date;
  branch_code
  ngBranchCode
  label: string = 'Service Charges'
  modalClass: string = 'modalHide';
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private savingMasterService: SavingMasterService,
    private _ACMasterDropdownService: ACMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC')
      });
      this.allScheme = allscheme;
    })
    this.ACMasterDropdownService.getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.GLACNooption = data;
      });
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = user.branchId;
    })
  }


  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FORM_TYPE: ['Service Charges'],
      CHARGES_AMT: ['', [Validators.required, Validators.pattern]],
      TRANFROM_DATE: ['', [Validators.required]],
      TRANTO_DATE: ['', [Validators.required]],
      BALCHARGES_AMT: ['', [Validators.required, Validators.pattern]],
      DORMANTFROM_DATE: ['', [Validators.required]],
      DORMANTTO_DATE: ['', [Validators.required]],
      DORMANTCHARGES_AMT: ['', [Validators.required]],
      BALANCE: [''],
      BAL_AMT: ['', [Validators.required, Validators.pattern]],
      ENTRY_CHARGES: ['', [Validators.required, Validators.pattern]],
      MIN_CHARGES: ['', [Validators.required, Validators.pattern]],
      TRAN_PERIOD: ['', [Validators.required]],
      TRANPERIOD_TO: ['', [Validators.required]],
      TYPE: [''],
      GL_ACNO: ['', [Validators.required]],
      TOTAL_CHARGE: [''],
      PARTICULAR: ['Service Charges'],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]]
    });
  }

  isForm(value, data) {

    this.label = data
    // console.log(this.label)
    this.angForm.patchValue({
      'PARTICULAR': data

    })
    if (value == 1) {
      this.isServiceCharges = true;
      this.isMinimumBalanceCharges = false;
      this.isDormantCharges = false;
      this.isChargesEntry = false
      this.angForm.patchValue({
        //isMinimumBalanceCharges
        TRANFROM_DATE: null,
        TRANTO_DATE: null,
        BALCHARGES_AMT: 0,
        //isDormantCharges
        DORMANTFROM_DATE: null,
        DORMANTTO_DATE: null,
        DORMANTCHARGES_AMT: 0,
        //isChargesEntry
        BAL_AMT: 0,
        ENTRY_CHARGES: 0,
        MIN_CHARGES: 0,
        TRAN_PERIOD: 0,
        TRANPERIOD_TO: 0
      })

    }
    else if (value == 2) {
      this.isServiceCharges = false;
      this.isMinimumBalanceCharges = true;
      this.isDormantCharges = false;
      this.isChargesEntry = false
      this.angForm.patchValue({
        //isServiceCharges
        CHARGES_AMT: 0,
        //isDormantCharges
        DORMANTFROM_DATE: null,
        DORMANTTO_DATE: null,
        DORMANTCHARGES_AMT: 0,
        //isChargesEntry
        BAL_AMT: 0,
        ENTRY_CHARGES: 0,
        MIN_CHARGES: 0,
        TRAN_PERIOD: 0,
        TRANPERIOD_TO: 0
      })
    }
    else if (value == 3) {
      this.isServiceCharges = false
      this.isMinimumBalanceCharges = false;
      this.isDormantCharges = true;
      this.isChargesEntry = false
      this.angForm.patchValue({
        //isServiceCharges
        CHARGES_AMT: 0,
        //isMinimumBalanceCharges
        TRANFROM_DATE: null,
        TRANTO_DATE: null,
        BALCHARGES_AMT: 0,
        //isChargesEntry
        BAL_AMT: 0,
        ENTRY_CHARGES: 0,
        MIN_CHARGES: 0,
        TRAN_PERIOD: 0,
        TRANPERIOD_TO: 0
      })

    }
    else if (value == 4) {
      this.isServiceCharges = false;
      this.isMinimumBalanceCharges = false;
      this.isDormantCharges = false;
      this.isChargesEntry = true
      this.angForm.patchValue({
        //isServiceCharges
        CHARGES_AMT: 0,
        //isMinimumBalanceCharges
        TRANFROM_DATE: null,
        TRANTO_DATE: null,
        BALCHARGES_AMT: 0,
        //isDormantCharges
        DORMANTFROM_DATE: null,
        DORMANTTO_DATE: null,
        DORMANTCHARGES_AMT: 0
      })
    }


  }
  obj: any;
  ToAC: any;
  fromAC: any;

  getIntroducer(item) {
    this.obj = [this.ngscheme, this.ngBranchCode]

    if (item.name == 'SB' || item.name == 'CA') {
      this.showminBalance = true
    } else {
      this.isMinimumBalanceCharges = false
      this.isDormantCharges = false
      this.showminBalance = false
      this.angForm.patchValue({
        //isMinimumBalanceCharges
        TRANFROM_DATE: null,
        TRANTO_DATE: null,
        BALCHARGES_AMT: 0,
      })
    }

    this.angForm.patchValue({
      FORM_TYPE: 'Service Charges'
    })
    this.isServiceCharges = true;
    this.isMinimumBalanceCharges = false;
    this.isDormantCharges = false;
    this.isChargesEntry = false
    this.label = 'Service Charges'
    this.angForm.patchValue({
      //isMinimumBalanceCharges
      TRANFROM_DATE: null,
      TRANTO_DATE: null,
      BALCHARGES_AMT: 0,
      //isDormantCharges
      DORMANTFROM_DATE: null,
      DORMANTTO_DATE: null,
      DORMANTCHARGES_AMT: 0,
      //isChargesEntry
      BAL_AMT: 0,
      ENTRY_CHARGES: 0,
      MIN_CHARGES: 0,
      TRAN_PERIOD: 0,
      TRANPERIOD_TO: 0,
      PARTICULAR: 'Service Charges'
    })
    switch (item.name) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'GL':
        this._ACMasterDropdownService.getACMasterList1().subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
      case 'LK':
        this.savingMasterService.getLokcerSchemeList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
    }
  }

  Posting() {
    let data: any = localStorage.getItem('user');
    let result1 = JSON.parse(data);
    let obj = {
      branch: this.ngBranchCode,
      mstSchemes: this.ngscheme,
      data: this.angForm.value,
      cmParticular: this.angForm.controls['PARTICULAR'].value,
      user: result1,
      isposted: false
    }
    this.modalClass = 'modalShow';
    this.http.post(this.url + '/voucher/chargesPosting', obj).subscribe((data: any) => {
      if (data.flag == 1) {
        Swal.fire({
          title: '',
          text: data.msg,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
            this.modalClass = 'modalShow';
            let obj = {
              branch: this.ngBranchCode,
              mstSchemes: this.ngscheme,
              data: this.angForm.value,
              cmParticular: this.angForm.controls['PARTICULAR'].value,
              user: result1,
              isposted: true
            }
            this.http.post(this.url + '/voucher/chargesPosting', obj).subscribe((data1: any) => {
              this.modalClass = 'modalHide';
              Swal.fire('success', data1.msg, 'success')
              this.angForm.reset()
            })
          }
          else if (result.dismiss === Swal.DismissReason.cancel) {
            this.modalClass = 'modalHide';
            Swal.fire("Cancelled", "Posting cancelled", "warning");
            this.angForm.reset()
          }
        })
      } else {
        this.modalClass = 'modalHide';
        Swal.fire('success', data.msg, 'success')
        this.angForm.reset()
      }
    }, error => {
      this.modalClass = 'modalHide';
      Swal.fire('OOps', error?.error?.message, 'error')
    })
  }

}
