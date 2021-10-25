import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';


import { HotKeysRoutingModule } from './hot-keys-routing.module';
import { HotKeysComponent } from './hot-keys.component';



@NgModule({
  imports: [
    CommonModule,
    HotKeysRoutingModule,
    DataTablesModule
    
  ],
  declarations: []
})
export class HotkeysModule { }
