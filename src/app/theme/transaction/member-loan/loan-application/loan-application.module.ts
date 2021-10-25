
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoanApplicationComponent } from './loan-application.component';
import{ LoanApplicationRoutingModule} from './loan-application-routing.module'
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    LoanApplicationRoutingModule,
    DataTablesModule
  ],
  declarations: [ LoanApplicationComponent]
})
export class LoanApplicationModule { }