import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Scheme9Service} from '../../../shared/elements/scheme9.service';
import {AccountnoService} from '../../../shared/elements/Accountno.service';
import { SelectModule } from 'ng-select';

import { SharesLedgerViewComponent } from './shares-ledger-view.component';
import { SharesLedgerViewRoutingModule } from './shares-ledger-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    SharesLedgerViewRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    SelectModule
  ],
  declarations: [SharesLedgerViewComponent],
  providers: [Scheme9Service,AccountnoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class SharesLedgerViewModule { }
