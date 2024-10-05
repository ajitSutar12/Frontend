import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldSilverReturnEntryComponent } from './gold-silver-return-entry.component';
import { GoldSilverReturnEntryRoutingModule } from './gold-silver-return-entry-routing.module';
import { SharedModule } from '../../../shared/shared.module';
// import {SelectModule} from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { GoldSilverReturnEntryService } from './gold-silver-return-entry.service'
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { ThemeModule } from '../../theme.module'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    GoldSilverReturnEntryRoutingModule,
    DataTablesModule,
    FileUploadModule,
    //  SelectModule,
    NgSelectModule,
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
  providers: [SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService, GoldSilverReturnEntryService, {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SystemMasterParametersService],
  declarations: [GoldSilverReturnEntryComponent],
  exports: [GoldSilverReturnEntryComponent],
})
export class GoldSilverReturnEntryModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

