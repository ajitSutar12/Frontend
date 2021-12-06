import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing.component';
import { UnapprovalDepositClosingRoutingModule} from './unapproval-deposit-closing-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    UnapprovalDepositClosingRoutingModule,
    DataTablesModule

  ],
  declarations: [UnapprovalDepositClosingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UnapprovalDepositClosingModule { }
