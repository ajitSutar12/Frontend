import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdPassingComponent } from './cd-passing.component';
import { CdPassingRoutingModule } from './cdPassing-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CentralisedPassingModule } from '../../app/theme/passing/centralised-passing/centralisedPassing.module'
import { MasterSavingModule } from '../../app/theme/passing/centralised-passing/master-saving/master-saving.module';
import { MasterShareModule } from '../../app/theme/passing/centralised-passing/master-shares/master-shares.module';
import { MasterDeadStockModule } from '../../app/theme/passing/centralised-passing/master-dead-stock/master-dead-stock.module';
import { MasterCurrentModule } from '../../app/theme/passing/centralised-passing/master-current/master-current.module';
import { MasterAnamatModule } from '../../app/theme/passing/centralised-passing/master-anamat/master-anamat.module';
import { MasterDepositsModule } from '../../app/theme/passing/centralised-passing/master-deposits/master-depositst.module';
import { MasterInvestmentsModule } from '../../app/theme/passing/centralised-passing/master-investments/master-investments.module';
import { MasterPigmyAgentModule } from '../../app/theme/passing/centralised-passing/master-pigmy-agent/master-pigmy-agent.module';
import { MasterPigmyModule } from '../../app/theme/passing/centralised-passing/master-pigmy/master-pigmy.module';
import { MasterCashCreditModule } from '../../app/theme/passing/centralised-passing/master-cash-credit/master-cash-credit.module';
import { MasterLoanModule } from '../../app/theme/passing/centralised-passing/master-loan/master-loan.module';
import { VoucherModule } from '../../app/theme/passing/centralised-passing/voucher/voucher.module';
import { PassBatchVoucherModule } from '../../app/theme/passing/centralised-passing/passbatch-voucher/passbatch-voucher.module';
import { PassMultiVoucherModule } from '../../app/theme/passing/centralised-passing/passmulti-voucher/passmulti-voucher.module'
import { DepositClosingVoucherModule } from '../../app/theme/passing/centralised-passing/deposit-closing-voucher/deposit-closing-voucher.module'
import { SavingPigmyClosingModule } from '../../app/theme/passing/centralised-passing/saving-pigmy-closing/saving-pigmy-closing.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PassDeadStockPurchaseModule } from '../../app/theme/passing/centralised-passing/passdead-stock-purchase/passdead-stock-purchase.module';
import { PassDeadStockTransactionModule } from '../../app/theme/passing/centralised-passing/passdead-stock-transaction/passdead-stock-transaction.module';
import { PassCashCreditAcRenewalModule } from '../../app/theme/passing/centralised-passing/passcash-credit-ac-renewal/passcash-credit-ac-renewal.module';
import { PassGoldSilverReturnEntryModule } from '../../app/theme/passing/centralised-passing/passgold-silver-return-entry/passgold-silver-return-entry.module';
import { PassTermDepoistAcRenewalModule } from '../../app/theme/passing/centralised-passing/passterm-deposit-ac-renewal/passterm-deposit-ac-renewal.module';
import { DepreciationPassingModule } from '../../app/theme/passing/centralised-passing/depreciation-passing/depreciation-passing.module'
import { MasterLockerModule } from '../../app/theme/passing/centralised-passing/master-locker/master-locker.module';
import { ShareTransferModule } from '../../app/theme/passing/centralised-passing/share-transfer/share-transfer.module';
import { MemberCancelModule } from '../../app/theme/passing/centralised-passing/member-cancel/member-cancel.module'
import { IssueNewShareModule } from '../../app/theme/passing/centralised-passing/issue-new-share/issue-new-share.module';
import { RentLockerModule } from '../../app/theme/passing/centralised-passing/rent-locker/rent-locker.module'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    CdPassingRoutingModule,
    CentralisedPassingModule,
    MasterSavingModule,
    PerfectScrollbarModule,
    MasterDeadStockModule,
    MasterCurrentModule,
    MasterShareModule,
    MasterAnamatModule,
    MasterDepositsModule,
    MasterInvestmentsModule,
    MasterPigmyAgentModule,
    MasterPigmyModule,
    MasterCashCreditModule,
    MasterLoanModule,
    VoucherModule,
    PassBatchVoucherModule,
    PassMultiVoucherModule,
    DepositClosingVoucherModule,
    SavingPigmyClosingModule,
    PassDeadStockPurchaseModule,
    PassDeadStockTransactionModule,
    PassCashCreditAcRenewalModule,
    PassGoldSilverReturnEntryModule,
    PassTermDepoistAcRenewalModule,
    DepreciationPassingModule,
    MasterLockerModule,
    ShareTransferModule,
    IssueNewShareModule,
    MemberCancelModule,
    RentLockerModule

  ],
  declarations: [CdPassingComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },]
})
export class CentralPassingModule { }
