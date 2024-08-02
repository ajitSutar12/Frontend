import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSocityRoutingModule } from './employee-socity-routing.module';
import { EmployeeSocityComponent } from './employee-socity.component';


@NgModule({
  declarations: [EmployeeSocityComponent, ],
  imports: [
    CommonModule,
    EmployeeSocityRoutingModule
  ]
})
export class EmployeeSocityModule { }
