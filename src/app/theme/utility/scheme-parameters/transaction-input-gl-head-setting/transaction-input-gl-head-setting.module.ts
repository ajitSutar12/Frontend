import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionInputGlHeadSettingComponent } from './transaction-input-gl-head-setting.component';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../user-auth.interceptor';
import { TranscationInputSettingService } from './transaction-input-gl-head-setting.service'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../system-master-parameters/system-master-parameters.service';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
@NgModule({
    declarations: [TransactionInputGlHeadSettingComponent],
    exports: [TransactionInputGlHeadSettingComponent],
    imports: [
        CommonModule,
        DataTablesModule,
        NgbModule,
        // SelectModule,
        FormsModule, ReactiveFormsModule,
        SharedModule, //modal
        NgSelectModule,
        PerfectScrollbarModule,
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
    providers: [SystemMasterParametersService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        TranscationInputSettingService,
        ACMasterDropdownService
    ]
})
export class TransactionInputGlHeadSettingModule { }
export function HttpLoaderFactory(http:HttpClient){
    return new TranslateHttpLoader(http);
  }
