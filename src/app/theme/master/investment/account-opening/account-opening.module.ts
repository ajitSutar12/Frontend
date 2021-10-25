import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOpeningComponent } from './account-opening.component';
import { AccountOpeningRoutingModule } from './account-opening-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    AccountOpeningRoutingModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AccountOpeningComponent],
  providers: [Scheme1Service, A1Service, BranchService]
})
export class AccountOpeningModule { }
