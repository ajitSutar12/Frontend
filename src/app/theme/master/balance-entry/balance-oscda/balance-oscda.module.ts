import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';



import { BalanceOSCDARoutingModule } from './balance-oscda-routing.module';
import { BalanceOSCDAComponent } from './balance-oscda.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    BalanceOSCDARoutingModule,
    DataTablesModule
    
  ],
  declarations: [BalanceOSCDAComponent, BalanceOSCDAComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BalanceOSCDAModule { }
