import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigmyChartEntryComponent } from './pigmy-chart-entry.component';
import { PigmyChartEntryRoutingModule } from './pigmy-chart-entry-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
import { PigmyChartEntryService } from './pigmy-chart-entry.service'
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PigmyChartEntryRoutingModule,
    SharedModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule
  ],
  declarations: [PigmyChartEntryComponent],
  providers: [SystemMasterParametersService, SchemeCodeDropdownService,
    OwnbranchMasterService, SchemeAccountNoService,
    PigmyChartEntryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }
  ],
})
export class PigmyChartEntryModule { }