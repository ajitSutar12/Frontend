import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryPostingComponent } from './recovery-posting.component';
import { RecoveryPostingRoutingModule } from './recovery-posting-routing.module';
 import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    RecoveryPostingRoutingModule,
     DataTablesModule
  ],
  declarations: [RecoveryPostingComponent]
})
export class RecoveryPostingModule { }
