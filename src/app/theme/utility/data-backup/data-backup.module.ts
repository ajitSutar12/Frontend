import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBackupComponent } from './data-backup.component';
import { DataBackupRoutingModule } from './data-backup-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FileUploadModule} from 'ng2-file-upload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DataBackupRoutingModule,
    SharedModule,
    FileUploadModule
  ],
  declarations: [DataBackupComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DataBackupModule { }
