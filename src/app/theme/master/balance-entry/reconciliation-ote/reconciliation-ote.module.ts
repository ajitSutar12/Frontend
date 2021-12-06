import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReconciliationOTERoutingModule } from './reconciliation-ote-routing.module';
import { ReconciliationOTEComponent } from './reconciliation-ote.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    ReconciliationOTERoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ReconciliationOTEComponent, ReconciliationOTEComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReconciliationOTEModule { }
