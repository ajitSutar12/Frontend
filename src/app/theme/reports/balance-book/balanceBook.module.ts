import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceBookComponent } from './balance-book.component';
import {BalanceBookRoutingModule} from './balanceBook-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BnkDedskBalListComponent } from './bnk-dedsk-bal-list/bnk-dedsk-bal-list.component';
import { BnkLedgerABTypeListComponent } from './bnk-ledger-abtype-list/bnk-ledger-abtype-list.component';
import { BnkACBalBookComponent } from './bnk-acbal-book/bnk-acbal-book.component';
import { BnkCustIDBalListComponent } from './bnk-cust-idbal-list/bnk-cust-idbal-list.component';
import { BnkGLConsistRepoComponent } from './bnk-glconsist-repo/bnk-glconsist-repo.component';
import { BnkReceiveIntListComponent } from './bnk-receive-int-list/bnk-receive-int-list.component';
import { BnkPayIntListComponent } from './bnk-pay-int-list/bnk-pay-int-list.component';
import { BnkDedskBalListDepreComponent } from './bnk-dedsk-bal-list-depre/bnk-dedsk-bal-list-depre.component';
import { BnkOtherBalListComponent } from './bnk-other-bal-list/bnk-other-bal-list.component';
@NgModule({
  imports: [
    CommonModule,
    BalanceBookRoutingModule,
    SharedModule
  ],
  declarations: [BalanceBookComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class BalanceBookModule { }
