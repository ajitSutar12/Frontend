import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureScanningComponent } from './signature-scanning.component';
import { SignatureScanningRoutingModule } from './signature-scanning-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    SignatureScanningRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SignatureScanningComponent]
})
export class SignatureScanningModule { }
