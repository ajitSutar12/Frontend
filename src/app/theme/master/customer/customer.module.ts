import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module'
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
