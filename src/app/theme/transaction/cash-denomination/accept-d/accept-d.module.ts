import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptDComponent } from './accept-d.component';
import { AcceptDRoutingModule } from './accept-d-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    AcceptDRoutingModule,
    DataTablesModule
  
  ],
  declarations: [AcceptDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class AcceptDModule { }