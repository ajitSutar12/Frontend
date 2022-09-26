import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TFormDayBookRoutingModule } from './t-form-day-book-routing.module';
import { TFormDayBookComponent } from './t-form-day-book/t-form-day-book.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { Iframe1Module } from '../iframe1/iframe1.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
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

  ],
  providers: [SystemMasterParametersService]
})
export class TFormDayBookModule { }
