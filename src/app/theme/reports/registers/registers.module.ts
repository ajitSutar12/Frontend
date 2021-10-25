import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersComponent } from './registers.component';
import {RegistersRoutingModule} from './registers-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    RegistersRoutingModule ,
    SharedModule
  ],
  declarations: [RegistersComponent]
})
export class RegistersModule { }
