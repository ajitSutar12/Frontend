import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileVerticallyComponent } from './tile-vertically.component';
import { TileVerticallyRoutingModule } from './tile-vertically-routing.module'
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    TileVerticallyRoutingModule,
    SharedModule
  ],
  declarations: [TileVerticallyComponent]
})
export class TileVerticallyModule { }
