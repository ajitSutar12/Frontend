import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDBankCityMasterComponent } from './dd-bank-city-master.component';
import { DDBankCityMasterRoutingModule } from './dd-bank-city-master-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor'
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DDBankCityMasterRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [DDBankCityMasterComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class DDBankCityMasterModule { }
