import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { InterestPaidHistoryComponent } from './interest-paid-history.component';
import { DataTablesModule } from 'angular-datatables';
// import { SelectModule } from 'ng-select';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    NgSelectModule,
    // SelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }],
  declarations: [InterestPaidHistoryComponent],
  exports: [InterestPaidHistoryComponent]
})
export class InterestPaidHistoryModule { }