import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryDataImportExportComponent } from './recovery-data-import-export.component';
import { RecoveryDataImportExportRoutingModule } from './recovery-data-import-export-routing.module';

import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';

import {SelectModule} from 'ng-select';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    RecoveryDataImportExportRoutingModule,

    DataTablesModule,
    FileUploadModule,
    
    SelectModule
  ],
  declarations: [RecoveryDataImportExportComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RecoveryDataImportExportModule { }
