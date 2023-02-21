import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { RenewalDepositListRoutingModule } from './renewal-deposit-list-routing.module';
import { RenewalDepositListComponent } from './renewal-deposit-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [RenewalDepositListComponent],
  imports: [
    CommonModule,
    // SharedModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgbModule,
    // PerfectScrollbarModule,
    // NgSelectModule,
    // BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot(),
    // Iframe5Module,

    RenewalDepositListRoutingModule
  ],
  exports:[RenewalDepositListComponent],
  providers: [
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    // OwnbranchMasterService,
    // SchemeCodeDropdownService,
    // SystemMasterParametersService

  ],
})
export class RenewalDepositListModule { } 
