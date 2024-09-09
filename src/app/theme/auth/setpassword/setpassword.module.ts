import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetpasswordRoutingModule } from './setpassword-routing.module';
import { SetpasswordComponent } from './setpassword.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [SetpasswordComponent],
  imports: [
    CommonModule,
    SetpasswordRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class SetpasswordModule { }
