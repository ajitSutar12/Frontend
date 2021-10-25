import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceUpdationRoutingModule } from './balance-updation.routing.module';
import { BalanceUpdationComponent } from './balance-updation.component';
import { BalanceUpdationService } from '../../../../shared/elements/balance-updation.service';
import { DebitService } from '../../../../shared/elements/debit.service';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    BalanceUpdationRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [BalanceUpdationComponent],
  providers: [BalanceUpdationService, DebitService]
})
export class BalanceUpdationModule { }
