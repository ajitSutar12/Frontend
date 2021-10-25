import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CentralisedPassingComponent } from './centralised-passing.component';
import {CentralisedPassingRoutingModule} from './centralisedPassing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { VoucherComponent } from './voucher/voucher.component';
import { BatchVoucherComponent } from './batch-voucher/batch-voucher.component';
import { DepositClosingVoucherComponent } from './deposit-closing-voucher/deposit-closing-voucher.component';
import { SavingPigmyClosingComponent } from './saving-pigmy-closing/saving-pigmy-closing.component';
import { RemittanceAdviceComponent } from './remittance-advice/remittance-advice.component';
import { CashRemitanceComponent } from './cash-remitance/cash-remitance.component';
import { DeadStockPurchaseComponent } from './dead-stock-purchase/dead-stock-purchase.component';
import { DeadStockTransactionComponent } from './dead-stock-transaction/dead-stock-transaction.component';
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
import {DataTablesModule} from 'angular-datatables';

// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    CentralisedPassingRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [CentralisedPassingComponent, VoucherComponent, BatchVoucherComponent, DepositClosingVoucherComponent, SavingPigmyClosingComponent, RemittanceAdviceComponent, CashRemitanceComponent, DeadStockPurchaseComponent, DeadStockTransactionComponent, LockerAcCloseRentComponent, MasterSharesComponent, MasterAnamatComponent, MasterSavingComponent, MasterCurrentComponent, MasterDepositsComponent, MasterInvestmentsComponent, MasterPigmyAgentComponent, MasterPigmyComponent, MasterCashCreditComponent, MasterLoanComponent, MasterDisputeLoanComponent, MasterLockerDepositComponent, MasterDeadStockComponent]
})
export class CentralisedPassingModule { }
