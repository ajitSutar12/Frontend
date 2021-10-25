import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeATEComponent } from './scheme-ate.component';
import { SchemeATERoutingModule } from './scheme-ate-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    SchemeATERoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [SchemeATEComponent]
})
export class SchemeATEModule { }
