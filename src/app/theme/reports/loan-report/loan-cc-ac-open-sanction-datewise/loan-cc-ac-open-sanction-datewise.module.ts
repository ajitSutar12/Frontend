import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanCCACOpenSanctionDatewiseRoutingModule } from './loan-cc-ac-open-sanction-datewise-routing.module';
import { LoanCCACOpenSanctionDatewiseComponent } from './loan-cc-ac-open-sanction-datewise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [LoanCCACOpenSanctionDatewiseComponent],
  exports:[LoanCCACOpenSanctionDatewiseComponent],
  imports: [
    CommonModule,
    LoanCCACOpenSanctionDatewiseRoutingModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    
    SharedModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,

    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ],
  providers:[
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
  ],
})
export class LoanCCACOpenSanctionDatewiseModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
