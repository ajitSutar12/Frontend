import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { AmtsizeWiseBalListRoutingModule } from './amtsize-wise-bal-list-routing.module';

import {DataTablesModule} from 'angular-datatables';
import {AmtsizeWiseBalListComponent} from './amtsize-wise-bal-list.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  imports: [
    CommonModule,
    AmtsizeWiseBalListRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [AmtsizeWiseBalListComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService
]
  
})
export class AmtsizeWiseBalListModule { }
