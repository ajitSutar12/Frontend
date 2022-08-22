import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { LedgerViewRoutingModule } from './ledger-view-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LedgerViewComponent } from './ledger-view.component';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { LegderViewService } from './ledger-view.service'
@NgModule({
  imports: [
    CommonModule,
    LedgerViewRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  exports: [LedgerViewComponent],
  declarations: [LedgerViewComponent],
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, ACMasterDropdownService, OwnbranchMasterService, LegderViewService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class LedgerViewModule { }
