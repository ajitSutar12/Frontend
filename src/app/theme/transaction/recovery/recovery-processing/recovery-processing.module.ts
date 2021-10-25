import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryProcessingComponent } from './recovery-processing.component';
import { RecoveryProcessingRoutingModule } from './recovery-processing-routing.module';

import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    RecoveryProcessingRoutingModule,
    DataTablesModule
  ],
  declarations: [RecoveryProcessingComponent]
})
export class RecoveryProcessingModule { }
