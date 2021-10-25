import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';

import { MemberLiablityViewComponent } from './member-liablity-view.component';
import { MemberLiablityViewRoutingModule } from './member-liablity-view-routing.module'




@NgModule({
  imports: [
    CommonModule,
    MemberLiablityViewRoutingModule,    
    DataTablesModule

  ],
  declarations: [MemberLiablityViewComponent]
})
export class MemberLiablityViewModule { }