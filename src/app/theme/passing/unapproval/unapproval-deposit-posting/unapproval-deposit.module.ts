import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting.component';
import { UnapprovalDepositPostingRoutingModule} from './unapproval-deposit-posting-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';




@NgModule({
  imports: [
    CommonModule,
    UnapprovalDepositPostingRoutingModule,
    DataTablesModule
  ],
  declarations: [UnapprovalDepositPostingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UnapprovalDepositPostingModule { }
