import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SelectOptionService } from '../../../../shared/elements/select-option.service'
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import Swal from 'sweetalert2';
import { OtherViewService } from '../other-view.service';
import { data } from 'jquery';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-loan-installment-inquiry',
  templateUrl: './loan-installment-inquiry.component.html',
  styleUrls: ['./loan-installment-inquiry.component.scss']
})
export class LoanInstallmentInquiryComponent implements OnInit {
  repaymode
  url = environment.base_url;
  repay: string
  TDS_RATE: number;
  resultData: any;

  angForm: FormGroup;
  values1 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  private dataSub: Subscription = null;
  characters: Array<IOption>;

  installmentType: string
  installment: Array<IOption> = this.installmentMethodService.getCharacters();

  constructor(private fb: FormBuilder, private repayModeService: RepayModeService, private _services: OtherViewService, private installmentMethodService: InstallmentMethodService,
    private translate:TranslateService) { 
      this.translate.setDefaultLang(environment.setLang) ;
    }
  ngOnInit(): void {
    this.createForm()
    this.dataSub = this.repayModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      LOANAMT: ['', [Validators.required]],
      NOOFINST: ['', [Validators.required]],
      REPAYMENT: ['', [Validators.required]],
      INTERESTR: ['', [Validators.required]],
      AC_REPAYMODE: ['', [Validators.required]],
      INSTALLMENTS: ['', [Validators.required]],
      INT_RATE: ['', [Validators.required]],
      INSTALLMENT_METHOD: ['', [Validators.required]],
    })
  }


  decimalAllContent($event) {

    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      LOANAMT: $event.target.value
    })
  }


  checkmargin(ele: any) {
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    //check  if given value  is below 100

    let data1 = Number(obj.LOANAMT) / Number(obj.NOOFINST)
    let data2 = (Number(obj.LOANAMT) * Number(ele)) / ((Number(obj.NOOFINST) * 100))
    let data = Number(data1) + Number(data2)
    if (ele <= 50) {
      // this._services.getInstallment(obj).subscribe(data=>{
      //   console.log(data);

      // this.angForm.patchValue({
      //   INSTALLMENTS: data
      // })
      // })
    } else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Invalid_Input')}`, `${this.translate.instant('Swal_Msg.Input_Limit50')}`, "error");
      this.angForm.patchValue({
        TDS_RATE: 0
      })
    }
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  // getDecimalPoint(event) {

  //       if (event.target.value != '')
  //         event.target.value = parseFloat(event.target.value).toFixed(2);
  //       else
  //         event.target.value = 0
  //     }

  Process() {
    let obj = this.angForm.value;
    obj['LOAN'] = obj.LOANAMT
    obj['PERIOD'] = obj.NOOFINST
    obj['AC_REPAYMODE'] = obj.AC_REPAYMODE
    obj['INSTALLMENT_METHOD'] = obj.INSTALLMENT_METHOD
    obj['TDS_RATE'] = obj.INT_RATE
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    this._services.getInstallment(obj).subscribe(data => {
      console.log(data);
      this.angForm.patchValue({
        INSTALLMENTS: data
      })
    })
  }
  close() {
    this.ngOnInit();
  }

  checkPeriod() {
    if (this.repay == '1' && Number(this.angForm.controls['NOOFINST'].value) < 1) {
      this.angForm.patchValue({
        NOOFINST: 1
      })
    }
    else if (this.repay == '3' && Number(this.angForm.controls['NOOFINST'].value) < 3) {
      this.angForm.patchValue({
        NOOFINST: 3
      })
    }
    else if (this.repay == '6' && Number(this.angForm.controls['NOOFINST'].value) < 6) {
      this.angForm.patchValue({
        NOOFINST: 6
      })
    }
    else if (this.repay == '12' && Number(this.angForm.controls['NOOFINST'].value) < 12) {
      this.angForm.patchValue({
        NOOFINST: 12
      })
    }
  }
}
