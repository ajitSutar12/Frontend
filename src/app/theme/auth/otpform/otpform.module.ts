import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpformRoutingModule } from './otpform-routing.module';
import { OtpformComponent } from './otpform.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [OtpformComponent],
  imports: [
    CommonModule,
    OtpformRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[OtpformComponent],
  providers:[AuthService]
})
export class OtpformModule { }
