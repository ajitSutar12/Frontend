import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iframe1RoutingModule } from './iframe1-routing.module';
import { Iframe1Component } from './iframe1/iframe1.component';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [Iframe1Component],
  imports: [
    CommonModule,
    Iframe1RoutingModule
  ],
  exports :[Iframe1Component],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class Iframe1Module { }
