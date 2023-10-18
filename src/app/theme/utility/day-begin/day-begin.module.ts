import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayBeginComponent } from './day-begin.component';
import { DayBeginRoutingModule } from './day-begin-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthService } from '../../../theme/auth/auth.service';
@NgModule({
  imports: [
    CommonModule,
    DayBeginRoutingModule,
    SharedModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [DayBeginComponent],
  providers: [SystemMasterParametersService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DayBeginModule { }
