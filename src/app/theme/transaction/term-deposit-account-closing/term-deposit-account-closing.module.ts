import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositAccountClosingComponent } from './term-deposit-account-closing.component';
import { TermDepositAccountClosingRoutingModule } from './term-deposit-account-closing-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../shared/elements/acountno.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    TermDepositAccountClosingRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    SelectModule
  ],
  declarations: [TermDepositAccountClosingComponent],
  providers: [SchemeCodeService, AcountnoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class TermDepositAccountClosingModule { }