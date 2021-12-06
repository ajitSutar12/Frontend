import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindMeComponent } from './remind-me.component';
import { RemindMeRoutingModule } from './remind-me-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RemindMeRoutingModule,
    SharedModule
  ],
  declarations: [RemindMeComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RemindMeModule { }
