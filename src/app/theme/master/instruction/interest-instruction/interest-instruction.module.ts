import {DataTablesModule} from 'angular-datatables';

import {SelectModule} from 'ng-select';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterestInstructionRoutingModule } from './interest-instruction-routing.module'
import {FrequencyService} from '../../../../shared/elements/frequency.service';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';

import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    InterestInstructionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FrequencyService,Scheme1Service,AcountnoService],
  declarations: []
})
export class InterestInstructionModule { }
 