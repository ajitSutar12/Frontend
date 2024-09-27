import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavingsPigmyAccountClosingComponent } from './savings-pigmy-account-closing.component';
import { SavingsPigmyAccountClosingRoutingModule } from './savings-Pigmy-Account-Closing-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
// import {SelectModule} from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';

import { NarrationService } from '../../../shared/elements/Narration.service';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { SavingPigmyAccountClosingService } from './savings-Pigmy-Account-Closing.service';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ThemeModule } from '../../theme.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    SavingsPigmyAccountClosingRoutingModule,
    DataTablesModule,
    FileUploadModule,
    NgSelectModule,
    //  SelectModule,
    // BrowserAnimationsModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
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
  providers: [OwnbranchMasterService, NarrationService, SystemMasterParametersService, SchemeCodeDropdownService, SchemeAccountNoService, MultiVoucherService, SavingPigmyAccountClosingService, CustomerIdService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [SavingsPigmyAccountClosingComponent],
  exports: [SavingsPigmyAccountClosingComponent],
})
export class SavingsPigmyAccountClosingModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

