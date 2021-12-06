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

import {SelectOptionService} from '../../../shared/elements/select-option.service';
import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    ShareTransactionsRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule
  ],
  declarations: [ShareTransactionsComponent, IssueNewSharesComponent, SharesTransferComponent, MembershipCancellationComponent, FoundPaymentTransactionComponent, OpeningSharesTransactionsEntryComponent, RebitInterestTransactionComponent],
  providers: [SelectOptionService,glMasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class ShareTransactionsModule { }