import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryComponent } from './recovery.component';
import { RecoveryRoutingModule } from './recovery-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RecoveryRoutingModule,
    SharedModule
  ],
  declarations: [RecoveryComponent]
})
export class RecoveryModule { }