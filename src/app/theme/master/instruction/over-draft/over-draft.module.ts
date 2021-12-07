import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverDraftRoutingModule } from './over-draft-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { overdraftservice } from './over-draft.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
@NgModule({
  imports: [
    CommonModule,
    OverDraftRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
    SchemeCodeDropdownService, SchemeAccountNoService, overdraftservice]
})
export class OverDraftModule { }
