import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword.component';
import {ResetpasswordRoutingModule} from './resetpassword-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    SharedModule
  ],
  declarations: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
