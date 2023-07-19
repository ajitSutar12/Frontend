import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { GmaMemberUpdationRoutingModule } from './gma-member-updation-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {GmaMemberUpdationComponent} from './gma-member-updation.component';

import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  imports: [
    CommonModule,
    GmaMemberUpdationRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [GmaMemberUpdationComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService
]
})
export class GmaMemberUpdationModule { }
