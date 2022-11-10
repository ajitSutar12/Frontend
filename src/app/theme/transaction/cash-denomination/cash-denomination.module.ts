import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashDenominationComponent } from './cash-denomination.component';
import { CashDenominationRoutingModule } from './cash-denomination-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
@NgModule({
  imports: [
    CommonModule,
    CashDenominationRoutingModule,
    SharedModule
  ],
  declarations: [CashDenominationComponent],
  providers:[    SystemMasterParametersService,SchemeCodeDropdownService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true ,
  },]
})
export class CashDenominationModule { }