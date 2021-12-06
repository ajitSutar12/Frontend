import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { InterestPassingComponent } from './interest-passing.component';
import { InterestPassingRoutingModule } from './interest-passing-routing.module';
import { EditInterestCalculationComponent } from './edit-interest-calculation/edit-interest-calculation.component';
import { CalculateInterestPassingComponent } from './calculate-interest-passing/calculate-interest-passing.component';
import { CalculateInterestUnpassingComponent } from './calculate-interest-unpassing/calculate-interest-unpassing.component';
import { CalculateInterestDeletionComponent } from './calculate-interest-deletion/calculate-interest-deletion.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    InterestPassingRoutingModule,
    DataTablesModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [InterestPassingComponent, EditInterestCalculationComponent, CalculateInterestPassingComponent, CalculateInterestUnpassingComponent, CalculateInterestDeletionComponent]
})
export class InterestPassingModule { }
