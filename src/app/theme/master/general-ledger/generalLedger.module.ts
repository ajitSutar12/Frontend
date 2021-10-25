import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLedgerComponent } from './general-ledger.component';
import { GeneralLedgerRoutingModule } from './generalLedger-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
import {SelectModule} from 'ng-select';





@NgModule({
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule,
    SharedModule,
    SelectModule
  ],
  declarations: [GeneralLedgerComponent],
  providers: [SelectOptionService]
})
export class GeneralLedgerModule { }
