import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareTransactionsComponent } from './share-transactions.component';
import { ShareTransactionsRoutingModule } from './share-transactions-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { IssueNewSharesComponent } from './issue-new-shares/issue-new-shares.component';
import { SharesTransferComponent } from './shares-transfer/shares-transfer.component';
import { MembershipCancellationComponent } from './membership-cancellation/membership-cancellation.component';
import { FoundPaymentTransactionComponent } from './found-payment-transaction/found-payment-transaction.component';
import { OpeningSharesTransactionsEntryComponent } from './opening-shares-transactions-entry/opening-shares-transactions-entry.component';
import { RebitInterestTransactionComponent } from './rebit-interest-transaction/rebit-interest-transaction.component';
import { glMasterService } from '../../../shared/elements/gl-master.service';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
// import {SelectModule} from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { ButtonModule } from '../../ui-elements/basic/button/button.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { IssueNewSharesDirective } from './issue-new-shares/issue-new-shares.directive';
import { FoundPaymentTransactionDirective } from './found-payment-transaction/found-payment-transaction.directive';
@NgModule({
  imports: [
    CommonModule,
    ShareTransactionsRoutingModule,
    SharedModule,
    DataTablesModule,
    // SelectModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    ButtonModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [ShareTransactionsComponent, IssueNewSharesComponent, SharesTransferComponent, MembershipCancellationComponent,
     FoundPaymentTransactionComponent, OpeningSharesTransactionsEntryComponent, RebitInterestTransactionComponent, IssueNewSharesDirective, FoundPaymentTransactionDirective],
     
  providers: [SelectOptionService,glMasterService,SchemeCodeDropdownService,SchemeAccountNoService,OwnbranchMasterService, SystemMasterParametersService,ACMasterDropdownService,

    {
      provide: HTTP_INTERCEPTORS, 
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class ShareTransactionsModule { }