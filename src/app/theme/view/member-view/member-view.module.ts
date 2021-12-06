import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberViewComponent } from './member-view.component';
import { MemberViewRoutingModule } from './member-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    MemberViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MemberViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class GeneralLedgerModule { }