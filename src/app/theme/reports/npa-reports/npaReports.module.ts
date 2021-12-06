import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpaReportsComponent } from './npa-reports.component';
import {NpaReportsRoutingModule} from './npaReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import { providers } from 'ng2-toasty';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NpaReportsRoutingModule,
    SharedModule

  ],
  declarations: [NpaReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NpaReportsModule { }
