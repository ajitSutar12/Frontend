import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleMasterRoutingModule } from './role-master-routing.module';
import { RoleMasterComponent } from './role-master.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [RoleMasterComponent],
  imports: [
    CommonModule,
    RoleMasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class RoleMasterModule { }
