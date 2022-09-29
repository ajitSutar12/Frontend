import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenominationReportsComponent } from './denomination-reports.component';
import {DenominationReportsRoutingModule} from './denominationReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    DenominationReportsRoutingModule,
    SharedModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [DenominationReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },


]
})
export class DenominationReportsModule { }
