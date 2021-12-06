import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnapprovalComponent } from './unapproval.component';
import {UnapprovalRoutingModule} from './unapproval-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting/unapproval-deposit-posting.component';
//import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing/unapproval-deposit-closing.component';
//import { UnapprovalVoucherComponent } from './unapproval-voucher/unapproval-voucher.component';
//import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher/unapproval-multivoucher.component';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
import {SelectModule} from 'ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    UnapprovalRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    NgbModule
  ],
  declarations: [UnapprovalComponent],
  providers: [SelectOptionService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UnapprovalModule { }
