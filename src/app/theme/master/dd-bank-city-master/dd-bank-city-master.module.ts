import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDBankCityMasterComponent } from './dd-bank-city-master.component';
import { DDBankCityMasterRoutingModule } from './dd-bank-city-master-routing.module'
import {SharedModule} from '../../../shared/shared.module';

import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DDBankCityMasterRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DDBankCityMasterComponent]
})
export class DDBankCityMasterModule { }
