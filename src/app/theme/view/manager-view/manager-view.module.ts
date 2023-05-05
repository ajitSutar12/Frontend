import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerViewComponent } from './manager-view.component';
import { ManagerViewRoutingModule } from './manager-view-routing.module'
import { SharedModule } from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ManagerViewService } from 'src/app/theme/view/manager-view/manager-view.service';
import { Iframe1Module } from '../../reports/daily-reports/iframe1/iframe1.module';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    Iframe1Module,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    PerfectScrollbarModule
  ],
  declarations: [ManagerViewComponent],
  exports: [ManagerViewComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  {

    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

  },
    ManagerViewService,
    OwnbranchMasterService,
    SystemMasterParametersService
  ]
})
export class ManagerViewModule { }
