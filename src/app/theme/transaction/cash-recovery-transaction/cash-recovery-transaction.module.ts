import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CashRecoveryTransactionRoutingModule } from './cash-recovery-transaction-routing.module';
import { CashRecoveryTransactionComponent} from './cash-recovery-transaction.component';
import { DataTablesModule } from 'angular-datatables';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [CashRecoveryTransactionComponent],
  exports:[CashRecoveryTransactionComponent],
  imports: [
    CommonModule,
    CashRecoveryTransactionRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  CustomerIDMasterDropdownService,
  SchemeCodeDropdownService,
  SchemeAccountNoService,
  OwnbranchMasterService,
  
  
]

})
export class CashRecoveryTransactionModule { }
