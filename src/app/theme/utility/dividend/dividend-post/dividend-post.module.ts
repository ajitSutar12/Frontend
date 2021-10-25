import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividendPostComponent } from './dividend-post.component';
import { DividendPostRoutingModule } from './dividend-post-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    DividendPostRoutingModule,
    DataTablesModule
  ],
  declarations: [DividendPostComponent]
})
export class DividendPostModule { }
