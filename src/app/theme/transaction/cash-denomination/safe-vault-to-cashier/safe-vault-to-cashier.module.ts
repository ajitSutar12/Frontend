import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeVaultToCashierComponent } from './safe-vault-to-cashier.component';
import { SafeValultToCashierRoutingModule } from './safe-vault-to-cashier-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    SafeValultToCashierRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  
  ],
  declarations: [SafeVaultToCashierComponent],
  providers:[SystemMasterParametersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class SafeValultToCashierModule { }