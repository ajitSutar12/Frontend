import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { BalanceofpigmyRoutingModule } from './balanceofpigmy-routing.module';
import { BalanceofpigmyComponent } from './balanceofpigmy.component';



@NgModule({
  imports: [
    CommonModule,
    BalanceofpigmyRoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceofpigmyComponent,BalanceofpigmyComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BalanceofpigmyModule { }
