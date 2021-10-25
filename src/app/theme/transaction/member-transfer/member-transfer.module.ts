import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberTransferComponent } from './member-transfer.component';
import { MemberTransferRoutingModule } from './member-transfer-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    MemberTransferRoutingModule,
    SharedModule
  ],
  declarations: [MemberTransferComponent]
})
export class MemberTransferModule { }