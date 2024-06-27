import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotticeComponent } from './nottice.component';
import {NotticeRoutingModule} from './nottice-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NoticeReportComponent } from './notice-report/notice-report.component';
import { NoticeFormatComponent } from './notice-format/notice-format.component';
import { BlanknoticeComponent } from './blanknotice/blanknotice.component';
import { CreatenoticeComponent } from './createnotice/createnotice.component';



@NgModule({
  imports: [
    CommonModule,
    NotticeRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [NotticeComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NotticeModule { }
