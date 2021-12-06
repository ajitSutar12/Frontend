import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberLoanComponent } from './member-loan.component';
import { MemberLoanRoutingModule } from './member-loan-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';




@NgModule({
  imports: [
    CommonModule,
    MemberLoanRoutingModule,
    SharedModule
  ],
  declarations: [MemberLoanComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MemberLoanModule { }