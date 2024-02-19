import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { GlAccountsMasterComponent } from './gl-accounts-master.component';
import { GeneralLedgerRoutingModule } from './gl-accounts-master-routing.module'
// import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { GlAccountsMasterService } from './gl-accounts-master.service'
import { StatementCodeDropdownService } from '../../../../shared/dropdownService/statement-code-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule,
    // SelectModule,
    SharedModule,
    DataTablesModule,
    NgbModule,
    NgSelectModule,

    FormsModule, ReactiveFormsModule
  ],
  declarations: [GlAccountsMasterComponent],
  providers: [GlAccountsMasterService, StatementCodeDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class GlAccountsMasterModule { }
