import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanReportsComponent } from './loan-reports.component';
import {LoanReportsRoutingModule} from './loanReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import {FormsModule} from '@angular/forms'
// import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    LoanReportsRoutingModule,
    SharedModule,
    FormsModule


  ],
  declarations: [LoanReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
]
})
export class LoanReportsModule { }
