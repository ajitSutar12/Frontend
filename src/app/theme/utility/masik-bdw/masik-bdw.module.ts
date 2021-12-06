import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasikBDWComponent } from './masik-bdw.component';
import { MasikBDWRoutingModule } from './masik-bdw-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    MasikBDWRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasikBDWComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MasikBDWModule { }
