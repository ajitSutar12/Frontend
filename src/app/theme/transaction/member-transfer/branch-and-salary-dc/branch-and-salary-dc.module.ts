import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BranchAndSalaryDCRoutingModule } from './branch-and-salary-dc-routing.module';


import { BranchAndSalaryDCComponent } from './branch-and-salary-dc.component';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    BranchAndSalaryDCRoutingModule,
    DataTablesModule
  ],
  declarations: [BranchAndSalaryDCComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class  BranchAndSalaryDCModule{ }