import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigmyAppProcessComponent } from './pigmy-app-process.component';
import { PigmyAppProcessRoutingModule } from './pigmy-app-process-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'

@NgModule({
  imports: [
    CommonModule,
    PigmyAppProcessRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
  ],
  declarations: [PigmyAppProcessComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SystemMasterParametersService, SchemeCodeDropdownService,
    OwnbranchMasterService, SchemeAccountNoService
  ]
})
export class PigmyAppProcessModule { }
