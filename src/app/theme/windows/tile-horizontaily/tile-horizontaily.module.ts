import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TileHorizontailyComponent} from './tile-horizontaily.component';
import { TileHorizontailyRoutingModule } from './tile-horizontaily-routing.module'
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    TileHorizontailyRoutingModule,
    SharedModule
  ],
  declarations: [TileHorizontailyComponent]
})
export class TileHorizontailyModule { }
