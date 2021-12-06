import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';


import { BalanceOLCDRoutingModule } from './balance-olcd-routing.module';
import { BalanceOLCDComponent } from './balance-olcd.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    BalanceOLCDRoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceOLCDComponent,BalanceOLCDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BalanceOLCDModule { }
