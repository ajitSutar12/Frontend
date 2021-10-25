import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevokeStandingInstructionsRoutingModule } from './revoke-standing-instructions-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { revokeStandingService } from '../../../../shared/elements/revoke-standing.service'
import { SelectModule } from 'ng-select';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    DataTablesModule,
    RevokeStandingInstructionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [revokeStandingService, Scheme1Service, AcountnoService]
})
export class RevokeStandingInstructionsModule { }
