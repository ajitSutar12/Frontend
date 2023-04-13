import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterUnlockComponent } from './master-unlock.component';
import { MasterUnlockRoutingModule } from './masterUnlock-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { MasterSavingModule } from './master-unlock/master-saving.module'
import { VoucherModule } from './voucher/voucher.module';
import { PassBatchVoucherModule } from './passbatch-voucher/passbatch-voucher.module';
import { PassMultiVoucherModule } from './passmulti-voucher/passmulti-voucher.module'
import { DepositClosingVoucherModule } from './deposit-closing-voucher/deposit-closing-voucher.module'
import { SavingPigmyClosingModule } from './saving-pigmy-closing/saving-pigmy-closing.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PassDeadStockPurchaseModule } from './passdead-stock-purchase/passdead-stock-purchase.module';
import { PassDeadStockTransactionModule } from './passdead-stock-transaction/passdead-stock-transaction.module';
import { PassCashCreditAcRenewalModule } from './passcash-credit-ac-renewal/passcash-credit-ac-renewal.module';
import { PassGoldSilverReturnEntryModule } from './passgold-silver-return-entry/passgold-silver-return-entry.module';
import { PassTermDepoistAcRenewalModule } from './passterm-deposit-ac-renewal/passterm-deposit-ac-renewal.module';
import { DepreciationPassingModule } from './depreciation-passing/depreciation-passing.module'
import { MasterUnlockService } from './master-unlock.service'
import { TransferSharesModule } from './transfer-shares/transfer-shares.module';
import { CancelMemberModule } from './cancel-member/cancel-member.module';
import { SharesIssueNewModule } from './shares-issue-new/shares-issue-new.module';
import { RentLockerModule } from './rent-locker/rent-locker.module';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    MasterUnlockRoutingModule,
    SharedModule,
    DataTablesModule,
    MasterSavingModule,
    PerfectScrollbarModule,
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
    TransferSharesModule,
    CancelMemberModule,
    SharesIssueNewModule,
    RentLockerModule

  ],
  declarations: [MasterUnlockComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, MasterUnlockService]
})
export class MasterUnlockModule { }
