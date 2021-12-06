import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryModificationComponent } from './recovery-modification.component';
import { RecoveryModificationRoutingModule } from './recovery-modification-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    RecoveryModificationRoutingModule,
    DataTablesModule
  ],
  declarations: [RecoveryModificationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RecoveryModificationModule { }
