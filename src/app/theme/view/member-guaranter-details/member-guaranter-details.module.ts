import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberGuaranterDetailsRoutingModule } from './member-guaranter-details-routing.module';
import { MemberGuaranterDetailsComponent } from './member-guaranter-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  declarations: [MemberGuaranterDetailsComponent],
  imports: [
    CommonModule,
    MemberGuaranterDetailsRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService,
  OwnbranchMasterService
]
})
export class MemberGuaranterDetailsModule { }
