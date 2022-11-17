import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigmyagentchangeRoutingModule } from './pigmyagentchange-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { PigmyagentchangeComponent } from './pigmyagentchange.component';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  
  imports: [
    CommonModule,
    PigmyagentchangeRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  
    NgSelectModule
  
  ],
  providers: [SchemeCodeDropdownService,OwnbranchMasterService, SchemeAccountNoService,SystemMasterParametersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [PigmyagentchangeComponent],
  bootstrap: [PigmyagentchangeComponent]
})
export class PigmyagentchangeModule { }
