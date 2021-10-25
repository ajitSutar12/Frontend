
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoanSanctionComponent } from './loan-sanction.component'
import{LoanSanctionRoutingModule} from './loan-sanction-routing.module'
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    LoanSanctionRoutingModule,
    DataTablesModule
  ],
  declarations: [ LoanSanctionComponent]
})
export class LoanSanctionnModule { }