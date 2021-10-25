import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestPostingComponent } from './interest-posting.component';
import { InterestPostingRoutingModule } from './interest-posting-routing.module';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    InterestPostingRoutingModule,
    SharedModule
  ],
  declarations: [InterestPostingComponent]
})
export class InterestPostingModule { }
