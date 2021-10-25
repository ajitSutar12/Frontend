import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberLoanComponent } from './member-loan.component';
import { MemberLoanRoutingModule } from './member-loan-routing.module';
import {SharedModule} from '../../../shared/shared.module';





@NgModule({
  imports: [
    CommonModule,
    MemberLoanRoutingModule,
    SharedModule
  ],
  declarations: [MemberLoanComponent]
})
export class MemberLoanModule { }