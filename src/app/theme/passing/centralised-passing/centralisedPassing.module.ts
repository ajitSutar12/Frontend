import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CentralisedPassingComponent } from './centralised-passing.component';
import {CentralisedPassingRoutingModule} from './centralisedPassing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { VoucherComponent } from './voucher/voucher.component';
import { DepositClosingVoucherComponent } from './deposit-closing-voucher/deposit-closing-voucher.component';
import { SavingPigmyClosingComponent } from './saving-pigmy-closing/saving-pigmy-closing.component';
import { RemittanceAdviceComponent } from './remittance-advice/remittance-advice.component';
import { LockerAcCloseRentComponent } from './locker-ac-close-rent/locker-ac-close-rent.component';
import { MasterSharesComponent } from './master-shares/master-shares.component';
import { MasterAnamatComponent } from './master-anamat/master-anamat.component';
import { MasterSavingComponent } from './master-saving/master-saving.component';
import { MasterCurrentComponent } from './master-current/master-current.component';
import { MasterDepositsComponent } from './master-deposits/master-deposits.component';
import { MasterInvestmentsComponent } from './master-investments/master-investments.component';
import { MasterPigmyAgentComponent } from './master-pigmy-agent/master-pigmy-agent.component';
import { MasterPigmyComponent } from './master-pigmy/master-pigmy.component';
import { MasterCashCreditComponent } from './master-cash-credit/master-cash-credit.component';
import { MasterLoanComponent } from './master-loan/master-loan.component';
import { MasterDisputeLoanComponent } from './master-dispute-loan/master-dispute-loan.component';
import { MasterLockerDepositComponent } from './master-locker-deposit/master-locker-deposit.component';
import { MasterDeadStockComponent } from './master-dead-stock/master-dead-stock.component';
import { DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { MasterSavingModule} from './master-saving/master-saving.module';
import { MasterShareModule} from './master-shares/master-shares.module';
import { MasterDeadStockModule } from './master-dead-stock/master-dead-stock.module';
import { MasterCurrentModule } from './master-current/master-current.module';
import { MasterAnamatModule } from './master-anamat/master-anamat.module';
import { MasterDepositsModule } from './master-deposits/master-depositst.module';
import { MasterInvestmentsModule } from './master-investments/master-investments.module';
import { MasterPigmyAgentModule } from './master-pigmy-agent/master-pigmy-agent.module';
import { MasterPigmyModule } from './master-pigmy/master-pigmy.module';
import { MasterCashCreditModule } from './master-cash-credit/master-cash-credit.module';
import { MasterLoanModule } from './master-loan/master-loan.module';
import {VoucherModule} from './voucher/voucher.module';
import {PassBatchVoucherModule} from './passbatch-voucher/passbatch-voucher.module';
import {PassMultiVoucherModule} from './passmulti-voucher/passmulti-voucher.module'
import {DepositClosingVoucherModule} from './deposit-closing-voucher/deposit-closing-voucher.module'
import {SavingPigmyClosingModule} from './saving-pigmy-closing/saving-pigmy-closing.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {PassDeadStockPurchaseModule} from './passdead-stock-purchase/passdead-stock-purchase.module';
import {PassDeadStockTransactionModule} from './passdead-stock-transaction/passdead-stock-transaction.module';
import {PassCashCreditAcRenewalModule} from './passcash-credit-ac-renewal/passcash-credit-ac-renewal.module';
import {PassGoldSilverReturnEntryModule} from './passgold-silver-return-entry/passgold-silver-return-entry.module';
import {PassTermDepoistAcRenewalModule} from './passterm-deposit-ac-renewal/passterm-deposit-ac-renewal.module';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    CentralisedPassingRoutingModule,
    SharedModule,
    DataTablesModule,
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
  ],
  declarations: [CentralisedPassingComponent,], 
  // declarations: [CentralisedPassingComponent,  BatchVoucherComponent, DepositClosingVoucherComponent, SavingPigmyClosingComponent, RemittanceAdviceComponent, CashRemitanceComponent, DeadStockPurchaseComponent, DeadStockTransactionComponent, LockerAcCloseRentComponent, MasterSharesComponent, MasterAnamatComponent, MasterCurrentComponent, MasterDepositsComponent, MasterInvestmentsComponent, MasterPigmyAgentComponent, MasterPigmyComponent, MasterCashCreditComponent, MasterLoanComponent, MasterDisputeLoanComponent, MasterLockerDepositComponent, MasterDeadStockComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },]
})
export class CentralisedPassingModule { }
