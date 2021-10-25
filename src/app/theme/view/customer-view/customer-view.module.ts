import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerViewComponent } from './customer-view.component';
import { CustomerViewRoutingModule } from './customer-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';

import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CustomerViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CustomerViewComponent]
})
export class CustomerViewModule { }