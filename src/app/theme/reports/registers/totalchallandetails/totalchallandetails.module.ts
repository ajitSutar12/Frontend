import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalchallandetailsRoutingModule } from './totalchallandetails-routing.module';
import { TotalchallandetailsComponent } from './totalchallandetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';


@NgModule({
  declarations: [TotalchallandetailsComponent],
  exports: [TotalchallandetailsComponent],
  imports: [
    CommonModule,
    TotalchallandetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module 
  ],
  providers: [OwnbranchMasterService]
})
export class TotalchallandetailsModule { }
