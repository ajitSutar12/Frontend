import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesCCTSComponent } from './shares-ccts.component';
import { SharesCCTSRoutingModule } from './shares-ccts-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    SharesCCTSRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SharesCCTSComponent]
})
export class SharesCCTSModule { }
