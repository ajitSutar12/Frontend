import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrialBalanceRoutingModule } from './trial-balance-routing.module';
import { TrialBalanceComponent } from './trial-balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';


@NgModule({
  declarations: [TrialBalanceComponent],
  imports: [
    CommonModule,
    TrialBalanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers:[OwnbranchMasterService],
})
export class TrialBalanceModule { }
