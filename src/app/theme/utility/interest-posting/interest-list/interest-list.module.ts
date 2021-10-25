import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestListComponent } from './interest-list.component';
import { InterestListRoutingModule } from './interest-list-routing.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    InterestListRoutingModule,
    DataTablesModule
  ],
  declarations: [InterestListComponent]
})
export class InterestListModule { }
