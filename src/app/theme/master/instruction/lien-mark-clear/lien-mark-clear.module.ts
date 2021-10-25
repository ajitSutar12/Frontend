import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng-select';
import { LienMarkClearRoutingModule } from './lien-mark-clear-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    LienMarkClearRoutingModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [Scheme1Service, AcountnoService]
})
export class LienMarkClearModule { }
