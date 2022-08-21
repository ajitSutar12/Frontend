import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Iframe3RoutingModule } from './iframe3-routing.module';
import { Iframe3Component } from './iframe3.component';


@NgModule({
  declarations: [Iframe3Component],
  imports: [
    CommonModule,
    Iframe3RoutingModule
  ],
  exports:[Iframe3Component]
})
export class Iframe3Module { }
