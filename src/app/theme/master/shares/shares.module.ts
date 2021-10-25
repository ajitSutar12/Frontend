import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesComponent } from './shares.component';
import { SharesRoutingModule } from './shares-routing.module'
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharesRoutingModule,
    SharedModule
  ],
  declarations: [SharesComponent]
})
export class SharesModule { }
