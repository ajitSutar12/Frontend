import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ManagerViewComponent} from './manager-view.component';
import { ManagerViewRoutingModule } from './manager-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    ManagerViewRoutingModule,
    SharedModule
  ],
  declarations: [ManagerViewComponent]
})
export class ManagerViewModule { }
