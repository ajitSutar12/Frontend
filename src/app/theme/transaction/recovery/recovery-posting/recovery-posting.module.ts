import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryPostingComponent } from './recovery-posting.component';
import { RecoveryPostingRoutingModule } from './recovery-posting-routing.module';
 import {DataTablesModule} from 'angular-datatables';
 import { HTTP_INTERCEPTORS } from '@angular/common/http';
 import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    RecoveryPostingRoutingModule,
     DataTablesModule
  ],
  declarations: [RecoveryPostingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RecoveryPostingModule { }
