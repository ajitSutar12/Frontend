import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLedgerComponent } from './general-ledger.component';
import { GeneralLedgerRoutingModule } from './generalLedger-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
// import {SelectModule} from 'ng-select';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule,
    SharedModule,
    // SelectModule
    NgSelectModule,
    // HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] }
    // })
  ],
  declarations: [GeneralLedgerComponent],
  providers: [SelectOptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class GeneralLedgerModule { }
