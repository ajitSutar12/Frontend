import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevokeInterestInstructionRoutingModule } from './revoke-interest-instruction-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { revokeInterestService } from '../../../../shared/elements/revoke-interest.service'
import { SelectModule } from 'ng-select';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SelectModule,
    RevokeInterestInstructionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [revokeInterestService, Scheme1Service, AcountnoService]
})
export class RevokeInterestInstructionModule { }
