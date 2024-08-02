import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticalRoutingModule } from './statistical-routing.module';
import { StatisticalComponent } from './statistical.component';
import { SanctionAmountClassiComponent } from './sanction-amount-classi/sanction-amount-classi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { IframeModule } from '../../balance-book/iframe/iframe.module';
import { PeriodwiseClassificationloanComponent } from './periodwise-classificationloan/periodwise-classificationloan.component';
import { PeriodwiseClassificationDetailsComponent } from './periodwise-classification-details/periodwise-classification-details.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { MonthlyDepositSummeryChartDatewiseComponent } from './monthly-deposit-summery-chart-datewise/monthly-deposit-summery-chart-datewise.component';
import { SchemewiseDepositAccountComponent } from './schemewise-deposit-account/schemewise-deposit-account.component';
import { SchemwisetotalcreditloanammountbetweentwodateComponent } from './schemwisetotalcreditloanammountbetweentwodate/schemwisetotalcreditloanammountbetweentwodate.component';
import { OverdueAmtPeriodLoanClassficationComponent } from './overdue-amt-period-loan-classfication/overdue-amt-period-loan-classfication.component';
import { SchemwiseTotalcreditloanComponent } from './schemwise-totalcreditloan/schemwise-totalcreditloan.component';
import { SchmewiseLoanAccountComponent } from './schmewise-loan-account/schmewise-loan-account.component';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
// import { SanctionAmountwiseClaComponent } from './sanction-amountwise-cla/sanction-amountwise-cla.component';


@NgModule({
  declarations: [StatisticalComponent, SanctionAmountClassiComponent, PeriodwiseClassificationloanComponent, PeriodwiseClassificationDetailsComponent, MonthlyDepositSummeryChartDatewiseComponent, SchemewiseDepositAccountComponent, SchemwisetotalcreditloanammountbetweentwodateComponent, OverdueAmtPeriodLoanClassficationComponent, SchemwiseTotalcreditloanComponent, SchmewiseLoanAccountComponent,  ],
  providers:[OwnbranchMasterService, SystemMasterParametersService,SchemeCodeDropdownService,SchemeAccountNoService],
  imports: [
    CommonModule,
    StatisticalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
    IframeModule
    
  ]
})
export class StatisticalModule { }
