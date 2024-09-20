import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-sizewise-balance-modification',
  templateUrl: './sizewise-balance-modification.component.html',
  styleUrls: ['./sizewise-balance-modification.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SizewiseBalanceModificationComponent implements OnInit {

  dtExportButtonOptions: any = {};

  depositSizewiseBalanceTrue: boolean = true;
  loanSizewiseBalanceTrue: boolean = false;
  commissionSlabMasterTrue: boolean =false;
  setLang: any;

  
  constructor(private translate:TranslateService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    }) }

  ngOnInit(): void {

  }
  OpenLink(val) {
    if (val == 1) {
      this.depositSizewiseBalanceTrue = true;
      this.loanSizewiseBalanceTrue = false;
      this.commissionSlabMasterTrue =false;

    }
    else if (val == 2) {
      this.depositSizewiseBalanceTrue = false;
      this.loanSizewiseBalanceTrue = true;
      this.commissionSlabMasterTrue =false;

    }
    else if (val == 3) {
      this.depositSizewiseBalanceTrue = false;
      this.loanSizewiseBalanceTrue = false;
      this.commissionSlabMasterTrue = true;

    }
  }

}