import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorServices } from '../../auth/auth.interceptor.service';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerComponent],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class CustomerModule { }
