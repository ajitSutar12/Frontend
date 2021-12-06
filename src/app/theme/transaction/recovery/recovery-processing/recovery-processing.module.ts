import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryProcessingComponent } from './recovery-processing.component';
import { RecoveryProcessingRoutingModule } from './recovery-processing-routing.module';

import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RecoveryProcessingRoutingModule,
    DataTablesModule
  ],
  declarations: [RecoveryProcessingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RecoveryProcessingModule { }
