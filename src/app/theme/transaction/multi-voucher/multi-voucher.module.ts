import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MultiVoucherComponent } from './multi-voucher.component';
import { MultiVoucherRoutingModule } from './multi-voucher-routing.module';

import { DataTablesModule } from 'angular-datatables';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AgentCodeService } from '../../../shared/elements/agent-code.service';
import { TransactionModeService } from '../../../shared/elements/transaction-mode.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SelectModule } from 'ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MultiVoucherRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    FormsModule
  ],
  declarations: [MultiVoucherComponent],
  providers:[SchemeTypeService,SchemeCodeService,AgentCodeService, TransactionModeService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MultiVoucherModule { }
