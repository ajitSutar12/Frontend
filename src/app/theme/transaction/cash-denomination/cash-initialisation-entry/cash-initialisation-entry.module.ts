import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashInitialisationEntryComponent } from './cash-initialisation-entry.component';
import { CashInitialisationEntryRoutingModule } from './cash-initialisation-entry-routing.module';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    CashInitialisationEntryRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  
  ],
  declarations: [CashInitialisationEntryComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashInitialisationEntryModule { }