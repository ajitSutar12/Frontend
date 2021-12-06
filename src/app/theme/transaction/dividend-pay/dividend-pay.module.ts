import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPayComponent } from './dividend-pay.component';
import { DividendPayRoutingModule } from './dividend-pay-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd/dividend-paid-mark-sd.component';
//import { DividendPaidSDComponent } from './dividend-paid-sd/dividend-paid-sd.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DividendPayRoutingModule,
    SharedModule
  ],
  declarations: [DividendPayComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendPayModule { }