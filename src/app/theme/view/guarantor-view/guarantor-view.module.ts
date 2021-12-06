import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuarantorViewComponent } from './guarantor-view.component';
import { GuarantorViewRoutingModule } from './guarantor-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    GuarantorViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [GuarantorViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class GuarantorViewModule { }