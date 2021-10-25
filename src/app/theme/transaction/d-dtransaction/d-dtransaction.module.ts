import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDTransactionComponent } from './d-dtransaction.component';
import { DDTransactionRoutingModule } from './d-dtransaction-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    DDTransactionRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DDTransactionComponent]
})
export class DDTransactionModule { }