import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry.component';
import { NpaOpeningDetailsEntryRoutingModule } from './npa-opening-details-entry-routing.module'
// import { SelectModule } from 'ng-select';

import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpaOpeningDetailsEntryService } from './npa-opening-details-entry.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
@NgModule({
  imports: [
    CommonModule,
    
    NpaOpeningDetailsEntryRoutingModule,
    DataTablesModule,
    // SelectModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, NpaOpeningDetailsEntryService,OwnbranchMasterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [NpaOpeningDetailsEntryComponent],
  bootstrap: [NpaOpeningDetailsEntryComponent]
})
export class NpaOpeningDetailsEntryModule { }

