import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotticeComponent } from './nottice.component';
import {NotticeRoutingModule} from './nottice-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    NotticeRoutingModule,
    SharedModule

  ],
  declarations: [NotticeComponent]
})
export class NotticeModule { }
