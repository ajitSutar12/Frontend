import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleDefinationComponent } from './role-defination.component';
import { RoleDefinatioRoutingModule } from './role-defination-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { UserDefinationService } from '../user-defination/user-defination.service';
import {SelectModule} from 'ng-select';
import { DataTablesModule } from "angular-datatables";

import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  imports: [
    CommonModule,
    RoleDefinatioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TreeviewModule.forRoot(),
    FormsModule,
    SelectModule,
    DataTablesModule
  ],
  declarations: [RoleDefinationComponent],
  providers:[UserDefinationService]
})
export class RoleDefinationModule { }
