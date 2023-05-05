import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor';
import { CustomerViewModule } from '../../app/theme/view/customer-view/customer-view.module'
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomerViewModule
  ],
  declarations: [CustomersComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CustomersModule { }