import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesADRComponent } from './shares-adr.component';
import {SharesADRRoutingModule} from './sharesADR-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    SharesADRRoutingModule,
    SharedModule

  ],
  declarations: [SharesADRComponent]
})
export class SharesADRModule { }
