import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorwiseNpaRegRoutingModule } from './directorwise-npa-reg-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { NpaRegisterComponent } from '../npa-register/npa-register.component';
import { DirectorwiseNpaRegComponent } from './directorwise-npa-reg.component';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';


@NgModule({
 
  imports: [
    CommonModule,
    DirectorwiseNpaRegRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule, 
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [DirectorwiseNpaRegComponent],
  exports:[DirectorwiseNpaRegComponent],
  providers: [
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    DirectorMasterDropdownService

  ],
})
export class DirectorwiseNpaRegModule { }
