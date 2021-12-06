import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    SharedModule
  ],
  declarations: [InvestmentComponent,],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class InvestmentModule { }
