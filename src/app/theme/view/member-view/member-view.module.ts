import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberViewComponent } from './member-view.component';
import { MemberViewRoutingModule } from './member-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    MemberViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MemberViewComponent]
})
export class GeneralLedgerModule { }