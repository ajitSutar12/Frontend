import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iframe4RoutingModule } from './iframe4-routing.module';
import { Iframe4Component } from './iframe4.component';


@NgModule({
  declarations: [Iframe4Component],
  imports: [
    CommonModule,
    Iframe4RoutingModule
  ],
  exports : [Iframe4Component],
})
export class Iframe4Module { }
