import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingInstructionRoutingModule } from './standing-instruction-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng-select'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandingInstructionComponent } from './standing-instruction.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    StandingInstructionRoutingModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [StandingInstructionComponent],
  providers: [Scheme1Service, AcountnoService]

})
export class StandingInstructionModule { }
