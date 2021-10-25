import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleDefinationComponent } from './role-defination.component';
import { RoleDefinatioRoutingModule } from './role-defination-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    RoleDefinatioRoutingModule,
    SharedModule
  ],
  declarations: [RoleDefinationComponent]
})
export class RoleDefinationModule { }
