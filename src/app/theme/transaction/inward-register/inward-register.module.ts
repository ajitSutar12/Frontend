import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { InwardRegisterRoutingModule } from './inward-register-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { InwardRegisterComponent } from './inward-register.component'

import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    InwardRegisterRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [InwardRegisterComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  OwnbranchMasterService,
  SchemeAccountNoService,
  SchemeCodeDropdownService
]
  
})
export class InwardRegisterModule { }
