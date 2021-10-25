import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanInstallmentEditAndCloseDateUpdationRoutingModule } from './loan-installment-edit-and-close-date-updation-routing.module';
import { LoanInstallmentEditAndCloseDateUpdationComponent } from './loan-installment-edit-and-close-date-updation.component';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { SelectModule } from 'ng-select';

@NgModule({
  imports: [
    CommonModule,
    LoanInstallmentEditAndCloseDateUpdationRoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    SelectModule
  ],
  declarations: [LoanInstallmentEditAndCloseDateUpdationComponent],
  providers: [SchemeCodeService]
})

export class ReconciliationTransactionEntryModule { }
