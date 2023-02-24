import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdRelativeProformRoutingModule } from './dd-relative-proform-routing.module';
import { DdRelativeProformComponent } from '../dd-relative-proform/dd-relative-proform.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';

@NgModule({
  declarations: [DdRelativeProformComponent],
  imports: [
    CommonModule,
    DdRelativeProformRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  providers: [
    // SchemeAccountNoService,
    SchemeCodeDropdownService, 
    OwnbranchMasterService,
    // {

    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    // },
    SystemMasterParametersService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UserAuthInterceptor,
    //   multi: true
    // },
  ],
})
export class DdRelativeProformModule { }
