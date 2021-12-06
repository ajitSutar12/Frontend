import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { MemberLiablityViewComponent } from './member-liablity-view.component';
import { MemberLiablityViewRoutingModule } from './member-liablity-view-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    MemberLiablityViewRoutingModule,    
    DataTablesModule

  ],
  declarations: [MemberLiablityViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MemberLiablityViewModule { }