import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerRentTransactionsComponent } from './locker-rent-transactions.component';
import { LockerRentTransactionRoutingModule } from './locker-rent-transactions-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    LockerRentTransactionRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),

  ],
  declarations: [LockerRentTransactionsComponent],
  exports: [LockerRentTransactionsComponent],
  providers: [SystemMasterParametersService, SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class LockerRentTransactionModule { }