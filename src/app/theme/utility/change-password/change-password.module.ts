import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
