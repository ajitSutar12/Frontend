import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerViewComponent } from './customer-view.component';
import { CustomerViewRoutingModule } from './customer-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';

import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    CustomerViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CustomerViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CustomerViewModule { }