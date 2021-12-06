import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendListComponent } from './dividend-list.component';
import { DividendListRoutingModule } from './dividend-list-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DividendListRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendListComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendListModule { }
