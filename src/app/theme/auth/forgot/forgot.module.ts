import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import {ForgotRoutingModule} from './forgot-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../auth.service';


@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotComponent],
  providers:[AuthService]
})
export class ForgotModule { }
