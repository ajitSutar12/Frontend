import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesReportsRoutingModule } from './shares-reports-routing.module';
import { CitywiseMemberListComponent } from './citywise-member-list/citywise-member-list.component';
import { SharesIssueRegisterComponent } from './shares-issue-register/shares-issue-register.component';
import { SharesReturnRegisterComponent } from './shares-return-register/shares-return-register.component';
import { SharesTransferRegisterComponent } from './shares-transfer-register/shares-transfer-register.component';
import { DividendPaidListComponent } from './dividend-paid-list/dividend-paid-list.component';
import { UnpaidDividendListComponent } from './unpaid-dividend-list/unpaid-dividend-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharesReportsRoutingModule
  ]
})
export class SharesReportsModule { }
