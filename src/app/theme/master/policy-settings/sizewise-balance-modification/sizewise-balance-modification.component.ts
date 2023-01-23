import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
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

  depositSizewiseBalanceTrue: boolean = false;
  loanSizewiseBalanceTrue: boolean = false;
  commissionSlabMasterTrue: boolean =true;
  constructor() { }

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