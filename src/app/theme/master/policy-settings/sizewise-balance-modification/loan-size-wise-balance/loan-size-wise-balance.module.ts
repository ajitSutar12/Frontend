import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanSizeWiseBalanceComponent } from './loan-size-wise-balance.component';
import { LoanSizeWiseBalanceRoutingModule } from './loan-size-wise-balance-routing.module'; 

import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    LoanSizeWiseBalanceRoutingModule,
    DataTablesModule,
    NgbModule,
    SharedModule  
  ],
  declarations: [LoanSizeWiseBalanceComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
}) 
export class LoanSizeWiseBalanceModule { }
