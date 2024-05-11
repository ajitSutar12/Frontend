import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProcessACMComponent } from './process-acm.component';
import { ProcessACMRoutingModule } from './process-acm-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NPAProcessComponent } from './npaprocess/npaprocess.component';
import { NPAMarkingComponent } from './npamarking/npamarking.component';
import { NPAProcessLockingComponent } from './npaprocess-locking/npaprocess-locking.component';
import { DeadStockDepreciationModule } from './dead-stock-depreciation/dead-stock-depreciation.module';
import { OverdraftInterestPostingComponent } from './overdraft-interest-posting/overdraft-interest-posting.component';
import { PenalInterestCalculationComponent } from './penal-interest-calculation/penal-interest-calculation.component';
import { TransferToGLbyClosingACComponent } from './transfer-to-glby-closing-ac/transfer-to-glby-closing-ac.component';
import { PayrolldatatransferComponent } from './payrolldatatransfer/payrolldatatransfer.component';
import { PayrollexportfileprocessComponent } from './payrollexportfileprocess/payrollexportfileprocess.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ChargesPostingComponent } from './charges-posting/charges-posting.component';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ProcessACMRoutingModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    DeadStockDepreciationModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  declarations: [
    ProcessACMComponent,
    NPAProcessComponent,
    NPAMarkingComponent,
    NPAProcessLockingComponent,
    // DeadStockDepreciationComponent,
    OverdraftInterestPostingComponent,
    PenalInterestCalculationComponent,
    TransferToGLbyClosingACComponent,
    PayrolldatatransferComponent,
    PayrollexportfileprocessComponent, ChargesPostingComponent],
  providers: [OwnbranchMasterService, SystemMasterParametersService, SchemeCodeDropdownService, ACMasterDropdownService, SchemeAccountNoService, SavingMasterService, SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class ProcessACMModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
