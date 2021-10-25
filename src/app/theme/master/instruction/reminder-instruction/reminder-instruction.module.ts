import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderInstructionRoutingModule } from './reminder-instruction-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { reminderInstructionService } from '../../../../shared/elements/reminder-instruction.service'
import { UserService } from '../../../../shared/elements/user.service'
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReminderInstructionRoutingModule,
    DataTablesModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [reminderInstructionService, UserService]
})
export class ReminderInstructionModule { }
