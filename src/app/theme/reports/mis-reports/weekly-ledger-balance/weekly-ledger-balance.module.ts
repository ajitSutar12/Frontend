import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyLedgerBalanceRoutingModule } from './weekly-ledger-balance-routing.module';
import { WeeklyLedgerBalanceComponent } from './weekly-ledger-balance.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { IframeModule } from '../../balance-book/iframe/iframe.module';


@NgModule({
  declarations: [WeeklyLedgerBalanceComponent],
  providers: [OwnbranchMasterService,],
  imports: [
    CommonModule,
    WeeklyLedgerBalanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule
  ]
})
export class WeeklyLedgerBalanceModule { }
