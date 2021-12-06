import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureScanningComponent } from './signature-scanning.component';
import { SignatureScanningRoutingModule } from './signature-scanning-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';






@NgModule({
  imports: [
    CommonModule,
    SignatureScanningRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SignatureScanningComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SignatureScanningModule { }
