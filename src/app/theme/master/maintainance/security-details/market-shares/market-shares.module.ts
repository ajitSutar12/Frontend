import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { marketsharesomponentservice } from './market-shares.component.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MarketSharesComponent } from './market-shares.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { MarketSharesRoutingModule } from './market-shares-routing.module';
import { DataTablesModule } from "angular-datatables";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [MarketSharesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgSelectModule,
    PerfectScrollbarModule,
    MarketSharesRoutingModule,
    DataTablesModule
  ],
  providers: [marketsharesomponentservice,
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
  exports: [MarketSharesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MarketSharesModule { }
