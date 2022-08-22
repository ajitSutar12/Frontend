import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iframe5RoutingModule } from './iframe5-routing.module';
import { Iframe5Component } from './iframe5/iframe5.component';


@NgModule({
  declarations: [Iframe5Component],
  imports: [
    CommonModule,
    Iframe5RoutingModule
  ],
  exports:[Iframe5Component]
})
export class Iframe5Module { }
