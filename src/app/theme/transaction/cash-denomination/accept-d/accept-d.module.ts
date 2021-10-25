import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptDComponent } from './accept-d.component';
import { AcceptDRoutingModule } from './accept-d-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    AcceptDRoutingModule,
    DataTablesModule
  
  ],
  declarations: [AcceptDComponent]
})
export class AcceptDModule { }