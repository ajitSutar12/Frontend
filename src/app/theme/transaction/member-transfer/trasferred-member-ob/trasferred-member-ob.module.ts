import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TrasferredMemberOBRoutingModule } from './trasferred-member-ob-routing.module';


import { TrasferredMemberOBComponent } from './trasferred-member-ob.component';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    TrasferredMemberOBRoutingModule,
    DataTablesModule
  ],
  declarations: [TrasferredMemberOBComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class  TrasferredMemberOBModule{ }