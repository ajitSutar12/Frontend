import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NProfitLossRoutingModule } from './n-profit-loss-routing.module';
import { NProfitLossComponent } from './n-profit-loss/n-profit-loss.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {Iframe4Module} from '../iframe4/iframe4.module';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [NProfitLossComponent],
  imports: [
    CommonModule,
    NProfitLossRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Iframe4Module
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class NProfitLossModule { }
