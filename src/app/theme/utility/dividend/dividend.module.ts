import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendComponent } from './dividend.component';
import { DividendRoutingModule } from './dividend-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DividendRoutingModule,
    SharedModule
  ],
  declarations: [DividendComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendModule { }
