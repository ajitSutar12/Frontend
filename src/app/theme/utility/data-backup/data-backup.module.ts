import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBackupComponent } from './data-backup.component';
import { DataBackupRoutingModule } from './data-backup-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FileUploadModule} from 'ng2-file-upload';



@NgModule({
  imports: [
    CommonModule,
    DataBackupRoutingModule,
    SharedModule,
    FileUploadModule
  ],
  declarations: [DataBackupComponent]
})
export class DataBackupModule { }
