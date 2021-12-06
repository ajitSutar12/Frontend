import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandDraftDEIComponent } from './demand-draft-dei.component';
import { DemandDraftDEIRoutingModule } from './demand-draft-dei-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    DemandDraftDEIRoutingModule,
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
  declarations: [DemandDraftDEIComponent]
})
export class DemandDraftDEIModule { }
