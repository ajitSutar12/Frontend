import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestListComponent } from './interest-list.component';
import { InterestListRoutingModule } from './interest-list-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    InterestListRoutingModule,
    DataTablesModule
  ],
  declarations: [InterestListComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class InterestListModule { }
