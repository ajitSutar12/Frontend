import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecePayRepDetailsRoutingModule } from './rece-pay-rep-details-routing.module';
import { RecePayRepDetailsComponent } from './rece-pay-rep-details.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {Iframe4Module} from '../iframe4/iframe4.module';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [RecePayRepDetailsComponent],
  imports: [
    CommonModule,
    RecePayRepDetailsRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Iframe4Module
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  
})
export class RecePayRepDetailsModule { }
