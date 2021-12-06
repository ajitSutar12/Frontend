import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicySettingsComponent } from './policy-settings.component';
import { PolicySettingsRoutingModule } from './policy-settings-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    PolicySettingsRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [PolicySettingsComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },


]
})
export class PolicySettingsModule { }
