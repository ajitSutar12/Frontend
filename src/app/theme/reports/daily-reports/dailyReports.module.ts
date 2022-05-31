import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportsComponent } from './daily-reports.component';
import {DailyReportsRoutingModule} from './dailyReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    DailyReportsRoutingModule,
    SharedModule
    // ChartModule
  ],
  declarations: [DailyReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DailyReportsModule { }
