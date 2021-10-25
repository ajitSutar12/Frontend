import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionPassingComponent } from './transaction-passing.component';
import { TransactionPassingRoutingModule } from './transaction-passing-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    TransactionPassingRoutingModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TransactionPassingComponent],
  providers: [Scheme1Service, A1Service, AcountnoService]
})
export class TransactionPassingModule { }
