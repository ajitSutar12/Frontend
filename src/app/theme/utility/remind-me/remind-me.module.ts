import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindMeComponent } from './remind-me.component';
import { RemindMeRoutingModule } from './remind-me-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    RemindMeRoutingModule,
    SharedModule
  ],
  declarations: [RemindMeComponent]
})
export class RemindMeModule { }
