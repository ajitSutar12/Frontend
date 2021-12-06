import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesDataEIComponent } from './shares-data-ei.component';
import { SharesDataEIRoutingModule } from './shares-data-ei-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    SharesDataEIRoutingModule,
    SharedModule,
    DataTablesModule,
    FileUploadModule,
    SelectModule
  ],
  providers:[SelectOptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },],
  declarations: [SharesDataEIComponent]
})
export class SharesDataEIModule { }
