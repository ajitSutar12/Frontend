import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesTransactionPassingComponent } from './shares-transaction-passing.component';
import {SharesTransactionPassingRoutingModule} from './sharesTransactionPassing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { IssueNewSharesPassingComponent } from './issue-new-shares-passing/issue-new-shares-passing.component';
import { SharesTransferPassingComponent } from './shares-transfer-passing/shares-transfer-passing.component';
import { MembershipCancellationPassingComponent } from './membership-cancellation-passing/membership-cancellation-passing.component';
import { FoundPaymentTransactionPassingComponent } from './found-payment-transaction-passing/found-payment-transaction-passing.component';
import { RebitInterestListComponent } from './rebit-interest-list/rebit-interest-list.component';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { providers } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    SharesTransactionPassingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SharesTransactionPassingComponent, IssueNewSharesPassingComponent, SharesTransferPassingComponent, MembershipCancellationPassingComponent, FoundPaymentTransactionPassingComponent, RebitInterestListComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SharesTransactionPassingModule { }
