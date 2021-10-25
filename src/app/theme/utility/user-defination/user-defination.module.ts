import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDefinationComponent } from './user-defination.component';
import { UserDefinationRoutingModule } from './user-defination-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    UserDefinationRoutingModule,
    SharedModule
  ],
  declarations: [UserDefinationComponent]
})
export class UserDefinationModule { }
