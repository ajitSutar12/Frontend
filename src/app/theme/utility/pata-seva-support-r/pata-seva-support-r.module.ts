import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PataSevaSupportRComponent } from './pata-seva-support-r.component';
import { PataSevaSupportRRoutingModule } from './pata-seva-support-r-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    PataSevaSupportRRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [PataSevaSupportRComponent]
})
export class PataSevaSupportRModule { }
