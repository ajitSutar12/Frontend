import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanDueCertificateRoutingModule } from './loan-due-certificate-routing.module';
import { LoanDueCertificateComponent } from './loan-due-certificate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [LoanDueCertificateComponent],
  imports: [
    CommonModule,
    LoanDueCertificateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    Iframe5Module,

    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ],
  exports:[LoanDueCertificateComponent],
  providers:[OwnbranchMasterService,SystemMasterParametersService],
  
})
export class LoanDueCertificateModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
