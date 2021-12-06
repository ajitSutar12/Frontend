import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterCardComponent } from './master-card.component';
//import { GeneralLedgerComponent } from './general-ledger.component';
import { MasterCardRoutingModule } from './master-card-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    MasterCardRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasterCardComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MasterCardModule { }
