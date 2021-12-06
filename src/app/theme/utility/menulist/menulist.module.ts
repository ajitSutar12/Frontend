import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenulistRoutingModule } from './menulist-routing.module';
import { MenulistComponent } from './menulist.component';


@NgModule({
  declarations: [MenulistComponent],
  imports: [
    CommonModule,
    MenulistRoutingModule
  ]
})
export class MenulistModule { }
