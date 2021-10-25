import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementHeadInsertComponent } from './statement-head-insert.component';
import { StatementHeadInsertRoutingModule } from './statement-head-insert-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    StatementHeadInsertRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [StatementHeadInsertComponent]
})
export class StatementHeadInsertModule { }
