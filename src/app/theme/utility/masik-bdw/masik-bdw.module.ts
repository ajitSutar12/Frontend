import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasikBDWComponent } from './masik-bdw.component';
import { MasikBDWRoutingModule } from './masik-bdw-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    MasikBDWRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [MasikBDWComponent]
})
export class MasikBDWModule { }
