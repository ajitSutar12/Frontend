import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuarantorViewComponent } from './guarantor-view.component';
import { GuarantorViewRoutingModule } from './guarantor-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    GuarantorViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [GuarantorViewComponent]
})
export class GuarantorViewModule { }