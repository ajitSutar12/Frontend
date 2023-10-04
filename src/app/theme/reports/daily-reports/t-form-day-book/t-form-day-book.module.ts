import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TFormDayBookRoutingModule } from './t-form-day-book-routing.module';
import { TFormDayBookComponent } from './t-form-day-book/t-form-day-book.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { Iframe1Module } from '../iframe1/iframe1.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [TFormDayBookComponent],
  imports: [
    CommonModule,
    TFormDayBookRoutingModule,

    SharedModule,
    FormsModule,
    ReactiveFormsModule,


    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe1Module

  ], providers: [{

    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

  },]
})
export class TFormDayBookModule { }
