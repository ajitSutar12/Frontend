import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerViewRoutingModule } from './locker-view-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from '../../theme.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { LegderViewService } from '../ledger-view/ledger-view.service';
import { LockerViewComponent } from './locker-view.component';


@NgModule({
  declarations: [LockerViewComponent],
  imports: [
    CommonModule,
    LockerViewRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule
  ],
  exports: [LockerViewComponent],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, ACMasterDropdownService, OwnbranchMasterService, LegderViewService, SystemMasterParametersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LockerViewModule { }
