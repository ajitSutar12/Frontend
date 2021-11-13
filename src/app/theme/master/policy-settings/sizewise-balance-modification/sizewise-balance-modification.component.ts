import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-sizewise-balance-modification',
  templateUrl: './sizewise-balance-modification.component.html',
  styleUrls: ['./sizewise-balance-modification.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class SizewiseBalanceModificationComponent implements OnInit {

  dtExportButtonOptions : any = {};

  depositSizewiseBalanceTrue: boolean = true;
  loanSizewiseBalanceTrue: boolean = false;

  constructor() { }

  ngOnInit(): void {
   
  }
  OpenLink(val) {
    // 
    if (val == 1) {
      this.depositSizewiseBalanceTrue = true;
      this.loanSizewiseBalanceTrue = false;}
    if (val == 2) {
      this.depositSizewiseBalanceTrue = false;
      this.loanSizewiseBalanceTrue = true;
    }
  }
  
}