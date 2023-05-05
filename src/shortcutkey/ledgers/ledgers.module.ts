import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgersRoutingModule } from './ledgers-routing.module'
import { LedgersComponent } from './ledgers.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from '../../app/user-auth.interceptor'
import { LedgerViewModule } from '../../app/theme/view/ledger-view/ledger-view.module'
@NgModule({
  imports: [
    CommonModule,
    LedgersRoutingModule, 
    LedgerViewModule
  ],
  exports: [LedgersComponent],
  declarations: [LedgersComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class LedgersModule { }
