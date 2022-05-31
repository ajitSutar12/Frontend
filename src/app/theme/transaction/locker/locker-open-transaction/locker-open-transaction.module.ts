import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerOpenTransactionComponent } from './locker-open-transaction.component';
import { LockerOpenTransactionRoutingModule } from './locker-open-transaction-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LockerOpenTransactionRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  declarations: [LockerOpenTransactionComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerOpenTransactionModule { }