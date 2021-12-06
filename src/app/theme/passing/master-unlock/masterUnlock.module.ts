import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterUnlockComponent } from './master-unlock.component';
import {MasterUnlockRoutingModule} from './masterUnlock-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    MasterUnlockRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasterUnlockComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MasterUnlockModule { }
