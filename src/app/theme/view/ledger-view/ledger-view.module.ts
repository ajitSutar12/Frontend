import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerViewRoutingModule } from './ledger-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { LedgerViewComponent } from './ledger-view.component';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    LedgerViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [LedgerViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LedgerViewModule { }
