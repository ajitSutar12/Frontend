import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BnkCatbalListRoutingModule } from './bnk-catbal-list-routing.module';
import { BnkCatbalListComponent } from './bnk-catbal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import{IframeModule} from '../iframe/iframe.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [BnkCatbalListComponent],
  // exports:[BnkCatbalListComponent],

  imports: [
    CommonModule,
    BnkCatbalListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule
  ],
  providers: [
    SchemeAccountNoService,
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
export class BnkCatbalListModule { }
