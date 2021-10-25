import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TrasferredMemberOBRoutingModule } from './trasferred-member-ob-routing.module';


import { TrasferredMemberOBComponent } from './trasferred-member-ob.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    TrasferredMemberOBRoutingModule,
    DataTablesModule
  ],
  declarations: [TrasferredMemberOBComponent]
})
export class  TrasferredMemberOBModule{ }