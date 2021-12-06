import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesCCTSComponent } from './shares-ccts.component';
import { SharesCCTSRoutingModule } from './shares-ccts-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SharesCCTSRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SharesCCTSComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SharesCCTSModule { }
