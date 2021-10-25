import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';


import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberBalanceAdditionComponent } from './member-balance-addition/member-balance-addition.component';
import { RecoveryInstallmentComponent } from './recovery-installment/recovery-installment.component';
import { SharesBalanceAdditionComponent } from './shares-balance-addition/shares-balance-addition.component';
import { BalanceAdditionSharesAccountwiseComponent } from './balance-addition-shares-accountwise/balance-addition-shares-accountwise.component';
import { LoanInstallmentEditComponent } from './loan-installment-edit/loan-installment-edit.component';
// import { SharesCancellationComponent } from './shares-cancellation/shares-cancellation.component';
// import { SharescancellationComponent } from './sharescancellation/sharescancellation.component';
import { SharesCancellationComponent } from './shares-cancellation/shares-cancellation.component';



@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    DataTablesModule
    
  ],
  declarations: [MemberComponent,MemberComponent, MemberBalanceAdditionComponent, RecoveryInstallmentComponent, SharesBalanceAdditionComponent, BalanceAdditionSharesAccountwiseComponent, LoanInstallmentEditComponent, SharesCancellationComponent]
})
export class MemberModule { }
