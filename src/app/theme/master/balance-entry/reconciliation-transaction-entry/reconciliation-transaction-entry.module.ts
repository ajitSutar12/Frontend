import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReconciliationTransactionEntryRoutingModule } from './reconciliation-transaction-entry-routing.module';
import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    ReconciliationTransactionEntryRoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ReconciliationTransactionEntryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReconciliationTransactionEntryModule { }
