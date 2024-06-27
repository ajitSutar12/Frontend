import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { OtherViewService } from '../other-view.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loan-projection',
  templateUrl: './loan-projection.component.html',
  styleUrls: ['./loan-projection.component.scss']
})
export class LoanProjectionComponent implements OnInit {
  url = environment.base_url;

  angForm: FormGroup;
  repay: string
  resultData: any;
  modalClass: string = 'modalHide';
  installmentType: string
  installment: Array<IOption> = this.installmentMethodService.getCharacters();

  repayModeOption1: Array<IOption> = this.repayModeService.getCharacters();
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  maxDate: any;
  minDate;
  resolutionDate;

  Resolution_date
  debitcredit
  posting
  values1 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  values2 = [
    { id: 1, name: 'Monthly' },
    { id: 2, name: 'Yearly' },
  ];
  TDS_RATE: number;
  todate: any;

  constructor(
    private repayModeService: RepayModeService,
    private installmentMethodService: InstallmentMethodService,
    private fb: FormBuilder,
    private _services: OtherViewService,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,

  ) {
    this.resolutionDate = new Date();
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.minDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.resolutionDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.resolutionDate = this.resolutionDate._d
      this.maxDate = this.maxDate._d
      this.minDate = this.minDate._d
    })
  }


  ngOnInit(): void {
    this.createForm()
    // this.systemParameter.getFormData(1).subscribe(data => {
    // let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    // this.Resolution_date = data.CURRENT_DATE
    // })
  }
  createForm() {
    this.angForm = this.fb.group({
      LOAN: ['', [Validators.required]],
      PERIOD: ['', [Validators.required]],
      DEBIT_CREDIT: ['', [Validators.required]],
      INSTALLMENTTYPE: ['', [Validators.required]],
      POSTINGMETHOD: ['', [Validators.required]],
      INTERESTR: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      INSTALLMENTS: ['', [Validators.required]],
      INSTALLMENT_METHOD: ['', [Validators.required]],
      AC_REPAYMODE: ['', [Validators.required]],
      RESOLUTION_DATE: ['', [Validators.required]],
      TDS_RATE: ["", [Validators.pattern]],
    })
  }

  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    this.angForm.patchValue({
      LOAN: $event.target.value
    })
  }

  checkmargin(ele: any) {
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    //check  if given value  is below 100
    if (ele <= 50) {
      this._services.getInstallment(obj).subscribe(data => {
        console.log(data);
        this.angForm.patchValue({
          INSTALLMENTS: data + ".00"
        })
      })
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.angForm.patchValue({
        TDS_RATE: 0
      })
    }
  }
  iframe5url: any = '';
  report_url = environment.report_url
  Process() {
    let obj = this.angForm.value;
    obj['user'] = JSON.parse(localStorage.getItem('user'));
    this.modalClass = 'modalShow';
    this._services.loanProjection(obj).subscribe(data => {
      this.modalClass = 'modalHide';
      // console.log(data);
      this.resultData = data.result
      console.log(this.resultData)
      let tableData = []

      let Bal = []
      let CrAmt = []
      let Days = []
      let DrAmt = []
      let Product = []
      let totint = []

      this.resultData.forEach(item => {
        Bal.push(item.Bal);
        CrAmt.push(item.CrAmt);
        Days.push(item.Days);
        DrAmt.push(item.DrAmt);
        Product.push(item.Product);
        totint.push(item.totint);
      });

      let Bal1 = []
      let CrAmt1 = []
      let Days1 = []
      let DrAmt1 = []
      let Product1 = []
      let totint1 = []

      Bal1 = Bal.map(Bal => `${Bal}<br/>`);
      CrAmt1 = CrAmt.map(CrAmt => `${Math.abs(CrAmt)}<br/>`);
      Days1 = Days.map(Days => `${Days}<br/>`);
      DrAmt1 = DrAmt.map(DrAmt => `${DrAmt}<br/>`);
      Product1 = Product.map(Product => `${Math.abs(Product)}<br/>`);
      totint1 = totint.map(totint => `${totint}<br/>`);
  


      this.iframe5url = "http://localhost/phpjasper/vendor/tecnickcom/tcpdf/examples/loanProjection.php/?&loan='" + obj.LOAN + "'&installNumber=" + obj.INSTALLMENTS + "&AC_REPAYMODE=" + obj.AC_REPAYMODE + "&INSTALLMENT_METHOD=" + obj.INSTALLMENT_METHOD + "&POSTINGMETHOD=" + obj.POSTINGMETHOD + "&TDS_RATE=" + obj.TDS_RATE + "&RESOLUTION_DATE=" + obj.RESOLUTION_DATE + "'&PERIOD=" + obj.PERIOD + "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

    }, err => {
      this.modalClass = 'modalHide';
    })
  }


  close() {
    this.ngOnInit();
    this.resultData = []
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  }
  getpercentagePoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value) + "%";
    else
      event.target.value = 0
  }
  checkPeriod() {
    if (this.repay == '1' && Number(this.angForm.controls['PERIOD'].value) < 1) {
      this.angForm.patchValue({
        PERIOD: 1
      })
    }
    else if (this.repay == '3' && Number(this.angForm.controls['PERIOD'].value) < 3) {
      this.angForm.patchValue({
        PERIOD: 3
      })
    }
    else if (this.repay == '6' && Number(this.angForm.controls['PERIOD'].value) < 6) {
      this.angForm.patchValue({
        PERIOD: 6
      })
    }
    else if (this.repay == '12' && Number(this.angForm.controls['PERIOD'].value) < 12) {
      this.angForm.patchValue({
        PERIOD: 12
      })
    }
  }
}

