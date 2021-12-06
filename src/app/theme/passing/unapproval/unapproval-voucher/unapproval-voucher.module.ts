import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnapprovalVoucherComponent } from './unapproval-voucher.component';
import { UnapprovalVoucherRoutingModule} from './unapproval-voucher-routing.module'
import {SelectOptionService} from '../../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    UnapprovalVoucherRoutingModule,
    SelectModule,
    DataTablesModule
  ],
  declarations: [UnapprovalVoucherComponent],
  providers: [SelectOptionService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class UnapprovalVoucheModule { }
