import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberTransferComponent } from './member-transfer.component';
import { MemberTransferRoutingModule } from './member-transfer-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MemberTransferRoutingModule,
    SharedModule
  ],
  declarations: [MemberTransferComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MemberTransferModule { }