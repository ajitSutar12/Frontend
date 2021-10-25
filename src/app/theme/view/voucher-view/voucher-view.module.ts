import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherViewComponent } from './voucher-view.component';
import { VoucherViewRoutingModule } from './voucher-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    VoucherViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [VoucherViewComponent]
})
export class VoucherViewModule { }