import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { furnitureandfixtureservice } from './furniture-and-fixture.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { FurnitureAndFixtureComponent } from './furniture-and-fixture.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../../user-auth.interceptor';

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { FurnitureAndFixtureRoutingModule } from './furniture-and-fixture-routing.module';
import { DataTablesModule } from "angular-datatables";
import { ThemeModule } from 'src/app/theme/theme.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [FurnitureAndFixtureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    BsDatepickerModule,
    NgSelectModule,
    PerfectScrollbarModule,
    FurnitureAndFixtureRoutingModule,
    DataTablesModule,
    ThemeModule
  ],
  providers: [furnitureandfixtureservice,
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
  exports: [FurnitureAndFixtureComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FurnitureAndFixtureModule { }
