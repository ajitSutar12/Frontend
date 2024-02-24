import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SelectModule } from 'ng-select';
import { SizewiseBalanceModificationComponent } from './sizewise-balance-modification.component';
import { SizewiseBalanceModificationRoutingModule } from './sizewise-balance-modification-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { DepositSizeWiseBalanceComponent } from './deposit-size-wise-balance/deposit-size-wise-balance.component';
import { LoanSizeWiseBalanceComponent } from './loan-size-wise-balance/loan-size-wise-balance.component'
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { CommissionSlabMasterComponent } from './commission-slab-master/commission-slab-master.component';
// import { CommissionSlabMasterModule } from './commission-slab-master/commission-slab-master.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ThemeModule } from '../../../theme.module';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    SizewiseBalanceModificationRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule,
    ColorPickerModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    // CommissionSlabMasterModule,
    ThemeModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})


  ],
  providers: [
    SystemMasterParametersService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [SizewiseBalanceModificationComponent, DepositSizeWiseBalanceComponent, LoanSizeWiseBalanceComponent, CommissionSlabMasterComponent],
  bootstrap: [SizewiseBalanceModificationComponent]
})
export class SizewiseBalanceModificationModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
