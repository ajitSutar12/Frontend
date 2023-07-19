import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { LedgBwiseBtypeMemberRoutingModule } from './ledg-bwise-btype-member-routing.module';

import {DataTablesModule} from 'angular-datatables';
import {LedgBwiseBtypeMemberComponent} from './ledg-bwise-btype-member.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    LedgBwiseBtypeMemberRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [LedgBwiseBtypeMemberComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  DirectorMasterDropdownService
]
  
})
export class LedgBwiseBtypeMemberModule { }
