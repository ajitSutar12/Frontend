import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessACMComponent } from './process-acm.component';
import { ProcessACMRoutingModule } from './process-acm-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    ProcessACMRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ProcessACMComponent]
})
export class ProcessACMModule { }
