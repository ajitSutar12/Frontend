import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReconciliationEntryComponent } from './reconciliation-entry.component';
import { ReconciliationEntryRoutingModule } from './reconciliation-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ReconciliationEntryRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ReconciliationEntryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ReconciliationEntryModule { }