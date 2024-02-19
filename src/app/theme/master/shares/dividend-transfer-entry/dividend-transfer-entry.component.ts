import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ShareMasterService } from 'src/app/theme/master/customer/shares-master/shares-master.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dividend-transfer-entry',
  templateUrl: './dividend-transfer-entry.component.html',
  styleUrls: ['./dividend-transfer-entry.component.scss']
})

export class DividendTransferEntryComponent implements OnInit {
  formSubmitted = false;
  angForm: FormGroup;

  dtExportButtonOptions: any = {};


  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  showButton: boolean = true;
  updateShow: boolean = false;
  schemeType: string = 'SH'
  scheme: any[] //scheme code from schemast(S_ACNOTYPE)
  memnoACNo: any[] //scheme code from schemast(S_ACNOTYPE)
  branch_code: any[]//from ownbranchmaster
  allScheme: any = null
  ngBranchCode: any = null
  ngDivACNO: any = null
  ngDivACType: any = null
  selectedValue: any = null
  memValue: any = null
  divTransferNO
  bcode
  schemeDT: any

  obj: any
  object: any
  getschemename: any
  getscheme

  constructor(private fb: FormBuilder, private config: NgSelectConfig,
    private _schemeAccountNoService: SchemeAccountNoService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private _ownbranchMasterService: OwnbranchMasterService,
    private _shareMasterService: ShareMasterService,
    private translate:TranslateService,) {
      this.translate.setDefaultLang(environment.setLang);


  }

  ngOnInit(): void {
    this.createForm();

    this._SchemeCodeDropdown.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      // this.selectedValue = this.scheme[0].value
    })
    this._ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this._SchemeCodeDropdown.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {

        return (scheme.name != 'AG' && scheme.name != 'PG');
      });
      this.allScheme = filtered;
    })
   
    // console.log(this.scheme[0].value)
    // this._schemeAccountNoService.getShareSchemeList2(this.scheme[0].value).subscribe(data => {
    //   console.log('data', data)
    //   this.memnoACNo = data;
    // })
  }


  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      DIV_TRANSFER_BRANCH: [''],
      DIV_TRANSFER_ACTYPE: [''],
      DIV_TRANSFER_ACNO: ['']
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['DIV_TRANSFER_BRANCH'].enable()
      this.ngBranchCode = result.branch.id
      
    }
    else {
      this.angForm.controls['DIV_TRANSFER_BRANCH'].disable()
      this.angForm.patchValue({
        'DIV_TRANSFER_BRANCH': result.branch.id
      })
      this.ngBranchCode = result.branch.id
      
    }
  }

  submit() {
    // console.log(this.angForm.valid);
    if (this.angForm.valid) {
      // console.log(this.angForm.value);
    }
  }

  getmemNo(event) {
    // console.log(event.value)
    this.schemeDT = event.value
    this._schemeAccountNoService.getShareSchemeList2(event.value).subscribe(data => {
      // console.log('data', data)
      this.memnoACNo = data;
    })
  }

  /**
 * @updateData function for update data 
 */
  updateDataPyatrans() {
    this.showButton = true;
    this.updateShow = false;

    let data = this.angForm.value;
    data['AC_TYPE'] = this.schemeDT
    data['AC_NO'] = Number(this.updatememno)

    this._shareMasterService.updateDataPyatrans(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
    });
    this.schemeDT = null
    this.updatememno = null
    this.resetForm();
    console.log(this.selectedValue)
    console.log(this.memValue)
    // this.selectedValue = null
    // this.memValue = null
    // this.form.reset();
  }



  getBranch(event) {
    this.bcode = event.value
    this.getDiviTransfer()
  }

  getDivTrans(event) {
    this.getscheme = event.value
    this.getschemename = event.name
    this.getDiviTransfer()
  }
  //get account no according scheme for dividend transfer
  getDiviTransfer() {

    this.obj = [this.ngDivACType, this.ngBranchCode]
    switch (this.getschemename) {

      case 'SB':
        this._schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'SH':
        this._schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {

          this.divTransferNO = data;
        })
        break;

      case 'CA':
        this._schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'LN':
        this._schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'TD':
        this._schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {

          this.divTransferNO = data;

        })
        break;

      case 'DS':
        this._schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'CC':
        this._schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'GS':
        this._schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;

      case 'IV':
        this._schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
        })
        break;
    }
  }

  updatememno: any
  getData(event) {
    // console.log(event)
    let info
    this.updatememno = event.value
    this.object = [this.schemeDT, event.value]
    // console.log(this.object)
    this._schemeAccountNoService.getShareSchemeListDT(this.object).subscribe(data => {
      // debugger

      // console.log(data)
      info = data
      // console.log(info.label)
      // console.log(info.value)
      // console.log(info.name)

      if ((info[0].label != null && info[0].value != null && info[0].name != null) || (info[0].label != "" && info[0].value != "" && info[0].name != "")) {
        this.ngBranchCode = info[0].label
        this.ngDivACType = Number(info[0].value)

        this.obj = [this.ngDivACType, this.ngBranchCode]

        this.allScheme.forEach(async (element) => {
          // debugger
          if (element.value == this.ngDivACType) {
            this.getschemename = element.name
            console.log(this.getschemename)
          }
        })
        console.log(this.getschemename)

        switch (this.getschemename) {
          case 'SB':
            this._schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'SH':
            this._schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'CA':
            this._schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'LN':
            this._schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'TD':
            this._schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {

              this.divTransferNO = data;

            })
            break;

          case 'DS':
            this._schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'CC':
            this._schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'GS':
            this._schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;

          case 'IV':
            this._schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;
            })
            break;
        }
        this.ngDivACNO = Number(info[0].name)

      } else {

        this.ngBranchCode = null
        this.ngDivACType = null
        this.ngDivACNO = null
        this.angForm.controls['DIV_TRANSFER_BRANCH'].reset()
        this.angForm.controls['DIV_TRANSFER_ACTYPE'].reset()
        this.angForm.controls['DIV_TRANSFER_ACNO'].reset()
      }

    })
  }

  resetForm() {
    // this.ngBranchCode = null
    this.ngDivACType = null
    this.ngDivACNO = null
    this.selectedValue = null
    this.memValue = null
    this.angForm.controls['AC_TYPE'].reset()
    this.angForm.controls['AC_NO'].reset()
    this.createForm();

  }

  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }
}



