import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashCreditAcRenewalComponent } from './cash-credit-ac-renewal.component';
import { CashCreditAcRenewalRoutingModule } from './cash-credit-ac-renewal-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    CashCreditAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule
  ],
  declarations: [CashCreditAcRenewalComponent]
})
export class CashCreditAcRenewalModule { }