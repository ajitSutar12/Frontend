import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryDataImportExportComponent } from './recovery-data-import-export.component';
import { RecoveryDataImportExportRoutingModule } from './recovery-data-import-export-routing.module';

import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';

import {SelectModule} from 'ng-select';


@NgModule({
  imports: [
    CommonModule,
    RecoveryDataImportExportRoutingModule,

    DataTablesModule,
    FileUploadModule,
    
    SelectModule
  ],
  declarations: [RecoveryDataImportExportComponent]
})
export class RecoveryDataImportExportModule { }
