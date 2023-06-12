import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpaReportsRoutingModule } from './npa-reports-routing.module';
import { NpaRegPercentageComponent } from './npa-reg-percentage/npa-reg-percentage.component';
import { NpaRegisterComponent } from './npa-register/npa-register.component';
import { DirectorwiseNpaRegComponent } from './directorwise-npa-reg/directorwise-npa-reg.component';
import { NonNpaRecoveryComponent } from './non-npa-recovery/non-npa-recovery.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NpaReportsRoutingModule
  ]
})
export class NpaReportsModule { }
