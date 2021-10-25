import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BranchAndSalaryDCRoutingModule } from './branch-and-salary-dc-routing.module';


import { BranchAndSalaryDCComponent } from './branch-and-salary-dc.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    BranchAndSalaryDCRoutingModule,
    DataTablesModule
  ],
  declarations: [BranchAndSalaryDCComponent]
})
export class  BranchAndSalaryDCModule{ }