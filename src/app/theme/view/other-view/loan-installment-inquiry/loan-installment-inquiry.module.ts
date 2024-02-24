import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanInstallmentInquiryComponent } from './loan-installment-inquiry.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../../../user-auth.interceptor';
import { LoanInstallmentInquiryRoutingModule } from './loan-installment-inquiry-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';

@NgModule({
  imports: [
    CommonModule,
    LoanInstallmentInquiryRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    DatepickerModule,
    BsDatepickerModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [InstallmentMethodService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }],
  declarations: [LoanInstallmentInquiryComponent],
  exports: [LoanInstallmentInquiryComponent],
})

export class LoanInstallmentInquiryModule { }


