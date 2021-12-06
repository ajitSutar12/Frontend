import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementHeadInsertComponent } from './statement-head-insert.component';
import { StatementHeadInsertRoutingModule } from './statement-head-insert-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    StatementHeadInsertRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [StatementHeadInsertComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class StatementHeadInsertModule { }
