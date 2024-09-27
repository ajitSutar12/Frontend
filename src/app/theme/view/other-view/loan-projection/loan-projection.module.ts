import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanProjectionRoutingModule } from './loan-projection-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoanProjectionRoutingModule,
    
  ]
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }],
  exports: []
})
export class LoanProjectionModule { }
