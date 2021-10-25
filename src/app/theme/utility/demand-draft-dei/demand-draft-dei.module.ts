import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandDraftDEIComponent } from './demand-draft-dei.component';
import { DemandDraftDEIRoutingModule } from './demand-draft-dei-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';


@NgModule({
  imports: [
    CommonModule,
    DemandDraftDEIRoutingModule,
    SharedModule,
    DataTablesModule,
    FileUploadModule,
    SelectModule
  ],
  providers:[SelectOptionService],
  declarations: [DemandDraftDEIComponent]
})
export class DemandDraftDEIModule { }
