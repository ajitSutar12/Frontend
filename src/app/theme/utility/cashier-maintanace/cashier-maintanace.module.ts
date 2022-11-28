import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierMaintanaceRoutingModule } from './cashier-maintanace-routing.module';
import { CashierMaintanaceComponent } from './cashier-maintanace.component';


@NgModule({
  declarations: [CashierMaintanaceComponent],
  imports: [
    CommonModule,
    CashierMaintanaceRoutingModule
  ]
})
export class CashierMaintanaceModule { }
