import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicySettingsComponent } from './policy-settings.component';
import { PolicySettingsRoutingModule } from './policy-settings-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    PolicySettingsRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [PolicySettingsComponent]
})
export class PolicySettingsModule { }
