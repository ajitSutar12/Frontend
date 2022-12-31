import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoancashcreditacOpensanctiondatewiseRoutingModule } from './loancashcreditac-opensanctiondatewise-routing.module';
import { LoancashcreditacOpensanctiondatewiseComponent } from './loancashcreditac-opensanctiondatewise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  declarations: [LoancashcreditacOpensanctiondatewiseComponent],
  imports: [
    CommonModule,
    LoancashcreditacOpensanctiondatewiseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  providers:[
    SchemeCodeDropdownService, 

  ]
})
export class LoancashcreditacOpensanctiondatewiseModule { }
