import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestCalculationComponent } from './interest-calculation.component';
import { InterestCalculationRoutingModule } from './interest-calculation-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    InterestCalculationRoutingModule,
    DataTablesModule
  ],
  declarations: [InterestCalculationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class InterestCalculationModule { }
