import { DataTablesModule } from 'angular-datatables';
// import { SelectModule } from 'ng-select';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterestInstructionRoutingModule } from './interest-instruction-routing.module'
import { InterestInstructionComponent } from './interest-instruction.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FrequencyService } from '../../../../shared/dropdownService/frequency.service'
import { ExecutionDayService } from '../../../../shared/dropdownService/execution-day.service'
import { InterestInstructionService } from './interest-instruction.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    InterestInstructionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  exports: [InterestInstructionComponent],
  declarations: [InterestInstructionComponent],
  providers: [FrequencyService, DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
    InterestInstructionService,
    ExecutionDayService,
    SystemMasterParametersService,
    SchemeAccountNoService,
    SchemeCodeDropdownService
  ],

})
export class InterestInstructionModule { }
