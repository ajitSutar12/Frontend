import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositeAcRenewalComponent } from './term-deposite-ac-renewal.component';
import { TermDepositeAcRenewalRoutingModule } from './term-deposite-ac-renewal-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { CompanyGroupMasterDropdownService } from 'src/app/shared/dropdownService/company-group-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositeAcRenewalService } from './term-deposite-ac-renewal.service'
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
//date pipe
import { DatePipe } from '@angular/common';
import { ThemeModule } from '../../theme.module'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    TermDepositeAcRenewalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    SharedModule,
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
  declarations: [TermDepositeAcRenewalComponent],
  exports: [TermDepositeAcRenewalComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, StatementTypeService,
    OwnbranchMasterService,
    CompanyGroupMasterDropdownService,
    MultiVoucherService,
    SavingMasterService,
    TermDepositeAcRenewalService,
    DatePipe
  ]
})
export class TermDepositeAcRenewalModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}