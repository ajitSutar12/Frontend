import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendListComponent } from './dividend-list.component';
import { DividendListRoutingModule } from './dividend-list-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    DividendListRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendListComponent]
})
export class DividendListModule { }
