import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisReportsComponent } from './mis-reports.component';
import {MisReportsRoutingModule} from './misReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemewiseDepositeAcDetailsComponent } from './schemewise-deposite-ac-details/schemewise-deposite-ac-details.component';

@NgModule({
  imports: [
    CommonModule,
    MisReportsRoutingModule,
    SharedModule

  ],
  declarations: [MisReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },


]
})
export class MisReportsModule { }
