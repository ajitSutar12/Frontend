import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendMessageRoutingModule } from './send-message-routing.module';
import { SendMessageComponent } from './send-message.component'
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
// import { ButtonModule } from '../../../theme/button/button.module';
import { ThemeModule } from '../../../theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
@NgModule({
  declarations: [SendMessageComponent],
  providers:[SystemMasterParametersService,],
  imports: [
    CommonModule,
    SendMessageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    // ButtonModule,
    ThemeModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
  loader:{
    provide:TranslateLoader,
    useFactory:HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class SendMessageModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
