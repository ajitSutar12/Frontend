import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iframe2RoutingModule } from './iframe2-routing.module';
import { Iframe2Component } from './iframe2.component';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [Iframe2Component],
  imports: [
    CommonModule,
    Iframe2RoutingModule
  ],
  exports:[Iframe2Component],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class Iframe2Module { }
