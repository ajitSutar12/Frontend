import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositeAcRenewalComponent } from './term-deposite-ac-renewal.component';
import { TermDepositeAcRenewalRoutingModule } from './term-deposite-ac-renewal-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    TermDepositeAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [TermDepositeAcRenewalComponent]
})
export class TermDepositeAcRenewalModule { }