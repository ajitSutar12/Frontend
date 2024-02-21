import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleMasterRoutingModule } from './role-master-routing.module';
import { RoleMasterComponent } from './role-master.component';
import { DataTablesModule } from "angular-datatables";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  declarations: [RoleMasterComponent],
  imports: [
    CommonModule,
    RoleMasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class RoleMasterModule { }
