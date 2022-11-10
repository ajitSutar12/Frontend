import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalReportsComponent } from './final-reports.component';
import {FinalReportsRoutingModule} from './finalReports-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BnkTrialBalComponent } from './bnk-trial-bal/bnk-trial-bal.component';
import { BnkTrialBaldetailComponent } from './bnk-trial-baldetail/bnk-trial-baldetail.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet/balance-sheet.component';
import { NBalanceSheetComponent } from './n-balance-sheet/n-balance-sheet.component';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  imports: [
    CommonModule,
    FinalReportsRoutingModule,
    SharedModule

  ],
  declarations: [FinalReportsComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },

]
})
export class FinalReportsModule { }
