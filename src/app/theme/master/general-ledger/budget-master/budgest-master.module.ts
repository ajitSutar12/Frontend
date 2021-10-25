import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { BudgetMasterComponent } from './budget-master.component';
import { BudgetMasterRoutingModule } from './budget-master-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    BudgetMasterRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SelectModule
  ],
  declarations: [BudgetMasterComponent]
})
export class BudgetMasterModule { }
