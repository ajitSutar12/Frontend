import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositeAcRenewalComponent } from './term-deposite-ac-renewal.component';
import { TermDepositeAcRenewalRoutingModule } from './term-deposite-ac-renewal-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    TermDepositeAcRenewalRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [TermDepositeAcRenewalComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TermDepositeAcRenewalModule { }