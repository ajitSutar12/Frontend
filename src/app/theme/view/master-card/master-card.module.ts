import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterCardComponent } from './master-card.component';
//import { GeneralLedgerComponent } from './general-ledger.component';
import { MasterCardRoutingModule } from './master-card-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';




@NgModule({
  imports: [
    CommonModule,
    MasterCardRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasterCardComponent]
})
export class MasterCardModule { }
