import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesARRComponent } from './shares-arr.component';
import {SharesARRRoutingModule} from './sharesARR-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    SharesARRRoutingModule,
    SharedModule

  ],
  declarations: [SharesARRComponent]
})
export class SharesARRModule { }
