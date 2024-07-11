import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountWiseLawadLoanRoutingModule } from './count-wise-lawad-loan-routing.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { CountWiseLawadLoanComponent } from './count-wise-lawad-loan.component';


@NgModule({
  declarations: [CountWiseLawadLoanComponent],
  providers:[OwnbranchMasterService,DeadstockmasterService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    CountWiseLawadLoanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class CountWiseLawadLoanModule { }
