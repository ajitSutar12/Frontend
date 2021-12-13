import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreezeAccountRoutingModule } from './freeze-account-routing.module'
import { freezeAccountService } from '../../../../shared/dropdownService/freeze-account.service'
import { SelectModule } from 'ng-select';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { FreezeAccountService } from './freeze-account.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { FreezeAccountComponent } from './freeze-account.component';
@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    DataTablesModule,
    FreezeAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FreezeAccountComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, freezeAccountService, SchemeCodeDropdownService, SchemeAccountNoService, FreezeAccountService]
})
export class FreezeAccountModule { }
