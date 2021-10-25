import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayBookIEComponent } from './day-book-ie.component';
import { DayBookIERoutingModule } from './day-book-ie-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';



@NgModule({
  imports: [
    CommonModule,
    DayBookIERoutingModule,
    SharedModule,
    DataTablesModule,
    FileUploadModule,
    SelectModule
  ],
  providers:[SelectOptionService],
  declarations: [DayBookIEComponent]
})
export class DayBookIEModule { }
