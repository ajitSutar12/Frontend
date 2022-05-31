import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerDepositAccountMasterComponent } from './locker-deposit-account-master.component';
import { LockerDepositAccountMasterRoutingModule } from './locker-deposit-account-master-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LockerDepositAccountMasterRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  declarations: [LockerDepositAccountMasterComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerDepositAccountMasterModule { }