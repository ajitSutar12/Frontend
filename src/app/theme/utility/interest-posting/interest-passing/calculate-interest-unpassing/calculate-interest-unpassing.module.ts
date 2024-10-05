import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateInterestUnpassingComponent } from './calculate-interest-unpassing.component';
import { CalculateInterestUnpassingRoutingModule } from './calculate-interest-Unpassing-routing.module';
import {SharedModule} from '../../../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CalculateInterestUnpassingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ CalculateInterestUnpassingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CalculateInterestUnpassingModule { }
