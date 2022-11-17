import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerCloseTransactionRoutingModule } from './locker-close-transaction-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LockerCloseTransactionComponent } from './locker-close-transaction.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  
  imports: [
    CommonModule,
    LockerCloseTransactionRoutingModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LockerCloseTransactionComponent],
  providers:[SystemMasterParametersService,OwnbranchMasterService,SchemeCodeDropdownService,SchemeAccountNoService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerCloseTransactionModule { }
