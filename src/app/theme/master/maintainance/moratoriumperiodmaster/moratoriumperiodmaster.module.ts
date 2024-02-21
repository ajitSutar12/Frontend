import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoratoriumperiodmasterComponent } from './moratoriumperiodmaster.component';
import { MoratoriumPeriodMasterRoutingModule } from './moratoriumperiodmaster-routing.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { MoratoriumPeriod } from './moratorium-period-master.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    MoratoriumPeriodMasterRoutingModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()

  ],
  declarations: [MoratoriumperiodmasterComponent],
  bootstrap: [MoratoriumperiodmasterComponent],
  providers: [
    MoratoriumPeriod,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SystemMasterParametersService,
    OwnbranchMasterService,
    {

      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})


export class MoratoriumPeriodMasterModule { }