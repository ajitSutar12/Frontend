import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterUnlockComponent } from './master-unlock.component';
import {MasterUnlockRoutingModule} from './masterUnlock-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    MasterUnlockRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasterUnlockComponent]
})
export class MasterUnlockModule { }
