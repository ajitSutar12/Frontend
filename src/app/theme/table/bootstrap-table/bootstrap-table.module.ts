import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BootstrapTableRoutingModule} from './bootstrap-table-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    BootstrapTableRoutingModule,
    SharedModule
  ],
  declarations: [],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BootstrapTableModule { }
