import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MemberWBARoutingModule } from './member-wba-routing.module';
import { MemberWBAComponent } from './member-wba.component';

import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    MemberWBARoutingModule,
    DataTablesModule
  ],
  declarations: [MemberWBAComponent,MemberWBAComponent]
})
export class MemberWBAModule { }
