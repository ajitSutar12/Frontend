import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigmyReportComponent } from './pigmy-report.component';
import {PigmyReportRoutingModule} from './pigmy-report-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BnkPigmyCollectionChartComponent } from './bnk-pigmy-collection-chart/bnk-pigmy-collection-chart.component';
import { BnkPigmyBalanceListComponent } from './bnk-pigmy-balance-list/bnk-pigmy-balance-list.component';
import { BnkPigmyBalanceBookComponent } from './bnk-pigmy-balance-book/bnk-pigmy-balance-book.component';
import { BnkPigmyBlankChartComponent } from './bnk-pigmy-blank-chart/bnk-pigmy-blank-chart.component';
import { BnkPigmyCommissionRepoComponent } from './bnk-pigmy-commission-repo/bnk-pigmy-commission-repo.component';

@NgModule({
  imports: [
    CommonModule,
    PigmyReportRoutingModule,
    SharedModule
  ],
  declarations: [PigmyReportComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class PigmyReportModule { }
