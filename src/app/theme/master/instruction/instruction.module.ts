import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionComponent } from './instruction.component';
import { InstructionRoutingModule } from './instruction-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { OverDraftComponent } from './over-draft/over-draft.component';
import { StandingInstructionComponent } from './standing-instruction/standing-instruction.component';
import { InterestInstructionComponent } from './interest-instruction/interest-instruction.component';
import { SpecialComponent } from './special/special.component';
import { FreezeAccountComponent } from './freeze-account/freeze-account.component';
import { ReminderInstructionComponent } from './reminder-instruction/reminder-instruction.component';
import { RevokeStandingInstructionsComponent } from './revoke-standing-instructions/revoke-standing-instructions.component';
import { RevokeInterestInstructionComponent } from './revoke-interest-instruction/revoke-interest-instruction.component';
import { RevokeSpecialInstructionComponent } from './revoke-special-instruction/revoke-special-instruction.component';
import { LienMarkClearComponent } from './lien-mark-clear/lien-mark-clear.component';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    InstructionRoutingModule,
    SharedModule,
    SelectModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [InstructionComponent, OverDraftComponent, StandingInstructionComponent, InterestInstructionComponent, SpecialComponent, FreezeAccountComponent, ReminderInstructionComponent,  RevokeInterestInstructionComponent, RevokeSpecialInstructionComponent, LienMarkClearComponent, RevokeStandingInstructionsComponent],
  providers: [SelectOptionService]
})
export class InstructionModule { }
