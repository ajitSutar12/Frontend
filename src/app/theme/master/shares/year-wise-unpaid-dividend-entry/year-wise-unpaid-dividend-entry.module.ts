import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { YearWiseUnpaidDividendEntryRoutingModule } from './year-wise-unpaid-dividend-entry-routing.module';
import { YearWiseUnpaidDividendEntryComponent } from './year-wise-unpaid-dividend-entry.component';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { MembernoService } from '../../../../shared/elements/memberno.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearwiseunpaidService } from './year-wise-unpaid-dividend-entry.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service';
import { ShareMasterDropdownService } from '../../../../shared/dropdownService/share-master-dropdown.service';
import { ShareSchemeDropdownService } from '../../../../shared/dropdownService/share-scheme-dropdown.Service';
import { ShareMasterService } from '../../customer/shares-master/shares-master.service';
import { CustomerIdService } from '../../customer/customer-id/customer-id.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    YearWiseUnpaidDividendEntryRoutingModule,
    DataTablesModule,
    NgbModule,
    // SelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule,

    
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [YearWiseUnpaidDividendEntryComponent],
  providers: [YearwiseunpaidService,
    SchemeCodeDropdownService,
    SalaryDMasterdropdownService,
    ShareMasterDropdownService,
    ShareMasterService,
    ShareSchemeDropdownService,
    CustomerIdService,
    SchemeAccountNoService,
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]

})
export class YearWiseUnpaidDividendEntryModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
