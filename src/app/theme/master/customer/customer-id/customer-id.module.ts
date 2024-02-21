import { NgModule } from '@angular/core';
import { CustomerIdRoutingModule } from './customer-id-routing.module';
import { CustomerIdComponent } from './customer-id.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerIdService } from './customer-id.service';
import { PrefixMasterDropdownService } from '../../../../shared/dropdownService/prefix-master-dropdown.service';
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { OccupationMasterService } from '../../../../shared/dropdownService/occupation-master-dropdown.service';
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { RiskCategoryDropdownService } from '../../../../shared/dropdownService/risk-category-dropdown.service';
import { DocumentMasterDropdownService } from '../../../../shared/dropdownService/document-master-dropdown.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '../../../../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ThemeModule } from "../../../theme.module";
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  imports: [
    CommonModule,
    CustomerIdRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    SharedModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })

  ],
  exports: [CustomerIdComponent],
  declarations: [CustomerIdComponent],
  providers: [PrefixMasterDropdownService,
    CustomerIdService,
    CastMasterService,
    OccupationMasterService,
    SalaryDMasterdropdownService,
    cityMasterService,
    RiskCategoryDropdownService,
    DocumentMasterDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    SystemMasterParametersService
  ]
})
export class CustomerIdModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}