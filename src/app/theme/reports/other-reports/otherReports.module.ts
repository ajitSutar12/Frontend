import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherReportsComponent } from './other-reports.component';
import {OtherReportsRoutingModule} from './otherReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BnkMinorsListComponent } from './bnk-minors-list/bnk-minors-list.component';
import { BnkNomineeListComponent } from './bnk-nominee-list/bnk-nominee-list.component';
import { BnkGuaranterListComponent } from './bnk-guaranter-list/bnk-guaranter-list.component';
import { BnkLienMarkedAcListComponent } from './bnk-lien-marked-ac-list/bnk-lien-marked-ac-list.component';
import { BnkDormantAcListComponent } from './bnk-dormant-ac-list/bnk-dormant-ac-list.component';
import { BnkAmountMovementComponent } from './bnk-amount-movement/bnk-amount-movement.component';
import { BnkDepAmountMovementDetailComponent } from './bnk-dep-amount-movement-detail/bnk-dep-amount-movement-detail.component';
import { BnkLNAmountMovementDetailComponent } from './bnk-lnamount-movement-detail/bnk-lnamount-movement-detail.component';
import { BnkGurDetailsListComponent } from './bnk-gur-details-list/bnk-gur-details-list.component';
import { BnkNonGuaranteerViewComponent } from './bnk-non-guaranteer-view/bnk-non-guaranteer-view.component';
import { TransactionlessAccountListComponent } from './transactionless-account-list/transactionless-account-list.component';
import { MinorToMajorListComponent } from './minor-to-major-list/minor-to-major-list.component';
import { ServiceChargesListComponent } from './service-charges-list/service-charges-list.component';
import { CustidwiseIntroducerListComponent } from './custidwise-introducer-list/custidwise-introducer-list.component';


@NgModule({
  imports: [
    CommonModule,
    OtherReportsRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()

  ],
  declarations: [OtherReportsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class OtherReportsModule { }
