import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReportsWithSearchingComponent } from './all-reports-with-searching.component';
import {allReportsWithSearchingRoutingModule} from './allReportsWithSearching-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    allReportsWithSearchingRoutingModule,
    SharedModule,
    // ChartModule
    DataTablesModule
  ],
  declarations: [AllReportsWithSearchingComponent]
})
export class AllReportsWithSearchingModule  { }
