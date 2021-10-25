import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilverJACTSComponent } from './silver-jacts.component';
import { SilverJACTSRoutingModule } from './silver-jacts-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    SilverJACTSRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SilverJACTSComponent]
})
export class SilverJACTSModule { }
