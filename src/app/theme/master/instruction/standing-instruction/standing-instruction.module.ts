import { StandingInstructionRoutingModule } from './standing-instruction-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StandingInstructionComponent } from './standing-instruction.component';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FrequencyService } from '../../../../shared/dropdownService/frequency.service'
import { ExecutionDayService } from '../../../../shared/dropdownService/execution-day.service'
import { StandingInstructionService } from './standing-instruction.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    StandingInstructionRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule
  ],
  declarations: [StandingInstructionComponent],
  providers: [FrequencyService, DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
    StandingInstructionService,
    ExecutionDayService,
    SystemMasterParametersService,
    SchemeAccountNoService,
    SchemeCodeDropdownService
  ],

})
export class StandingInstructionModule { }
