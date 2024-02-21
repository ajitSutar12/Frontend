import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPostComponent } from './dividend-post.component';
import { DividendPostRoutingModule } from './dividend-post-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    DividendPostRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPostComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DividendPostModule { }
