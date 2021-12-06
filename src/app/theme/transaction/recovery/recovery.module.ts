import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryComponent } from './recovery.component';
import { RecoveryRoutingModule } from './recovery-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    RecoveryRoutingModule,
    SharedModule
  ],
  declarations: [RecoveryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RecoveryModule { }