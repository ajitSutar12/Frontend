import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerComponent } from './locker.component';

import { SharedModule } from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';
import { LockerRoutingModule } from './locker-routing.module';
import { LockerOpenTransactionModule } from './locker-open-transaction/locker-open-transaction.module'
import { LockerCloseTransactionModule } from './locker-close-transaction/locker-close-transaction.module';




@NgModule({
  imports: [
    CommonModule,
    LockerRoutingModule,
    SharedModule,
    LockerOpenTransactionModule,
    LockerCloseTransactionModule
    

  
    
  ],
  declarations: [LockerComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerModule { }