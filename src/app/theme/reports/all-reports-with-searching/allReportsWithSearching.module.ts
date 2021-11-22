import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReportsWithSearchingComponent } from './all-reports-with-searching.component';
import {allReportsWithSearchingRoutingModule} from './allReportsWithSearching-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    allReportsWithSearchingRoutingModule,
    SharedModule,
    // ChartModule
    DataTablesModule,
    FileUploadModule
  ],
  declarations: [AllReportsWithSearchingComponent]
})
export class AllReportsWithSearchingModule  { }
