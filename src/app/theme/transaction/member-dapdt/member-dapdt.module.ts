import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDAPDTComponent} from './member-dapdt.component';
import { MemberDAPDTRoutingModule } from './member-dapdt-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    MemberDAPDTRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MemberDAPDTComponent]
})
export class MemberDAPDTModule { }