import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {MembershipCancellationComponent} from '../membership-cancellation/membership-cancellation.component'
import {UserAuthInterceptor} from '../../../../user-auth.interceptor'
import { ButtonModule } from '../../../ui-elements/basic/button/button.module';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MembershipCancellationComponent],

    imports: [
      CommonModule,
      PerfectScrollbarModule,
      FormsModule, ReactiveFormsModule,
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot(),
      NgSelectModule,
      ButtonModule, 
      DataTablesModule, 
      NgbModule,
      FormsModule, ReactiveFormsModule,
      NgSelectModule,
      BsDatepickerModule.forRoot(), 
      DatepickerModule.forRoot(),
      SharedModule,
      TranslateModule.forRoot({
        loader:{
          provide:TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
      })
    ],
    providers: [
    
      // SchemeCodeDropdownService,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      },
     
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UserAuthInterceptor,
        multi: true
      },
    ],
    exports:[MembershipCancellationComponent],
    // bootstrap: [MembershipCancellationComponent]
  })
  export class MembershipCancellationModule { } 
  export function HttpLoaderFactory(http:HttpClient){
    return new TranslateHttpLoader(http);
  }