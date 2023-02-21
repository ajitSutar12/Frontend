import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositsRoutingModule } from './term-deposits-routing.module';
import { TermDepositsComponent } from './term-deposits.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  declarations: [TermDepositsComponent],
  imports: [
    CommonModule,
    TermDepositsRoutingModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TermDepositsModule { }
