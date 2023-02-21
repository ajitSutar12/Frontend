import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorwiseDepositListRoutingModule } from './directorwise-deposit-list-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DirectorwiseDepositListComponent } from './directorwise-deposit-list.component';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [DirectorwiseDepositListComponent],
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
    DirectorwiseDepositListRoutingModule
  ],
  exports:[DirectorwiseDepositListComponent],
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
export class DirectorwiseDepositListModule { }
