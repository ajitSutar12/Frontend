import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierToSafeVaultComponent } from './cashier-to-safe-vault.component';
import { CashierToSafeVaultRoutingModule } from './cashier-to-safe-vault-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@NgModule({
  imports: [
    CommonModule,
    CashierToSafeVaultRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  
  
  ],
  declarations: [CashierToSafeVaultComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class CashierToSafeVaultModule { }