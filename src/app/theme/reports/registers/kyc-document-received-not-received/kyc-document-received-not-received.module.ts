import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KYCDocumentReceivedNotReceivedRoutingModule } from './kyc-document-received-not-received-routing.module';
import { KYCDocumentReceivedNotReceivedComponent } from './kyc-document-received-not-received.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
// import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [KYCDocumentReceivedNotReceivedComponent],
  imports: [
    CommonModule,
    KYCDocumentReceivedNotReceivedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module

  ],
  providers:[
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: PERFECT_SCROLLBAR_CONFIG, 

    },
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class KYCDocumentReceivedNotReceivedModule { }
