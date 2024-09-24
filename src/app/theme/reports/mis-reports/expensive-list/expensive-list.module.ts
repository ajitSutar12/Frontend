import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensiveListRoutingModule } from './expensive-list-routing.module';
import { ExpensiveListComponent } from './expensive-list.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
// import { SanctionAmtwiseclassifiRoutingModule } from '../../term-deposits/sanction-amtwiseclassifi/sanction-amtwiseclassifi-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { IframeModule } from '../../balance-book/iframe/iframe.module';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  declarations: [ExpensiveListComponent],
  providers: [OwnbranchMasterService, DepositLoanInterestRateEditChangeService,SystemMasterParametersService],
  imports: [
    CommonModule,
    ExpensiveListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
    IframeModule,
    //Translation
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ]
})
export class ExpensiveListModule { }
//Translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}