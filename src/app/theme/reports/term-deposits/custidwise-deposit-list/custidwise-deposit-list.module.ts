import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustidwiseDepositListRoutingModule } from './custidwise-deposit-list-routing.module';
import { CustidwiseDepositListComponent } from './custidwise-deposit-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';

@NgModule({
  declarations: [CustidwiseDepositListComponent],
  imports: [
    CommonModule,
    CustidwiseDepositListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  providers:[
    OwnbranchMasterService,
    CustomerIDMasterDropdownService,
    CustomerIdService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }]
})
export class CustidwiseDepositListModule { }
