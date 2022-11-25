import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcwiseLoanoverdueListRoutingModule } from './acwise-loanoverdue-list-routing.module';
import { AcwiseLoanoverdueListComponent } from './acwise-loanoverdue-list.component';


@NgModule({
  declarations: [AcwiseLoanoverdueListComponent],
  imports: [
    CommonModule,
    AcwiseLoanoverdueListRoutingModule
  ]
})
export class AcwiseLoanoverdueListModule { }
