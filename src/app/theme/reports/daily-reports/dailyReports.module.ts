import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportsComponent } from './daily-reports.component';
import {DailyReportsRoutingModule} from './dailyReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
// import { BnkDayBookSummaryComponent } from './bnk-day-book-summary/bnk-day-book-summary.component';
import { BnkScrollDetailBothComponent } from './bnk-scroll-detail-both/bnk-scroll-detail-both.component';
import { BnkSubsidaryDetailComponent } from './bnk-subsidary-detail/bnk-subsidary-detail.component';
import { BnkInstructionsInterestDebitComponent } from './bnk-instructions-interest-debit/bnk-instructions-interest-debit.component';
import { BnkInstructionsStandingDebitComponent } from './bnk-instructions-standing-debit/bnk-instructions-standing-debit.component';
import { BnkExpectStandingInstCreditComponent } from './bnk-expect-standing-inst-credit/bnk-expect-standing-inst-credit.component';
import { BnkExpectStandInstructionComponent } from './bnk-expect-stand-instruction/bnk-expect-stand-instruction.component';
import { BnkExpectIntInstructCreditComponent } from './bnk-expect-int-instruct-credit/bnk-expect-int-instruct-credit.component';
import { BnkExpectIntInstructComponent } from './bnk-expect-int-instruct/bnk-expect-int-instruct.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SubsidiarySummaryComponent } from './subsidiary-summary/subsidiary-summary.component';
import { VouchersPrintingComponent } from './vouchers-printing/vouchers-printing.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    SharedModule,
    HttpClientModule
    // ChartModule
  ],
  declarations: [DailyReportsComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DailyReportsModule { }
