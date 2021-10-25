import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackDatedDOComponent } from './back-dated-do.component';
import { BackDatedDORoutingModule } from './back-dated-do-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    BackDatedDORoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [BackDatedDOComponent]
})
export class BackDatedDOModule { }
